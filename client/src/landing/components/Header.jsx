import { useState } from "react";
import { Link } from "react-router-dom";
import { Leaf, Menu, X } from "lucide-react";
import { Button } from "../../components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "../../components/ui/sheet";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const menuLinks = [
    { name: "About", href: "/landing/about" },
    { name: "Contact", href: "/landing/contact" },
    { name: "Roles", href: "#role-selector", external: true },
  ];

  return (
    <header className="w-full bg-background border-b border-border px-4 py-4">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        {/* Logo */}
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

        {/* Desktop menu */}
        <nav className="hidden md:flex items-center gap-6">
          {menuLinks.map((item) =>
            item.external ? (
              <a
                key={item.name}
                href={item.href}
                className="block px-4 py-1 text-white bg-green-600 rounded hover:bg-green-700 transition-colors"
                data-testid={`button-${item.name.toLowerCase()}`}
              >
                {item.name}
              </a>
            ) : (
              <Link
                key={item.name}
                to={item.href}
                className="block px-4 py-1 text-muted-foreground hover:text-foreground transition-colors"
                data-testid={`link-${item.name.toLowerCase()}`}
              >
                {item.name}
              </Link>
            )
          )}
        </nav>

        {/* Mobile menu button using Sheet */}
        <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden relative">
              <Menu
                className={`absolute transition-all duration-300 ease-in-out ${
                  mobileMenuOpen
                    ? "opacity-0 scale-90"
                    : "opacity-100 scale-100"
                }`}
                style={{ transitionProperty: "opacity, transform" }}
                size={20}
              />
              <X
                className={`absolute transition-all duration-300 ease-in-out ${
                  mobileMenuOpen
                    ? "opacity-100 scale-100"
                    : "opacity-0 scale-90"
                }`}
                style={{ transitionProperty: "opacity, transform" }}
                size={20}
              />
            </Button>
          </SheetTrigger>
          <SheetContent
            side="left"
            className="w-72 p-0 flex flex-col"
            hideCloseIcon={true}
            open={mobileMenuOpen}
          >
            <div className="p-4 border-b flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                  <Leaf className="h-4 w-4 text-primary-foreground" />
                </div>
                <span className="font-bold text-primary">BlueCarbonCare</span>
              </div>
              <button
                aria-label="Close menu"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center text-gray-600 hover:text-gray-900 transition-colors"
              >
                <X size={20} className="h-5 w-5" />
              </button>
            </div>
            <div className="p-4 flex flex-col space-y-4">
              {menuLinks.map((item) =>
                item.external ? (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-lg text-white bg-green-600 rounded hover:bg-green-700 transition-colors text-left px-4 py-2"
                    data-testid={`button-${item.name.toLowerCase()}`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                ) : (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="text-lg text-muted-foreground hover:text-foreground transition-colors text-left px-4 py-2"
                    data-testid={`link-${item.name.toLowerCase()}`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                )
              )}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
