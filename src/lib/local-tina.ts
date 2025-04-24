import { createClient } from "tinacms/dist/client";
import { queries } from "../../tina/__generated__/types";

// Import JSON files
import HomeData from "../Data/Home.json";
import AboutData from "../Data/About.json";
import VenueData from "../Data/Venue.json";
import AgendaData from "../Data/Agenda.json";
import SpeakerData from "../Data/Speaker.json";
import SponsorsData from "../Data/Sponsors_m.json";
import ContactData from "../Data/Contact.json";

// Create a mock client that doesn't require authentication
export const client = createClient({
    queries,
    url:
        process.env.NEXT_PUBLIC_TINA_CLIENT_URL || "http://localhost:4001/graphql",
    token: process.env.TINA_TOKEN || "",
});

// Mock implementation for data functions that return local JSON data
export async function getHomeData() {
    return { conference: HomeData.conference };
}

export async function getAboutData() {
    return { aboutConference: AboutData.aboutConference };
}

export async function getVenueData() {
    return VenueData.conference;
}

export async function getAgendaData() {
    return {
        conferenceOverview: AgendaData.conferenceOverview,
    };
}

export async function getSpeakersData() {
    return { speakers: SpeakerData.speakers };
}

export async function getSponsorsData() {
    return { sponsors: SponsorsData.sponsors };
}

export async function getContactData() {
    return { sections: ContactData.sections };
}
