import { Link } from "react-router-dom";
import { Button } from "../../components/ui/button";
import { Users } from "lucide-react";

export default function Header() {
  return (
    <header className="w-full bg-background border-b border-border px-4 py-4">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <Link
          to="/"
          className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
          data-testid="link-home"
        >
          <Users className="h-8 w-8" />
          <span className="text-xl font-bold">BlueCarbonCare Connect</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          <Link
            to="/about"
            className="text-muted-foreground hover:text-foreground transition-colors"
            data-testid="link-about"
          >
            About
          </Link>
          <Link
            to="/contact"
            className="text-muted-foreground hover:text-foreground transition-colors"
            data-testid="link-contact"
          >
            Contact
          </Link>
          <Button variant="outline" size="sm" data-testid="button-help">
            Help
          </Button>
        </nav>
      </div>
    </header>
  );
}
