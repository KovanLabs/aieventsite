import { createClient } from "tinacms/dist/client";
import { queries } from "./types";

// Check if we're in local mode
const isLocal = process.env.TINA_PUBLIC_IS_LOCAL === "true";

export const client = createClient({
  url: isLocal
    ? "http://localhost:4001/graphql"
    : process.env.NEXT_PUBLIC_TINA_CLIENT_URL ||
      "https://content.tinajs.io/1.5/content/" +
        (process.env.NEXT_PUBLIC_TINA_CLIENT_ID || "") +
        "/github/main",
  token: process.env.TINA_TOKEN || "",
  queries,
});

export default client;
