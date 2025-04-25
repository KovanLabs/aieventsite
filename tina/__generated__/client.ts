import { createClient } from "tinacms/dist/client";
import { queries } from "./types";
export const client = createClient({ url: 'http://localhost:4001/graphql', token: '78c3016fc28b5a049ea380b9a8e500e457242952', queries,  });
export default client;
  