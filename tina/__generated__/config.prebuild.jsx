// tina/config.ts
import { defineConfig } from "tinacms";
var branch = "main";
var config_default = defineConfig({
  branch,
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  token: process.env.TINA_TOKEN,
  build: {
    outputFolder: "admin",
    publicFolder: "public"
  },
  // security: {
  //   useGitAuth: false,
  // },
  media: {
    tina: {
      mediaRoot: "media",
      publicFolder: "public"
    }
  },
  schema: {
    collections: [
      {
        name: "home",
        label: "Home Page",
        path: "src/Data",
        format: "json",
        match: {
          include: "Home"
        },
        fields: [
          {
            type: "object",
            name: "conference",
            label: "Conference Data",
            fields: [
              {
                type: "object",
                name: "hero",
                label: "Hero Section",
                fields: [
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "tagline", label: "Tagline" },
                  { type: "string", name: "date", label: "Date" },
                  { type: "string", name: "location", label: "Location" },
                  { type: "string", name: "description", label: "Description" },
                  {
                    type: "object",
                    name: "countdown",
                    label: "Countdown",
                    fields: [
                      { type: "number", name: "days", label: "Days" },
                      { type: "number", name: "hours", label: "Hours" },
                      { type: "number", name: "minutes", label: "Minutes" },
                      { type: "number", name: "seconds", label: "Seconds" }
                    ]
                  }
                ]
              },
              {
                type: "object",
                name: "about",
                label: "About Section",
                fields: [
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "description", label: "Description" },
                  {
                    type: "object",
                    name: "vision",
                    label: "Vision",
                    fields: [
                      { type: "string", name: "title", label: "Title" },
                      { type: "string", name: "content", label: "Content" }
                    ]
                  },
                  {
                    type: "object",
                    name: "mission",
                    label: "Mission",
                    fields: [
                      { type: "string", name: "title", label: "Title" },
                      { type: "string", name: "content", label: "Content" }
                    ]
                  },
                  {
                    type: "object",
                    name: "stats",
                    label: "Statistics",
                    list: true,
                    fields: [
                      { type: "string", name: "value", label: "Value" },
                      { type: "string", name: "label", label: "Label" }
                    ]
                  }
                ]
              },
              {
                type: "object",
                name: "focusAreas",
                label: "Focus Areas Section",
                fields: [
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "subtitle", label: "Subtitle" },
                  {
                    type: "object",
                    name: "areas",
                    label: "Focus Areas",
                    list: true,
                    fields: [
                      { type: "string", name: "title", label: "Title" },
                      { type: "string", name: "description", label: "Description" }
                    ]
                  }
                ]
              },
              {
                type: "object",
                name: "featuredSpeakers",
                label: "Featured Speakers Section",
                fields: [
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "subtitle", label: "Subtitle" },
                  {
                    type: "object",
                    name: "speakers",
                    label: "Speakers",
                    list: true,
                    fields: [
                      { type: "string", name: "name", label: "Name" },
                      { type: "string", name: "title", label: "Title/Position" },
                      { type: "image", name: "image", label: "Speaker Image" }
                    ]
                  }
                ]
              },
              {
                type: "object",
                name: "agenda",
                label: "Agenda Section",
                fields: [
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "subtitle", label: "Subtitle" },
                  {
                    type: "object",
                    name: "days",
                    label: "Days",
                    list: true,
                    fields: [
                      { type: "string", name: "title", label: "Day Title" },
                      {
                        type: "object",
                        name: "sessions",
                        label: "Sessions",
                        list: true,
                        fields: [
                          { type: "string", name: "time", label: "Time" },
                          { type: "string", name: "title", label: "Title" },
                          { type: "string", name: "description", label: "Description" }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                type: "object",
                name: "registration",
                label: "Registration Section",
                fields: [
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "description", label: "Description" },
                  {
                    type: "object",
                    name: "tickets",
                    label: "Ticket Types",
                    list: true,
                    fields: [
                      { type: "string", name: "type", label: "Ticket Type" },
                      { type: "string", name: "description", label: "Description" }
                    ]
                  },
                  {
                    type: "object",
                    name: "earlyBird",
                    label: "Early Bird Registration",
                    fields: [
                      { type: "string", name: "text", label: "Text" },
                      { type: "string", name: "date", label: "Date" },
                      {
                        type: "object",
                        name: "countdown",
                        label: "Countdown",
                        fields: [
                          { type: "number", name: "days", label: "Days" },
                          { type: "number", name: "hours", label: "Hours" },
                          { type: "number", name: "minutes", label: "Minutes" }
                        ]
                      }
                    ]
                  },
                  { type: "string", name: "note", label: "Additional Note" }
                ]
              },
              {
                type: "object",
                name: "venue",
                label: "Venue Section",
                fields: [
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "subtitle", label: "Subtitle" },
                  { type: "string", name: "name", label: "Venue Name" },
                  { type: "string", name: "location", label: "Location" },
                  { type: "string", name: "description", label: "Description" },
                  { type: "string", name: "details", label: "Additional Details" },
                  {
                    type: "string",
                    name: "features",
                    label: "Venue Features",
                    list: true
                  }
                ]
              },
              {
                type: "object",
                name: "sponsors",
                label: "Sponsors Section",
                fields: [
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "subtitle", label: "Subtitle" },
                  {
                    type: "object",
                    name: "tiers",
                    label: "Sponsor Tiers",
                    list: true,
                    fields: [
                      { type: "string", name: "name", label: "Tier Name" },
                      { type: "number", name: "count", label: "Number of Sponsors" },
                      { type: "boolean", name: "placeholder", label: "Is Placeholder" }
                    ]
                  },
                  {
                    type: "object",
                    name: "cta",
                    label: "Call to Action",
                    fields: [
                      { type: "string", name: "text", label: "CTA Text" },
                      { type: "string", name: "description", label: "CTA Description" }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        name: "about",
        label: "About Page",
        path: "src/Data",
        format: "json",
        match: {
          include: "About"
        },
        fields: [
          {
            type: "object",
            name: "aboutConference",
            label: "About Conference",
            fields: [
              {
                type: "object",
                name: "header",
                label: "Header",
                fields: [
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "subtitle", label: "Subtitle" },
                  { type: "string", name: "description", label: "Description" },
                  { type: "string", name: "additionalDescription", label: "Additional Description" }
                ]
              },
              {
                type: "object",
                name: "visionMission",
                label: "Vision & Mission",
                fields: [
                  {
                    type: "object",
                    name: "vision",
                    label: "Vision",
                    fields: [
                      { type: "string", name: "title", label: "Title" },
                      { type: "string", name: "content", label: "Content" },
                      { type: "string", name: "additionalContent", label: "Additional Content" }
                    ]
                  },
                  {
                    type: "object",
                    name: "mission",
                    label: "Mission",
                    fields: [
                      { type: "string", name: "title", label: "Title" },
                      { type: "string", name: "content", label: "Content" },
                      { type: "string", name: "additionalContent", label: "Additional Content" }
                    ]
                  }
                ]
              },
              {
                type: "object",
                name: "goals",
                label: "Conference Goals",
                fields: [
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "subtitle", label: "Subtitle" },
                  {
                    type: "object",
                    name: "items",
                    label: "Goal Items",
                    list: true,
                    fields: [
                      { type: "string", name: "title", label: "Title" },
                      { type: "string", name: "description", label: "Description" }
                    ]
                  }
                ]
              },
              {
                type: "object",
                name: "benefits",
                label: "Conference Benefits",
                fields: [
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "subtitle", label: "Subtitle" },
                  {
                    type: "object",
                    name: "items",
                    label: "Benefit Items",
                    list: true,
                    fields: [
                      { type: "string", name: "id", label: "ID" },
                      { type: "string", name: "title", label: "Title" },
                      { type: "string", name: "description", label: "Description" }
                    ]
                  }
                ]
              },
              {
                type: "object",
                name: "committee",
                label: "Organizing Committee",
                fields: [
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "subtitle", label: "Subtitle" },
                  {
                    type: "object",
                    name: "members",
                    label: "Committee Members",
                    list: true,
                    fields: [
                      { type: "string", name: "name", label: "Name" },
                      { type: "string", name: "role", label: "Role" }
                    ]
                  }
                ]
              },
              {
                type: "object",
                name: "faqs",
                label: "Frequently Asked Questions",
                fields: [
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "subtitle", label: "Subtitle" },
                  {
                    type: "object",
                    name: "items",
                    label: "FAQ Items",
                    list: true,
                    fields: [
                      { type: "string", name: "question", label: "Question" },
                      { type: "string", name: "answer", label: "Answer" }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        name: "contact",
        label: "Contact Page",
        path: "src/Data",
        format: "json",
        match: {
          include: "Contact"
        },
        fields: [
          {
            type: "object",
            name: "sections",
            label: "Contact Sections",
            list: true,
            fields: [
              { type: "string", name: "title", label: "Section Title" },
              {
                type: "object",
                name: "items",
                label: "Contact Items",
                list: true,
                fields: [
                  { type: "string", name: "label", label: "Label" },
                  { type: "string", name: "value", label: "Value" },
                  {
                    type: "string",
                    name: "type",
                    label: "Contact Type",
                    options: [
                      { label: "Email", value: "email" },
                      { label: "Phone", value: "phone" },
                      { label: "Address", value: "address" },
                      { label: "Text", value: "text" }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        name: "agenda",
        label: "Agenda",
        path: "src/Data",
        format: "json",
        match: {
          include: "Agenda"
        },
        fields: [
          {
            type: "object",
            name: "conferenceOverview",
            label: "Conference Overview",
            fields: [
              {
                type: "object",
                name: "header",
                label: "Header",
                fields: [
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "subtitle", label: "Subtitle" },
                  { type: "string", name: "description", label: "Description" }
                ]
              },
              {
                type: "object",
                name: "days",
                label: "Conference Days",
                list: true,
                fields: [
                  { type: "string", name: "title", label: "Day Title" },
                  { type: "string", name: "date", label: "Date" },
                  {
                    type: "string",
                    name: "tracks",
                    label: "Tracks",
                    list: true,
                    description: "List of track names (e.g., Manufacturing, Healthcare, Textile)"
                  },
                  {
                    type: "object",
                    name: "sessions",
                    label: "Sessions",
                    list: true,
                    fields: [
                      { type: "string", name: "time", label: "Time Slot" },
                      { type: "string", name: "title", label: "Session Title", description: "Leave empty for parallel track sessions" },
                      { type: "string", name: "description", label: "Description", description: "Leave empty for parallel track sessions" },
                      {
                        type: "string",
                        name: "type",
                        label: "Session Type",
                        options: [
                          { label: "General", value: "General" },
                          { label: "Keynote", value: "Keynote" },
                          { label: "Plenary", value: "Plenary" },
                          { label: "Panel", value: "Panel" },
                          { label: "Networking", value: "Networking" },
                          { label: "Closing", value: "Closing" }
                        ],
                        description: "Only for main sessions, not for parallel track sessions"
                      },
                      { type: "string", name: "speaker", label: "Speaker", description: "Leave empty for sessions without speakers" },
                      { type: "string", name: "participants", label: "Participants", description: "For panel discussions" },
                      { type: "string", name: "location", label: "Location" },
                      { type: "string", name: "format", label: "Format", description: "For workshops or special formats" },
                      {
                        type: "object",
                        name: "sessions",
                        label: "Parallel Track Sessions",
                        description: "Use for parallel sessions across different tracks",
                        list: true,
                        fields: [
                          { type: "string", name: "title", label: "Track Session Title" },
                          { type: "string", name: "description", label: "Track Session Description" },
                          {
                            type: "string",
                            name: "track",
                            label: "Track Name",
                            options: [
                              { label: "Manufacturing", value: "Manufacturing" },
                              { label: "Healthcare", value: "Healthcare" },
                              { label: "Textile", value: "Textile" }
                            ]
                          },
                          { type: "string", name: "speaker", label: "Speaker", description: "Leave empty for sessions without speakers" },
                          { type: "string", name: "location", label: "Location" },
                          {
                            type: "string",
                            name: "format",
                            label: "Format",
                            options: [
                              { label: "Workshop", value: "Workshop" },
                              { label: "Panel Discussion", value: "Panel Discussion" },
                              { label: "Technical", value: "Technical" }
                            ]
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        name: "venue",
        label: "Venue Information",
        path: "src/Data",
        format: "json",
        match: {
          include: "Venue"
        },
        fields: [
          {
            type: "object",
            name: "conference",
            label: "Conference",
            fields: [
              {
                type: "object",
                name: "venue",
                label: "Venue",
                fields: [
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "location", label: "Location" },
                  { type: "string", name: "description", label: "Description" },
                  { type: "string", name: "description2", label: "Additional Description" },
                  { type: "string", list: true, name: "facilities", label: "Facilities" }
                ]
              },
              {
                type: "object",
                name: "aboutCoimbatore",
                label: "About Coimbatore",
                fields: [
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "subtitle", label: "Subtitle" },
                  {
                    type: "object",
                    name: "highlights",
                    label: "Highlights",
                    list: true,
                    fields: [
                      { type: "string", name: "title", label: "Title" },
                      { type: "string", name: "description", label: "Description" }
                    ]
                  }
                ]
              },
              {
                type: "object",
                name: "travelInfo",
                label: "Travel Information",
                fields: [
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "subtitle", label: "Subtitle" },
                  {
                    type: "object",
                    name: "options",
                    label: "Travel Options",
                    list: true,
                    fields: [
                      { type: "string", name: "mode", label: "Travel Mode" },
                      { type: "string", name: "details", label: "Details" },
                      { type: "string", name: "additionalInfo", label: "Additional Information" }
                    ]
                  }
                ]
              },
              {
                type: "object",
                name: "accommodation",
                label: "Accommodation",
                fields: [
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "subtitle", label: "Subtitle" },
                  { type: "string", name: "description", label: "Description" },
                  { type: "string", name: "note", label: "Special Note" },
                  {
                    type: "object",
                    name: "options",
                    label: "Accommodation Options",
                    list: true,
                    fields: [
                      { type: "string", name: "type", label: "Accommodation Type" },
                      { type: "string", name: "description", label: "Description" },
                      { type: "string", name: "priceRange", label: "Price Range" }
                    ]
                  },
                  { type: "string", name: "footerNote", label: "Footer Note" }
                ]
              },
              {
                type: "object",
                name: "localAttractions",
                label: "Local Attractions",
                fields: [
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "subtitle", label: "Subtitle" },
                  {
                    type: "object",
                    name: "attractions",
                    label: "Attractions",
                    list: true,
                    fields: [
                      { type: "string", name: "name", label: "Attraction Name" },
                      { type: "string", name: "description", label: "Description" },
                      { type: "string", name: "distance", label: "Distance" }
                    ]
                  },
                  { type: "string", name: "footerNote", label: "Footer Note" }
                ]
              }
            ]
          }
        ]
      },
      {
        name: "speakers",
        label: "Speakers",
        path: "src/Data",
        format: "json",
        match: {
          include: "Speaker"
        },
        fields: [
          {
            type: "object",
            name: "speakers",
            label: "Speakers Information",
            fields: [
              {
                type: "object",
                name: "header",
                label: "Header",
                fields: [
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "subtitle", label: "Subtitle" },
                  { type: "string", name: "description", label: "Description" }
                ]
              },
              {
                type: "object",
                name: "keynoteSpeakers",
                label: "Keynote Speakers",
                fields: [
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "subtitle", label: "Subtitle" },
                  {
                    type: "object",
                    name: "speakers",
                    label: "Keynote Speakers List",
                    list: true,
                    fields: [
                      { type: "string", name: "name", label: "Name" },
                      { type: "string", name: "title", label: "Title/Position" },
                      { type: "string", name: "affiliation", label: "Affiliation" },
                      { type: "image", name: "image", label: "Speaker Image" },
                      { type: "string", name: "category", label: "Category" }
                    ]
                  }
                ]
              },
              {
                type: "object",
                name: "industrySpeakers",
                label: "Industry Speakers",
                fields: [
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "subtitle", label: "Subtitle" },
                  {
                    type: "object",
                    name: "tracks",
                    label: "Speaker Tracks",
                    list: true,
                    fields: [
                      { type: "string", name: "name", label: "Track Name" },
                      {
                        type: "object",
                        name: "speakers",
                        label: "Track Speakers",
                        list: true,
                        fields: [
                          { type: "string", name: "name", label: "Name" },
                          { type: "string", name: "title", label: "Title/Position" },
                          { type: "string", name: "affiliation", label: "Affiliation" },
                          { type: "image", name: "image", label: "Speaker Image" },
                          { type: "string", name: "category", label: "Category" }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                type: "object",
                name: "becomeSpeaker",
                label: "Become a Speaker",
                fields: [
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "subtitle", label: "Subtitle" },
                  { type: "string", name: "description", label: "Description" },
                  {
                    type: "string",
                    name: "benefits",
                    label: "Speaker Benefits",
                    list: true
                  },
                  {
                    type: "object",
                    name: "timeline",
                    label: "Application Timeline",
                    list: true,
                    fields: [
                      { type: "string", name: "date", label: "Date" },
                      { type: "string", name: "event", label: "Event" },
                      { type: "string", name: "description", label: "Description" }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        name: "sponsors",
        label: "Sponsors",
        path: "src/Data",
        format: "json",
        match: {
          include: "Sponsors_m"
        },
        fields: [
          {
            type: "object",
            name: "sponsors",
            label: "Sponsors Information",
            fields: [
              {
                type: "object",
                name: "header",
                label: "Sponsors Header",
                fields: [
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "subtitle", label: "Subtitle" },
                  { type: "string", name: "description", label: "Description" }
                ]
              },
              {
                type: "object",
                name: "tiers",
                label: "Sponsor Tiers",
                fields: [
                  {
                    type: "object",
                    name: "platinum",
                    label: "Platinum Tier",
                    fields: [
                      { type: "string", name: "title", label: "Title" },
                      {
                        type: "object",
                        name: "sponsors",
                        label: "Platinum Sponsors",
                        list: true,
                        fields: [
                          { type: "string", name: "name", label: "Sponsor Name" },
                          { type: "string", name: "cta", label: "Call to Action" },
                          { type: "boolean", name: "placeholder", label: "Is Placeholder" }
                        ]
                      }
                    ]
                  },
                  {
                    type: "object",
                    name: "gold",
                    label: "Gold Tier",
                    fields: [
                      { type: "string", name: "title", label: "Title" },
                      {
                        type: "object",
                        name: "sponsors",
                        label: "Gold Sponsors",
                        list: true,
                        fields: [
                          { type: "string", name: "name", label: "Sponsor Name" },
                          { type: "string", name: "cta", label: "Call to Action" },
                          { type: "boolean", name: "placeholder", label: "Is Placeholder" }
                        ]
                      }
                    ]
                  },
                  {
                    type: "object",
                    name: "silver",
                    label: "Silver Tier",
                    fields: [
                      { type: "string", name: "title", label: "Title" },
                      {
                        type: "object",
                        name: "sponsors",
                        label: "Silver Sponsors",
                        list: true,
                        fields: [
                          { type: "string", name: "name", label: "Sponsor Name" },
                          { type: "boolean", name: "placeholder", label: "Is Placeholder" }
                        ]
                      }
                    ]
                  },
                  {
                    type: "object",
                    name: "bronze",
                    label: "Bronze Tier",
                    fields: [
                      { type: "string", name: "title", label: "Title" },
                      {
                        type: "object",
                        name: "sponsors",
                        label: "Bronze Sponsors",
                        list: true,
                        fields: [
                          { type: "string", name: "name", label: "Sponsor Name" },
                          { type: "boolean", name: "placeholder", label: "Is Placeholder" }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                type: "object",
                name: "packages",
                label: "Sponsorship Packages",
                fields: [
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "subtitle", label: "Subtitle" },
                  { type: "string", name: "description", label: "Description" },
                  {
                    type: "object",
                    name: "tiers",
                    label: "Package Tiers",
                    list: true,
                    fields: [
                      { type: "string", name: "name", label: "Tier Name" },
                      { type: "string", name: "price", label: "Price" },
                      {
                        type: "string",
                        name: "benefits",
                        label: "Benefits",
                        list: true
                      }
                    ]
                  }
                ]
              },
              {
                type: "object",
                name: "custom",
                label: "Custom Sponsorship",
                fields: [
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "subtitle", label: "Subtitle" },
                  { type: "string", name: "description", label: "Description" },
                  {
                    type: "object",
                    name: "options",
                    label: "Custom Options",
                    list: true,
                    fields: [
                      { type: "string", name: "name", label: "Option Name" },
                      { type: "string", name: "description", label: "Description" },
                      { type: "string", name: "price", label: "Price" }
                    ]
                  },
                  { type: "string", name: "cta", label: "Call to Action" }
                ]
              },
              {
                type: "object",
                name: "benefits",
                label: "Sponsorship Benefits",
                fields: [
                  { type: "string", name: "title", label: "Title" },
                  {
                    type: "object",
                    name: "items",
                    label: "Benefit Items",
                    list: true,
                    fields: [
                      { type: "string", name: "title", label: "Benefit Title" },
                      { type: "string", name: "description", label: "Description" }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  }
});
export {
  config_default as default
};
