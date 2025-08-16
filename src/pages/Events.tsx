import React from 'react';
import { Calendar } from 'lucide-react';

const Events: React.FC = () => {
  const testEvents = [
    { date: 'March 15, 2025', title: 'Neural Networks Workshop', type: 'Workshop' },
    { date: 'March 22, 2025', title: 'Brain-Computer Interface Seminar', type: 'Seminar' },
    { date: 'April 5, 2025', title: 'Research Showcase', type: 'Conference' }
  ];

  return (
    <div className="pt-24 pb-16 px-6">
      <div className="container mx-auto max-w-4xl text-center">
        <Calendar className="w-16 h-16 text-red-400 mx-auto mb-8" />
        <h1 className="text-4xl font-bold mb-6 text-red-400">
          📅 EVENTS PAGE TEST
        </h1>
        <div className="bg-red-900/20 backdrop-blur-sm border border-red-800/30 rounded-xl p-8 mb-8">
          <p className="text-xl text-gray-300 mb-6">
            This is the EVENTS page component working correctly! ✅
          </p>
        </div>

        <div className="space-y-4">
          {testEvents.map((event, index) => (
            <div 
              key={index}
              className="bg-red-900/20 backdrop-blur-sm border border-red-800/30 rounded-xl p-6 text-left hover:border-red-600/50 transition-all duration-300"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-red-300">{event.title}</h3>
                  <p className="text-gray-400">{event.date}</p>
                </div>
                <span className="px-3 py-1 bg-red-800/30 rounded-full text-sm text-red-300">
                  {event.type}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Events;