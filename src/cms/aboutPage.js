
import { sanityClient } from "./sanityClient";
import { aboutPageQuery } from "./queries";
import { normalizeImage } from "./normalizeImage";


function normalizeAboutPage(page) {
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

    // Introduction
    introduction: {
      eyebrow: page.introduction?.eyebrow || "",
      heading: page.introduction?.heading || "",
      description: page.introduction?.description || "",
      fullDescription: page.introduction?.fullDescription || "",
    },

    // Foundations
    foundations: {
      eyebrow: page.foundations?.eyebrow || "",
      heading: page.foundations?.heading || "",
      accent: page.foundations?.accent || "",
      description: page.foundations?.description || "",
      areaCards: (page.foundations?.areaCards || []).map(
        (card) => ({
          number: card.number || "",
          title: card.title || "",
          description: card.description || "",
          iconName: card.iconName || "",
        })
      ),
      closingStatement: page.foundations?.closingStatement || "",
    },

    //Founder Section
    founderSection: {
      eyebrow: page.founderSection?.eyebrow || "",
      title: page.founderSection?.founderTitle || "",
      founderName: page.founderSection?.founderName || "",
      founderRole: page.founderSection?.founderRole || "",
      founderNote: page.founderSection?.founderNote || "",
      founderNoteContinued: page.founderSection?.founderNoteContinued || "",
      founderStory: page.founderSection?.founderStory || "",
      founderClosing: page.founderSection?.founderClosing || "",
    },

    //Why Empowering Minds
    whyEmpoweringMinds: {
      eyebrow: page.whyEmpoweringMinds?.eyebrow || "",
      heading: page.whyEmpoweringMinds?.heading || "",
      description: page.whyEmpoweringMinds?.description || "",
      whyCards: (
        page.whyEmpoweringMinds?.whyCards || []
      ).map((card) => ({
        title: card.title || "",
        description: card.description || "",
      })),
    },

    // Development Pathways
    developmentPathways: {
      eyebrow: page.developmentPathways?.eyebrow || "", 
      heading: page.developmentPathways?.heading || "",
      description: page.developmentPathways?.description || "",
      developmentPathwayCards: (
        page.developmentPathways?.developmentPathwayCards || []
      ).map((pathway) => ({
        number: pathway.number || "",
        title: pathway.title || "",
        description: pathway.description || "",
        iconName: pathway.iconName || "",
        symbol: pathway.symbol ||"",        
        ctaLabel: pathway.ctaLabel || "",
        theme: pathway.theme || "",
        link: pathway.linkTo || "",
      })),
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

export async function getAboutPage() {
    const page = await sanityClient.fetch(aboutPageQuery);
  return normalizeAboutPage(page);
}
