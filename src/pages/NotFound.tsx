import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="text-center">
        <div className="w-24 h-24 bg-gradient-primary rounded-3xl flex items-center justify-center mx-auto mb-8">
          <span className="text-primary-foreground font-bold text-4xl">4</span>
        </div>
        <h1 className="mb-4 text-6xl font-bold text-gradient">404</h1>
        <p className="mb-8 text-xl text-muted-foreground">Oops! Page not found</p>
        <a href="/" className="btn-hero inline-flex items-center">
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
