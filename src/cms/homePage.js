
import { sanityClient } from "./sanityClient";
import { homePageQuery, aboutPageQuery } from "./queries";
import { imageUrl } from "./imageURL";

// ----------------------------------
// Image Normalisation
// ----------------------------------

function normalizeImage(image, width = 900, height = 600) {
  if (!image) return null;

  return imageUrl(image)
    .width(width)
    .height(height)
    .fit("max")
    .url();
}

// ----------------------------------
// Homepage Normalisation
// ----------------------------------

function normalizeHomePage(page, aboutPage) {
  if (!page) return null;

  const pathways = aboutPage?.developmentPathways;

  return {
    id: page._id,

    // Hero
    hero: {
      eyebrow: page.hero?.eyebrow || "",
      heading: page.hero?.heading || "",
      description: page.hero?.description || "",
      image: normalizeImage(page.hero?.heroImage, 1600, 1600),
      primaryCTA: page.hero?.primaryCTA || "",
      secondaryCTA: page.hero?.secondaryCTA || "",
    },

    // About Preview
    aboutPreview: {
      eyebrow: page.aboutPreview?.eyebrow || "",
      heading: page.aboutPreview?.heading || "",
      description: page.aboutPreview?.description || "",
      supportingText: page.aboutPreview?.supportingText || "",
      ctaLabel: page.aboutPreview?.ctaLabel || "",
    },

    // Course Preview
    coursePreview: {
      eyebrow: page.coursePreview?.eyebrow || "",
      heading: page.coursePreview?.heading || "",
      description: page.coursePreview?.description || "",
    },

    // Development Pathways
    developmentPathways: {
      eyebrow: pathways?.eyebrow || "",
      heading: pathways?.heading || "",
      description: pathways?.description || "",

      cards: (pathways?.developmentPathwayCards || []).map((card) => ({
        number: card.number || "",
        eyebrow: card.eyebrow || "",
        title: card.title || "",
        description: card.description || "",
        ctaLabel: card.ctaLabel || "",
        iconName: card.iconName || "",
        symbol: card.symbol || "",
        theme: card.theme || "",
        linkTo: card.linkTo || "",
      })),
    },

    // Academy Philosophy
    academyPhilosophy: {
      eyebrow: page.academyPhilosophy?.eyebrow || "",
      heading: page.academyPhilosophy?.heading || "",
      description: page.academyPhilosophy?.description || "",

      featureCards: (
        page.academyPhilosophy?.featureCards || []
      ).map((card) => ({
        number: card.number || "",
        title: card.title || "",
        description: card.description || "",
      })),
    },

    // Workshop Preview
    workshopPreview: {
      eyebrow: page.workshopPreview?.eyebrow || "",
      heading: page.workshopPreview?.heading || "",
      description: page.workshopPreview?.description || "",
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
      ogImage: normalizeImage(page.seo?.ogImage, 1200, 630),
      noIndex: page.seo?.noIndex ?? false,
    },
  };
}

// ----------------------------------
// Fetch Homepage
// ----------------------------------

export async function getHomePage() {
  const [page, aboutPage] = await Promise.all([
    sanityClient.fetch(homePageQuery),
    sanityClient.fetch(aboutPageQuery),
  ]);

  return normalizeHomePage(page, aboutPage);
}
