
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import PageTransition from "@/components/PageTransition";
import SectionHeading from "@/components/SectionHeading";

const projects = [
  {
    id: 1,
    title: "Azure Skyline Tower",
    category: "Commercial",
    description: "A 32-story mixed-use tower featuring innovative sustainability features and a distinctive silhouette on the city skyline.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab",
    location: "Chicago, IL"
  },
  {
    id: 2,
    title: "Harmony Residence",
    category: "Residential",
    description: "A modern family home designed to blend seamlessly with its natural surroundings while maximizing natural light and views.",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9",
    location: "Aspen, CO"
  },
  {
    id: 3,
    title: "Echo Valley Cultural Center",
    category: "Cultural",
    description: "A community-focused arts center featuring flexible performance spaces, galleries, and studios in a striking contemporary design.",
    image: "https://images.unsplash.com/photo-1567449303183-ae0d6ed1c15e",
    location: "Portland, OR"
  },
  {
    id: 4,
    title: "Meridian Corporate Campus",
    category: "Commercial",
    description: "A forward-thinking office complex designed to foster collaboration, creativity, and employee wellbeing.",
    image: "https://images.unsplash.com/photo-1545555670-a2d1acb4c672",
    location: "Austin, TX"
  },
  {
    id: 5,
    title: "Serenity Spa & Wellness",
    category: "Hospitality",
    description: "A luxury spa retreat that creates an atmosphere of tranquility through thoughtful material selection and spatial design.",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e",
    location: "Miami, FL"
  },
  {
    id: 6,
    title: "Urban Loft Renovation",
    category: "Residential",
    description: "The transformation of an industrial warehouse into a sophisticated urban dwelling that honors the building's historic character.",
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688",
    location: "New York, NY"
  },
  {
    id: 7,
    title: "Riverfront Public Library",
    category: "Public",
    description: "A modern library designed as a civic landmark, offering flexible learning spaces and stunning views of the adjacent river.",
    image: "https://images.unsplash.com/photo-1568667256549-094345857637",
    location: "Seattle, WA"
  },
  {
    id: 8,
    title: "Solstice Museum Extension",
    category: "Cultural",
    description: "A contemporary addition to a historic museum that creates a dialogue between past and present through contrasting forms.",
    image: "https://images.unsplash.com/photo-1529402880541-865c568d3c2e",
    location: "Boston, MA"
  }
];

const Projects = () => {
  return (
    <PageTransition>
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-5xl lg:text-6xl font-display font-medium leading-tight mb-6"
            >
              Our Projects
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl text-muted-foreground max-w-2xl mx-auto"
            >
              Explore our portfolio of innovative designs that transform spaces and enhance lives.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="container-section">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <Link to={`/projects/${project.id}`} className="block">
                <div className="relative overflow-hidden rounded-2xl mb-4">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-[300px] object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                  <div className="absolute bottom-0 left-0 p-6 text-white">
                    <p className="text-sm font-medium text-white/80 mb-1">{project.category}</p>
                    <h3 className="text-xl font-medium">{project.title}</h3>
                    <p className="text-sm text-white/70">{project.location}</p>
                  </div>
                </div>
                <p className="text-muted-foreground line-clamp-2">{project.description}</p>
                <div className="mt-4 inline-flex items-center text-primary font-medium opacity-0 transform translate-y-2 transition-all group-hover:opacity-100 group-hover:translate-y-0">
                  View Project <ChevronRight className="ml-1 h-4 w-4" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container-section">
        <div className="bg-primary text-primary-foreground rounded-3xl overflow-hidden">
          <div className="py-16 px-8 md:px-16 text-center max-w-3xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl font-display font-medium mb-6"
            >
              Have a Project in Mind?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-lg text-primary-foreground/80 mb-8"
            >
              Our team is ready to bring your vision to life. Let's discuss how we can create something extraordinary together.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-wrap gap-4 justify-center"
            >
              <Button asChild size="lg" className="rounded-full bg-white text-primary hover:bg-white/90">
                <Link to="/contact">
                  Start Your Project <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default Projects;
