
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { motion } from "framer-motion";
import { Instagram, Twitter, Linkedin, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-section pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          {/* Company Info */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="md:col-span-2"
          >
            <Link to="/" className="inline-block mb-6">
              <h2 className="text-2xl font-display tracking-tighter font-medium text-white">
                ArchiStudio
              </h2>
            </Link>
            <p className="mb-6 max-w-md text-primary-foreground/80">
              Creating thoughtful, sustainable architectural solutions that transform spaces and enhance lives. Let's build something extraordinary together.
            </p>
            <div className="flex space-x-4">
              <Button size="icon" variant="outline" className="rounded-full h-10 w-10 border-primary-foreground/20 hover:border-primary-foreground">
                <Instagram size={18} className="text-primary-foreground" />
                <span className="sr-only">Instagram</span>
              </Button>
              <Button size="icon" variant="outline" className="rounded-full h-10 w-10 border-primary-foreground/20 hover:border-primary-foreground">
                <Twitter size={18} className="text-primary-foreground" />
                <span className="sr-only">Twitter</span>
              </Button>
              <Button size="icon" variant="outline" className="rounded-full h-10 w-10 border-primary-foreground/20 hover:border-primary-foreground">
                <Linkedin size={18} className="text-primary-foreground" />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </div>
          </motion.div>

          {/* Links */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-medium mb-6">Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/services" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Services</Link>
              </li>
              <li>
                <Link to="/projects" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Projects</Link>
              </li>
              <li>
                <Link to="/blog" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Blog</Link>
              </li>
              <li>
                <Link to="/contact" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Contact</Link>
              </li>
              <li>
                <Link to="/login" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Client Login</Link>
              </li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-medium mb-6">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={18} className="mr-3 mt-1 text-primary-foreground/80" />
                <span className="text-primary-foreground/80">123 Design Street<br />New York, NY 10001</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-3 text-primary-foreground/80" />
                <span className="text-primary-foreground/80">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-3 text-primary-foreground/80" />
                <span className="text-primary-foreground/80">info@archistudio.com</span>
              </li>
            </ul>
          </motion.div>
        </div>

        <Separator className="my-8 bg-primary-foreground/20" />
        
        <div className="flex flex-col md:flex-row justify-between items-center text-primary-foreground/60 text-sm">
          <p>© {currentYear} ArchiStudio. All rights reserved.</p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <Link to="/privacy" className="hover:text-primary-foreground transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-primary-foreground transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
