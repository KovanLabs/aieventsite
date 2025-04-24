// page.tsx - Server Component
import { getVenueData } from '../../lib/tina';
import VenueClient from './VenueClient';

export default async function VenuePage() {
  // Fetch data from TinaCMS
  const data = await getVenueData();
  
  // Pass the data to the client component
  return <VenueClient initialData={data} />;
}

// // VenueClient.tsx - Client Component (contains all your existing code)
// "use client";

// import { motion } from "framer-motion";
// import { useState } from "react";

// export default function VenueClient({ initialData }) {
//   const [activeTab, setActiveTab] = useState("venue");
//   const data = initialData;

//   const tabs = [
//     { id: "venue", label: "Venue" },
//     { id: "aboutCoimbatore", label: "About Coimbatore" },
//     { id: "travelInfo", label: "Travel Info" },
//     { id: "accommodation", label: "Accommodation" },
//     { id: "localAttractions", label: "Attractions" },
//   ];

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-[#171923] to-black pb-20">
//       {/* Header */}
//       <div className="relative py-16 md:py-24 overflow-hidden">
//         <div className="absolute inset-0 z-0 opacity-30">
//           <div className="absolute inset-0 bg-gradient-to-b from-black to-transparent z-10"></div>
//           <img 
//             src="https://imgs.search.brave.com/TDA1HT6D_Rrjq-tIIZUg3x-_lppAxZ4z0MLY1CuvWc8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/dGFtaWxuYWR1dG91/cmlzbS50bi5nb3Yu/aW4vaW1nL3BhZ2Vz/L2xhcmdlLWRlc2t0/b3AvY29pbWJhdG9y/ZS0xNjU2MDkyNTk1/XzE5ZTlmY2ViZDc3/NGFiMzhkMGE1Lndl/YnA" 
//             alt="Coimbatore" 
//             className="object-cover w-full h-full"
//           />
//         </div>
        
//         <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <motion.h1 
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5 }}
//             className="text-4xl md:text-6xl font-bold text-white mb-4"
//           >
//             Venue & Travel Information
//           </motion.h1>
          
//           <motion.p 
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0.1 }}
//             className="text-xl text-white/80 max-w-3xl mx-auto"
//           >
//             Everything you need to know about the KovAI Conference 2025 location
//           </motion.p>
//         </div>
//       </div>

//       {/* Tab Navigation */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 mt-5">
//         <div className="flex flex-wrap justify-center gap-2 md:gap-4">
//           {tabs.map((tab) => (
//             <motion.button
//               key={tab.id}
//               onClick={() => setActiveTab(tab.id)}
//               className={`px-4 py-2 rounded-full text-sm md:text-base ${
//                 activeTab === tab.id
//                   ? "bg-green-400 text-black font-medium"
//                   : "bg-black/40 backdrop-blur-sm text-white/70 hover:text-white/90 border border-white/10"
//               }`}
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.98 }}
//             >
//               {tab.label}
//             </motion.button>
//           ))}
//         </div>
//       </div>

//       {/* Content Area */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
//         {/* Venue Information */}
//         {activeTab === "venue" && (
//           <motion.div 
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5 }}
//             className="space-y-8"
//           >
//             <div className="bg-black/40 backdrop-blur-xl rounded-2xl p-8 border border-[#40ffaa]/20 shadow-[0_4px_30px_rgba(64,255,170,0.1)]">
//               <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#40ffaa] to-[#4079ff] mb-6">
//                 {data.venue.title}
//               </h2>
              
//               <div className="mb-6">
//                 <h3 className="text-xl font-semibold text-white mb-2">
//                   {data.venue.location}
//                 </h3>
//                 <p className="text-white/80 mb-4">
//                   {data.venue.description}
//                 </p>
//                 <p className="text-white/80">
//                   {data.venue.description2}
//                 </p>
//               </div>
              
//               <div>
//                 <h3 className="text-xl font-semibold text-white mb-4">Venue Facilities</h3>
//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//                   {data.venue.facilities.map((facility, index) => (
//                     <motion.div 
//                       key={index}
//                       className="flex items-center space-x-3 bg-white/5 rounded-lg p-4"
//                       whileHover={{ 
//                         backgroundColor: "rgba(64, 255, 170, 0.1)",
//                         transition: { duration: 0.2 } 
//                       }}
//                     >
//                       <span className="h-3 w-3 rounded-full bg-gradient-to-r from-[#40ffaa] to-[#4079ff]"></span>
//                       <span className="text-white/90">{facility}</span>
//                     </motion.div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </motion.div>
//         )}
        
//         {/* About Coimbatore */}
//         {activeTab === "aboutCoimbatore" && (
//           <motion.div 
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5 }}
//             className="space-y-8"
//           >
//             <div className="bg-black/40 backdrop-blur-xl rounded-2xl p-8 border border-[#40ffaa]/20 shadow-[0_4px_30px_rgba(64,255,170,0.1)]">
//               <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#40ffaa] to-[#4079ff] mb-2">
//                 {data.aboutCoimbatore.title}
//               </h2>
              
//               <h3 className="text-xl text-white/80 italic mb-8">
//                 {data.aboutCoimbatore.subtitle}
//               </h3>
              
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 {data.aboutCoimbatore.highlights.map((highlight, index) => (
//                   <motion.div 
//                     key={index}
//                     className="bg-black/30 rounded-xl p-6 border border-white/5"
//                     whileHover={{ 
//                       y: -5,
//                       boxShadow: "0 10px 30px rgba(64, 255, 170, 0.15)",
//                       borderColor: "rgba(64, 255, 170, 0.3)"
//                     }}
//                     transition={{ duration: 0.3 }}
//                   >
//                     <h4 className="text-xl font-semibold text-[#40ffaa] mb-3">{highlight.title}</h4>
//                     <p className="text-white/70">{highlight.description}</p>
//                   </motion.div>
//                 ))}
//               </div>
//             </div>
//           </motion.div>
//         )}
        
//         {/* Travel Information */}
//         {activeTab === "travelInfo" && (
//           <motion.div 
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5 }}
//             className="space-y-8"
//           >
//             <div className="bg-black/40 backdrop-blur-xl rounded-2xl p-8 border border-[#40ffaa]/20 shadow-[0_4px_30px_rgba(64,255,170,0.1)]">
//               <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#40ffaa] to-[#4079ff] mb-2">
//                 {data.travelInfo.title}
//               </h2>
              
//               <h3 className="text-xl text-white/80 italic mb-8">
//                 {data.travelInfo.subtitle}
//               </h3>
              
//               <div className="space-y-6">
//                 {data.travelInfo.options.map((option, index) => (
//                   <div 
//                     key={index}
//                     className="bg-gradient-to-r from-black/40 to-black/60 rounded-xl p-6 border-l-4 border-[#40ffaa]"
//                   >
//                     <h4 className="text-xl font-semibold text-white mb-3">{option.mode}</h4>
//                     <p className="text-white/80 mb-3">{option.details}</p>
//                     <p className="text-[#40ffaa]/80 text-sm italic">{option.additionalInfo}</p>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </motion.div>
//         )}
        
//         {/* Accommodation */}
//         {activeTab === "accommodation" && (
//           <motion.div 
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5 }}
//             className="space-y-8"
//           >
//             <div className="bg-black/40 backdrop-blur-xl rounded-2xl p-8 border border-[#40ffaa]/20 shadow-[0_4px_30px_rgba(64,255,170,0.1)]">
//               <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#40ffaa] to-[#4079ff] mb-2">
//                 {data.accommodation.title}
//               </h2>
              
//               <h3 className="text-xl text-white/80 italic mb-4">
//                 {data.accommodation.subtitle}
//               </h3>
              
//               <p className="text-white/80 mb-6">{data.accommodation.description}</p>
              
//               <div className="bg-[#40ffaa]/10 rounded-lg p-4 mb-8 border border-[#40ffaa]/30">
//                 <p className="text-white font-medium">{data.accommodation.note}</p>
//               </div>
              
//               <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
//                 {data.accommodation.options.map((option, index) => (
//                   <motion.div 
//                     key={index}
//                     className="bg-black/30 rounded-xl p-6 border border-white/10"
//                     whileHover={{ scale: 1.02 }}
//                     transition={{ duration: 0.2 }}
//                   >
//                     <h4 className="text-xl font-semibold text-white mb-2">{option.type}</h4>
//                     <p className="text-white/70 mb-4 text-sm">{option.description}</p>
//                     <div className="bg-[#4079ff]/20 rounded-full px-3 py-1 inline-block">
//                       <p className="text-[#4079ff]/90 text-sm">{option.priceRange}</p>
//                     </div>
//                   </motion.div>
//                 ))}
//               </div>
              
//               <p className="text-white/60 text-sm italic">{data.accommodation.footerNote}</p>
//             </div>
//           </motion.div>
//         )}
        
//         {/* Local Attractions */}
//         {activeTab === "localAttractions" && (
//           <motion.div 
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5 }}
//             className="space-y-8"
//           >
//             <div className="bg-black/40 backdrop-blur-xl rounded-2xl p-8 border border-[#40ffaa]/20 shadow-[0_4px_30px_rgba(64,255,170,0.1)]">
//               <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#40ffaa] to-[#4079ff] mb-2">
//                 {data.localAttractions.title}
//               </h2>
              
//               <h3 className="text-xl text-white/80 italic mb-8">
//                 {data.localAttractions.subtitle}
//               </h3>
              
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
//                 {data.localAttractions.attractions.map((attraction, index) => (
//                   <motion.div 
//                     key={index}
//                     className="bg-black/20 rounded-xl overflow-hidden group"
//                     whileHover={{ y: -5 }}
//                   >
//                     <div className="h-40 bg-gradient-to-r from-[#40ffaa]/20 to-[#4079ff]/20 relative overflow-hidden">
//                       <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent z-10"></div>
//                       <div className="absolute bottom-4 left-4 z-20">
//                         <p className="text-xl font-bold text-white">{attraction.name}</p>
//                       </div>
//                     </div>
//                     <div className="p-5">
//                       <p className="text-white/80 mb-3">{attraction.description}</p>
//                       <div className="flex items-center">
//                         <svg className="w-4 h-4 text-[#40ffaa] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
//                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
//                         </svg>
//                         <span className="text-[#40ffaa]/80 text-sm">{attraction.distance}</span>
//                       </div>
//                     </div>
//                   </motion.div>
//                 ))}
//               </div>
              
//               <p className="text-white/70 text-sm italic">{data.localAttractions.footerNote}</p>
//             </div>
//           </motion.div>
//         )}
//       </div>
//     </div>
//   );
// }