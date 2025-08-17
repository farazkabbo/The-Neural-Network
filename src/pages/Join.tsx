import React from 'react';
import { UserPlus, Brain, Users, Award } from 'lucide-react';

const Join: React.FC = () => {
  return (
    <div className="pt-24 pb-16 px-6">
      <div className="container mx-auto max-w-4xl text-center">
        <UserPlus className="w-16 h-16 text-red-400 mx-auto mb-8" />
        <div className="bg-red-900/20 backdrop-blur-sm border border-red-800/30 rounded-xl p-8">
          <p className="text-xl text-gray-300 mb-8">
            JOIN US
          </p>
          
          <div className="space-y-4 mb-8">
            <div className="flex items-center justify-center space-x-3">
              <Brain className="w-6 h-6 text-red-400" />
              <span className="text-gray-300">Access Research Opportunities</span>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <Users className="w-6 h-6 text-red-400" />
              <span className="text-gray-300">Connect with Like-minded Individuals</span>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <Award className="w-6 h-6 text-red-400" />
              <span className="text-gray-300">Participate in Cutting-edge Projects</span>
            </div>
          </div>

          <a 
            href="https://docs.google.com/forms/d/e/1FAIpQLSfaNXj6Y_EOb_-KbQVM7tIbfXI077IPCZV7gTpm635Nu_TI-A/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gradient-to-r from-red-700 to-red-600 hover:from-red-600 hover:to-red-500 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105"
          >
            Become A General Member
          </a>
        </div>
      </div>
    </div>
  );
};

export default Join;