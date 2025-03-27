
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  LayoutDashboard,
  FileText,
  Image,
  MessageSquare,
  Calendar,
  Settings,
  LogOut,
  ChevronDown,
  Menu,
  X
} from "lucide-react";
import { motion } from "framer-motion";

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { icon: LayoutDashboard, label: "Dashboard", active: true },
    { icon: FileText, label: "Documents", active: false },
    { icon: Image, label: "Project Gallery", active: false },
    { icon: MessageSquare, label: "Messages", active: false },
    { icon: Calendar, label: "Schedule", active: false },
    { icon: Settings, label: "Settings", active: false },
  ];

  return (
    <div className="h-screen flex overflow-hidden bg-gray-50">
      {/* Sidebar for desktop */}
      <motion.aside
        initial={{ width: 280 }}
        animate={{ width: isSidebarOpen ? 280 : 80 }}
        transition={{ duration: 0.3 }}
        className={`hidden md:flex flex-col bg-white border-r`}
      >
        <div className="flex items-center justify-between h-16 px-4 border-b">
          {isSidebarOpen ? (
            <Link to="/" className="font-display text-xl font-medium">
              <span className="text-primary">Archi</span>Studio
            </Link>
          ) : (
            <Link to="/" className="font-display text-xl font-medium">
              <span className="text-primary">A</span>
            </Link>
          )}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            aria-label={isSidebarOpen ? "Collapse sidebar" : "Expand sidebar"}
          >
            <ChevronDown
              className={`h-5 w-5 transition-transform ${
                !isSidebarOpen ? "rotate-90" : ""
              }`}
            />
          </Button>
        </div>

        <div className="flex-1 overflow-y-auto py-4">
          <nav className="space-y-1 px-3">
            {navItems.map((item) => (
              <a
                key={item.label}
                href="#"
                className={`flex items-center px-3 py-3 text-sm font-medium rounded-md transition-colors ${
                  item.active
                    ? "bg-primary text-white"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                <item.icon
                  className={`${isSidebarOpen ? "mr-3" : ""} h-5 w-5 ${
                    item.active ? "text-white" : "text-gray-500"
                  }`}
                />
                {isSidebarOpen && <span>{item.label}</span>}
              </a>
            ))}
          </nav>
        </div>

        <div className="p-4 border-t">
          <div className="flex items-center">
            <Avatar className="h-9 w-9">
              <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            {isSidebarOpen && (
              <div className="ml-3">
                <p className="text-sm font-medium">John Doe</p>
                <p className="text-xs text-muted-foreground">Client</p>
              </div>
            )}
          </div>
          <div className="mt-4">
            <Button
              variant="outline"
              size={isSidebarOpen ? "default" : "icon"}
              asChild
              className="w-full"
            >
              <Link to="/">
                <LogOut className={`h-4 w-4 ${isSidebarOpen ? "mr-2" : ""}`} />
                {isSidebarOpen && "Sign Out"}
              </Link>
            </Button>
          </div>
        </div>
      </motion.aside>

      {/* Mobile sidebar */}
      <div className="md:hidden">
        {isMobileMenuOpen && (
          <div
            className="fixed inset-0 bg-black/50 z-40"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}

        <div
          className={`fixed top-0 left-0 bottom-0 w-72 bg-white z-50 transform transition-transform duration-300 ease-in-out ${
            isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between h-16 px-4 border-b">
            <Link
              to="/"
              className="font-display text-xl font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <span className="text-primary">Archi</span>Studio
            </Link>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <X className="h-5 w-5" />
            </Button>
          </div>

          <div className="overflow-y-auto py-4">
            <nav className="space-y-1 px-3">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href="#"
                  className={`flex items-center px-3 py-3 text-sm font-medium rounded-md transition-colors ${
                    item.active
                      ? "bg-primary text-white"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <item.icon
                    className={`mr-3 h-5 w-5 ${
                      item.active ? "text-white" : "text-gray-500"
                    }`}
                  />
                  <span>{item.label}</span>
                </a>
              ))}
            </nav>
          </div>

          <div className="p-4 border-t">
            <div className="flex items-center">
              <Avatar className="h-9 w-9">
                <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <div className="ml-3">
                <p className="text-sm font-medium">John Doe</p>
                <p className="text-xs text-muted-foreground">Client</p>
              </div>
            </div>
            <div className="mt-4">
              <Button variant="outline" asChild className="w-full">
                <Link to="/">
                  <LogOut className="h-4 w-4 mr-2" />
                  Sign Out
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top header */}
        <header className="bg-white shadow-sm z-10">
          <div className="px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16 items-center">
              <div className="flex items-center">
                <button
                  type="button"
                  className="md:hidden text-gray-500 hover:text-gray-600 focus:outline-none"
                  onClick={() => setIsMobileMenuOpen(true)}
                >
                  <Menu className="h-6 w-6" />
                </button>
                <h1 className="ml-3 md:ml-0 text-xl font-medium">Dashboard</h1>
              </div>
              <div className="flex items-center">
                <Avatar className="h-8 w-8 md:hidden">
                  <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
              </div>
            </div>
          </div>
        </header>

        {/* Main dashboard content */}
        <main className="flex-1 overflow-y-auto bg-gray-50 p-4 sm:p-6 lg:p-8">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {/* Welcome card */}
            <div className="col-span-full bg-white rounded-lg shadow-sm p-6 border">
              <h2 className="text-lg font-medium mb-2">Welcome back, John!</h2>
              <p className="text-muted-foreground">
                Here's an overview of your Harmony Residence project.
              </p>
            </div>

            {/* Project status */}
            <div className="bg-white rounded-lg shadow-sm p-6 border">
              <h3 className="font-medium mb-4">Project Status</h3>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm">Design Phase</span>
                    <span className="text-sm font-medium">100%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-green-500 h-2 rounded-full w-full"></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm">Construction</span>
                    <span className="text-sm font-medium">60%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full w-[60%]"></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm">Interior Finishes</span>
                    <span className="text-sm font-medium">25%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-yellow-500 h-2 rounded-full w-1/4"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Recent documents */}
            <div className="bg-white rounded-lg shadow-sm p-6 border">
              <h3 className="font-medium mb-4">Recent Documents</h3>
              <div className="space-y-4">
                {["Floor Plans.pdf", "Elevation Drawing v2.pdf", "Material Specifications.docx"].map(
                  (doc) => (
                    <div key={doc} className="flex items-center">
                      <FileText className="h-5 w-5 text-muted-foreground mr-3" />
                      <span className="text-sm truncate">{doc}</span>
                    </div>
                  )
                )}
              </div>
              <div className="mt-4">
                <Button variant="outline" size="sm" className="w-full">
                  View All Documents
                </Button>
              </div>
            </div>

            {/* Upcoming meetings */}
            <div className="bg-white rounded-lg shadow-sm p-6 border">
              <h3 className="font-medium mb-4">Upcoming Meetings</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-sm font-medium">Site Visit</p>
                  <p className="text-xs text-muted-foreground">
                    Tomorrow, 10:00 AM
                  </p>
                </div>
                <div>
                  <p className="text-sm font-medium">Interior Design Review</p>
                  <p className="text-xs text-muted-foreground">
                    June 15, 2:00 PM
                  </p>
                </div>
              </div>
              <div className="mt-4">
                <Button variant="outline" size="sm" className="w-full">
                  View Calendar
                </Button>
              </div>
            </div>
          </div>

          <div className="mt-6">
            <div className="bg-white rounded-lg shadow-sm p-6 border">
              <h3 className="font-medium mb-4">Project Gallery</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9",
                  "https://images.unsplash.com/photo-1600607687644-c7171b62ccd1",
                  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
                  "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3"
                ].map((img, i) => (
                  <div key={i} className="aspect-w-1 aspect-h-1">
                    <img
                      src={img}
                      alt={`Project progress ${i + 1}`}
                      className="rounded-lg object-cover w-full h-32"
                    />
                  </div>
                ))}
              </div>
              <div className="mt-4">
                <Button variant="outline" size="sm" className="w-full">
                  View All Photos
                </Button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
