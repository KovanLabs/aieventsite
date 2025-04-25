import { createClient } from "tinacms/dist/client";
import { queries } from "../../tina/__generated__/types";

// Check if we're in local mode
const isLocal = process.env.TINA_PUBLIC_IS_LOCAL === "false";

export const client = createClient({
  queries,
  url: isLocal
    ? "http://localhost:4001/graphql"
    : process.env.NEXT_PUBLIC_TINA_CLIENT_URL ||
      "https://content.tinajs.io/1.5/content/" +
        (process.env.NEXT_PUBLIC_TINA_CLIENT_ID || "") +
        "/github/main",
  token: process.env.TINA_TOKEN || "",
});

// Helper functions to load data with fallbacks to local files
export async function getHomeData() {
  try {
    const response = await client.queries.home({ relativePath: "Home.json" });
    return response.data;
  } catch (error) {
    console.error("Error fetching home data from TinaCMS:", error);
    const { loadLocalContent } = await import("./local-content");
    const localData = loadLocalContent("Home.json");
    return { conference: localData?.conference };
  }
}

export async function getAboutData() {
  try {
    const response = await client.queries.about({ relativePath: "About.json" });
    return response.data;
  } catch (error) {
    console.error("Error fetching about data from TinaCMS:", error);
    const { loadLocalContent } = await import("./local-content");
    const localData = loadLocalContent("About.json");
    return { aboutConference: localData?.aboutConference };
  }
}

export async function getVenueData() {
  try {
    const response = await client.queries.venue({ relativePath: "Venue.json" });
    return response.data.venue;
  } catch (error) {
    console.error("Error fetching venue data from TinaCMS:", error);
    const { loadLocalContent } = await import("./local-content");
    const localData = loadLocalContent("Venue.json");
    return localData?.conference;
  }
}

export async function getAgendaData() {
  try {
    const response = await client.queries.agenda({
      relativePath: "Agenda.json",
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching agenda data from TinaCMS:", error);
    const { loadLocalContent } = await import("./local-content");
    const localData = loadLocalContent("Agenda.json");
    return { conferenceOverview: localData?.conferenceOverview };
  }
}

export async function getSpeakersData() {
  try {
    const response = await client.queries.speakers({
      relativePath: "Speaker.json",
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching speakers data from TinaCMS:", error);
    const { loadLocalContent } = await import("./local-content");
    const localData = loadLocalContent("Speaker.json");
    return { speakers: localData?.speakers };
  }
}

export async function getSponsorsData() {
  try {
    const response = await client.queries.sponsors({
      relativePath: "Sponsors_m.json",
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching sponsors data from TinaCMS:", error);
    const { loadLocalContent } = await import("./local-content");
    const localData = loadLocalContent("Sponsors_m.json");
    return { sponsors: localData?.sponsors };
  }
}

export async function getContactData() {
  try {
    const response = await client.queries.contact({
      relativePath: "Contact.json",
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching contact data from TinaCMS:", error);
    const { loadLocalContent } = await import("./local-content");
    const localData = loadLocalContent("Contact.json");
    return { sections: localData?.sections };
  }
}
