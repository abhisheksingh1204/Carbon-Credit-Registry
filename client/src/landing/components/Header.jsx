import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Leaf, Menu, X } from "lucide-react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);

  const menuItems = (
    <>
      <Link
        to="/about"
        className="block px-4 py-1 text-muted-foreground hover:text-foreground transition-colors"
        data-testid="link-about"
        onClick={() => setIsMobileMenuOpen(false)}
      >
        About
      </Link>
      <Link
        to="/contact"
        className="block px-4 py-1 text-muted-foreground hover:text-foreground transition-colors"
        data-testid="link-contact"
        onClick={() => setIsMobileMenuOpen(false)}
      >
        Contact
      </Link>
      <a
        href="#role-selector"
        className="block bg-green-600 text-white px-4 py-1 rounded hover:bg-green-700 transition-colors text-center"
        data-testid="button-roles"
        onClick={() => setIsMobileMenuOpen(false)}
      >
        Roles
      </a>
    </>
  );

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMobileMenuOpen]);

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
        <nav className="hidden md:flex items-center gap-6">{menuItems}</nav>

        {/* Hamburger button for mobile */}
        <button
          className="md:hidden p-1 rounded hover:bg-gray-200 transition-colors"
          onClick={toggleMobileMenu}
        >
          {isMobileMenuOpen ? (
            <X className="w-5 h-5" />
          ) : (
            <Menu className="w-5 h-5" />
          )}
        </button>
      </div>

      {/* Mobile menu dropdown */}
      <div
        ref={menuRef}
        className={`md:hidden overflow-hidden transform transition-all duration-300 border-t border-border bg-background flex flex-col gap-1 px-4 ${
          isMobileMenuOpen
            ? "max-h-96 opacity-100 scale-100 mt-4" // extra space when dropdown is active
            : "max-h-0 opacity-0 scale-95 mt-0"
        }`}
      >
        {menuItems}
      </div>
    </header>
  );
}
