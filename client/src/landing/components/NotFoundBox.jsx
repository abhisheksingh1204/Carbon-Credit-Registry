import { Card, CardContent } from "../../components/ui/card";
import { AlertCircle } from "lucide-react";

export default function NotFoundBox() {
  return (
    <div className="flex items-center justify-center w-full">
      <Card className="w-full max-w-md mx-4 my-12">
        <CardContent className="pt-6">
          <div className="flex mb-4 gap-2 items-center">
            <AlertCircle className="h-8 w-8 text-red-500" />
            <h1 className="text-2xl font-bold text-gray-900">
              404 Page Not Found
            </h1>
          </div>
          <p className="mt-4 text-sm text-gray-600">
            Oops! The page you're looking for doesn't exist.
            It might have been moved or the link you followed could be broken.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
