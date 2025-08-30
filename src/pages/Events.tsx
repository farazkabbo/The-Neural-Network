import React, { useState } from 'react';
import { Calendar, X, MapPin, Users, Heart } from 'lucide-react';
import SpeedFriend from "../assets/speed_friend.avif"
import TriviaNight from "../assets/triva_night.avif"
import ClubFair from "../assets/ClubFair.avif"
import Meeting from "../assets/Meeting.avif"

const Events: React.FC = () => {
  const [selectedEvent, setSelectedEvent] = useState<any>(null);

  const events = [
    {
      id: 1,
      title: 'SPEED FRIENDING',
      date: 'FEB. 14, 2025',
      time: '4 PM - 6:30 PM',
      location: 'Founders 306, SCR',
      status: 'RSVP',
      type: 'Social',
      image: SpeedFriend,
      description: 'Meet new friends in a fun, structured environment! Speed friending is like speed dating but for making platonic connections.',
      details: 'Join us for an evening of meeting new people and making lasting friendships. Light refreshments will be provided.',
      organizer: 'Social Committee',
      take_to: "https://docs.google.com/forms/d/e/1FAIpQLSevn25-eWmXPkwpPu3w1kurqHe4qBIEaXc6ZMyi_qVneNsIxw/viewform"
    },
    {
      id: 2,
      title: 'TRIVIA NIGHT',
      date: 'NOV. 28, 2024',
      time: '6 PM - 9 PM',
      location: 'Location is TBD',
      status: 'RSVP',
      type: 'Entertainment',
      image: TriviaNight,
      description: 'Test your knowledge across various categories in our monthly trivia competition!',
      details: 'Teams of 4-6 people will compete in multiple rounds covering pop culture, history, science, and more. Prizes for top 3 teams!',
      organizer: 'Events Committee',
      take_to: "https://docs.google.com/forms/d/e/1FAIpQLSf6zeis8JKANFGzHJ_T5Jxf4Ov1faUkUL0VTHLYtI43eEVTiA/viewform"
    },
    {
      id: 3,
      title: 'CLUB FAIR',
      subtitle: 'STUDENT COMMUNITY & LEADERSHIP DEVELOPMENT',
      date: 'NOVEMBER 19',
      time: '10AM-4PM',
      location: 'YH/RGSS/CSQ',
      status: 'Tabling at the SCLD Club Fair at York University',
      type: 'Fair',
      image: ClubFair,
      description: 'Discover student organizations and get involved in campus life!',
      details: 'Visit our table to learn about joining our community and upcoming events. Meet current members and sign up for future activities.',
      organizer: 'SCLD',
      take_to: ""
    },
    {
      id: 4,
      title: 'THE FIRST GENERAL MEETING',
      date: 'OCT. 27, 2024',
      time: '2 PM',
      location: 'ONLINE',
      status: 'Virtual Event',
      type: 'Meeting',
      image: Meeting,
      description: 'Join us for our inaugural general meeting to learn about our mission and upcoming plans.',
      details: 'This virtual meeting will cover our organization goals, upcoming events, and how to get involved. All members and interested students welcome.',
      organizer: 'Executive Team',
      take_to: ""
    }
  ];

  const openModal = (event: any) => {
    setSelectedEvent(event);
  };

  const closeModal = () => {
    setSelectedEvent(null);
  };

  return (
    <div className="pt-24 pb-16 px-6 min-h-screen">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4 text-white">Events</h1>
          <p className="text-xl text-gray-300">Upcoming & Past Events</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {events.map((event) => (
            <div 
              key={event.id}
              className="bg-red-900/30 backdrop-blur-sm border border-red-800/40 rounded-2xl p-8 hover:border-red-600/60 transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="text-center">
                <div className="mb-6">
                  <img 
                    src={event.image} 
                    alt={event.title}
                    className="w-full h-full object-cover rounded-xl mb-4"
                  />
                </div>
                <h2 className="text-3xl font-bold text-white mb-2">
                  {event.title}
                </h2>
                {event.subtitle && (
                  <div className="mb-4">
                    <div className="text-lg font-semibold text-red-300">
                      {event.subtitle.split(' ').map((word, i) => (
                        <div key={i} className="text-xl">{word.charAt(0)}</div>
                      )).slice(0, 4)}
                    </div>
                  </div>
                )}
                
                <div className="space-y-2 mb-6">
                  <div className="text-red-300 font-semibold text-lg">
                    {event.date}
                  </div>
                  <div className="text-red-200">
                    {event.time}
                  </div>
                  <div className="text-red-400 text-sm">
                    {event.status}
                  </div>
                </div>

                <div className="bg-red-800/20 rounded-lg p-3 mb-6">
                  <div className="text-white font-medium text-sm">
                    {event.location}
                  </div>
                </div>

                <button
                  onClick={() => openModal(event)}
                  className="bg-red-700/80 hover:bg-red-600 text-white px-8 py-2 rounded-lg transition-colors duration-200 font-medium"
                >
                  Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedEvent && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-6">
          <div className="bg-red-900/90 border border-red-700/50 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-8">
              <div className="flex justify-between items-start mb-6">
                <div className="flex items-center space-x-4">
                  <img 
                    src={selectedEvent.image} 
                    alt={selectedEvent.title}
                    className="w-16 h-16 object-cover rounded-lg"
                  />
                  <div>
                    <h2 className="text-3xl font-bold text-white">
                      {selectedEvent.title}
                    </h2>
                    {selectedEvent.subtitle && (
                      <p className="text-red-300 text-lg">{selectedEvent.subtitle}</p>
                    )}
                  </div>
                </div>
                <button
                  onClick={closeModal}
                  className="text-gray-400 hover:text-white transition-colors p-2"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-red-800/30 rounded-lg p-4">
                    <div className="flex items-center space-x-2 mb-2">
                      <Calendar className="w-5 h-5 text-red-300" />
                      <span className="text-red-300 font-medium">Date & Time</span>
                    </div>
                    <p className="text-white">{selectedEvent.date}</p>
                    <p className="text-gray-300">{selectedEvent.time}</p>
                  </div>

                  <div className="bg-red-800/30 rounded-lg p-4">
                    <div className="flex items-center space-x-2 mb-2">
                      <MapPin className="w-5 h-5 text-red-300" />
                      <span className="text-red-300 font-medium">Location</span>
                    </div>
                    <p className="text-white">{selectedEvent.location}</p>
                  </div>

                  <div className="bg-red-800/30 rounded-lg p-4">
                    <div className="flex items-center space-x-2 mb-2">
                      <Heart className="w-5 h-5 text-red-300" />
                      <span className="text-red-300 font-medium">Organizer</span>
                    </div>
                    <p className="text-white">{selectedEvent.organizer}</p>
                  </div>
                </div>

                <div className="bg-red-800/20 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-red-300 mb-3">About This Event</h3>
                  <p className="text-gray-300 mb-4">{selectedEvent.description}</p>
                  <p className="text-gray-400">{selectedEvent.details}</p>
                </div>

                <div className="flex space-x-4">
                  <button className="bg-red-600 hover:bg-red-500 text-white px-6 py-3 rounded-lg transition-colors font-medium flex-1">
                    {selectedEvent.status === 'RSVP' ? 'RSVP Now' : 'Learn More'}
                  </button>
                  <button 
                    onClick={closeModal}
                    className="bg-gray-700 hover:bg-gray-600 text-white px-6 py-3 rounded-lg transition-colors font-medium"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Events;