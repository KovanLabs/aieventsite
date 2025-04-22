'use client';

import React, { useState } from 'react';
import { RetroGrid } from '@/components/magicui/retro-grid';
import GradientText from '@/components/GradientText';
import SpotlightCard from '@/components/Card';
import agendaData from '../../Data/Agenda.json';

export default function AgendaPage() {
  const [activeDay, setActiveDay] = useState(0);
  const { conferenceOverview } = agendaData;
  const { header, days } = conferenceOverview;

  return (
    <div className="relative min-h-screen mt-10 w-full overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <RetroGrid
          className="absolute inset-0 z-0"
          cellSize={80}
          opacity={0.4}
          lightLineColor="purple"
          darkLineColor="gray"
        />
      </div>

      {/* Header section */}
      <section className="relative z-10 pt-12 pb-8 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <GradientText 
            className="text-4xl md:text-6xl font-bold mb-4"
            colors={["#9F7AEA", "#4ADE80", "#9F7AEA"]}
            animationSpeed={6}
          >
            {header.title}
          </GradientText>
          <h2 className="text-xl md:text-2xl text-gray-300 font-semibold mb-4">{header.subtitle}</h2>
          <p className="text-gray-400 max-w-3xl mx-auto">{header.description}</p>
        </div>

        {/* Day selector */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-8">
          {days.map((day, index) => (
            <button
              key={index}
              onClick={() => setActiveDay(index)}
              className={`px-6 py-3 rounded-lg transition-all duration-300 
                ${activeDay === index 
                  ? 'bg-gradient-to-r from-purple-500 to-green-400 text-white shadow-lg' 
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'}`}
            >
              {day.title}
            </button>
          ))}
        </div>
      </section>

      {/* Selected day agenda */}
      <section className="relative z-10 px-4 md:px-8 pb-20 max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-semibold text-white mb-2">{days[activeDay].date}</h3>
          <div className="flex flex-wrap justify-center gap-3 mb-6">
            {days[activeDay].tracks.map((track, index) => (
              <span 
                key={index} 
                className="px-4 py-1 bg-opacity-20 bg-purple-500 rounded-full text-sm font-medium text-purple-300 border border-purple-500/30"
              >
                {track}
              </span>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div className="space-y-6">
          {days[activeDay].sessions.map((session, sessionIndex) => (
            <div key={sessionIndex} className="relative">
              {/* Time marker */}
              <div className="flex items-start gap-6">
                <div className="min-w-[120px] pt-2 md:text-right">
                  <div className="text-green-400 font-medium">{session.time}</div>
                </div>

                {/* Session content */}
                <div className="flex-1">
                  {!session.sessions ? (
                    <SpotlightCard 
                      className="p-6"
                      spotlightColor={session.type === 'Keynote' || session.type === 'Plenary' ? 'rgba(74, 222, 128, 0.2)' : 'rgba(128, 90, 213, 0.2)'}
                    >
                      <div className="space-y-2">
                        <div className="flex flex-wrap justify-between items-start gap-2">
                          <h4 className="text-xl font-medium text-white">{session.title}</h4>
                          {session.type && (
                            <span className={`px-2 py-1 rounded-md text-xs font-medium 
                              ${session.type === 'Keynote' ? 'bg-green-500/20 text-green-300' :
                                session.type === 'General' ? 'bg-gray-600/40 text-gray-300' :
                                  session.type === 'Networking' ? 'bg-blue-500/20 text-blue-300' :
                                    session.type === 'Plenary' ? 'bg-purple-500/20 text-purple-300' :
                                      session.type === 'Panel' ? 'bg-teal-500/20 text-teal-300' :
                                        session.type === 'Closing' ? 'bg-amber-500/20 text-amber-300' :
                                          'bg-gray-500/20 text-gray-300'
                              }`}
                            >
                              {session.type}
                            </span>
                          )}
                        </div>
                        <p className="text-gray-400">{session.description}</p>
                        <div className="flex flex-wrap gap-4 pt-2 text-sm">
                          {session.speaker && (
                            <div className="flex items-center gap-1">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                              </svg>
                              <span className="text-gray-300">{session.speaker}</span>
                            </div>
                          )}
                          {session.location && (
                            <div className="flex items-center gap-1">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                              </svg>
                              <span className="text-gray-300">{session.location}</span>
                            </div>
                          )}
                          {session.format && (
                            <div className="flex items-center gap-1">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                              </svg>
                              <span className="text-gray-300">{session.format}</span>
                            </div>
                          )}
                        </div>
                      </div>
                    </SpotlightCard>
                  ) : (
                    <div className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {session.sessions.map((trackSession, trackIndex) => (
                          <SpotlightCard 
                            key={trackIndex} 
                            className="p-6 h-full"
                            spotlightColor={
                              trackSession.track === 'Manufacturing' ? 'rgba(128, 90, 213, 0.2)' : 
                              trackSession.track === 'Healthcare' ? 'rgba(74, 222, 128, 0.2)' : 
                              'rgba(167, 139, 250, 0.2)'
                            }
                          >
                            <div className="space-y-2 h-full flex flex-col">
                              <div className="flex justify-between items-start gap-2">
                                <span className="px-2 py-1 rounded-md text-xs font-medium 
                                  ${trackSession.track === 'Manufacturing' ? 'bg-purple-500/20 text-purple-300' :
                                  trackSession.track === 'Healthcare' ? 'bg-green-500/20 text-green-300' :
                                  'bg-indigo-500/20 text-indigo-300'}"
                                >
                                  {trackSession.track}
                                </span>
                                {trackSession.format && (
                                  <span className="px-2 py-1 rounded-md text-xs font-medium 
                                    ${trackSession.format === 'Workshop' ? 'bg-teal-500/20 text-teal-300' :
                                      trackSession.format === 'Panel Discussion' ? 'bg-amber-500/20 text-amber-300' :
                                      trackSession.format === 'Technical' ? 'bg-blue-500/20 text-blue-300' :
                                      'bg-gray-500/20 text-gray-300'}"
                                  >
                                    {trackSession.format}
                                  </span>
                                )}
                              </div>
                              <h4 className="text-lg font-medium text-white flex-grow">{trackSession.title}</h4>
                              <p className="text-gray-400 text-sm">{trackSession.description}</p>
                              <div className="flex flex-wrap gap-4 pt-2 text-sm mt-auto">
                                {trackSession.speaker && (
                                  <div className="flex items-center gap-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                    </svg>
                                    <span className="text-gray-300">{trackSession.speaker}</span>
                                  </div>
                                )}
                                {trackSession.location && (
                                  <div className="flex items-center gap-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                    <span className="text-gray-300">{trackSession.location}</span>
                                  </div>
                                )}
                              </div>
                            </div>
                          </SpotlightCard>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Connecting line for timeline */}
              {sessionIndex < days[activeDay].sessions.length - 1 && (
                <div className="absolute left-[60px] ml-0.5 top-10 h-full w-0.5 bg-gradient-to-b from-purple-500/50 to-green-400/50" />
              )}
            </div>
          ))}
        </div>
      </section>

      {/* CTA section */}
      <section className="relative z-10 py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="text-center">
          <SpotlightCard className="p-8 md:p-12 overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to join us at KovAI Conference 2025?</h2>
              <p className="text-gray-400 mb-8 max-w-2xl mx-auto">Experience cutting-edge AI innovations and network with industry leaders in manufacturing, healthcare, and textile sectors.</p>
              <a 
                href="#" 
                className="inline-block px-8 py-4 rounded-lg bg-gradient-to-r from-purple-500 to-green-400 text-white font-medium transition-transform hover:scale-105"
              >
                Register Now
              </a>
            </div>
          </SpotlightCard>
        </div>
      </section>
    </div>
  );
}