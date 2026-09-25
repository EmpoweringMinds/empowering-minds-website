import { sanityClient } from "./sanityClient";
import { trainersQuery } from "./queries";
import { imageUrl } from "./imageURL";

function normalizeTrainer(trainer) {
  return {
    id: trainer._id,
    name: trainer.name,
    slug: trainer.slug?.current || "",
    role: trainer.role || "",
    designation: trainer.designation || "",
    shortTitle: trainer.shortTitle || "",
    bio: trainer.bio || "",
    expertise: trainer.expertise || [],
    image: trainer.image 
        ? imageUrl(trainer.image).url() 
        : null,
    featured: trainer.featured ?? false,
    displayOrder: trainer.displayOrder ?? 0,
    status: trainer.status || "active",
  };
}

export async function getTrainers() {
  const trainers = await sanityClient.fetch(trainersQuery);

  return trainers.map(normalizeTrainer);
}