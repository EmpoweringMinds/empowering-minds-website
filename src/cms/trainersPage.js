
import { sanityClient } from "./sanityClient";
import { trainersPageQuery } from "./queries";
import { normalizeImage } from "./normalizeImage";


function normalizeTrainersPage(page) {
  if (!page) return null;

  return {
    id: page._id,

    // Hero
    hero: {
      eyebrow: page.hero?.eyebrow || "",
      heading: page.hero?.heading || "",
      description: page.hero?.description || "",
      image: normalizeImage(
        page.hero?.heroImage,
        1600,
        1600
      ),
      primaryCTA: page.hero?.primaryCTA || "",
      secondaryCTA: page.hero?.secondaryCTA || "",
    },

    // Note from Founder
    fromFounder: {
      eyebrow: page.fromFounder?.eyebrow || "",
      founderName: page.fromFounder?.founderName || "",
      founderRole: page.fromFounder?.founderRole || "",
      founderImage: normalizeImage(
        page.fromFounder?.founderImage,
        1080,
        1350
      ),
      fullDescription: page.fromFounder?.fullDescription || "",
      quote: page.fromFounder?.quote|| "",
    },

    //Trainers Directory
    directorySection: {
      eyebrow: page.directorySection?.eyebrow || "",
      heading: page.directorySection?.heading || "",
      description: page.directorySection?.description || "",
    },

    // Final CTA
    finalCTA: {
      heading: page.finalCTA?.heading || "",
      description: page.finalCTA?.description || "",
      primaryCTA: page.finalCTA?.primaryCTA || "",
      secondaryCTA: page.finalCTA?.secondaryCTA || "",
    },

    // SEO
    seo: {
      metaTitle: page.seo?.metaTitle || "",
      metaDescription: page.seo?.metaDescription || "",
      ogImage: normalizeImage(
        page.seo?.ogImage,
        1200,
        630
      ),
      noIndex: page.seo?.noIndex ?? false,
    },
  };
}

// ----------------------------------
// Fetch Courses Page
// ----------------------------------

export async function getTrainersPage() {
    const page = await sanityClient.fetch(trainersPageQuery);
  return normalizeTrainersPage(page);
}
