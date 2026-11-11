
import { sanityClient } from "./sanityClient";
import { programsPageQuery } from "./queries";
import { normalizeImage } from "./normalizeImage";


function normalizeProgramsPage(page) {
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

    // Development Areas
    developmentAreas: {
      eyebrow: page.developmentAreas?.eyebrow || "",
      heading: page.developmentAreas?.heading || "",
      description: page.developmentAreas?.description || "",
      areaCards: (page.developmentAreas?.areaCards || []).map(
        (card) => ({
          number: card.number || "",
          title: card.title || "",
          description: card.description || "",
          iconName: card.iconName || "",
          categoty: card.category || "",
        })
      ),
    },

    //Programs By Audience
        programsByAudience: {
        eyebrow: page.programsByAudience?.eyebrow || "",
        heading: page.programsByAudience?.heading || "",
        description: page.programsByAudience?.description || "",
        serviceGroups: (
            page.programsByAudience?.serviceGroups || []
        ).map((group) => ({
            id: group.id || "",
            eyebrow: group.eyebrow || "",
            title: group.heading || "",
            description: group.description || "",
            iconName: group.iconName || "",
            groupCards: (group.groupCards || []).map((card) => ({
            id: card.id || "",
            eyebrow: card.eyebrow || "",
            heading: card.heading || "",
            description: card.description || "",
            groupReferance: card.groupReferance || "",
            modules: card.modules || [],
            ctaLabel: card.ctaLabel || "",
            })),
        })),
    },

    //Delivery Approach
    deliveryApproach: {
      eyebrow: page.deliveryApproach?.eyebrow || "",
      heading: page.deliveryApproach?.heading || "",
      accentHeading: page.deliveryApproach?.accentHeading || "",
      description: page.deliveryApproach?.description || "",
      image: normalizeImage(
        page.deliveryApproach?.image,
        1600,
        1600
      ),
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

export async function getProgramsPage() {
    const page = await sanityClient.fetch(programsPageQuery);
  return normalizeProgramsPage(page);
}
