import { sanityClient } from "./sanityClient";
import { testimonialsQuery } from "./queries";
import { normalizeImage } from "./normalizeImage";

function normalizeTestimonialsSection(section) {
  return {
    id: section._id,
    eyebrow: section.eyebrow || "",
    heading: section.heading || "",
    accentHeading: section.accentHeading || "",
    description: section.description || "",
    carouselImages: (section.carouselImages || [])
    .map((image) => normalizeImage(image, 1080, 1350))
    .filter(Boolean),
    testimonial: (section.testimonial || []).map(
        (card) => ({
            quote: card.quote || "",
            name: card.name || "",
            role: card.role || "",
            organisation: card.organisation || "",
            program: card.program || "",
        })
    ),
  };
}

export async function getTestimonials() {
  const sections = await sanityClient.fetch(testimonialsQuery);

  return sections.map(normalizeTestimonialsSection);
}