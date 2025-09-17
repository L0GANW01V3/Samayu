import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion"; // 👈 added for animation

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Services", href: "#services" },
    { name: "How We Work", href: "#how-we-work" },
    { name: "Pricing", href: "#pricing" },
    { name: "Reviews", href: "#reviews" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? "bg-black/90 backdrop-blur-md shadow-lg border-b border-border"
        : "bg-black/80"
        }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo with fade-in animation */}
          <Link to="/" className="flex items-center space-x-2">
            <span
              className="font-display text-3xl font-extrabold bg-gradient-to-r from-yellow-500 via-yellow-200 to-yellow-800 bg-clip-text text-transparent drop-shadow-md animate-gradient-x"
            >
              Samayu
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-4 lg:space-x-6 xl:space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-foreground hover:text-primary transition-colors duration-200 font-medium text-sm lg:text-base whitespace-nowrap"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Contact Info & CTA - Hidden on medium, shown on large+ */}
          <div className="hidden xl:flex items-center space-x-4">
            <div className="flex items-center space-x-3 text-sm text-muted-foreground">
              <a
                href="tel:+1234567890"
                className="flex items-center space-x-1 hover:text-primary transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span className="hidden 2xl:inline">+123 456 7890</span>
              </a>
              <a
                href="mailto:info@samayu.com"
                className="flex items-center space-x-1 hover:text-primary transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span className="hidden 2xl:inline">info@samayu.com</span>
              </a>
            </div>
            <div className="flex items-center space-x-2">
              <Link to="/login">
                <Button variant="ghost" size="sm">
                  Login
                </Button>
              </Link>
              <Link to="/register">
                <Button size="sm" className="btn-hero">
                  Get Started
                </Button>
              </Link>
            </div>
          </div>

          {/* CTA for Large screens */}
          <div className="hidden lg:flex xl:hidden items-center space-x-2">
            <Link to="/login">
              <Button variant="ghost" size="sm">
                Login
              </Button>
            </Link>
            <Link to="/register">
              <Button size="sm" className="btn-hero">
                Start
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-foreground hover:text-primary transition-colors"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border bg-black/90 backdrop-blur-md">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-foreground hover:text-primary transition-colors font-medium px-4 py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="px-4 pt-4 border-t border-border">
                <div className="flex flex-col space-y-3">
                  <a
                    href="tel:+1234567890"
                    className="flex items-center space-x-2 text-muted-foreground hover:text-primary"
                  >
                    <Phone className="w-4 h-4" />
                    <span>+123 456 7890</span>
                  </a>
                  <a
                    href="mailto:info@samayu.com"
                    className="flex items-center space-x-2 text-muted-foreground hover:text-primary"
                  >
                    <Mail className="w-4 h-4" />
                    <span>info@samayu.com</span>
                  </a>
                  <div className="flex space-x-2 pt-2">
                    <Link to="/login" className="flex-1">
                      <Button variant="outline" size="sm" className="w-full">
                        Login
                      </Button>
                    </Link>
                    <Link to="/register" className="flex-1">
                      <Button size="sm" className="w-full btn-hero">
                        Get Started
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
