import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../../components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../../components/ui/form";
import { Input } from "../../../components/ui/input";
import { Button } from "../../../components/ui/button";
import { Alert, AlertDescription } from "../../../components/ui/alert";
import { Leaf, Loader2, AlertCircle } from "lucide-react";
import { login, clearError } from "../../../store/authSlice";
import { useAuth } from "../../../hooks/useAuth";
import GoogleSignInButton from "../../components/auth/GoogleSignInButton";

export default function Login() {
  const dispatch = useDispatch();
  const { redirectIfAuthenticated } = useAuth();
  const { isLoading, error } = useSelector((state) => state.auth);

  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  useEffect(() => {
    redirectIfAuthenticated();
  }, [redirectIfAuthenticated]);

  useEffect(() => {
    dispatch(clearError());
  }, [dispatch]);

  const onSubmit = async (data) => {
    try {
      await dispatch(login(data)).unwrap();
    } catch (err) {
      console.error("Login failed:", err);
    }
  };

  return (
    <div className="min-h-full flex items-center justify-center bg-muted/30 px-4 py-16">
      <div className="w-full max-w-md">
        <div className="flex items-center justify-center space-x-2 mb-8">
          <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
            <Leaf className="h-6 w-6 text-primary-foreground" />
          </div>
          <span className="text-2xl font-bold text-primary">
            BlueCarbonCare
          </span>
        </div>

        <Card className="border border-border">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl text-center">Welcome back</CardTitle>
            <CardDescription className="text-center">
              Sign in to continue managing your carbon credits
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {error && (
              <Alert variant="destructive" data-testid="alert-error">
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}

            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-4"
              >
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="user@example.com"
                          autoComplete="email"
                          {...field}
                          data-testid="input-email"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <Input
                          type="password"
                          placeholder="Password@123"
                          autoComplete="current-password"
                          {...field}
                          data-testid="input-password"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  className="w-full"
                  disabled={isLoading}
                  data-testid="button-sign-in"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Signing in...
                    </>
                  ) : (
                    "Sign In"
                  )}
                </Button>
              </form>
            </Form>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground">
                  Or continue with
                </span>
              </div>
            </div>

            <GoogleSignInButton />

            <div className="mt-4 text-center text-sm">
              <span className="text-muted-foreground">
                Don't have an account?{" "}
              </span>
              <Link
                to="/auth/register"
                className="font-medium text-primary hover:underline"
                data-testid="link-register"
              >
                Sign up
              </Link>
            </div>

            <div className="text-center">
              <Link
                to="/forgot-password"
                className="text-sm text-primary hover:underline"
                data-testid="link-forgot-password"
              >
                Forgot your password?
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}