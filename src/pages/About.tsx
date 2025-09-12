import { useState, useEffect } from 'react';
import { Brain,  Globe, Code, Calendar, GraduationCap, Instagram, Linkedin } from 'lucide-react';
import Mahr from "../assets/Dr. Mahr.png";
import Rahbir from "../assets/Rahbir.jpg";
import Faraz from "../assets/Faraz.jpeg";
import Gigi from "../assets/Gigi.jpeg";
import Tasnia from "../assets/6.jpg";
import Zainab from "../assets/3.jpeg";
import Hale from "../assets/7.jpeg";
import Caitlin from "../assets/1.jpeg";
import Ralph from "../assets/2.jpg";




const About = () => {
  const [visibleCards, setVisibleCards] = useState(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleCards(prev => new Set(prev).add(entry.target.id));
          }
        });
      },
      { threshold: 0.3 }
    );

    const cards = document.querySelectorAll('.team-card');
    cards.forEach(card => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  const teamSections = [
    {
      title: "Faculty Advisor",
      icon: GraduationCap,
      members: [
        { 
          name: "Dr. Johannes Mahr", 
          role: "Faculty Advisor", 
          // bio: "Assistant Professor at York University in the Department of Philosophy", 
          // specialty: "Cognitive Neuroscience",
          image: Mahr, 
          instagram: "https://instagram.com/drjanesmith",
          linkedin: "https://www.linkedin.com/in/johannes-mahr-43b010215/"
        }
      ]
    },
    {
      title: "President & Vice President",
      icon: Brain,
      members: [
        { 
          name: "Gigi", 
          role: "President", 
          // bio: "Neuroscience PhD leading TNN's vision for interdisciplinary collaboration", 
          // specialty: "Cognitive Networks",
          image: Gigi, // Replace with actual image path
          instagram: "https://instagram.com/sarahchen",
          linkedin: "https://linkedin.com/in/sarahchen"
        },
        { 
          name: "Meryam", 
          role: "Vice President", 
          // bio: "Psychology graduate fostering community growth and academic excellence", 
          // specialty: "Behavioral Analysis",
          image: "/api/placeholder/150/150", // Replace with actual image path
          instagram: "https://instagram.com/marcusrodriguez",
          linkedin: "https://linkedin.com/in/marcusrodriguez"
        },
      ]
    },
    {
      title: "Secretary",
      icon: Calendar,
      members: [
        { 
          name: "Hale", 
          role: "Secretary", 
          // bio: "Organizing meetings and maintaining official records with precision", 
          // specialty: "Documentation Systems",
          image: Hale, // Replace with actual image path
          instagram: "https://instagram.com/alexthompson",
          linkedin: "https://linkedin.com/in/alexthompson"
        },
      ]
    },
    {
      title: "Directors",
      icon: Globe,
      members: [
        { 
          name: "Caitlin", 
          role: "Communications Director", 
          // bio: "Coordinating events and managing resources across Canadian universities", 
          // specialty: "Network Optimization",
          image: Caitlin, // Replace with actual image path
          instagram: "https://instagram.com/davidpark",
          linkedin: "https://linkedin.com/in/davidpark"
        },
        { 
          name: "Zainab", 
          role: "Event Director", 
          // bio: "Planning engaging workshops and academic conferences", 
          // specialty: "Synaptic Planning",
          image: Zainab, // Replace with actual image path
          instagram: "https://instagram.com/mayapatel",
          linkedin: "https://linkedin.com/in/mayapatel"
        },
        { 
          name: "Faraz", 
          role: "Technical Dirtector", 
          // bio: "Overseeing equipment and venue arrangements", 
          // specialty: "Infrastructure Mapping",
          image: Faraz,
          instagram: "https://www.instagram.com/mewdiegamer/",
          linkedin: "https://www.linkedin.com/in/mohammed-faraz-kabbo/"
        }
      ]
    },
    {
      title: "Assistants",
      icon: Code,
      members: [
        { 
          name: "Tasnia", 
          role: "Media Assistant", 
          // bio: "Developing digital platforms and innovative learning tools", 
          // specialty: "AI Architecture",
          image: Tasnia, // Replace with actual image path
          instagram: "https://instagram.com/lisawang",
          linkedin: "https://linkedin.com/in/lisawang"
        },
        { 
          name: "Ralph", 
          role: "Event Assistant", 
          // bio: "Creating responsive web experiences for the TNN community", 
          // specialty: "Interface Design",
          image: Ralph, // Replace with actual image path
          instagram: "https://instagram.com/ryanoconnor",
          linkedin: "https://linkedin.com/in/ryanoconnor"
        },
        { 
          name: "Aditi", 
          role: "Event Assistant", 
          // bio: "Processing research data and generating insights", 
          // specialty: "Pattern Recognition",
          image: "/api/placeholder/150/150", // Replace with actual image path
          instagram: "https://instagram.com/priyasharma",
          linkedin: "https://linkedin.com/in/priyasharma"
        },
        { 
          name: "Hiba", 
          role: "Communications Assistant", 
          // bio: "Processing research data and generating insights", 
          // specialty: "Pattern Recognition",
          image: "/api/placeholder/150/150", // Replace with actual image path
          instagram: "https://instagram.com/priyasharma",
          linkedin: "https://linkedin.com/in/priyasharma"
        },
        { 
          name: "Rahbir", 
          role: "Technical Assistant", 
          // bio: "Processing research data and generating insights", 
          // specialty: "Pattern Recognition",
          image: Rahbir,
          instagram: "https://www.instagram.com/rahbir_mahdi/",
          linkedin: "https://www.linkedin.com/in/rahbirmahdi/"
        },
      ]
    },
  ];

  return (
    <div className="min-h-screen relative" style={{ backgroundColor: 'rgba(53, 4, 4, 0.8)' }}>
      {/* Hero Section */}
      <div className="pt-24 pb-16 px-6 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-2 h-2 bg-white/20 rounded-full animate-pulse"></div>
          <div className="absolute top-32 right-20 w-1 h-1 bg-white/30 rounded-full animate-ping"></div>
          <div className="absolute bottom-40 left-1/4 w-1.5 h-1.5 bg-white/25 rounded-full animate-pulse delay-100"></div>
          <div className="absolute bottom-60 right-1/3 w-1 h-1 bg-white/20 rounded-full animate-ping delay-200"></div>
        </div>
        
        <div className="container mx-auto max-w-6xl text-center relative z-10">
          <div className="flex justify-center mb-8">
            <div className="relative">
              <Brain className="w-20 h-20 text-white animate-pulse" />
              <div className="absolute -inset-4 border-2 border-white/20 rounded-full animate-spin-slow"></div>
              <div className="absolute -inset-8 border border-white/10 rounded-full animate-ping"></div>
            </div>
          </div>
          
          <h1 className="text-6xl font-bold mb-8 text-white">
            About The Neural Network
          </h1>
          
          <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-10 shadow-2xl">
            <p className="text-xl text-white/90 leading-relaxed">
              Welcome to The Neural Network (TNN)! TNN is a community dedicated to exploring the mind and its complexities. 
              We aim to create a space for individuals passionate about understanding everything from cognition to complex behavior, 
              regardless of background or discipline. TNN aims to enrich the student experience during and after their studies by 
              constructing and preserving a supportive and resourceful network of interconnected people.
            </p>
            <br />
            <p className="text-xl text-white/90 leading-relaxed">
              We value the vitality of interdisciplinary programs and weaving various professions together. Universities across 
              Canada can take pleasure in TNN's amalgamation of determination and a fierce desire to transfigure the intricacies 
              of intelligence in our modern era. TNN, as a collective, is a mentor, a pillar, a window of opportunity and above all else, 
              a novelty centre for learning and connecting with like-minded folk. We hope you feel encouraged to contribute to the 
              dynamism of the Neural Network.
            </p>
          </div>
        </div>
      </div>

      {/* Team Sections */}
      <div className="pb-20 px-6">
        {teamSections.map((section, sectionIndex) => {
          const IconComponent = section.icon;
          return (
            <div key={section.title} className="container mx-auto max-w-7xl mb-20">
              <div className="text-center mb-12">
                <div className="flex justify-center mb-6">
                  <div className="relative">
                    <IconComponent className="w-16 h-16 text-white animate-bounce" />
                    <div className="absolute -inset-2 border border-white/20 rounded-full animate-pulse"></div>
                  </div>
                </div>
                <h2 className="text-4xl font-bold text-white mb-4">{section.title}</h2>
                <div className="w-24 h-1 bg-gradient-to-r from-transparent via-white to-transparent mx-auto opacity-60"></div>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {section.members.map((member, memberIndex) => {
                  const cardId = `card-${sectionIndex}-${memberIndex}`;
                  const isVisible = visibleCards.has(cardId);
                  
                  return (
                    <div
                      key={member.name}
                      id={cardId}
                      className={`team-card group relative p-8 rounded-2xl border border-white/20 bg-white/10 backdrop-blur-lg transition-all duration-700 transform hover:scale-105 hover:rotate-1 hover:bg-white/20 text-white ${
                        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                      }`}
                      style={{
                        transitionDelay: `${memberIndex * 200}ms`,
                        boxShadow: '0 20px 40px rgba(0,0,0,0.3)'
                      }}
                    >
                      {/* Neural network background pattern */}
                      <div className="absolute inset-0 overflow-hidden rounded-2xl opacity-10">
                        <div className="absolute top-4 left-4 w-16 h-16 border border-white rounded-full"></div>
                        <div className="absolute top-6 left-12 w-1 h-8 bg-white transform rotate-45"></div>
                        <div className="absolute top-2 left-20 w-8 h-8 border border-white rounded-full"></div>
                        <div className="absolute bottom-4 right-4 w-12 h-12 border border-white rounded-full"></div>
                        <div className="absolute bottom-8 right-16 w-1 h-6 bg-white transform -rotate-45"></div>
                      </div>

                      {/* Pulsing border effect */}
                      <div className="absolute -inset-0.5 bg-gradient-to-r from-white via-transparent to-white opacity-20 rounded-2xl animate-pulse group-hover:opacity-40 transition-opacity duration-300"></div>

                      {/* Card content */}
                      <div className="relative z-10">
                        {/* Profile Picture with Social Media Icons */}
                        <div className="relative flex items-center justify-center mb-6 mx-auto">
                          <div className="relative w-20 h-20 rounded-full overflow-hidden border-2 border-white/20 group-hover:border-white/40 transition-all duration-300">
                            <img 
                              src={member.image} 
                              alt={member.name}
                              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                            />
                            
                            {/* Social Media Icons Overlay */}
                            <div className="absolute inset-0 bg-black/70 flex items-center justify-center space-x-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                              <a 
                                href={member.instagram}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white hover:text-pink-400 transition-colors duration-200"
                              >
                                <Instagram className="w-5 h-5" />
                              </a>
                              <a 
                                href={member.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white hover:text-blue-400 transition-colors duration-200"
                              >
                                <Linkedin className="w-5 h-5" />
                              </a>
                            </div>
                          </div>
                          
                          {/* Animated ring around profile picture */}
                          <div className="absolute w-24 h-24 border-2 border-white/20 rounded-full animate-spin-slow group-hover:border-white/40"></div>
                        </div>

                        <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-white transition-colors duration-300">
                          {member.name}
                        </h3>
                        
                        <div className="text-lg font-semibold mb-4 text-white/80">
                          {member.role}
                        </div>

                        {/* <p className="text-white/70 mb-4 leading-relaxed group-hover:text-white/90 transition-colors duration-300">
                          {member.bio}
                        </p>

                        <div className="flex items-center justify-center">
                          <span className="px-4 py-2 bg-white/10 rounded-full text-sm font-medium border border-white/20 text-white/80">
                            {member.specialty}
                          </span>
                        </div> */}

                        {/* Hover effect particles */}
                        <div className="absolute top-2 right-2 w-2 h-2 bg-white rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-all duration-300"></div>
                        <div className="absolute bottom-2 left-2 w-1.5 h-1.5 bg-white rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-all duration-300 delay-100"></div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom decoration */}
      <div className="text-center pb-16 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">Join Our Neural Network</h3>
            <p className="text-white/80 text-lg">
              Ready to connect with brilliant minds and shape the future of neuroscience? 
              Become part of our growing network of researchers, students, and innovators.
            </p>
            <div className="flex justify-center mt-6">
              <div className="flex space-x-2">
                <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
                <div className="w-3 h-3 bg-white/70 rounded-full animate-pulse delay-100"></div>
                <div className="w-3 h-3 bg-white/50 rounded-full animate-pulse delay-200"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 3s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default About;