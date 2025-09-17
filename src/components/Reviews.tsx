import { useState } from "react";
import { Star, Quote, Send, User, Mail, MessageSquare } from "lucide-react";

const Reviews = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    rating: 5,
    review: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRatingChange = (rating: number) => {
    setFormData({ ...formData, rating });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Review submitted:", formData);
    setFormData({
      name: "",
      email: "",
      company: "",
      rating: 5,
      review: "",
    });
  };

  const reviews = [
    {
      id: 1,
      name: "Sarah Johnson",
      position: "CEO, TechStart Inc.",
      company: "TechStart Inc.",
      rating: 5,
      review:
        "Samayu Solutions transformed our entire digital presence. Their attention to detail and technical expertise is unmatched.",
      avatar: "SJ",
      featured: true,
    },
    {
      id: 2,
      name: "Michael Chen",
      position: "CTO, InnovateLab",
      company: "InnovateLab",
      rating: 5,
      review:
        "Working with Samayu Solutions was an absolute pleasure. Ongoing support has been invaluable.",
      avatar: "MC",
      featured: true,
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      position: "Founder, GrowthHQ",
      company: "GrowthHQ",
      rating: 5,
      review:
        "They took our vision and made it a reality with precision and creativity.",
      avatar: "ER",
      featured: true,
    },
    {
      id: 4,
      name: "David Thompson",
      position: "Product Manager, ScaleUp",
      company: "ScaleUp",
      rating: 5,
      review:
        "Exceptional work quality and communication. The final product exceeded expectations.",
      avatar: "DT",
      featured: true,
    },
    {
      id: 5,
      name: "Lisa Park",
      position: "Marketing Director, BrandForward",
      company: "BrandForward",
      rating: 5,
      review:
        "A beautiful, functional website that perfectly represents our brand.",
      avatar: "LP",
      featured: true,
    },
    {
      id: 6,
      name: "James Wilson",
      position: "Operations Manager, FlexiCorp",
      company: "FlexiCorp",
      rating: 5,
      review:
        "From concept to deployment, they were professional and responsive.",
      avatar: "JW",
      featured: true,
    },
    {
      id: 7,
      name: "Olivia Martinez",
      position: "Head of Design, PixelWorks",
      company: "PixelWorks",
      rating: 5,
      review:
        "They brought fresh ideas and executed them flawlessly. Collaboration was effortless.",
      avatar: "OM",
      featured: true,
    },
    {
      id: 8,
      name: "Daniel Lee",
      position: "CEO, FinTechPro",
      company: "FinTechPro",
      rating: 5,
      review:
        "We saw a huge boost in efficiency after implementing their solutions.",
      avatar: "DL",
      featured: true,
    },
  ];

  const featuredReviews = [...reviews, ...reviews]; // duplicate for smooth infinite scroll

  const renderStars = (rating: number) =>
    Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        size={16}
        className={
          index < rating
            ? "fill-primary text-primary drop-shadow-[0_0_3px_rgba(255,215,0,0.7)]"
            : "text-muted-foreground"
        }
      />
    ));

  return (
    <section id="reviews" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            Client Reviews
          </div>
          <h2 className="text-display text-4xl md:text-5xl font-bold text-foreground mb-6">
            What Our Clients{" "}
            <span className="block text-gradient">Say About Us</span>
          </h2>
          <p className="text-body text-xl text-muted-foreground max-w-3xl mx-auto">
            Don&apos;t just take our word for it. Here&apos;s what our valued
            clients have to say about{" "}
            <span className="text-primary font-semibold">
              Samayu Solutions
            </span>
            .
          </p>
        </div>

        {/* Review Form + Featured Reviews */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
          {/* Review Form (Left Side) */}
          <div className="lg:col-span-4">
            <form
              onSubmit={handleSubmit}
              className="bg-card border border-border rounded-2xl p-8 shadow-lg space-y-6"
            >
              <div className="flex items-center space-x-3 mb-6">
                <MessageSquare className="text-primary" size={24} />
                <h3 className="text-xl font-semibold text-foreground">
                  Share Your Experience
                </h3>
              </div>

              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-black" size={18} />
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full pl-10 pr-4 py-3 rounded-xl bg-whiteborder border-border text-foreground placeholder:text-black focus:ring-2 focus:ring-primary focus:border-transparent"
                  required
                />
              </div>

              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-black" size={18} />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full pl-10 pr-4 py-3 rounded-xl bg-whiteborder border-border text-foreground placeholder:text-black focus:ring-2 focus:ring-primary focus:border-transparent"
                  required
                />
              </div>

              <input
                type="text"
                name="company"
                placeholder="Company"
                value={formData.company}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-xl bg-whiteborder border-border text-foreground placeholder:text-black focus:ring-2 focus:ring-primary focus:border-transparent"
              />

              <div className="flex items-center space-x-2">
                {Array.from({ length: 5 }, (_, index) => (
                  <Star
                    key={index}
                    size={20}
                    onClick={() => handleRatingChange(index + 1)}
                    className={`cursor-pointer transition ${
                      index < formData.rating
                        ? "fill-primary text-primary drop-shadow-[0_0_3px_rgba(255,215,0,0.7)]"
                        : "text-muted-foreground"
                    }`}
                  />
                ))}
              </div>

              <div className="relative">
                <MessageSquare className="absolute left-3 top-3 text-black" size={18} />
                <textarea
                  name="review"
                  placeholder="Write your review..."
                  value={formData.review}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full pl-10 pr-4 py-3 rounded-xl bg-whiteborder border-border text-foreground placeholder:text-black focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center px-6 py-3 bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl font-medium transition-colors"
              >
                <Send size={18} className="mr-2" /> Submit Review
              </button>
            </form>
          </div>

          {/* Auto-Moving Reviews (Right Side) */}
          <div className="lg:col-span-8">
            <div className="relative max-h-[600px] overflow-hidden group">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-scroll group-hover:[animation-play-state:paused]">
                {featuredReviews.map((review, index) => (
                  <div key={index} className="overflow-hidden">
                    <div className="bg-card border border-border rounded-xl p-6 shadow-lg transition-transform duration-300 hover:shadow-glow hover:scale-105">
                      <div className="absolute top-4 right-4 text-primary/20">
                        <Quote size={24} />
                      </div>

                      <div className="flex items-center mb-4">
                        <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center text-primary-foreground font-semibold mr-3 text-sm">
                          {review.avatar}
                        </div>
                        <div>
                          <h4 className="text-sm font-semibold text-foreground">
                            {review.name}
                          </h4>
                          <p className="text-xs text-muted-foreground">
                            {review.position}
                          </p>
                        </div>
                      </div>

                      <div className="flex mb-3">
                        {renderStars(review.rating)}
                      </div>

                      <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                        "{review.review}"
                      </p>

                      <div className="pt-3 border-t border-border">
                        <p className="text-xs font-medium text-primary">
                          {review.company}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Keyframes for auto-scroll */}
      <style>{`
        @keyframes scroll {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Reviews;
