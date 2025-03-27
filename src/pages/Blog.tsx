
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ChevronRight, Search } from "lucide-react";
import PageTransition from "@/components/PageTransition";
import SectionHeading from "@/components/SectionHeading";

// Sample blog data
const blogPosts = [
  {
    id: 1,
    title: "The Future of Sustainable Architecture",
    excerpt: "Exploring innovative approaches to eco-friendly design and construction in the modern architectural landscape.",
    image: "https://images.unsplash.com/photo-1518005068251-37900150dfca",
    category: "Sustainability",
    author: "Sarah Wong",
    date: "June 15, 2023",
    readTime: "8 min read"
  },
  {
    id: 2,
    title: "Biophilic Design: Connecting Buildings with Nature",
    excerpt: "How incorporating natural elements into architectural design improves well-being and productivity.",
    image: "https://images.unsplash.com/photo-1545329819-3b85a4d24833",
    category: "Design Trends",
    author: "Michael Patel",
    date: "May 28, 2023",
    readTime: "6 min read"
  },
  {
    id: 3,
    title: "Adaptive Reuse: Breathing New Life into Historic Structures",
    excerpt: "The art and challenges of transforming existing buildings for contemporary purposes while honoring their heritage.",
    image: "https://images.unsplash.com/photo-1506335012244-af1a548e916c",
    category: "Preservation",
    author: "David Martinez",
    date: "April 10, 2023",
    readTime: "10 min read"
  },
  {
    id: 4,
    title: "Smart Homes: The Intersection of Architecture and Technology",
    excerpt: "How integrated technology is reshaping residential design and enhancing the way we experience our living spaces.",
    image: "https://images.unsplash.com/photo-1558002038-1055907df827",
    category: "Technology",
    author: "Emma Rodriguez",
    date: "March 22, 2023",
    readTime: "7 min read"
  },
  {
    id: 5,
    title: "The Psychology of Space: How Architecture Affects Mood",
    excerpt: "Exploring the emotional impact of spatial design and how architects can create environments that positively influence well-being.",
    image: "https://images.unsplash.com/photo-1513549767236-45c975562c98",
    category: "Theory",
    author: "Sarah Wong",
    date: "February 15, 2023",
    readTime: "9 min read"
  },
  {
    id: 6,
    title: "Material Innovation in Contemporary Architecture",
    excerpt: "A look at cutting-edge building materials that are expanding design possibilities and improving performance.",
    image: "https://images.unsplash.com/photo-1503387837-b154d5074bd2",
    category: "Materials",
    author: "Michael Patel",
    date: "January 30, 2023",
    readTime: "5 min read"
  }
];

const Blog = () => {
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
              Architectural Insights
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8"
            >
              Explore our perspectives on design, sustainability, and the ever-evolving world of architecture.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="max-w-md mx-auto relative"
            >
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={18} />
              <Input 
                type="search" 
                placeholder="Search articles..." 
                className="pl-10 rounded-full bg-white"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="container-section pb-0">
        <div className="relative overflow-hidden rounded-3xl">
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${blogPosts[0].image})` }}>
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/30" />
          </div>
          
          <div className="relative pt-20 pb-16 md:pt-32 md:pb-24 px-8 md:px-16 max-w-4xl">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-block bg-primary/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium mb-4"
            >
              {blogPosts[0].category}
            </motion.span>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl md:text-4xl lg:text-5xl font-display font-medium text-white mb-6"
            >
              {blogPosts[0].title}
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-white/80 mb-8"
            >
              {blogPosts[0].excerpt}
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap items-center gap-6 mb-8"
            >
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-gray-200 mr-3" />
                <div>
                  <p className="text-white text-sm font-medium">{blogPosts[0].author}</p>
                  <p className="text-white/60 text-xs">{blogPosts[0].date}</p>
                </div>
              </div>
              <div className="text-white/60 text-sm">{blogPosts[0].readTime}</div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Button asChild variant="outline" size="lg" className="rounded-full bg-white text-primary hover:bg-white/90">
                <Link to={`/blog/${blogPosts[0].id}`}>
                  Read Full Article <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Recent Posts */}
      <section className="container-section">
        <SectionHeading
          title="Recent Articles"
          subtitle="Stay up to date with the latest insights from our team of architects and designers."
          centered
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.slice(1).map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <Link to={`/blog/${post.id}`}>
                <div className="relative overflow-hidden rounded-xl mb-4">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="inline-block bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium">
                      {post.category}
                    </span>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>
                
                <h3 className="text-xl font-medium mb-2 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                
                <p className="text-muted-foreground mb-4">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-gray-200 mr-2" />
                  <span className="text-sm font-medium">{post.author}</span>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button variant="outline" size="lg" className="rounded-full">
            Load More Articles
          </Button>
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-secondary py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl font-display font-medium mb-4"
            >
              Stay Inspired
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-lg text-muted-foreground mb-8"
            >
              Subscribe to our newsletter for the latest articles, design trends, and firm news.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
            >
              <Input 
                type="email" 
                placeholder="Enter your email" 
                className="rounded-full flex-1"
              />
              <Button className="rounded-full">
                Subscribe
              </Button>
            </motion.div>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-sm text-muted-foreground mt-4"
            >
              We respect your privacy. Unsubscribe at any time.
            </motion.p>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default Blog;
