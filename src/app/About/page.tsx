
import AboutConference from "./Components/About-conference";
import conferenceData from "../../Data/About.json";

export default function About() {
    return (
        <main className="min-h-screen bg-black text-white">
            <div className="relative w-full overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 py-8"></div>
                    <AboutConference data={conferenceData.aboutConference} />
                </div>
        </main>
    );
}