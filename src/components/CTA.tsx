import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Mail, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-white from-primary/5 via-accent/5 to-transparent"></div>
      <div className="absolute top-10 left-10 w-24 h-24 bg-gradient-primary rounded-full opacity-20 blur-2xl animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-gradient-to-r from-accent to-primary rounded-full opacity-30 blur-3xl animate-pulse delay-1000"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-up">
          {/* Main CTA Content */}
          <div className="bg-gradient-primary rounded-3xl p-8 md:p-12 text-black shadow-2xl">
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-black/90 mb-8 max-w-2xl mx-auto leading-relaxed">
              Join thousands of successful businesses that have already transformed their operations with our innovative solutions. Let's create something extraordinary together.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link to="/contact">
                <Button 
                  size="lg" 
                  className="bg-white text-black hover:bg-white/90 font-semibold px-8 py-4 text-lg group"
                >
                  Start Your Project
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Button 
                variant="outline" 
                size="lg"
                className="border-black text-primary hover:bg-white hover:text-black font-semibold px-8 py-4 text-lg"
              >
                Schedule a Call
              </Button>
            </div>

            {/* Contact Methods */}
            <div className="border-t border-black/20 pt-8">
              <p className="text-black/80 mb-4">Or get in touch directly:</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a 
                  href="tel:+1234567890"
                  className="flex items-center space-x-2 text-black hover:text-black/80 transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  <span>+1 (234) 567-8900</span>
                </a>
                <a 
                  href="mailto:info@samayu.com"
                  className="flex items-center space-x-2 text-black hover:text-black/80 transition-colors"
                >
                  <Mail className="w-5 h-5" />
                  <span>info@samayu.com</span>
                </a>
                <a 
                  href="https://wa.me/1234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-black hover:text-black/80 transition-colors"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 grid md:grid-cols-3 gap-8 animate-fade-up delay-300">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary mb-2">Free Consultation</div>
              <div className="text-muted-foreground">No commitment required</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary mb-2">24-48h Response</div>
              <div className="text-muted-foreground">Quick project assessment</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary mb-2">100% Satisfaction</div>
              <div className="text-muted-foreground">Guaranteed results</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;