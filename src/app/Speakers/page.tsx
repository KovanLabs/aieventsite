import  BecomeSpeaker  from "./Components/Become-speaker"
import speakersData from "../../Data/Speaker.json"

// This would typically come from an API or data source
// const speakersData = {
//   speakers: {
//     becomeSpeaker: {
//       title: "Become a Speaker",
//       subtitle: "Share your expertise with the AI community",
//       description:
//         "We are looking for industry experts, researchers, and practitioners to share their knowledge, case studies, and insights at KovAI Conference 2025. If you have experience implementing AI solutions in manufacturing, healthcare, or textile industries, we want to hear from you.",
//       benefits: [
//         "Complimentary conference pass",
//         "Recognition as an industry expert",
//         "Networking opportunities with peers and potential collaborators",
//         "Promotion through our marketing channels",
//       ],
//       timeline: [
//         {
//           date: "May 1, 2025",
//           event: "Call for Speakers Opens",
//           description: "Application form available online",
//         },
//         {
//           date: "July 15, 2025",
//           event: "Application Deadline",
//           description: "Last day to submit speaker proposals",
//         },
//         {
//           date: "August 1, 2025",
//           event: "Speaker Selection",
//           description: "Notification of accepted speakers",
//         },
//         {
//           date: "September 15, 2025",
//           event: "Final Materials Due",
//           description: "Submission of presentation materials",
//         },
//       ],
//     },
//   },
// }

export default function Home() {
  return (
    <main className="bg-black">
      <BecomeSpeaker data={speakersData.speakers.becomeSpeaker} />
    </main>
  )
}