import { createClient } from "next-sanity";

const config = {
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION,
  useCdn: process.env.NODE_ENV === "production",
  token: process.env.SANITY_API_READ_TOKEN,
};

if (!config.projectId) {
  throw new Error("Sanity Project ID is missing. Add NEXT_PUBLIC_SANITY_PROJECT_ID to .env");
}

export const client = createClient(config);
