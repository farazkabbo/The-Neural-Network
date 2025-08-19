import React from 'react';
import { Briefcase} from 'lucide-react';
import cianImage from "../assets/cian.avif";
import cianImage2 from "../assets/cian2.avif";

const Opportunities: React.FC = () => {
  // const testOpportunities = [
  //   { icon: Briefcase, title: 'Research Positions', status: '🔬 Available Now' },
  //   { icon: Users, title: 'Mentorship Program', status: '👥 Open Applications' },
  //   { icon: BookOpen, title: 'Workshops & Seminars', status: '📚 Upcoming Events' }
  // ];

  return (
    <div className="pt-24 pb-16 px-6">
      <div className="container mx-auto max-w-4xl text-center">
        <Briefcase className="w-16 h-16 text-red-400 mx-auto mb-8" />
        <h1 className="text-4xl font-bold mb-6 text-red-400">
          OPPORTUNITIES
        </h1>
        <div className="bg-red-900/20 backdrop-blur-sm border border-red-800/30 rounded-xl p-8 mb-8">
          <p className="text-xl text-gray-300 mb-6">
            Discover various opportunities for learning, collaboration, and growth through the Neural Network. Stay updated on research events, academic resources, and chances to connect with peers and professionals in related fields.
          </p>
        </div>
        
        <div className='container mx-auto max-w-4xl text-center'>
          <h1 className='font-bold text-2xl'>CIAN</h1>
          <h2>
            <a href="https://www.yorku.ca/research/cian/"
              target="_blank"
              rel="noopener noreferrer" className='hover:underline'>Centre for Integrative and Applied Neuroscience at York University
            </a>
          </h2>

          <div className="flex mt-6 text-left ml-3">
            {/* Left div with text */}
            <div className="w-1/2 pr-4">
              <ul className='list-disc'>
                 <li>CVR-CIAN Conference 2025: The Brain and Integrative Vision is accepting Abstract Submissions from students.
                      Deadline: March 1, 2025, at midnight.
                      For more information <a href="https://www.yorku.ca/events/brain-and-integrative-vision-conference/poster-submissions/" target='_blank' rel="noopener noreferrer" className='hover:underline'>
                      https://www.yorku.ca/events/brain-and-integrative-vision-conference/poster-submissions/
                      </a>
                  </li>
                  <li>
                    <p>
                      CIAN also has a Friday Speakers Series, follow our Instagram{" "}
                      <a
                        href="https://www.instagram.com/theneuralnetworkyu"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline"
                      >
                        @theneuralnetworkyu
                      </a>{" "}
                      for live updates or email us at{" "}
                    </p>
                  </li>
              </ul>
            </div>

            
            <div className="w-1/2">
              <img src={cianImage} alt="CIAN Lab" className="w-full h-auto object-cover rounded-lg" />
            </div>
          </div>
        </div>

        <div className='container mx-auto max-w-4xl text-center mt-6'>
          <h1 className='font-bold text-2xl'><a className="hover:underline" href="https://www.yorku.ca/research/cian/" target='_blank' rel="noopener noreferrer">Cognitive Science Speaker Series at York University</a></h1>
          <h2>
            <a href="https://www.yorku.ca/research/cian/"
              target="_blank"
              rel="noopener noreferrer" className='hover:underline'>Centre for Integrative and Applied Neuroscience at York University
            </a>
          </h2>

          <div className="flex mt-6 text-left ml-3">
            {/* Left div with text */}
            <div className="w-1/2 pr-4">
              <ul className='list-disc'>
                <li>The department of Cognitive Science at York hosts 
                  the Cognitive science speaker series on Wednesdays 12:30–2:30 in Ross Hall S421. Some talks will be held remotely on Zoom.
                </li>
                
                <li>
                  <p>
                    For information on speakers and dates, 
                    <a href=" https://www.yorku.ca/laps/phil/experience/speaker-series/cognitive-science/"
                      target="_blank"
                      rel="noopener noreferrer" className='hover:underline'> https://www.yorku.ca/laps/phil/experience/speaker-series/cognitive-science/
                    </a>
                  </p>
                </li>
              </ul>
            </div>

            
            <div className="w-1/2">
              <img src={cianImage2} alt="CIAN Lab" className="w-full h-auto object-cover rounded-lg" />
            </div>
          </div>

        
        </div>


        

        {/* <div className="grid md:grid-cols-3 gap-6">
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
        </div> */}
      </div>
    </div>
  );
};

export default Opportunities;