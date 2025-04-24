import { createClient } from "tinacms/dist/client";
import { queries } from "../../tina/__generated__/types";

export const client = createClient({
  queries,
  url:
    process.env.NEXT_PUBLIC_TINA_CLIENT_URL || "http://localhost:4001/graphql",
  token: process.env.TINA_TOKEN,
});

export async function getHomeData() {
  const homeResponse = await client.queries.home({ relativePath: "Home.json" });
  return homeResponse.data;
}

export async function getAboutData() {
  const aboutResponse = await client.queries.about({
    relativePath: "About.json",
  });
  return aboutResponse.data;
}

export async function getVenueData() {
  try {
    const venueResponse = await client.queries.venue({
      relativePath: "Venue.json",
    });
    // Return just the conference object instead of the whole data structure
    return venueResponse.data.conference;
  } catch (error) {
    console.error("Error fetching venue data:", error);
    // Fallback to local JSON if TinaCMS query fails
    const venueData = require("../Data/Venue.json");
    return venueData.conference;
  }
}

export async function getAgendaData() {
  const agendaResponse = await client.queries.agenda({
    relativePath: "Agenda.json",
  });
  return agendaResponse.data;
}

export async function getSpeakersData() {
  const speakersResponse = await client.queries.speakers({
    relativePath: "Speaker.json",
  });
  return speakersResponse.data;
}

export async function getSponsorsData() {
  const sponsorsResponse = await client.queries.sponsors({
    relativePath: "Sponsors_m.json",
  });
  return sponsorsResponse.data;
}
