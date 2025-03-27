
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ChevronRight, Building, Lightbulb, Users, Award, Compass, Home, Mountain, PenTool } from "lucide-react";
import PageTransition from "@/components/PageTransition";
import SectionHeading from "@/components/SectionHeading";

const Services = () => {
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
              Our Services
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl text-muted-foreground max-w-2xl mx-auto"
            >
              From concept to completion, we offer comprehensive architectural services
              tailored to your unique vision and needs.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Main Services Section */}
      <section className="container-section">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: Building,
              title: "Architectural Design",
              description: "Full-service architectural design for new construction and renovation projects of all scales, from concept development to construction documentation.",
            },
            {
              icon: Lightbulb,
              title: "Interior Design",
              description: "Creating functional, beautiful interior spaces that reflect your style and needs, including space planning, materials selection, and custom furnishings.",
            },
            {
              icon: Users,
              title: "Urban Planning",
              description: "Thoughtful planning solutions for communities, cities, and public spaces that balance aesthetics, functionality, and sustainability.",
            },
            {
              icon: Award,
              title: "Sustainable Design",
              description: "Eco-friendly architecture that minimizes environmental impact through energy efficiency, renewable materials, and innovative green building strategies.",
            },
            {
              icon: Compass,
              title: "Master Planning",
              description: "Comprehensive planning for large-scale developments, campuses, and mixed-use projects that create cohesive, functional environments.",
            },
            {
              icon: Home,
              title: "Residential Design",
              description: "Custom home design and renovation services that transform living spaces to reflect your lifestyle, needs, and aesthetic preferences.",
            },
            {
              icon: Mountain,
              title: "Landscape Integration",
              description: "Seamless integration of architecture with surrounding landscapes to create harmonious indoor-outdoor connections and enhance natural beauty.",
            },
            {
              icon: PenTool,
              title: "3D Visualization",
              description: "Cutting-edge 3D modeling and rendering services that bring your project to life before construction begins, allowing for informed design decisions.",
            },
          ].map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-sm border hover:shadow-md transition-shadow group"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <service.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-medium mb-3">{service.title}</h3>
              <p className="text-muted-foreground mb-4">{service.description}</p>
              <Link
                to="/contact"
                className="inline-flex items-center text-primary font-medium hover:underline"
              >
                Inquire about this service <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-secondary py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Our Design Process"
            subtitle="We follow a collaborative, iterative process to ensure your project exceeds expectations at every stage."
            centered
          />
          
          <div className="relative max-w-4xl mx-auto">
            {/* Process steps */}
            {[
              {
                number: "01",
                title: "Discovery",
                description: "We begin by understanding your vision, needs, constraints, and aspirations through in-depth consultations."
              },
              {
                number: "02",
                title: "Concept Design",
                description: "We explore creative possibilities and develop initial design concepts based on our discovery findings."
              },
              {
                number: "03",
                title: "Development",
                description: "The preferred concept is refined and developed in detail, addressing technical and practical considerations."
              },
              {
                number: "04",
                title: "Documentation",
                description: "We prepare comprehensive construction documents to guide the building process accurately."
              },
              {
                number: "05",
                title: "Construction",
                description: "We oversee the building process to ensure the project is executed according to specifications."
              }
            ].map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex gap-6 mb-12 md:mb-16 relative"
              >
                <div className="flex-none">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-white rounded-full flex items-center justify-center text-xl md:text-2xl font-display font-medium text-primary shadow-sm">
                    {step.number}
                  </div>
                  {index < 4 && (
                    <div className="absolute left-6 md:left-8 top-12 md:top-16 w-px h-12 md:h-16 bg-primary/20"></div>
                  )}
                </div>
                <div className="flex-1 pt-2">
                  <h3 className="text-xl font-medium mb-2">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container-section">
        <div className="bg-primary text-primary-foreground rounded-3xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-3xl md:text-4xl font-display font-medium mb-6"
              >
                Ready to Start Your Project?
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-lg text-primary-foreground/80 mb-8"
              >
                Contact us to discuss your ideas and discover how our services can bring your vision to life. We're here to answer any questions you may have.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Button asChild size="lg" className="rounded-full bg-white text-primary hover:bg-white/90">
                  <Link to="/contact">
                    Schedule a Consultation <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </motion.div>
            </div>
            <div className="hidden lg:block relative">
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
                alt="Modern architectural design"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default Services;
