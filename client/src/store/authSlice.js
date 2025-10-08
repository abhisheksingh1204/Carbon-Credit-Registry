import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// --- Start of API Simulation ---
// This section mimics a backend server for a frontend-only experience.

const fakeUserDatabase = {
  "user@example.com": {
    id: "1",
    orgName: "Test Organization",
    email: "user@example.com",
    password: "password123",
  },
};

const simulateApiCall = (data, shouldSucceed = true, delay = 500) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldSucceed) {
        resolve(data);
      } else {
        reject({ message: data });
      }
    }, delay);
  });
// --- End of API Simulation ---

const initialState = {
  user: null,
  token: localStorage.getItem("token"),
  isLoading: false,
  error: null,
  isAuthenticated: !!localStorage.getItem("token"),
};

export const login = createAsyncThunk(
  "auth/login",
  async (credentials, { rejectWithValue }) => {
    try {
      // Mimics server-side credential check.
      const userInDb = fakeUserDatabase[credentials.email];
      if (userInDb && userInDb.password === credentials.password) {
        const fakeToken = "fake-jwt-token-for-user";
        const userPayload = {
          user: {
            id: userInDb.id,
            orgName: userInDb.orgName,
            email: userInDb.email,
          },
          token: fakeToken,
        };

        const response = await simulateApiCall(userPayload);
        localStorage.setItem("token", response.token);
        return response;
      }
      throw new Error("Invalid credentials");
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const register = createAsyncThunk(
  "auth/register",
  async (userData, { rejectWithValue }) => {
    try {
      // Mimics server-side registration logic.
      if (fakeUserDatabase[userData.email]) {
        throw new Error("User already exists.");
      }

      const newUser = { id: Date.now().toString(), ...userData };
      fakeUserDatabase[userData.email] = newUser;
      const fakeToken = "fake-jwt-token-for-new-user";
      const userPayload = {
        user: {
          id: newUser.id,
          orgName: newUser.orgName,
          email: newUser.email,
        },
        token: fakeToken,
      };

      const response = await simulateApiCall(userPayload);
      localStorage.setItem("token", response.token);
      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchUser = createAsyncThunk(
  "auth/fetchUser",
  async (_, { rejectWithValue }) => {
    try {
      // Mimics fetching a user session from a token.
      const token = localStorage.getItem("token");
      if (token) {
        const userInDb = fakeUserDatabase["user@example.com"];
        const userPayload = {
          id: userInDb.id,
          orgName: userInDb.orgName,
          email: userInDb.email,
        };
        return await simulateApiCall(userPayload);
      }
      throw new Error("No token found.");
    } catch (error) {
      localStorage.removeItem("token");
      return rejectWithValue(error.message);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.isAuthenticated = false;
      state.error = null;
      localStorage.removeItem("token");
    },
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isAuthenticated = true;
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        state.isAuthenticated = false;
      })
      .addCase(register.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isAuthenticated = true;
      })
      .addCase(register.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        state.isAuthenticated = false;
      })
      .addCase(fetchUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
        state.isAuthenticated = true;
      })
      .addCase(fetchUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        state.isAuthenticated = false;
        state.user = null;
        state.token = null;
      });
  },
});

export const { logout, clearError } = authSlice.actions;
export default authSlice.reducer;
