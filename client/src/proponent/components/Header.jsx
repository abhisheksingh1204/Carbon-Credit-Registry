import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Bell, Leaf, Menu, ChevronDown } from "lucide-react";
import { Button } from "../../components/ui/button";
import { Avatar, AvatarFallback } from "../../components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../../components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "../../components/ui/sheet";
import { logout } from "../../store/authSlice";
import { useAuth } from "../../hooks/useAuth";

export default function Header() {
  const navigate = useNavigate();
  const { isAuthenticated, user } = useAuth();
  const dispatch = useDispatch();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  const getInitials = (name) => {
    if (!name || typeof name !== "string") return "";
    return name
      .split(" ")
      .map((word) => word[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  const authNavigation = [
    { name: "Dashboard", href: "/dashboard" },
    { name: "Projects", href: "/projects" },
    { name: "Credits", href: "/credits" },
  ];

  const publicNavigation = [
    { name: "About", href: "/landing/about" },
    { name: "Contact", href: "/landing/contact" },
  ];

  const mobileNavLinks = publicNavigation.concat(
    isAuthenticated ? authNavigation : []
  );

  return (
    <header className="bg-card border-b border-border sticky top-0 z-40">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Left Section: Logo */}
          <Link to="/" className="flex items-center space-x-2 flex-shrink-0">
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
              <Leaf className="h-4 w-4 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-primary">
              BlueCarbonCare
            </span>
          </Link>

          {/* Center Section: Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {publicNavigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Right Section: User Actions & Mobile Menu */}
          <div className="flex items-center space-x-2">
            {isAuthenticated ? (
              <>
                <Button
                  variant="ghost"
                  size="icon"
                  className="relative hidden sm:inline-flex"
                >
                  <Bell className="h-5 w-5" />
                  <span className="absolute -top-1 -right-1 w-3 h-3 bg-accent rounded-full text-xs" />
                </Button>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="ghost"
                      className="flex items-center space-x-2 p-2"
                    >
                      <Avatar className="h-8 w-8">
                        <AvatarFallback className="bg-secondary text-secondary-foreground">
                          {user ? getInitials(user.orgName) : "U"}
                        </AvatarFallback>
                      </Avatar>
                      <ChevronDown className="h-4 w-4 hidden sm:block" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-56">
                    {authNavigation.map((item) => (
                      <DropdownMenuItem key={item.name} asChild>
                        <Link to={item.href}>{item.name}</Link>
                      </DropdownMenuItem>
                    ))}
                    <DropdownMenuItem
                      onClick={handleLogout}
                      className="text-destructive"
                    >
                      Sign Out
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </>
            ) : (
              <div className="hidden md:flex items-center space-x-2">
                <Button variant="ghost" asChild>
                  <Link to="/auth/login">Sign In</Link>
                </Button>
                <Button asChild>
                  <Link to="/auth/register">Get Started</Link>
                </Button>
              </div>
            )}

            {/* Mobile Menu Button */}
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-72 p-0 flex flex-col">
                <div className="p-4 border-b">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                      <Leaf className="h-4 w-4 text-primary-foreground" />
                    </div>
                    <span className="font-bold text-primary">
                      BlueCarbonCare
                    </span>
                  </div>
                </div>

                <div className="p-4 flex flex-col space-y-4">
                  {mobileNavLinks.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className="text-lg text-muted-foreground hover:text-foreground transition-colors text-left"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>

                {!isAuthenticated && (
                  <div className="p-4 mt-auto border-t flex items-center space-x-2">
                    <Button variant="ghost" asChild className="flex-1">
                      <Link
                        to="/auth/login"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        Sign In
                      </Link>
                    </Button>
                    <Button asChild className="flex-1">
                      <Link
                        to="/auth/register"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        Get Started
                      </Link>
                    </Button>
                  </div>
                )}
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
