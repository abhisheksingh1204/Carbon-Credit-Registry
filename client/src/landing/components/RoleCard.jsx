import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { Link } from "react-router-dom";

export default function RoleCard({
  title,
  description,
  icon: Icon,
  roleParam,
}) {
  // Decide routes based on role
  let loginPath = "/";
  let signupPath = null;

  if (roleParam === "ngo") {
    loginPath = "/proponent";
    signupPath = "/proponent/signup";
  } else if (roleParam === "admin") {
    loginPath = "/admin";
  } else if (roleParam === "auditor") {
    loginPath = "/auditor";
  }

  return (
    <Card className="hover-elevate transition-all duration-200 h-full">
      <CardHeader className="text-center pb-4">
        <div className="mx-auto mb-4 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
          <Icon className="h-6 w-6 text-primary" />
        </div>
        <CardTitle className="text-xl font-bold">{title}</CardTitle>
        <CardDescription className="text-muted-foreground">
          {description}
        </CardDescription>
      </CardHeader>

      <CardContent className="pt-0">
        <div className="flex flex-col gap-3">
          {/* Login button */}
          <Link to={loginPath}>
            <Button
              variant="default"
              className="w-full cursor-pointer"
              data-testid={`button-login-${roleParam}`}
            >
              Log In
            </Button>
          </Link>

          {/* Signup button only for NGO */}
          {signupPath ? (
            <Link to={signupPath}>
              <Button
                variant="outline"
                className="w-full cursor-pointer"
                data-testid={`button-signup-${roleParam}`}
              >
                Sign Up
              </Button>
            </Link>
          ) : (
            <div className="w-full flex items-center justify-center">
              <span className="text-muted-foreground text-sm">Login only</span>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
