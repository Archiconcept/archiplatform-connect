
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft, MapPin, Calendar, User, ChevronRight } from "lucide-react";
import PageTransition from "@/components/PageTransition";

// Sample project data
const projects = [
  {
    id: "1",
    title: "Azure Skyline Tower",
    category: "Commercial",
    description: 
      "A 32-story mixed-use tower featuring innovative sustainability features and a distinctive silhouette on the city skyline. The project combines office spaces, luxury residences, and retail in a seamless vertical community.",
    fullDescription: 
      "The Azure Skyline Tower represents a new paradigm in urban mixed-use development. Rising 32 stories above the city center, this landmark building creates a distinctive presence on the skyline while establishing a new standard for sustainable high-rise design.\n\nThe tower's form is inspired by the fluidity of water, with a gently curving façade that optimizes views and natural light for all occupants. The glass curtain wall incorporates advanced glazing technology that adjusts opacity based on sun exposure, significantly reducing energy consumption.\n\nThe building program includes premium office space on the lower levels, 120 luxury residential units in the middle section, and exclusive penthouse residences with private terraces at the crown. A vibrant retail podium activates the street level, while public sky gardens on levels 15 and 30 provide communal green spaces with spectacular city views.\n\nSustainability features include rainwater harvesting, integrated solar panels, high-efficiency mechanical systems, and a building management system that continuously optimizes energy use. The project achieved LEED Platinum certification and has become a case study in high-performance tall building design.",
    location: "Chicago, IL",
    client: "Horizon Development Group",
    year: "2021",
    size: "450,000 sq ft",
    mainImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab",
    images: [
      "https://images.unsplash.com/photo-1577593980495-a2146629fc79",
      "https://images.unsplash.com/photo-1483366774565-c783b9f70e2c",
      "https://images.unsplash.com/photo-1481026469463-66327c86e544",
      "https://images.unsplash.com/photo-1485627941502-d2e6429a8af0"
    ]
  },
  {
    id: "2",
    title: "Harmony Residence",
    category: "Residential",
    description: 
      "A modern family home designed to blend seamlessly with its natural surroundings while maximizing natural light and views.",
    fullDescription: 
      "Nestled in the foothills with panoramic mountain views, the Harmony Residence embodies the principles of organic architecture through its seamless integration with the natural landscape. The home's design responds directly to the topography, with a series of stepped levels that follow the sloping site.\n\nThe architectural expression balances contemporary minimalism with warm materiality. The exterior combines locally-sourced stone, western red cedar, and expansive glazing that frames the spectacular surroundings. Large overhangs provide shade in summer while allowing low winter sun to warm the interior spaces.\n\nThe open floor plan centers around a double-height living space with a monumental stone fireplace that anchors the home. Floor-to-ceiling windows on three sides dissolve the boundary between indoors and outdoors, while a cantilevered deck extends the living space into the landscape.\n\nPassive solar design principles, a high-performance thermal envelope, and geothermal heating and cooling systems minimize energy consumption. The surrounding landscape design features native plantings that require minimal irrigation and maintenance.\n\nThe result is a home that provides both sanctuary and connection—a peaceful retreat that celebrates its remarkable setting while treading lightly on the land.",
    location: "Aspen, CO",
    client: "Williams Family",
    year: "2019",
    size: "6,200 sq ft",
    mainImage: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9",
    images: [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
      "https://images.unsplash.com/photo-1600210492493-0946911123ea",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde"
    ]
  }
];

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects.find(p => p.id === id) || projects[0]; // Fallback to first project if none found

  return (
    <PageTransition>
      {/* Hero Section */}
      <section className="relative h-[70vh] overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${project.mainImage})` }}>
          <div className="absolute inset-0 bg-black/50 backdrop-blur-[1px]" />
        </div>
        
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-5xl lg:text-6xl font-display font-medium text-white leading-tight mb-6"
            >
              {project.title}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl text-white/80 max-w-2xl mx-auto"
            >
              {project.description}
            </motion.p>
          </div>
        </div>
        
        <div className="absolute top-8 left-8">
          <Button asChild variant="outline" size="sm" className="rounded-full bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/30">
            <Link to="/projects">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Projects
            </Link>
          </Button>
        </div>
      </section>

      {/* Project Details */}
      <section className="container-section">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-display font-medium mb-6"
            >
              About the Project
            </motion.h2>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="space-y-4 text-muted-foreground mb-8"
            >
              {project.fullDescription?.split('\n\n').map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </motion.div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-secondary rounded-xl p-6"
          >
            <h3 className="text-xl font-medium mb-4">Project Details</h3>
            <div className="space-y-4">
              <div>
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 text-primary mr-3 mt-0.5" />
                  <div>
                    <p className="font-medium">Location</p>
                    <p className="text-muted-foreground">{project.location}</p>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex items-start">
                  <User className="h-5 w-5 text-primary mr-3 mt-0.5" />
                  <div>
                    <p className="font-medium">Client</p>
                    <p className="text-muted-foreground">{project.client}</p>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex items-start">
                  <Calendar className="h-5 w-5 text-primary mr-3 mt-0.5" />
                  <div>
                    <p className="font-medium">Completion</p>
                    <p className="text-muted-foreground">{project.year}</p>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex items-start">
                  <svg className="h-5 w-5 text-primary mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5v-4m0 4h-4m4 0l-5-5" />
                  </svg>
                  <div>
                    <p className="font-medium">Size</p>
                    <p className="text-muted-foreground">{project.size}</p>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex items-start">
                  <svg className="h-5 w-5 text-primary mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                  </svg>
                  <div>
                    <p className="font-medium">Category</p>
                    <p className="text-muted-foreground">{project.category}</p>
                  </div>
                </div>
              </div>
            </div>

            <Separator className="my-6" />

            <Link to="/contact">
              <Button className="w-full">
                Discuss a Similar Project <ChevronRight className="ml-1 h-4 w-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Project Gallery */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-display font-medium mb-10 text-center"
          >
            Project Gallery
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {project.images?.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="overflow-hidden rounded-xl"
              >
                <img 
                  src={image} 
                  alt={`${project.title} - Image ${index + 1}`} 
                  className="w-full h-auto object-cover aspect-video hover:scale-105 transition-transform duration-500"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Projects CTA */}
      <section className="container-section">
        <div className="text-center">
          <h2 className="text-3xl font-display font-medium mb-6">Explore More Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Discover our diverse portfolio of architectural works spanning various scales and typologies.
          </p>
          <Button asChild size="lg" className="rounded-full">
            <Link to="/projects">View All Projects</Link>
          </Button>
        </div>
      </section>
    </PageTransition>
  );
};

export default ProjectDetail;
