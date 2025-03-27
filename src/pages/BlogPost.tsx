
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft, Share2, ChevronRight, ChevronLeft } from "lucide-react";
import PageTransition from "@/components/PageTransition";

// Sample blog post data
const blogPosts = [
  {
    id: "1",
    title: "The Future of Sustainable Architecture",
    excerpt: "Exploring innovative approaches to eco-friendly design and construction in the modern architectural landscape.",
    content: `
      <p>Sustainable architecture has evolved significantly over the past decade, moving beyond simple energy-efficient measures to encompass a holistic approach to environmental responsibility, social equity, and economic viability.</p>
      
      <h2>Beyond Green Buildings</h2>
      
      <p>Today's sustainable design strategies extend far beyond the building envelope. Architects are now considering the entire lifecycle of a structure, from the sourcing and embodied carbon of building materials to the long-term operational efficiency and eventual disassembly or adaptability of the building components.</p>
      
      <p>This cradle-to-cradle approach represents a paradigm shift in how we conceptualize the built environment, encouraging circular economy principles where materials maintain their value and utility over multiple lifecycles.</p>
      
      <h2>Regenerative Design</h2>
      
      <p>Perhaps the most exciting development in sustainable architecture is the move toward regenerative design—buildings that not only minimize their negative environmental impact but actively contribute to healing ecological systems.</p>
      
      <p>Regenerative buildings might generate more energy than they consume, purify the surrounding air and water, provide habitat for native species, or sequester carbon through innovative material choices. Rather than being static objects, these structures become dynamic participants in their ecosystems.</p>
      
      <h2>Human-Centered Sustainability</h2>
      
      <p>As we advance sustainable design practices, we're also witnessing increased attention to the human experience. Biophilic design principles that connect occupants with natural elements have proven benefits for health, productivity, and well-being.</p>
      
      <p>Sustainable buildings are increasingly recognized not just for their environmental performance but for creating spaces that support human flourishing—addressing factors like indoor air quality, natural lighting, thermal comfort, acoustic performance, and connection to community.</p>
      
      <h2>Technology as Enabler</h2>
      
      <p>Technological innovations are accelerating our ability to create sustainable buildings. Building information modeling (BIM) allows for sophisticated energy analysis during the design phase. Smart building systems optimize resource use in real-time. Digital fabrication reduces waste in construction processes.</p>
      
      <p>These tools, combined with emerging materials like carbon-negative concrete alternatives and mass timber, are expanding the possibilities for sustainable construction while reducing costs and increasing performance.</p>
      
      <h2>Looking Ahead</h2>
      
      <p>The future of sustainable architecture lies in the integration of these approaches—circular economy principles, regenerative design strategies, human-centered considerations, and technological innovations—into a coherent whole.</p>
      
      <p>As climate change demands increasingly urgent action, the architecture profession has both a responsibility and an opportunity to demonstrate how the built environment can be a solution rather than a problem—creating beautiful, functional spaces that contribute to environmental health, support human communities, and adapt to changing conditions over time.</p>
    `,
    image: "https://images.unsplash.com/photo-1518005068251-37900150dfca",
    category: "Sustainability",
    author: "Sarah Wong",
    authorRole: "Design Director",
    authorImage: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2",
    date: "June 15, 2023",
    readTime: "8 min read"
  },
  {
    id: "2",
    title: "Biophilic Design: Connecting Buildings with Nature",
    excerpt: "How incorporating natural elements into architectural design improves well-being and productivity.",
    content: `
      <p>In an increasingly urbanized world, many people spend up to 90% of their time indoors. This disconnection from nature has profound implications for our health and well-being. Biophilic design—an approach that seeks to connect building occupants more closely with nature—offers a compelling solution to this modern challenge.</p>
      
      <h2>The Science Behind Biophilia</h2>
      
      <p>The concept of biophilia, introduced by biologist E.O. Wilson, suggests that humans possess an innate tendency to seek connections with nature. This evolutionary bond with the natural world explains why we find natural settings restorative and why exposure to nature can reduce stress, improve cognitive function, and accelerate healing.</p>
      
      <p>Research consistently demonstrates that incorporating natural elements into built environments can significantly impact human health metrics. Studies have shown reduced heart rates and blood pressure, improved attention and productivity, and enhanced creativity in spaces with natural features.</p>
      
      <h2>Key Elements of Biophilic Design</h2>
      
      <p>Biophilic design typically encompasses three key dimensions:</p>
      
      <p><strong>1. Direct Nature Experience</strong>: The inclusion of actual natural elements within a building—plants, water features, natural light, fresh air, and natural materials. Living walls, interior gardens, and strategically placed windows that frame natural views all provide direct nature experiences.</p>
      
      <p><strong>2. Indirect Nature References</strong>: The representation of nature through materials, colors, patterns, and shapes that evoke natural forms. This might include wood grain, organic patterns in flooring or textiles, nature-inspired color palettes, or biomimetic furniture design.</p>
      
      <p><strong>3. Spatial Experiences</strong>: Architectural configurations that replicate spatial relationships found in nature, such as prospect (open views) and refuge (sheltered spaces), mystery (partially revealed information that encourages exploration), and risk/peril (controlled exposure to perceived danger that creates exhilaration).</p>
      
      <h2>Applications Across Building Types</h2>
      
      <p>The principles of biophilic design can be applied across virtually any building typology, though implementation strategies may vary:</p>
      
      <p>In workplaces, biophilic elements have been linked to 8% increased productivity and 13% higher levels of wellbeing. Tech companies like Amazon have embraced this research, incorporating thousands of plants and trees within their Seattle headquarters' spherical conservatories.</p>
      
      <p>Healthcare facilities have found that patients with views of nature require less pain medication and exhibit faster recovery times. Hospitals are increasingly incorporating healing gardens, abundant natural light, and nature-inspired artwork.</p>
      
      <p>Educational spaces with biophilic features show improved student performance and reduced absenteeism. Schools are exploring outdoor classrooms, natural materials, and dynamic daylight to enhance learning environments.</p>
      
      <h2>The Future of Biophilic Design</h2>
      
      <p>As we face growing environmental challenges and increasing urbanization, biophilic design offers a pathway to create buildings that support human health while fostering appreciation for the natural world. By thoughtfully integrating nature into our built environments, architects can create spaces that not only minimize environmental impact but actively contribute to human flourishing.</p>
      
      <p>The most successful biophilic design goes beyond superficial application of natural elements to create meaningful, contextual connections that respond to local ecology and culture. When done well, these spaces tell an environmental story, creating lasting bonds between people, place, and the natural systems that sustain us.</p>
    `,
    image: "https://images.unsplash.com/photo-1545329819-3b85a4d24833",
    category: "Design Trends",
    author: "Michael Patel",
    authorRole: "Sustainability Lead",
    authorImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
    date: "May 28, 2023",
    readTime: "6 min read"
  }
];

const BlogPost = () => {
  const { id } = useParams();
  const post = blogPosts.find(p => p.id === id) || blogPosts[0]; // Fallback to first post if none found
  
  return (
    <PageTransition>
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="mb-12">
              <Button asChild variant="outline" size="sm" className="rounded-full mb-8">
                <Link to="/blog">
                  <ArrowLeft className="mr-2 h-4 w-4" /> Back to Blog
                </Link>
              </Button>
              
              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                <span className="inline-block bg-primary/10 px-3 py-1 rounded-full text-primary text-xs font-medium">
                  {post.category}
                </span>
                <span>{post.date}</span>
                <span>•</span>
                <span>{post.readTime}</span>
              </div>
              
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-3xl md:text-4xl lg:text-5xl font-display font-medium leading-tight mb-6"
              >
                {post.title}
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-xl text-muted-foreground"
              >
                {post.excerpt}
              </motion.p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-4xl mx-auto"
          >
            <div className="rounded-2xl overflow-hidden">
              <img 
                src={post.image} 
                alt={post.title} 
                className="w-full h-auto object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Author Sidebar */}
            <motion.aside
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="lg:col-span-1 order-2 lg:order-1"
            >
              <div className="sticky top-32">
                <div className="mb-8">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-20 h-20 rounded-full overflow-hidden mb-4">
                      <img 
                        src={post.authorImage} 
                        alt={post.author} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="font-medium mb-1">{post.author}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{post.authorRole}</p>
                    <Button variant="outline" size="sm" className="w-full rounded-full">
                      View Profile
                    </Button>
                  </div>
                </div>
                
                <Separator className="my-8" />
                
                <div className="mb-8">
                  <h4 className="text-sm font-medium mb-4">Share This Article</h4>
                  <div className="flex justify-center space-x-4">
                    <Button variant="outline" size="icon" className="rounded-full">
                      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                      </svg>
                      <span className="sr-only">Share on Twitter</span>
                    </Button>
                    <Button variant="outline" size="icon" className="rounded-full">
                      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                      </svg>
                      <span className="sr-only">Share on Facebook</span>
                    </Button>
                    <Button variant="outline" size="icon" className="rounded-full">
                      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z"></path>
                      </svg>
                      <span className="sr-only">Share on LinkedIn</span>
                    </Button>
                    <Button variant="outline" size="icon" className="rounded-full">
                      <Share2 className="h-4 w-4" />
                      <span className="sr-only">Copy link</span>
                    </Button>
                  </div>
                </div>
              </div>
            </motion.aside>
            
            {/* Article Content */}
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="lg:col-span-3 order-1 lg:order-2"
            >
              <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: post.content }} />
              
              <Separator className="my-12" />
              
              <div className="flex flex-col sm:flex-row sm:justify-between gap-6">
                <Button asChild variant="outline" className="rounded-full">
                  <Link to={`/blog/${Number(post.id) > 1 ? Number(post.id) - 1 : 1}`}>
                    <ChevronLeft className="mr-2 h-4 w-4" /> Previous Article
                  </Link>
                </Button>
                <Button asChild variant="outline" className="rounded-full">
                  <Link to={`/blog/${Number(post.id) + 1 <= blogPosts.length ? Number(post.id) + 1 : post.id}`}>
                    Next Article <ChevronRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </motion.article>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="bg-secondary py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Related Articles"
            subtitle="Explore more insights from our team of architects and designers."
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts.filter(p => p.id !== post.id).slice(0, 3).map((relatedPost, index) => (
              <motion.article
                key={relatedPost.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <Link to={`/blog/${relatedPost.id}`}>
                  <div className="relative overflow-hidden rounded-xl mb-4">
                    <img 
                      src={relatedPost.image} 
                      alt={relatedPost.title} 
                      className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="inline-block bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium">
                        {relatedPost.category}
                      </span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-medium mb-2 group-hover:text-primary transition-colors">
                    {relatedPost.title}
                  </h3>
                  
                  <p className="text-muted-foreground">
                    {relatedPost.excerpt}
                  </p>
                </Link>
              </motion.article>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Button asChild size="lg" className="rounded-full">
              <Link to="/blog">View All Articles</Link>
            </Button>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default BlogPost;
