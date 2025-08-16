import React, { useState, useEffect } from 'react';
import { Zap, Target, Heart, BookOpen } from 'lucide-react';

interface HomeProps {
  onNavigate: (page: string) => void;
}

const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  const [email, setEmail] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const [letterIndex, setLetterIndex] = useState(0);

  const neuralNetworkText = "The Neural Network";

  // Animate text reveal on component mount
  useEffect(() => {
    setIsVisible(true);
    
    // Animate letters one by one
    const interval = setInterval(() => {
      setLetterIndex((prev) => {
        if (prev < neuralNetworkText.length) {
          return prev + 1;
        }
        clearInterval(interval);
        return prev;
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      const mailtoLink = `mailto:neuralnetworkyu@gmail.com?subject=Stay in the Know - Subscription&body=Hello,%0A%0AI would like to stay updated with The Neural Network.%0A%0AEmail: ${encodeURIComponent(email)}%0A%0AThank you!`;
      window.location.href = mailtoLink;
      setEmail('');
    }
  };

  const values = [
    { icon: Target, title: 'Curiosity', description: 'We foster an insatiable desire to understand the complexities of the mind and brain.' },
    { icon: Heart, title: 'Creativity', description: 'Innovation and creative thinking drive our approach to solving complex problems.' },
    { icon: BookOpen, title: 'Learning', description: 'Continuous education and knowledge sharing form our foundation.' }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6">
        <div className="text-center max-w-4xl mx-auto relative z-10">
          {/* Animated Title with Glowing Effect */}
          <div className={`transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h1 className="text-6xl md:text-8xl font-bold mb-6 text-white glow-text whitespace-nowrap">
              <span className="inline-block">
                {neuralNetworkText.split('').map((letter, index) => (
                  <span
                    key={index}
                    className={`inline-block transition-all duration-300 hover:text-red-400 hover:scale-110 ${
                      index < letterIndex 
                        ? 'animate-bounce opacity-100 transform translate-y-0' 
                        : 'opacity-0 transform translate-y-4'
                    }`}
                    style={{
                      animationDelay: `${index * 0.1}s`,
                      animationDuration: '0.6s',
                      animationFillMode: 'forwards'
                    }}
                  >
                    {letter === ' ' ? '\u00A0' : letter}
                  </span>
                ))}
              </span>
            </h1>
          </div>

          {/* Animated Subtitle */}
          <div className={`transition-all duration-1000 delay-500 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h2 className="text-2xl md:text-4xl mb-8 text-red-200 animate-pulse">
              Connecting Minds, Creating Networks
            </h2>
          </div>

          {/* Animated Description */}
          <div className={`transition-all duration-1000 delay-700 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in-up">
              The Neural Network enhances the student experience for those interested in the mind and related fields, 
              including but not limited to cognitive, biological, psychological, neuroscience, and more, by fostering 
              a community of growth and knowledge.
            </p>
          </div>

          {/* Animated Button */}
          <div className={`transition-all duration-1000 delay-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <button 
              onClick={() => onNavigate('about')}
              className="group bg-gradient-to-r from-red-900 to-red-700 hover:from-red-800 hover:to-red-600 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-110 hover:shadow-xl hover:shadow-red-500/25 animate-pulse hover:animate-none"
            >
              <span className="group-hover:animate-bounce">Explore the Network</span>
            </button>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-red-400/30 rounded-full animate-ping"></div>
          <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-red-300/40 rounded-full animate-ping animation-delay-1000"></div>
          <div className="absolute top-1/2 left-1/6 w-2 h-2 bg-white/50 rounded-full animate-pulse animation-delay-2000"></div>
          <div className="absolute top-1/3 right-1/3 w-5 h-5 bg-red-500/20 rounded-full animate-bounce animation-delay-500"></div>
        </div>
      </section>

      {/* What is Neural Network */}
      <section className="relative py-24 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-red-900/10 backdrop-blur-sm border border-red-800/20 rounded-2xl p-12 hover:border-red-600/40 transition-all duration-500 transform hover:scale-105">
            <div className="flex items-center mb-8">
              <Zap className="w-12 h-12 text-red-400 mr-4 animate-pulse" />
              <h3 className="text-4xl font-bold text-red-400 animate-fade-in-left">What is a Neural Network?</h3>
            </div>
            <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
              <p className="animate-fade-in-up animation-delay-300">
                A neural network is a computational model inspired by biological neural networks in the brain. 
                Just as neurons in the brain communicate through electrical and chemical signals to process 
                information, artificial neural networks use interconnected nodes to learn patterns and make decisions.
              </p>
              <p className="animate-fade-in-up animation-delay-600">
                Similarly, <strong className="text-red-400 hover:text-white transition-colors duration-300 cursor-default">The Neural Network organization</strong> connects 
                students, researchers, and professionals across disciplines to share knowledge, collaborate on 
                projects, and advance our understanding of the mind and brain sciences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="relative py-24 px-6">
        <div className="container mx-auto">
          <h3 className="text-4xl md:text-5xl font-bold text-center mb-16 text-red-400 animate-fade-in-up">
            Our Core Values
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <div 
                key={index}
                className="group bg-red-900/20 backdrop-blur-sm border border-red-800/30 rounded-xl p-6 hover:border-red-600/50 transition-all duration-500 hover:transform hover:-translate-y-4 hover:rotate-1 hover:shadow-xl hover:shadow-red-500/20 animate-fade-in-up cursor-pointer"
                style={{
                  animationDelay: `${index * 0.2}s`
                }}
              >
                <value.icon className="w-12 h-12 text-red-400 mb-4 group-hover:scale-125 group-hover:rotate-12 transition-all duration-300 group-hover:animate-pulse" />
                <h4 className="text-xl font-semibold mb-3 text-red-300 group-hover:text-white transition-colors duration-300">{value.title}</h4>
                <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stay in the Know */}
      <section className="relative py-16 px-6">
        <div className="container mx-auto max-w-2xl text-center">
          <h3 className="text-3xl font-bold mb-6 text-red-400 animate-fade-in-up">Stay in the Know</h3>
          <p className="text-gray-300 mb-8 leading-relaxed animate-fade-in-up animation-delay-300">
            Subscribe to receive updates about events, research opportunities, and community news.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up animation-delay-600">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="flex-1 px-6 py-3 bg-red-900/20 border border-red-800/30 rounded-full text-white placeholder-gray-400 focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/30 backdrop-blur-sm transition-all duration-300 hover:border-red-600/50 focus:scale-105"
              required
            />
            <button
              type="submit"
              className="group px-8 py-3 bg-gradient-to-r from-red-700 to-red-600 rounded-full font-semibold hover:from-red-600 hover:to-red-500 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-red-500/30"
            >
              <span className="group-hover:animate-pulse">Subscribe</span>
            </button>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in-left {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes glow-pulse {
          0%, 100% {
            text-shadow: 
              0 0 5px rgba(248, 113, 113, 0.8),
              0 0 10px rgba(248, 113, 113, 0.6),
              0 0 20px rgba(248, 113, 113, 0.4),
              0 0 40px rgba(248, 113, 113, 0.3),
              0 0 80px rgba(248, 113, 113, 0.2);
          }
          50% {
            text-shadow: 
              0 0 10px rgba(248, 113, 113, 1),
              0 0 20px rgba(248, 113, 113, 0.8),
              0 0 30px rgba(248, 113, 113, 0.6),
              0 0 60px rgba(248, 113, 113, 0.4),
              0 0 120px rgba(248, 113, 113, 0.3);
          }
        }

        .glow-text {
          animation: glow-pulse 2s ease-in-out infinite;
          text-shadow: 
            0 0 5px rgba(248, 113, 113, 0.8),
            0 0 10px rgba(248, 113, 113, 0.6),
            0 0 20px rgba(248, 113, 113, 0.4),
            0 0 40px rgba(248, 113, 113, 0.3);
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }

        .animate-fade-in-left {
          animation: fade-in-left 0.8s ease-out forwards;
        }

        .animation-delay-300 {
          animation-delay: 0.3s;
        }

        .animation-delay-500 {
          animation-delay: 0.5s;
        }

        .animation-delay-600 {
          animation-delay: 0.6s;
        }

        .animation-delay-1000 {
          animation-delay: 1s;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </>
  );
};

export default Home;