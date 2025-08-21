import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Calendar, 
  Trophy, 
  Lightbulb, 
  Users, 
  Code, 
  Brain,
  Rocket,
  Phone,
  Mail,
  MapPin,
  Check,
  Star,
  Menu,
  Instagram,
  Twitter,
  Linkedin,
  GraduationCap
} from "lucide-react";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in-up');
        }
      });
    }, observerOptions);

    document.querySelectorAll('.fade-on-scroll').forEach(section => {
      observer.observe(section);
    });

    // Navbar background on scroll
    const handleScroll = () => {
      const navbar = document.querySelector('nav');
      if (navbar) {
        if (window.scrollY > 50) {
          navbar.style.background = 'rgba(15, 15, 35, 0.95)';
        } else {
          navbar.style.background = 'rgba(255, 255, 255, 0.1)';
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ 
      behavior: 'smooth' 
    });
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-ai-dark via-ai-darker to-ai-purple text-white font-inter">
      {/* Navigation Bar */}
      <nav className="fixed top-0 w-full z-50 glass-effect transition-all duration-300">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 ai-gradient rounded-lg flex items-center justify-center">
                <Code className="text-white" size={20} />
              </div>
              <span className="text-2xl font-bold text-gradient">Code Vault</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollToSection('home')} className="hover:text-ai-cyan transition-colors duration-300">Home</button>
              <button onClick={() => scrollToSection('about')} className="hover:text-ai-cyan transition-colors duration-300">About</button>
              <button onClick={() => scrollToSection('instructions')} className="hover:text-ai-cyan transition-colors duration-300">Instructions</button>
              <button onClick={() => scrollToSection('contact')} className="hover:text-ai-cyan transition-colors duration-300">Contact</button>
            </div>
            
            <div className="md:hidden">
              <Button 
                variant="ghost" 
                size="sm"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white hover:bg-white/10"
              >
                <Menu size={20} />
              </Button>
            </div>
          </div>
          
          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4">
              <div className="flex flex-col space-y-3">
                <button onClick={() => scrollToSection('home')} className="text-left hover:text-ai-cyan transition-colors duration-300">Home</button>
                <button onClick={() => scrollToSection('about')} className="text-left hover:text-ai-cyan transition-colors duration-300">About</button>
                <button onClick={() => scrollToSection('instructions')} className="text-left hover:text-ai-cyan transition-colors duration-300">Instructions</button>
                <button onClick={() => scrollToSection('contact')} className="text-left hover:text-ai-cyan transition-colors duration-300">Contact</button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 ai-gradient rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-ai-pink rounded-full blur-3xl animate-float-delayed"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-ai-cyan rounded-full blur-3xl animate-float-slow"></div>
        </div>
        
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="animate-fade-in">
            <div className="w-32 h-32 ai-gradient rounded-2xl mx-auto mb-8 flex items-center justify-center animate-glow">
              <Brain className="text-white" size={60} />
            </div>
            
            <h1 className="text-6xl md:text-8xl font-bold mb-6 text-gradient animate-slide-up">
              Code Vault
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 animate-slide-up-delayed">
              Unlock the Future of AI Innovation
            </p>
            
            <div className="text-lg md:text-xl text-ai-cyan mb-12 animate-slide-up-slow">
              <div className="flex items-center justify-center space-x-4 mb-2">
                <Calendar size={20} />
                <span>September 19-20, 2025</span>
              </div>
              <div className="flex items-center justify-center space-x-4">
                <Trophy size={20} />
                <span>Prize Pool: ₹50,000</span>
              </div>
            </div>
            
            <Button 
              onClick={() => scrollToSection('about')} 
              className="ai-gradient px-8 py-4 rounded-full text-white font-semibold text-lg hover:scale-105 transform transition-all duration-300 animate-slide-up-final shadow-2xl"
            >
              Register Now - Limited Seats!
              <Rocket className="ml-2" size={16} />
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 fade-on-scroll">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">About Code Vault</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Join the ultimate 24-hour AI hackathon where innovation meets creativity. Build the future with cutting-edge technology.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="glass-effect border-0 hover:scale-105 transform transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 ai-gradient rounded-xl flex items-center justify-center mb-6 mx-auto">
                  <Lightbulb className="text-white" size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-ai-cyan">Innovation Challenge</h3>
                <p className="text-gray-300">
                  24 hours of intense coding, problem-solving, and AI innovation. Push the boundaries of what's possible with artificial intelligence.
                </p>
              </CardContent>
            </Card>
            
            <Card className="glass-effect border-0 hover:scale-105 transform transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 ai-gradient rounded-xl flex items-center justify-center mb-6 mx-auto">
                  <Users className="text-white" size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-ai-cyan">Team Formation</h3>
                <p className="text-gray-300">
                  Teams of 2-4 members welcome. Individual participants will be matched with teams. Collaboration is key to success.
                </p>
              </CardContent>
            </Card>
            
            <Card className="glass-effect border-0 hover:scale-105 transform transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 ai-gradient rounded-xl flex items-center justify-center mb-6 mx-auto">
                  <Trophy className="text-white" size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-ai-cyan">Prize Pool</h3>
                <p className="text-gray-300">
                  ₹50,000 total prize pool with multiple categories. Winners receive cash prizes, certificates, and exclusive mentorship opportunities.
                </p>
              </CardContent>
            </Card>
          </div>
          
          {/* Registration CTA */}
          <div className="text-center mt-16">
            <Card className="glass-effect border-0 max-w-2xl mx-auto">
              <CardContent className="p-8">
                <h3 className="text-3xl font-bold mb-4 text-gradient">Ready to Code the Future?</h3>
                <p className="text-gray-300 mb-6">
                  Limited seats available. Secure your spot in this premier AI hackathon experience.
                </p>
                <Button className="ai-gradient px-8 py-4 rounded-full text-white font-semibold text-lg hover:scale-105 transform transition-all duration-300 shadow-xl">
                  <Users className="mr-2" size={20} />
                  Register Now - Limited Seats Available!
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Instructions Section */}
      <section id="instructions" className="py-20 fade-on-scroll">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">Event Instructions</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Everything you need to know to participate and excel in Code Vault hackathon.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                number: "1",
                title: "Registration",
                description: "Complete online registration with team details. Individual participants will be assigned to teams during the event.",
                bgColor: "bg-ai-purple"
              },
              {
                number: "2", 
                title: "Check-in",
                description: "Arrive by 9:00 AM on September 19th. Bring valid ID, laptop, chargers, and any development tools you prefer.",
                bgColor: "bg-ai-blue"
              },
              {
                number: "3",
                title: "Team Setup", 
                description: "Finalize teams (2-4 members max). Solo participants will be matched based on skills and interests.",
                bgColor: "bg-ai-pink"
              },
              {
                number: "4",
                title: "Problem Release",
                description: "AI-focused problem statements revealed at 10:00 AM. Choose your challenge and start coding immediately.",
                bgColor: "bg-ai-cyan"
              },
              {
                number: "5",
                title: "Coding Marathon",
                description: "24-hour development phase with mentorship available. Meals, snacks, and refreshments provided throughout.",
                bgColor: "bg-ai-purple"
              },
              {
                number: "6",
                title: "Demo & Judging",
                description: "Submit projects by 9:00 AM on September 20th. Present 5-minute demos to expert judges for evaluation.",
                bgColor: "bg-ai-blue"
              }
            ].map((step, index) => (
              <Card key={index} className="glass-effect border-0 hover:bg-white hover:bg-opacity-20 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className={`w-8 h-8 ${step.bgColor} rounded-full flex items-center justify-center mr-3`}>
                      <span className="text-white font-bold">{step.number}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-ai-cyan">{step.title}</h3>
                  </div>
                  <p className="text-gray-300">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {/* Rules & Guidelines */}
          <div className="mt-16">
            <Card className="glass-effect border-0">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-center text-gradient">Rules & Guidelines</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-lg font-semibold text-ai-cyan mb-3">Allowed Technologies</h4>
                    <ul className="text-gray-300 space-y-2">
                      <li className="flex items-center"><Check className="text-green-400 mr-2" size={16} />Any programming language</li>
                      <li className="flex items-center"><Check className="text-green-400 mr-2" size={16} />Open-source libraries & frameworks</li>
                      <li className="flex items-center"><Check className="text-green-400 mr-2" size={16} />Pre-existing datasets</li>
                      <li className="flex items-center"><Check className="text-green-400 mr-2" size={16} />Cloud services & APIs</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-ai-cyan mb-3">Evaluation Criteria</h4>
                    <ul className="text-gray-300 space-y-2">
                      <li className="flex items-center"><Star className="text-yellow-400 mr-2" size={16} />Innovation & Creativity</li>
                      <li className="flex items-center"><Star className="text-yellow-400 mr-2" size={16} />Technical Implementation</li>
                      <li className="flex items-center"><Star className="text-yellow-400 mr-2" size={16} />Problem-solving Approach</li>
                      <li className="flex items-center"><Star className="text-yellow-400 mr-2" size={16} />Presentation Quality</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 fade-on-scroll">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">Contact Us</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Have questions? Need assistance? Our team is here to help you succeed.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="glass-effect border-0 hover:scale-105 transform transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-ai-blue rounded-xl flex items-center justify-center mb-6 mx-auto">
                  <Mail className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-semibold text-ai-cyan mb-4">Email Support</h3>
                <p className="text-gray-300 mb-4">Get in touch for any queries</p>
                <a href="mailto:codevault@hackathon.com" className="text-ai-cyan hover:text-white transition-colors duration-300">
                  codevault@hackathon.com
                </a>
              </CardContent>
            </Card>
            
            <Card className="glass-effect border-0 hover:scale-105 transform transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-ai-purple rounded-xl flex items-center justify-center mb-6 mx-auto">
                  <Phone className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-semibold text-ai-cyan mb-4">Phone Support</h3>
                <p className="text-gray-300 mb-4">Call us for immediate assistance</p>
                <a href="tel:+919876543210" className="text-ai-cyan hover:text-white transition-colors duration-300">
                  +91 98765 43210
                </a>
              </CardContent>
            </Card>
            
            <Card className="glass-effect border-0 hover:scale-105 transform transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-ai-pink rounded-xl flex items-center justify-center mb-6 mx-auto">
                  <MapPin className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-semibold text-ai-cyan mb-4">Event Location</h3>
                <p className="text-gray-300 mb-4">Main auditorium & labs</p>
                <span className="text-ai-cyan">
                  Tech Campus, Innovation Hub
                </span>
              </CardContent>
            </Card>
          </div>
          
          {/* FAQ Section */}
          <div className="mt-16">
            <Card className="glass-effect border-0 max-w-4xl mx-auto">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-8 text-center text-gradient">Frequently Asked Questions</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-lg font-semibold text-ai-cyan mb-2">Do I need a team to participate?</h4>
                    <p className="text-gray-300 mb-4">No, individual registrations are welcome. We'll help match you with suitable teammates.</p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-ai-cyan mb-2">What should I bring?</h4>
                    <p className="text-gray-300 mb-4">Laptop, chargers, valid ID, and enthusiasm! We'll provide food, drinks, and workspace.</p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-ai-cyan mb-2">Is there an entry fee?</h4>
                    <p className="text-gray-300 mb-4">The event is completely free for all registered participants. Just bring your ideas!</p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-ai-cyan mb-2">Can beginners participate?</h4>
                    <p className="text-gray-300 mb-4">Absolutely! We welcome all skill levels and provide mentorship throughout the event.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-gray-700">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 items-center">
            {/* Logo & Description */}
            <div className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start space-x-3 mb-4">
                <div className="w-10 h-10 ai-gradient rounded-lg flex items-center justify-center">
                  <Code className="text-white" size={20} />
                </div>
                <span className="text-2xl font-bold text-gradient">Code Vault</span>
              </div>
              <p className="text-gray-400">
                Unlocking the future of AI innovation through collaborative coding.
              </p>
            </div>
            
            {/* Social Media Links */}
            <div className="text-center">
              <h4 className="text-lg font-semibold text-ai-cyan mb-4">Follow Us</h4>
              <div className="flex justify-center space-x-6">
                <a href="#" className="w-10 h-10 bg-ai-purple rounded-full flex items-center justify-center hover:scale-110 transform transition-all duration-300">
                  <Instagram className="text-white" size={20} />
                </a>
                <a href="#" className="w-10 h-10 bg-ai-blue rounded-full flex items-center justify-center hover:scale-110 transform transition-all duration-300">
                  <Twitter className="text-white" size={20} />
                </a>
                <a href="#" className="w-10 h-10 bg-ai-pink rounded-full flex items-center justify-center hover:scale-110 transform transition-all duration-300">
                  <Linkedin className="text-white" size={20} />
                </a>
              </div>
            </div>
            
            {/* College/Department Info */}
            <div className="text-center md:text-right">
              <div className="flex items-center justify-center md:justify-end space-x-3 mb-4">
                <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                  <GraduationCap className="text-ai-dark" size={20} />
                </div>
                <span className="text-lg font-semibold text-white">Tech University</span>
              </div>
              <p className="text-gray-400">
                Department of Computer Science & Engineering
              </p>
            </div>
          </div>
          
          {/* Copyright */}
          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              © 2025 Code Vault Hackathon. All rights reserved. | Organized by Tech University CSE Department
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
