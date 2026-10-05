import { sanityClient } from "./sanityClient";
import { workshopsQuery } from "./queries";
import { imageUrl } from "./imageURL";

function normalizeWorkshop(workshop) {
  return {
    id: workshop._id,

    name: workshop.name || "",
    slug: workshop.slug || "",
    format: workshop.format || "",

    hero: {
      eyebrow: workshop.eyebrow || "",
      title: workshop.title || "",
      subtitle: workshop.subtitle || "",
      description: workshop.description || "",
      supportingText: workshop.supportingText || "",
    },

    body: workshop.body ?? [],

    speakers: (workshop.speakers ?? []).map((speaker) => ({
      type: speaker.type || "",

      trainer: speaker.trainer
        ? {
            name: speaker.trainer.name || "",
            designation: speaker.trainer.designation || "",
            shortTitle: speaker.trainer.shortTitle || "",
            image: speaker.trainer.image
              ? imageUrl(speaker.trainer.image).url()
              : null,
          }
        : null,

      guest: speaker.guest
        ? {
            name: speaker.guest.name || "",
            role: speaker.guest.role || "",
            bio: speaker.guest.bio || "",
            image: speaker.guest.image
              ? imageUrl(speaker.guest.image).url()
              : null,
          }
        : null,
    })),

    schedule: {
      timezone: workshop.schedule?.timezone || "",
      sessions: workshop.schedule?.sessions ?? [],
    },

    registration: {
      opensAt: workshop.registration?.opensAt || null,
      closesAt: workshop.registration?.closesAt || null,
    },

    pricing: {
      currency: workshop.pricing?.currency || "",
      regularPrice: workshop.pricing?.regularPrice ?? null,

      earlyBird: workshop.pricing?.earlyBird
        ? {
            enabled: workshop.pricing.earlyBird.enabled ?? false,
            price: workshop.pricing.earlyBird.price ?? null,
            validFrom: workshop.pricing.earlyBird.validFrom || null,
            validUntil: workshop.pricing.earlyBird.validUntil || null,
            maximumRegistrations:
              workshop.pricing.earlyBird.maximumRegistrations ?? null,
          }
        : null,
    },

    content: {
      highlights: workshop.content?.highlights ?? [],

      audience: workshop.content?.audience
        ? {
            sectionTitle: workshop.content.audience.sectionTitle || "",
            items: workshop.content.audience.items ?? [],
          }
        : null,

      learningOutcomes: workshop.content?.learningOutcomes
        ? {
            sectionTitle:
              workshop.content.learningOutcomes.sectionTitle || "",

            items: (workshop.content.learningOutcomes.items ?? []).map(
              (item) => ({
                title: item.title || "",
                description: item.description || "",
                image: item.image
                  ? imageUrl(item.image).url()
                  : null,
              })
            ),
          }
        : null,

      whoShouldAttend: workshop.content?.whoShouldAttend
        ? {
            sectionTitle:
              workshop.content.whoShouldAttend.sectionTitle || "",

            items: (workshop.content.whoShouldAttend.items ?? []).map(
              (item) => ({
                title: item.title || "",
                description: item.description || "",
                image: item.image
                  ? imageUrl(item.image).url()
                  : null,
              })
            ),
          }
        : null,

      bonus: workshop.content?.bonus
        ? {
            enabled: workshop.content.bonus.enabled ?? false,
            eyebrow: workshop.content.bonus.eyebrow || "",
            title: workshop.content.bonus.title || "",
            description: workshop.content.bonus.description || "",
            bonusImage: workshop.content.bonus.bonusImage
              ? imageUrl(workshop.content.bonus.bonusImage).url()
              : null,
          }
        : null,

      faq: workshop.content?.faq
        ? {
            sectionTitle: workshop.content.faq.sectionTitle || "",
            items: workshop.content.faq.items ?? [],
          }
        : null,

      finalCta: workshop.content?.finalCta
        ? {
            button: {
              label: workshop.content.finalCta.button?.label || "",
            },
          }
        : null,
    },

    resources: workshop.resources ?? [],

    seo: {
      metaTitle: workshop.seo?.metaTitle || "",
      metaDescription: workshop.seo?.metaDescription || "",
      ogImage: workshop.seo?.ogImage
        ? imageUrl(workshop.seo.ogImage).url()
        : null,
      noIndex: workshop.seo?.noIndex ?? false,
    },
  };
}

export async function getWorkshops() {
  const workshops = await sanityClient.fetch(workshopsQuery);
  return workshops.map(normalizeWorkshop);
}