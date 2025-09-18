import { 
  Phone, 
  Mail, 
  MapPin, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram,
  MessageCircle,
  ArrowRight
} from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: "Services",
      links: [
        { name: "Custom Development", href: "#services" },
        { name: "Mobile Applications", href: "#services" },
        { name: "Web Development", href: "#services" },
        { name: "Digital Marketing", href: "#services" },
        { name: "Cybersecurity", href: "#services" },
        { name: "Cloud Solutions", href: "#services" }
      ]
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "/about" },
        { name: "How We Work", href: "#how-we-work" },
        { name: "Case Studies", href: "/case-studies" },
        { name: "Careers", href: "/careers" },
        { name: "Blog", href: "/blog" },
        { name: "News", href: "/news" }
      ]
    },
    {
      title: "Support",
      links: [
        { name: "Help Center", href: "/help" },
        { name: "Documentation", href: "/docs" },
        { name: "API Reference", href: "/api" },
        { name: "System Status", href: "/status" },
        { name: "Contact Support", href: "/support" },
        { name: "Training", href: "/training" }
      ]
    },
    {
      title: "Legal",
      links: [
        { name: "Privacy Policy", href: "/privacy" },
        { name: "Terms of Service", href: "/terms" },
        { name: "Cookie Policy", href: "/cookies" },
        { name: "GDPR", href: "/gdpr" },
        { name: "Security", href: "/security" },
        { name: "Compliance", href: "/compliance" }
      ]
    }
  ];

  const socialLinks = [
    { name: "Facebook", icon: <Facebook className="w-5 h-5" />, href: "https://facebook.com/samayu" },
    { name: "Twitter", icon: <Twitter className="w-5 h-5" />, href: "https://twitter.com/samayu" },
    { name: "LinkedIn", icon: <Linkedin className="w-5 h-5" />, href: "https://linkedin.com/company/samayu" },
    { name: "Instagram", icon: <Instagram className="w-5 h-5" />, href: "https://instagram.com/samayu" }
  ];

  return (
    <footer className="bg-secondary/30">
      {/* Newsletter Section */}
      <div className="border-b border-border py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="font-display text-2xl font-bold mb-4">
              Stay Updated with <span className="text-gradient">Samayu</span>
            </h3>
            <p className="text-muted-foreground mb-6">
              Get the latest insights, tips, and updates delivered straight to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
              />
              <Button className="btn-hero">
                Subscribe
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-6 gap-12">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <Link to="/" className="flex items-center space-x-2 mb-6">
                <span className="font-display text-2xl font-bold text-gradient">
                  Samayu
                </span>
              </Link>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Transforming businesses through innovative technology solutions. 
                We help companies achieve their digital transformation goals with 
                cutting-edge development and strategic consulting.
              </p>

              {/* Contact Info */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-muted-foreground">
                    123 Business Ave, Tech City, TC 12345
                  </span>
                </div>
                <a 
                  href="tel:+1234567890"
                  className="flex items-center space-x-3 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                  <span>+1 (234) 567-8900</span>
                </a>
                <a 
                  href="mailto:info@samayu.com"
                  className="flex items-center space-x-3 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                  <span>info@samayu.com</span>
                </a>
                <a 
                  href="https://wa.me/1234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 text-muted-foreground hover:text-primary transition-colors"
                >
                  <MessageCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span>WhatsApp Support</span>
                </a>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Footer Links */}
            {footerSections.map((section) => (
              <div key={section.title}>
                <h4 className="font-semibold text-foreground mb-4">
                  {section.title}
                </h4>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-muted-foreground text-sm">
              © {currentYear} Samayu. All rights reserved.
            </div>
            
            <div className="flex items-center space-x-6 text-sm">
              <a href="/privacy" className="text-muted-foreground hover:text-primary transition-colors">
                Privacy
              </a>
              <a href="/terms" className="text-muted-foreground hover:text-primary transition-colors">
                Terms
              </a>
              <a href="/cookies" className="text-muted-foreground hover:text-primary transition-colors">
                Cookies
              </a>
              <div className="text-muted-foreground">
                Made with ❤️ by Samayu
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;