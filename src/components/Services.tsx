import { 
  Code, 
  Smartphone, 
  Globe, 
  BarChart3, 
  Shield, 
  Cloud,
  ArrowRight,
  CheckCircle
} from "lucide-react";
import { Button } from "@/components/ui/button";

const Services = () => {
  const services = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Custom Development",
      description: "Tailored software solutions built to meet your specific business requirements and objectives.",
      features: ["Full-stack development", "API integration", "Database design", "Performance optimization"],
      price: "Starting at ₹5,000",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobile Applications",
      description: "Native and cross-platform mobile apps that deliver exceptional user experiences.",
      features: ["iOS & Android", "React Native", "App Store optimization", "Push notifications"],
      price: "Starting at ₹8,000",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Web Development",
      description: "Modern, responsive websites and web applications that drive engagement and conversions.",
      features: ["Responsive design", "SEO optimization", "CMS integration", "E-commerce solutions"],
      price: "Starting at ₹3,000",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Digital Marketing",
      description: "Comprehensive digital marketing strategies to boost your online presence and growth.",
      features: ["SEO & SEM", "Social media marketing", "Content strategy", "Analytics & reporting"],
      price: "Starting at ₹2,000/mo",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Cybersecurity",
      description: "Robust security solutions to protect your business from digital threats and vulnerabilities.",
      features: ["Security audits", "Penetration testing", "Compliance", "24/7 monitoring"],
      price: "Starting at ₹4,000",
      color: "from-red-500 to-pink-500"
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and migration services for improved efficiency and cost savings.",
      features: ["Cloud migration", "Infrastructure setup", "DevOps", "Cost optimization"],
      price: "Starting at ₹3,500",
      color: "from-indigo-500 to-purple-500"
    }
  ];

  // Predefined blob positions for variety
  const blobPositions = [
    "-top-10 -right-10",   // Card 1
    "-bottom-10 -left-10", // Card 2
    "-top-10 -left-10",    // Card 3
    "-bottom-10 -right-10",// Card 4
    "top-1/2 -left-12",    // Card 5
    "top-1/2 -right-12",   // Card 6
  ];

  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Our <span className="text-gradient">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive solutions designed to accelerate your business growth and digital transformation
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`
                card-elevated group relative overflow-hidden
                transition-all duration-500
                hover:-translate-y-2
                ${index % 2 === 0 ? "hover:-rotate-3" : "hover:rotate-3"}
              `}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Animated Blob Background with varied positions */}
              <div
                className={`absolute ${blobPositions[index]} w-40 h-40 bg-gradient-to-r ${service.color} rounded-full blur-3xl opacity-30 animate-blob animate-pulseBlob`}
              ></div>

              {/* Icon & Title */}
              <div className="relative flex items-start space-x-4 mb-6">
                <div
                  className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300`}
                >
                  {service.icon}
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold mb-2 text-foreground">
                    {service.title}
                  </h3>
                  <div
                    className={`text-sm font-semibold bg-gradient-to-r ${service.color} bg-clip-text text-transparent`}
                  >
                    {service.price}
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-muted-foreground mb-6 leading-relaxed relative z-10">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-3 mb-8 relative z-10">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <Button
                variant="outline"
                className={`
                  relative z-10 w-full
                  transition-all duration-300
                  group-hover:text-white
                  group-hover:border-transparent
                  group-hover:bg-gradient-to-r ${service.color}
                `}
              >
                Learn More
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 animate-fade-up">
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8 border border-primary/20">
            <h3 className="font-display text-2xl font-bold mb-4">
              Need a Custom Solution?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Every business is unique. Let's discuss your specific requirements and create a tailored solution that perfectly fits your needs.
            </p>
            <Button size="lg" className="btn-hero">
              Get Custom Quote
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </div>

      {/* Blob Animations */}
      <style>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(20px, -20px) scale(1.1); }
          66% { transform: translate(-10px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        @keyframes pulseBlob {
          0%, 100% { opacity: 0.25; }
          50% { opacity: 0.45; }
        }
        .animate-blob {
          animation: blob 8s infinite;
        }
        .animate-pulseBlob {
          animation: pulseBlob 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Services;
