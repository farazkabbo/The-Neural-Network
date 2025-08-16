
import React from 'react';
import { Users } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="pt-24 pb-16 px-6">
      <div className="container mx-auto max-w-4xl text-center">
        <Users className="w-16 h-16 text-red-400 mx-auto mb-8" />
        <h1 className="text-4xl font-bold mb-6 text-red-400">
          ℹ️ ABOUT PAGE TEST
        </h1>
        <div className="bg-red-900/20 backdrop-blur-sm border border-red-800/30 rounded-xl p-8">
          <p className="text-xl text-gray-300 mb-6">
            This is the ABOUT page component working correctly! ✅
          </p>
          <div className="text-left space-y-4 text-gray-400">
            <p>
              <strong className="text-red-300">What we do:</strong> TNN is a community dedicated to exploring 
              the mind and its complexities.
            </p>
            <p>
              <strong className="text-red-300">Our mission:</strong> We aim to create a supportive and 
              resourceful network of interconnected people interested in neuroscience and related fields.
            </p>
            <p>
              <strong className="text-red-300">Our impact:</strong> Connecting students, researchers, and 
              professionals across Canada and beyond.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;