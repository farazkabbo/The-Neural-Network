import React from 'react';
import { Briefcase, Users, BookOpen } from 'lucide-react';

const Opportunities: React.FC = () => {
  const testOpportunities = [
    { icon: Briefcase, title: 'Research Positions', status: '🔬 Available Now' },
    { icon: Users, title: 'Mentorship Program', status: '👥 Open Applications' },
    { icon: BookOpen, title: 'Workshops & Seminars', status: '📚 Upcoming Events' }
  ];

  return (
    <div className="pt-24 pb-16 px-6">
      <div className="container mx-auto max-w-4xl text-center">
        <Briefcase className="w-16 h-16 text-red-400 mx-auto mb-8" />
        <h1 className="text-4xl font-bold mb-6 text-red-400">
          🚀 OPPORTUNITIES PAGE TEST
        </h1>
        <div className="bg-red-900/20 backdrop-blur-sm border border-red-800/30 rounded-xl p-8 mb-8">
          <p className="text-xl text-gray-300 mb-6">
            This is the OPPORTUNITIES page component working correctly! ✅
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {testOpportunities.map((opportunity, index) => (
            <div 
              key={index}
              className="bg-red-900/20 backdrop-blur-sm border border-red-800/30 rounded-xl p-6 hover:border-red-600/50 transition-all duration-300"
            >
              <opportunity.icon className="w-8 h-8 text-red-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-red-300 mb-2">{opportunity.title}</h3>
              <p className="text-gray-400">{opportunity.status}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Opportunities;