import { CheckCircle, ArrowRight, Users, Lightbulb, Rocket, Target } from "lucide-react";

const HowWeWork = () => {
  const steps = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "Discovery & Planning",
      description: "We start by understanding your business goals, challenges, and requirements through detailed consultation.",
      features: ["Comprehensive analysis", "Goal setting", "Strategy development"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Design & Development",
      description: "Our expert team creates tailored solutions using cutting-edge technology and proven methodologies.",
      features: ["Custom solutions", "Modern technology", "Best practices"],
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Implementation",
      description: "We execute the plan with precision, ensuring smooth deployment and seamless integration.",
      features: ["Smooth deployment", "Quality assurance", "Performance optimization"],
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Optimization & Support",
      description: "Continuous monitoring, optimization, and support to ensure long-term success and growth.",
      features: ["24/7 monitoring", "Regular updates", "Ongoing support"],
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section id="how-we-work" className="py-20 bg-white/90 rounded-[80px] shadow-sm">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="font-display text-black text-4xl md:text-5xl font-bold mb-6">
            How We <span className="text-black">Work</span>
          </h2>
          <p className="text-xl text-muted max-w-3xl mx-auto">
            Our proven 4-step process ensures exceptional results and client satisfaction every time
          </p>
        </div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-accent to-primary transform -translate-y-1/2 opacity-30"></div>
          
          <div className="grid lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative animate-fade-up" style={{ animationDelay: `${index * 150}ms` }}>
                {/* Step Card */}
                <div className="card-elevated group hover:scale-105 transition-all duration-300">
                  {/* Step Number */}
                  <div className="absolute -top-4 left-6">
                    <div className={`w-8 h-8 bg-gradient-to-r ${step.color} rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg`}>
                      {index + 1}
                    </div>
                  </div>

                  {/* Icon */}
                  <div className={`w-16 h-16 bg-gradient-to-r ${step.color} rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    {step.icon}
                  </div>

                  {/* Content */}
                  <h3 className="font-display text-xl font-semibold mb-3 text-foreground">
                    {step.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {step.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2">
                    {step.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Arrow for desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <div className="w-8 h-8 bg-background border-2 border-primary rounded-full flex items-center justify-center shadow-lg">
                      <ArrowRight className="w-4 h-4 text-primary" />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default HowWeWork;