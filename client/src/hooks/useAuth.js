import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchUser } from "../store/authSlice";

export function useAuth() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user, token, isLoading, error, isAuthenticated } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    // Auto-fetch user details if a token exists without a user session.
    if (token && !user && !isLoading) {
      dispatch(fetchUser());
    }
  }, [token, user, isLoading, dispatch]);

  const requireAuth = () => {
    if (!isAuthenticated) {
      navigate("auth/login");
      return false;
    }
    return true;
  };

  const redirectIfAuthenticated = (redirectTo = "dashboard") => {
    if (isAuthenticated) {
      navigate(redirectTo);
      return true;
    }
    return false;
  };

  return {
    user,
    token,
    isLoading,
    error,
    isAuthenticated,
    requireAuth,
    redirectIfAuthenticated,
  };
}
