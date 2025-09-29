import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "../../components/ui/dialog";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import { useToast } from "../../hooks/use-toast";
import { X } from "lucide-react";

export default function AuthModal({ isOpen, onClose, mode, role }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Mock authentication
    console.log(`${mode} submitted for ${role}:`, { email, password });

    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: mode === "login" ? "Login Successful" : "Registration Successful",
      description: `Welcome ${
        role === "ngo"
          ? "NGO/Community member"
          : role === "admin"
          ? "Administrator"
          : "Validator/Auditor"
      }!`,
    });

    setIsLoading(false);
    onClose();

    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };

  const roleDisplayName =
    role === "ngo"
      ? "NGO/Community"
      : role === "admin"
      ? "Administrator"
      : "Validator/Auditor";

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md" aria-describedby="auth-modal-description">
        <DialogHeader>
          <div className="flex items-center justify-between">
            <DialogTitle className="text-xl font-semibold">
              {mode === "login" ? "Log In" : "Sign Up"} as {roleDisplayName}
            </DialogTitle>
            <Button variant="ghost" size="icon" onClick={onClose} data-testid="button-close-modal">
              <X className="h-4 w-4" />
            </Button>
          </div>
          <DialogDescription id="auth-modal-description">
            {mode === "login"
              ? `Enter your credentials to access your ${roleDisplayName.toLowerCase()} account.`
              : `Create a new ${roleDisplayName.toLowerCase()} account to get started.`}
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="your.email@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              data-testid="input-email"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              data-testid="input-password"
            />
          </div>

          {mode === "register" && (
            <div className="space-y-2">
              <Label htmlFor="confirmPassword">Confirm Password</Label>
              <Input
                id="confirmPassword"
                type="password"
                placeholder="••••••••"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                data-testid="input-confirm-password"
              />
            </div>
          )}

          <div className="flex gap-3 pt-4">
            <Button type="button" variant="outline" onClick={onClose} className="flex-1" data-testid="button-cancel">
              Cancel
            </Button>
            <Button
              type="submit"
              disabled={isLoading}
              className="flex-1 bg-primary hover:bg-primary/90"
              data-testid="button-submit"
            >
              {isLoading ? "Processing..." : mode === "login" ? "Log In" : "Sign Up"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
