import React from 'react';
import { Mail, Instagram, Linkedin, Brain } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-red-950/50 border-t border-red-800/30 py-12 px-6 z-10">
      <div className="container mx-auto">
        {/* Land Acknowledgment */}
        <div className="mb-12">
          <div className="max-w-4xl mx-auto border border-red-800/40 rounded-xl p-8 bg-red-900/20 backdrop-blur-sm">
            <h3 className="text-2xl font-bold mb-6 text-red-400 text-center">Land Acknowledgment</h3>
            <div className="text-gray-300 leading-relaxed space-y-4 text-center">
              <p>
                The Neural Network is committed to decolonizing, equity, diversity, and inclusion as outlined 
                by York University's DEDI Strategy. The Neural Network recognizes that many Indigenous Nations 
                have longstanding relationships with the territories upon which York University campuses are 
                located that precede the establishment of York University.
              </p>
              <p>
                We acknowledge its presence on the traditional territory of many Indigenous Nations. The area 
                known as Tkaronto has been care taken by the Anishinabek Nation, the Haudenosaunee Confederacy, 
                and the Huron-Wendat. It is now home to many First Nation, Inuit and Métis communities.
              </p>
              <p>
                We acknowledge the current treaty holders, the Mississaugas of the Credit First Nation. This 
                territory is subject of the Dish with One Spoon Wampum Belt Covenant, an agreement to peaceably 
                share and care for the Great Lakes region.
              </p>
            </div>
          </div>
        </div>

        {/* Footer Links */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-6 md:mb-0">
            <Brain className="w-8 h-8 text-red-400" />
            <span className="text-xl font-bold text-red-400">The Neural Network</span>
          </div>
          <div className="flex space-x-6">
            <a 
              href="mailto:neuralnetworkyu@gmail.com" 
              className="flex items-center space-x-2 text-gray-300 hover:text-red-400 transition-colors"
            >
              <Mail className="w-6 h-6" />
              <span>Gmail</span>
            </a>
            <a 
              href="#" 
              className="flex items-center space-x-2 text-gray-300 hover:text-red-400 transition-colors"
            >
              <Instagram className="w-6 h-6" />
              <span>Instagram</span>
            </a>
            <a 
              href="#" 
              className="flex items-center space-x-2 text-gray-300 hover:text-red-400 transition-colors"
            >
              <Linkedin className="w-6 h-6" />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
        
        <div className="text-center mt-8 pt-8 border-t border-red-800/30">
          <p className="text-gray-400">
            © 2025 The Neural Network - York University. Connecting minds across disciplines.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;