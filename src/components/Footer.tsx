import React from 'react';
import { Instagram, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="relative border-t border-red-800/30 py-16 px-6 z-10" style={{ backgroundColor: 'rgba(53, 4, 4, 0.8)' }}>
      <div className="container mx-auto max-w-5xl text-center space-y-12">
        
        {/* Main Identity & Contact Info */}
        <div>
          <h2 className="text-3xl font-bold text-white mb-4">The Neural Network</h2>
          <p className="text-gray-300 leading-relaxed">
            Department of Cognitive Science, York University <br />
            Ross Building, 115 Campus Walk S448 <br />
            North York, ON M3J 2S5
          </p>
          <a href="mailto:neuralnetworkyu@gmail.com" 
           className="mt-4 text-lg text-red-300 font-medium cursor-pointer">
            neuralnetworkyu@gmail.com
          </a>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-10">
          <a
            href="https://www.linkedin.com/company/the-neural-network-yu/" 
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-gray-300 hover:text-red-400 transition-colors"
          >
            <Linkedin className="w-6 h-6" />
            <span className="underline">LinkedIn</span>
          </a>
          <a
            href="https://www.instagram.com/theneuralnetworkyu/" 
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-gray-300 hover:text-red-400 transition-colors"
          >
            <Instagram className="w-6 h-6" />
            <span className="underline">Instagram</span>
          </a>
        </div>

        {/* Land Acknowledgment */}
        <div className="max-w-4xl mx-auto border border-red-800/40 rounded-xl p-8 bg-red-900/20 backdrop-blur-sm text-gray-300 text-sm leading-relaxed space-y-4">
          <h3 className="text-xl font-semibold mb-4 text-red-400">Land Acknowledgment</h3>
          <p>
            The Neural Network is committed to decolonizing, equity, diversity, and inclusion as
            outlined by York University's DEDI Strategy. The Neural Network recognizes that many
            Indigenous Nations have longstanding relationships with the territories upon which York
            University campuses are located that precede the establishment of York University.
          </p>
          <p>
            We acknowledge its presence on the traditional territory of many Indigenous Nations. The
            area known as Tkaronto has been care taken by the Anishinabek Nation, the Haudenosaunee
            Confederacy, and the Huron-Wendat. It is now home to many First Nation, Inuit and Métis
            communities.
          </p>
          <p>
            We acknowledge the current treaty holders, the Mississaugas of the Credit First Nation.
            This territory is subject of the Dish with One Spoon Wampum Belt Covenant, an agreement
            to peaceably share and care for the Great Lakes region.
          </p>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-red-800/30 pt-6">
          <p className="text-gray-400 text-sm">
            © 2025 The Neural Network - York University. Connecting minds across disciplines.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;