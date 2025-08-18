import React, { useState, useEffect } from 'react';
import { UserPlus, Brain, Users, Award, Zap, Network } from 'lucide-react';

const Join: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const benefits = [
    {
      icon: Brain,
      text: "Access Research Opportunities",
      description: "Join cutting-edge neuroscience research projects"
    },
    {
      icon: Users,
      text: "Connect with Like-minded Individuals",
      description: "Build lasting connections with passionate researchers"
    },
    {
      icon: Award,
      text: "Participate in Cutting-edge Projects",
      description: "Contribute to groundbreaking discoveries"
    }
  ];

  return (
    <div className="min-h-screen relative" style={{ backgroundColor: 'rgba(53, 4, 4, 0.8)' }}>
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-2 h-2 bg-white/20 rounded-full animate-pulse"></div>
        <div className="absolute top-32 right-20 w-1 h-1 bg-white/30 rounded-full animate-ping"></div>
        <div className="absolute top-1/2 left-1/4 w-1.5 h-1.5 bg-white/25 rounded-full animate-pulse delay-100"></div>
        <div className="absolute top-2/3 right-1/3 w-1 h-1 bg-white/20 rounded-full animate-ping delay-200"></div>
        <div className="absolute bottom-1/4 left-1/2 w-2 h-2 bg-white/15 rounded-full animate-pulse delay-300"></div>
        <div className="absolute bottom-40 right-10 w-1.5 h-1.5 bg-white/25 rounded-full animate-ping delay-400"></div>
      </div>

      <div className="pt-24 pb-16 px-6 relative z-10">
        <div className="container mx-auto max-w-5xl">
          {/* Hero Section */}
          <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <div className="flex justify-center mb-8">
              <div className="relative">
                <UserPlus className="w-20 h-20 text-white animate-pulse" />
                <div className="absolute -inset-4 border-2 border-white/20 rounded-full animate-spin-slow"></div>
                <div className="absolute -inset-8 border border-white/10 rounded-full animate-ping"></div>
              </div>
            </div>
            
            <h1 className="text-6xl font-bold mb-8 text-white">
              Join The Neural Network
            </h1>
            
            <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-10 shadow-2xl">
              <p className="text-2xl text-white/90 leading-relaxed mb-6">
                Become part of Canada's most dynamic neuroscience community
              </p>
              <p className="text-lg text-white/70">
                Connect, collaborate, and contribute to the future of brain science
              </p>
            </div>
          </div>

          {/* Benefits Section */}
          <div className={`mb-16 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <div className="text-center mb-12">
              <div className="flex justify-center mb-6">
                <div className="relative">
                  <Network className="w-16 h-16 text-white animate-bounce" />
                  <div className="absolute -inset-2 border border-white/20 rounded-full animate-pulse"></div>
                </div>
              </div>
              <h2 className="text-4xl font-bold text-white mb-4">Why Join TNN?</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-transparent via-white to-transparent mx-auto opacity-60"></div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => {
                const IconComponent = benefit.icon;
                return (
                  <div
                    key={benefit.text}
                    className={`group relative p-8 rounded-2xl border border-white/20 bg-white/10 backdrop-blur-lg transition-all duration-700 transform hover:scale-105 hover:rotate-1 hover:bg-white/20 text-white`}
                    style={{
                      transitionDelay: `${index * 200 + 500}ms`,
                      boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
                      opacity: isVisible ? 1 : 0,
                      transform: isVisible ? 'translateY(0)' : 'translateY(50px)'
                    }}
                  >
                    {/* Neural network background pattern */}
                    <div className="absolute inset-0 overflow-hidden rounded-2xl opacity-10">
                      <div className="absolute top-4 left-4 w-12 h-12 border border-white rounded-full"></div>
                      <div className="absolute top-6 left-10 w-1 h-6 bg-white transform rotate-45"></div>
                      <div className="absolute bottom-4 right-4 w-8 h-8 border border-white rounded-full"></div>
                    </div>

                    {/* Pulsing border effect */}
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-white via-transparent to-white opacity-20 rounded-2xl animate-pulse group-hover:opacity-40 transition-opacity duration-300"></div>

                    <div className="relative z-10 text-center">
                      <div className="flex items-center justify-center w-16 h-16 rounded-full bg-white/20 mb-6 mx-auto group-hover:animate-spin-slow">
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>

                      <h3 className="text-xl font-bold text-white mb-4 group-hover:text-white transition-colors duration-300">
                        {benefit.text}
                      </h3>

                      <p className="text-white/70 leading-relaxed group-hover:text-white/90 transition-colors duration-300">
                        {benefit.description}
                      </p>

                      {/* Hover effect particles */}
                      <div className="absolute top-2 right-2 w-2 h-2 bg-white rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-all duration-300"></div>
                      <div className="absolute bottom-2 left-2 w-1.5 h-1.5 bg-white rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-all duration-300 delay-100"></div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Call to Action Section */}
          <div className={`text-center transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-12 shadow-2xl relative overflow-hidden">
              {/* Background Animation Elements */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute top-8 left-8 w-20 h-20 border-2 border-white rounded-full animate-spin-slow"></div>
                <div className="absolute bottom-8 right-8 w-16 h-16 border border-white rounded-full animate-pulse"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 border border-white rounded-full animate-ping"></div>
              </div>

              <div className="relative z-10">
                <div className="flex justify-center mb-8">
                  <div className="relative">
                    <Zap className="w-12 h-12 text-white animate-pulse" />
                    <div className="absolute -inset-2 border border-white/20 rounded-full animate-spin"></div>
                  </div>
                </div>

                <h3 className="text-3xl font-bold text-white mb-6">Ready to Connect?</h3>
                
                <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
                  Take the first step towards joining Canada's most innovative neuroscience community. 
                  Your journey into the fascinating world of brain science begins here.
                </p>

                <div className="group">
                  <a 
                    href="https://docs.google.com/forms/d/e/1FAIpQLSfaNXj6Y_EOb_-KbQVM7tIbfXI077IPCZV7gTpm635Nu_TI-A/viewform"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-gradient-to-r from-white/20 to-white/10 hover:from-white/30 hover:to-white/20 border border-white/30 hover:border-white/50 px-10 py-4 rounded-full text-lg font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-xl relative overflow-hidden"
                  >
                    <span className="relative z-10">Become A General Member</span>
                    
                    {/* Button Animation Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  </a>
                </div>

                {/* Floating elements around button */}
                <div className="absolute top-16 left-1/4 w-2 h-2 bg-white/30 rounded-full animate-float"></div>
                <div className="absolute top-20 right-1/4 w-1.5 h-1.5 bg-white/20 rounded-full animate-float delay-1000"></div>
                <div className="absolute bottom-16 left-1/3 w-1 h-1 bg-white/25 rounded-full animate-float delay-2000"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-spin-slow {
          animation: spin-slow 3s linear infinite;
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Join;