import { Link } from "react-router-dom";
import { Leaf } from "lucide-react";

export default function Header() {
  return (
    <header className="w-full bg-background border-b border-border px-4 py-4">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <Link
          to="/"
          className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
          data-testid="link-home"
        >
          <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
            <Leaf className="h-4 w-4 text-primary-foreground" />
          </div>
          <span className="text-xl font-bold">BlueCarbonCare</span>
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
        </nav>
      </div>
    </header>
  );
}
