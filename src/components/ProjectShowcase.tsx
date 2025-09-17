import { useState } from "react";
import { ArrowRight } from "lucide-react";

const projects = [
  {
    id: 1,
    name: "E-Commerce Dashboard",
    description: "Modern dashboard for tracking sales, orders, and analytics.",
    image:
      "https://images.unsplash.com/photo-1556157382-97eda2f9e2bf?w=600&h=1000&fit=crop&auto=format&q=80",
    tags: ["React", "Tailwind", "Chart.js"],
    category: "Projects",
  },
  {
    id: 2,
    name: "Portfolio Website",
    description: "Personal portfolio with animations and responsive design.",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=1000&fit=crop&auto=format&q=80",
    tags: ["Next.js", "Framer Motion", "Vercel"],
    category: "Design",
  },
  {
    id: 3,
    name: "Mobile Banking App",
    description: "Secure and fast mobile banking application UI/UX.",
    image:
      "https://images.unsplash.com/photo-1556742044-3c52d6e88c62?w=600&h=1000&fit=crop&auto=format&q=80",
    tags: ["React Native", "Firebase", "Expo"],
    category: "Projects",
  },
  {
    id: 4,
    name: "Social Media Platform",
    description: "Community-driven social media with live chat features.",
    image:
      "https://images.unsplash.com/photo-1508780709619-79562169bc64?w=600&h=1000&fit=crop&auto=format&q=80",
    tags: ["MERN", "Socket.io", "AWS"],
    category: "Marketing",
  },
  {
    id: 5,
    name: "Business Analytics Tool",
    description: "Data-driven insights to accelerate business growth.",
    image:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=1000&fit=crop&auto=format&q=80",
    tags: ["Python", "Django", "Postgres"],
    category: "Projects",
  },
  {
    id: 6,
    name: "Startup Landing Page",
    description: "Conversion-optimized landing page for product launch.",
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=600&h=1000&fit=crop&auto=format&q=80",
    tags: ["Next.js", "Tailwind", "SEO"],
    category: "Design",
  },
];

const categories = ["All", "Projects", "Design", "Marketing"];

const ProjectGallery = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A collection of my recent work showcasing creativity, design, and
            technical expertise.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex justify-center gap-4 mb-10 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full border transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-primary text-black border-black"
                  : "bg-transparent text-muted-foreground border-border hover:bg-primary/10"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Marquee */}
        <div className="overflow-hidden">
          <div className="flex gap-6 animate-marquee hover:[animation-play-state:paused]">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="relative group rounded-2xl overflow-hidden shadow-lg w-[300px] flex-shrink-0"
              >
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-[450px] object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end">
                  <div className="p-4 text-white w-full translate-y-10 group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="text-lg font-semibold mb-1">
                      {project.name}
                    </h3>
                    <p className="text-gray-300 text-xs mb-2">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-1 mb-3">
                      {project.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="bg-white/10 px-2 py-0.5 text-[10px] rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <button className="flex items-center text-xs font-medium text-white hover:text-cyan-400 transition-colors">
                      View Project <ArrowRight className="w-3 h-3 ml-1" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Marquee Animation */}
      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee {
            display: flex;
            width: max-content;
            animation: marquee 25s linear infinite;
          }
        `}
      </style>
    </section>
  );
};

export default ProjectGallery;
