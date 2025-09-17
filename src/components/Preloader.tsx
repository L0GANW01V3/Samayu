import { useEffect, useState } from "react";

const Preloader = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate loading progress
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          // Hide preloader after a short delay
          setTimeout(() => {
            setIsVisible(false);
          }, 500);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 150);

    return () => clearInterval(progressInterval);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="preloader">
      <div className="text-center">

        {/* Loading Animation */}
        <div className="mb-6">
          <div className="loader-circle mx-auto"></div>
        </div>

        {/* Progress Bar */}
        <div className="w-64 mx-auto mb-4">
          <div className="w-full bg-muted rounded-full h-2">
            <div 
              className="bg-gradient-primary h-2 rounded-full transition-all duration-300 ease-out"
              style={{ width: `${Math.min(progress, 100)}%` }}
            ></div>
          </div>
        </div>

        {/* Loading Text */}
        <div className="text-muted-foreground text-sm animate-pulse">
          {progress < 30 && "Initializing..."}
          {progress >= 30 && progress < 60 && "Loading components..."}
          {progress >= 60 && progress < 90 && "Preparing interface..."}
          {progress >= 90 && "Almost ready..."}
        </div>

        {/* Loading percentage */}
        <div className="text-primary font-medium mt-2">
          {Math.round(progress)}%
        </div>
      </div>

      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-primary rounded-full opacity-10 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-gradient-to-r from-accent to-primary rounded-full opacity-20 blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute top-3/4 left-1/2 w-16 h-16 bg-accent rounded-full opacity-15 blur-xl animate-pulse delay-500"></div>
      </div>
    </div>
  );
};

export default Preloader;