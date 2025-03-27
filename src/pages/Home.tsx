
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ChevronRight, Award, Users, Building, Lightbulb } from "lucide-react";
import PageTransition from "@/components/PageTransition";
import SectionHeading from "@/components/SectionHeading";

const Home = () => {
  return (
    <PageTransition>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1487958449943-2429e8be8625')] bg-cover bg-center">
          <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-medium text-white leading-tight mb-6">
              Transforming Spaces,<br />Inspiring Lives
            </h1>
            <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-2xl">
              Award-winning architecture firm crafting innovative, sustainable design solutions for visionary clients worldwide.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="rounded-full">
                <Link to="/projects">
                  Explore Our Work <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full bg-transparent text-white border-white/30 hover:bg-white/10 hover:text-white">
                <Link to="/contact">Connect With Us</Link>
              </Button>
            </div>
          </motion.div>
        </div>
        
        <div className="absolute bottom-10 left-0 right-0 flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.5, 
              delay: 1.2,
              repeat: Infinity,
              repeatType: "reverse",
              repeatDelay: 0.5
            }}
          >
            <svg 
              width="40" 
              height="40" 
              viewBox="0 0 24 24" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              className="text-white"
            >
              <path 
                d="M12 5V19M12 19L19 12M12 19L5 12" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            </svg>
          </motion.div>
        </div>
      </section>
      
      {/* About Preview Section */}
      <section className="container-section">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-display tracking-tight font-medium mb-6">
              Your Vision, Our Expertise
            </h2>
            <p className="text-muted-foreground mb-6">
              Founded in 2005, ArchiStudio has grown into an internationally recognized design practice known for creating spaces that seamlessly blend aesthetics, functionality, and sustainability.
            </p>
            <p className="text-muted-foreground mb-8">
              Our team of award-winning architects, designers, and planners brings a wealth of expertise and creative thinking to every project, whether it's a private residence, commercial development, or public space.
            </p>
            <Button asChild variant="outline" className="rounded-full">
              <Link to="/about">
                Learn More About Us <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <img 
              src="https://images.unsplash.com/photo-1600607687644-c7171b62ccd1" 
              alt="Architects discussing project" 
              className="rounded-2xl shadow-2xl w-full h-auto object-cover"
            />
            <div className="absolute -bottom-8 -left-8 bg-white p-4 md:p-6 rounded-xl shadow-lg">
              <div className="grid grid-cols-2 gap-4 text-center">
                <div className="border-r border-b border-gray-100 p-2">
                  <p className="text-3xl md:text-4xl font-display font-medium">18+</p>
                  <p className="text-muted-foreground text-sm">Years</p>
                </div>
                <div className="border-b border-gray-100 p-2">
                  <p className="text-3xl md:text-4xl font-display font-medium">200+</p>
                  <p className="text-muted-foreground text-sm">Projects</p>
                </div>
                <div className="border-r border-gray-100 p-2">
                  <p className="text-3xl md:text-4xl font-display font-medium">15+</p>
                  <p className="text-muted-foreground text-sm">Awards</p>
                </div>
                <div className="p-2">
                  <p className="text-3xl md:text-4xl font-display font-medium">40+</p>
                  <p className="text-muted-foreground text-sm">Experts</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Services Preview */}
      <section className="bg-secondary py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Our Services"
            subtitle="From initial concept to final construction, we provide comprehensive architectural services tailored to your unique vision and needs."
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Building,
                title: "Architectural Design",
                description: "Comprehensive design services for new construction projects of all scales."
              },
              {
                icon: Lightbulb,
                title: "Interior Design",
                description: "Creating functional, beautiful interior spaces that reflect your style and needs."
              },
              {
                icon: Users,
                title: "Urban Planning",
                description: "Thoughtful planning solutions for communities, cities, and public spaces."
              },
              {
                icon: Award,
                title: "Sustainable Design",
                description: "Eco-friendly architecture that minimizes environmental impact."
              }
            ].map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-medium mb-2">{service.title}</h3>
                <p className="text-muted-foreground mb-4">{service.description}</p>
                <Link 
                  to="/services" 
                  className="inline-flex items-center text-primary font-medium hover:underline"
                >
                  Learn more <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Button asChild variant="outline" size="lg" className="rounded-full">
              <Link to="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Featured Projects */}
      <section className="container-section">
        <SectionHeading
          title="Featured Projects"
          subtitle="Explore our portfolio of award-winning designs and innovative architectural solutions."
          centered
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Azure Skyline Tower",
              category: "Commercial",
              image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab"
            },
            {
              title: "Harmony Residence",
              category: "Residential",
              image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9"
            },
            {
              title: "Echo Valley Cultural Center",
              category: "Cultural",
              image: "https://images.unsplash.com/photo-1567449303183-ae0d6ed1c15e"
            }
          ].map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl"
            >
              <div className="aspect-w-4 aspect-h-3">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-[300px] object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-70 transition-opacity group-hover:opacity-90" />
              <div className="absolute bottom-0 left-0 p-6 text-white">
                <p className="text-sm font-medium text-white/70 mb-1">{project.category}</p>
                <h3 className="text-xl font-medium mb-2">{project.title}</h3>
                <Link 
                  to={`/projects/${index + 1}`} 
                  className="inline-flex items-center text-white font-medium opacity-0 transform translate-y-2 transition-all group-hover:opacity-100 group-hover:translate-y-0"
                >
                  View Project <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button asChild size="lg" className="rounded-full">
            <Link to="/projects">Explore All Projects</Link>
          </Button>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="bg-primary text-primary-foreground py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="What Our Clients Say"
            subtitle="We pride ourselves on building lasting relationships with our clients through exceptional service and results."
            centered
            className="text-primary-foreground"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: "Working with ArchiStudio was a transformative experience. They turned our vision into a stunning reality that exceeded all expectations.",
                author: "Emma Thompson",
                role: "Harmony Residence Client"
              },
              {
                quote: "Their attention to detail and innovative approach to sustainable design made all the difference in our corporate headquarters project.",
                author: "Michael Chen",
                role: "CEO, Horizon Innovations"
              },
              {
                quote: "ArchiStudio combines vision, technical expertise, and flawless execution. They are true partners in the design process.",
                author: "Sarah Johnson",
                role: "Director, Echo Valley Cultural Center"
              }
            ].map((testimonial, index) => (
              <motion.div
                key={testimonial.author}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20"
              >
                <div className="mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg 
                      key={i} 
                      className="w-5 h-5 inline-block mr-1 text-yellow-400" 
                      fill="currentColor" 
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="mb-4 text-primary-foreground/80 italic">"{testimonial.quote}"</p>
                <div>
                  <p className="font-medium">{testimonial.author}</p>
                  <p className="text-sm text-primary-foreground/60">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="container-section">
        <div className="relative rounded-3xl overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1503387762-592deb58ef4e')] bg-cover bg-center">
            <div className="absolute inset-0 bg-black/60 backdrop-blur-[1px]" />
          </div>
          
          <div className="relative z-10 py-16 md:py-24 px-8 md:px-16 text-center text-white">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl lg:text-5xl font-display font-medium mb-4"
            >
              Let's Create Something Extraordinary
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-8"
            >
              Ready to transform your space? Contact us today to discuss your project and discover how we can bring your vision to life.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Button asChild size="lg" className="rounded-full">
                <Link to="/contact">Get in Touch</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default Home;
