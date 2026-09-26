import { sanityClient } from "./sanityClient";
import { workshopsQuery } from "./queries";

export async function getWorkshops() {
  const workshops = await sanityClient.fetch(workshopsQuery);

  return workshops;
}