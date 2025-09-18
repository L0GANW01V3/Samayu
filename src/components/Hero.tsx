import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Star, Users, Award, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-transparent"></div>
      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-primary rounded-full opacity-20 blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-24 h-24 bg-gradient-to-r from-accent to-primary rounded-full opacity-30 blur-2xl animate-pulse delay-1000"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left animate-fade-up">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Star className="w-4 h-4 fill-current" />
              <span>Trusted by 10,000+ businesses</span>
            </div>

            {/* Main Heading */}
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
              Transform Your
              <span className="text-gradient block">
                Business Today
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
              Unlock unprecedented growth with our innovative solutions. 
              Join thousands of businesses that have already transformed their operations.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link to="/contact">
                <Button size="lg" className="btn-hero group">
                  Get Started Free
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Button variant="outline" size="lg" className="btn-outline-hero group">
                <Play className="w-5 h-5 mr-2" />
                Watch Demo
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-border">
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-primary">10K+</div>
                <div className="text-sm text-muted-foreground">Happy Clients</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-primary">99%</div>
                <div className="text-sm text-muted-foreground">Success Rate</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-primary">24/7</div>
                <div className="text-sm text-muted-foreground">Support</div>
              </div>
            </div>
          </div>

          {/* Right Content - Visual Elements */}
          <div className="relative animate-fade-up delay-300">
            <div className="relative">
              {/* Main Visual */}
              <div className="bg-gradient-primary rounded-3xl p-8 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="bg-white rounded-2xl p-6 space-y-4">
                  {/* Dashboard Preview */}
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-gray-800">Analytics Dashboard</h3>
                    <div className="flex space-x-1">
                      <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    </div>
                  </div>
                  
                  {/* Chart representation */}
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <TrendingUp className="w-5 h-5 text-green-500" />
                      <div className="flex-1 bg-gray-100 rounded-full h-2">
                        <div className="bg-green-500 h-2 rounded-full w-4/5"></div>
                      </div>
                      <span className="text-sm font-medium text-gray-600">+24%</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Users className="w-5 h-5 text-blue-500" />
                      <div className="flex-1 bg-gray-100 rounded-full h-2">
                        <div className="bg-blue-500 h-2 rounded-full w-3/5"></div>
                      </div>
                      <span className="text-sm font-medium text-gray-600">+18%</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Award className="w-5 h-5 text-purple-500" />
                      <div className="flex-1 bg-gray-100 rounded-full h-2">
                        <div className="bg-purple-500 h-2 rounded-full w-5/6"></div>
                      </div>
                      <span className="text-sm font-medium text-gray-600">+31%</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-6 -right-6 bg-white rounded-xl p-4 shadow-lg animate-bounce">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm text-black font-medium">Live Updates</span>
                </div>
              </div>

              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-4 shadow-lg">
                <div className="flex items-center space-x-2">
                  <Star className="w-4 h-4 text-yellow-500 fill-current" />
                  <span className="text-sm text-black font-medium">5.0 Rating</span>
                </div>
              </div>
            </div>
            
              <br></br><br></br>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;