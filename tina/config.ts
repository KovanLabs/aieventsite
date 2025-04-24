import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";

export default defineConfig({
  branch,
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID || "a9519ff1-7607-447f-9780-f2a06a403fde", // Get this from tina.io
  token: process.env.TINA_TOKEN || "7956ce03828d37bb990ad3555210ca96e2a146dc", // Get this from tina.io
  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "media",
      publicFolder: "public",
    },
  },
  schema: {
    collections: [
      {
        name: "home",
        label: "Home Page",
        path: "src/Data",
        format: "json",
        match: {
          include: "Home",
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
                ],
              },
              // Add more sections as needed
            ],
          },
        ],
      },
      {
        name: "about",
        label: "About Page",
        path: "src/Data",
        format: "json",
        match: {
          include: "About",
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
                  { type: "string", name: "additionalDescription", label: "Additional Description" },
                ],
              },
              // Add more fields reflecting your About.json structure
            ],
          },
        ],
      },
      {
        name: "agenda",
        label: "Agenda",
        path: "src/Data",
        format: "json",
        match: {
          include: "Agenda",
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
                  { type: "string", name: "description", label: "Description" },
                ],
              },
              // Add more fields reflecting your Agenda.json structure
            ],
          },
        ],
      },
      {
        name: "venue",
        label: "Venue Information",
        path: "src/Data",
        format: "json",
        match: {
          include: "Venue",
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
                  { type: "string", list: true, name: "facilities", label: "Facilities" },
                ],
              },
              // Add more fields reflecting your Venue.json structure
            ],
          },
        ],
      },
      {
        name: "speakers",
        label: "Speakers",
        path: "src/Data",
        format: "json",
        match: {
          include: "Speaker",
        },
        fields: [
          { type: "string", name: "title", label: "Title" },
          { type: "string", name: "subtitle", label: "Subtitle" },
          { type: "string", name: "description", label: "Description" },
        ],
      },
      {
        name: "sponsors",
        label: "Sponsors",
        path: "src/Data",
        format: "json",
        match: {
          include: "Sponsors_m",
        },
        fields: [
          { type: "string", name: "title", label: "Title" },
          { type: "string", name: "subtitle", label: "Subtitle" },
          { type: "string", name: "description", label: "Description" },
        ],
      },
    ],
  },
});