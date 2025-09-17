import { CheckCircle, X, Crown, Zap, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      price: "₹7,999",
      period: "/month",
      description: "Perfect for small businesses getting started",
      icon: <Zap className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-500",
      features: [
        "Up to 5 projects",
        "Basic support",
        "Standard templates",
        "Email integration",
        "Mobile responsive",
      ],
      notIncluded: ["Advanced analytics", "Priority support", "Custom development"],
      popular: false,
      buttonText: "Get Started",
      buttonVariant: "outline" as const,
    },
    {
      name: "Professional",
      price: "₹24,999",
      period: "/month",
      description: "Most popular choice for growing businesses",
      icon: <Crown className="w-6 h-6" />,
      color: "from-purple-500 to-pink-500",
      features: [
        "Unlimited projects",
        "Priority support",
        "Premium templates",
        "Advanced analytics",
        "API access",
        "Custom integrations",
        "Team collaboration",
        "Advanced security",
      ],
      notIncluded: ["Dedicated account manager", "White-label solution"],
      popular: true,
      buttonText: "Start Free Trial",
      buttonVariant: "default" as const,
    },
    {
      name: "Enterprise",
      price: "₹64,999",
      period: "/month",
      description: "Advanced features for large organizations",
      icon: <Rocket className="w-6 h-6" />,
      color: "from-green-500 to-emerald-500",
      features: [
        "Everything in Professional",
        "Dedicated account manager",
        "White-label solution",
        "Custom development",
        "SLA guarantee",
        "Advanced reporting",
        "Multi-region deployment",
        "24/7 phone support",
        "Training & onboarding",
      ],
      notIncluded: [],
      popular: false,
      buttonText: "Contact Sales",
      buttonVariant: "outline" as const,
    },
  ];

  return (
    <section id="pricing" className="py-20 bg-secondary/30 relative">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Simple <span className="text-gradient">Pricing</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose the perfect plan for your business. All plans include our core
            features with no hidden fees.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-6">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`group relative rounded-2xl p-6 ${
                plan.popular
                  ? "card-elevated scale-105 lg:scale-110 border-2 border-primary shadow-glow"
                  : "card-elevated"
              } animate-fade-up transition-all duration-500 hover:scale-105 ${
                plan.popular ? "lg:hover:scale-115" : ""
              }`}
              style={{ animationDelay: `${index * 150}ms`, minHeight: "460px" }}
            >
              {/* Floating Blob Background */}
              <div className="absolute inset-0 -z-10 overflow-hidden rounded-2xl">
                <div
                  className={`absolute -top-10 -left-10 w-40 h-40 bg-gradient-to-r ${plan.color} opacity-30 rounded-full blur-3xl animate-blob`}
                ></div>
                <div
                  className={`absolute -bottom-10 -right-10 w-40 h-40 bg-gradient-to-r ${plan.color} opacity-20 rounded-full blur-3xl animate-blob animation-delay-2000`}
                ></div>
                <div
                  className={`absolute top-1/2 left-1/2 w-36 h-36 bg-gradient-to-r ${plan.color} opacity-20 rounded-full blur-2xl animate-blob animation-delay-4000`}
                ></div>
              </div>

              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <div className="bg-gradient-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold shadow-md">
                    Most Popular
                  </div>
                </div>
              )}

              {/* Plan Header */}
              <div className="text-center mb-6">
                <div
                  className={`w-14 h-14 bg-gradient-to-r ${plan.color} rounded-xl flex items-center justify-center text-white mx-auto mb-3`}
                >
                  {plan.icon}
                </div>
                <h3 className="font-display text-xl font-bold mb-1">
                  {plan.name}
                </h3>
                <p className="text-muted-foreground text-sm mb-3">
                  {plan.description}
                </p>
                <div className="flex items-baseline justify-center">
                  <span className="text-3xl font-bold text-foreground">
                    {plan.price}
                  </span>
                  <span className="text-muted-foreground ml-1">{plan.period}</span>
                </div>
              </div>

              {/* Features */}
              <div className="space-y-3 mb-6">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center space-x-3">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                    <span className="text-sm text-foreground">{feature}</span>
                  </div>
                ))}
                {plan.notIncluded.map((feature, featureIndex) => (
                  <div
                    key={featureIndex}
                    className="flex items-center space-x-3 opacity-50"
                  >
                    <X className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                    <span className="text-sm text-muted-foreground line-through">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <Button
                variant={plan.buttonVariant}
                size="lg"
                className={`w-full relative overflow-hidden transition-all duration-300`}
              >
                <span className="relative z-10">{plan.buttonText}</span>
                {/* Gradient overlay on hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${plan.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg`}
                ></div>
              </Button>
            </div>
          ))}
        </div>

        {/* Bottom Features */}
        <div className="mt-16 text-center animate-fade-up">
          <h3 className="font-display text-2xl font-bold mb-8">
            All Plans Include
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {["99.9% Uptime SLA", "SSL Certificate", "Regular Backups", "Migration Support"].map(
              (feature, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center space-x-2 text-muted-foreground"
                >
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>{feature}</span>
                </div>
              )
            )}
          </div>

          <div className="mt-8 p-6 bg-primary/5 rounded-xl border border-primary/20">
            <p className="text-sm text-muted-foreground">
              Need a custom solution?{" "}
              <a
                href="/contact"
                className="text-primary font-medium hover:underline"
              >
                Contact our sales team
              </a>{" "}
              for enterprise pricing and tailored packages.
            </p>
          </div>
        </div>
      </div>

      {/* CSS for blob animation */}
      <style>{`
        @keyframes blob {
          0%,
          100% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(20px, -30px) scale(1.1);
          }
          66% {
            transform: translate(-25px, 20px) scale(0.9);
          }
        }
        .animate-blob {
          animation: blob 8s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
};

export default Pricing;
