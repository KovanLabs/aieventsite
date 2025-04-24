import { createClient } from "tinacms/dist/client";
import { queries } from "./types";
export const client = createClient({ url: 'http://localhost:4001/graphql', token: '7956ce03828d37bb990ad3555210ca96e2a146dc', queries,  });
export default client;
  