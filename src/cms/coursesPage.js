
import { sanityClient } from "./sanityClient";
import { coursesPageQuery } from "./queries";
import { imageUrl } from "./imageURL";

import { getDevelopmentModules } from "./developmentModule";
import { getCourses } from "./courses";
// ----------------------------------
// Image normalisation
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
// Courses Page
// ----------------------------------

function normalizeCoursesPage(page, allCourses, allModules) {
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
      heading: page.introduction?.heading || "",
      description: page.introduction?.description || "",
    },

    // Development Areas
    developmentAreas: {
      heading: page.developmentAreas?.heading || "",
      description: page.developmentAreas?.description || "",
      areaCards: (page.developmentAreas?.areaCards || []).map(
        (card) => ({
          title: card.title || "",
          description: card.description || "",
          iconName: card.iconName || "",
        })
      ),
    },

    // Course Directory
    courses: (page.courseDirectory || [])
      .map((reference) =>
        allCourses.find((course) => course.id === reference._ref)
      )
      .filter(Boolean),

    // Additional Modules
    additionalModules: (page.additionalModules || [])
      .map((reference) =>
        allModules.find((module) => module.id === reference._ref)
      )
      .filter(Boolean),

    // Audience
    audience: {
      heading: page.audience?.heading || "",
      description: page.audience?.description || "",
      audienceCards: (page.audience?.audienceCards || []).map(
        (card) => ({
          title: card.title || "",
          description: card.description || "",
          image: normalizeImage(card.audienceImage),
        })
      ),
    },

    // Development Approach
    developmentApproach: {
      heading: page.developmentApproach?.heading || "",
      description: page.developmentApproach?.description || "",
      developmentSteps: (
        page.developmentApproach?.developmentSteps || []
      ).map((step) => ({
        title: step.title || "",
        description: step.description || "",
      })),
    },

    // Learning Formats
    learningFormats: {
      heading: page.learningFormats?.heading || "",
      description: page.learningFormats?.description || "",
      formatCards: (page.learningFormats?.formatCards || []).map(
        (format) => ({
          title: format.title || "",
          description: format.description || "",
          iconName: format.iconName || "",
        })
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

export async function getCoursesPage() {
  const [page, allCourses, allModules] = await Promise.all([
    sanityClient.fetch(coursesPageQuery),
    getCourses(),
    getDevelopmentModules(),
  ]);

  return normalizeCoursesPage(page, allCourses, allModules);
}


