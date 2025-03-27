
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import PageTransition from "@/components/PageTransition";
import SectionHeading from "@/components/SectionHeading";

const About = () => {
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
              About ArchiStudio
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl text-muted-foreground max-w-2xl mx-auto"
            >
              Creating innovative, sustainable architectural solutions since 2005. 
              We transform spaces and enhance lives through thoughtful design.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="container-section">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-display tracking-tight font-medium mb-6">
              Our Story
            </h2>
            <p className="text-muted-foreground mb-6">
              ArchiStudio was founded in 2005 by a group of visionary architects who shared a passion for creating spaces that seamlessly blend aesthetics, functionality, and sustainability.
            </p>
            <p className="text-muted-foreground mb-6">
              What began as a small team working on local residential projects has grown into an internationally recognized design practice with a diverse portfolio spanning commercial, residential, cultural, and public spaces.
            </p>
            <p className="text-muted-foreground mb-6">
              Throughout our journey, we've remained committed to our founding principles: putting clients first, pushing creative boundaries, embracing sustainable practices, and delivering excellence in every detail.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <img 
              src="https://images.unsplash.com/photo-1626897227692-0ec3cba5f816" 
              alt="Architects at work" 
              className="rounded-2xl shadow-xl w-full h-auto object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Our Values */}
      <section className="bg-secondary py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Our Values"
            subtitle="The core principles that guide our work and define our approach to architecture and design."
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Innovation",
                description: "We push boundaries and explore new possibilities in architectural design, materials, and technology."
              },
              {
                title: "Sustainability",
                description: "Environmental responsibility is integrated into every project, from concept to completion."
              },
              {
                title: "Collaboration",
                description: "We believe the best results come from true partnership with our clients and project teams."
              },
              {
                title: "Excellence",
                description: "We are committed to the highest standards of quality in design, service, and execution."
              },
              {
                title: "Integrity",
                description: "Honesty, transparency, and ethical practice form the foundation of all our relationships."
              },
              {
                title: "Human-centered",
                description: "We design for people, creating spaces that enhance well-being and elevate the human experience."
              }
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-sm"
              >
                <h3 className="text-xl font-medium mb-4">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Preview */}
      <section className="container-section">
        <SectionHeading
          title="Our Team"
          subtitle="Meet the creative minds behind ArchiStudio's award-winning designs."
          centered
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              name: "David Martinez",
              role: "Principal Architect",
              image: "https://images.unsplash.com/photo-1560250097-0b93528c311a"
            },
            {
              name: "Sarah Wong",
              role: "Design Director",
              image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2"
            },
            {
              name: "Michael Patel",
              role: "Sustainability Lead",
              image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"
            },
            {
              name: "Emma Rodriguez",
              role: "Interior Design Lead",
              image: "https://images.unsplash.com/photo-1580489944761-15a19d654956"
            }
          ].map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-2xl mb-4">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-[320px] object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                  <div className="text-white">
                    <h3 className="text-xl font-medium">{member.name}</h3>
                    <p className="text-white/80">{member.role}</p>
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-medium">{member.name}</h3>
              <p className="text-muted-foreground">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary text-primary-foreground py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-display font-medium mb-6"
          >
            Ready to Transform Your Space?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-8"
          >
            Let's create something extraordinary together. Contact our team to discuss your vision.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap gap-4 justify-center"
          >
            <Button asChild size="lg" variant="outline" className="rounded-full bg-transparent border-white/30 text-white hover:bg-white/10">
              <Link to="/services">Explore Our Services</Link>
            </Button>
            <Button asChild size="lg" className="rounded-full bg-white text-primary hover:bg-white/90">
              <Link to="/contact">
                Get in Touch <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
};

export default About;
