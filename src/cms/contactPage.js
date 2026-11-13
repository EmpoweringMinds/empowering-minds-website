
import { sanityClient } from "./sanityClient";
import { contactPageQuery } from "./queries";
import { normalizeImage } from "./normalizeImage";


function normalizeContactPage(page) {
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

    // Contact Information
    contactInformation: {
      eyebrow: page.contactInformation?.eyebrow || "",
      heading: page.contactInformation?.heading || "",
      description: page.contactInformation?.description || "",
      phoneNumber: page.contactInformation?.phoneNumber || [],
      email: page.contactInformation?.email || [],
      address: page.contactInformation?.address || "",
    },

    //FAQs
    faqs: {
      eyebrow: page.faqs?.eyebrow || "",
      heading: page.faqs?.heading || "",
      accent: page.faqs?.accent || "",
      description: page.faqs?.description || "",
      faqObject: (page.faqs?.faqObject || []).map(
        (object) => ({
            question: object.question || "",
            answer: object.answer || "",
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

export async function getContactPage() {
    const page = await sanityClient.fetch(contactPageQuery);
  return normalizeContactPage(page);
}
