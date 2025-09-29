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
          <Link to={`/auth/login?role=${roleParam}`}>
            <Button
              variant="default"
              className="w-full"
              data-testid={`button-login-${roleParam}`}
            >
              Log In
            </Button>
          </Link>

          <Link to={`/auth/register?role=${roleParam}`}>
            <Button
              variant="outline"
              className="w-full"
              data-testid={`button-signup-${roleParam}`}
            >
              Sign Up
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
