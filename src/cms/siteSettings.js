
import { sanityClient } from "./sanityClient";
import { siteSettingsQuery } from "./queries";
import { normalizeImage } from "./normalizeImage";

function normalizeNavigationLinks(links = []) {
  return links
    .filter((link) => link.isVisible !== false)
    .map((link) => ({
      label: link.label || "",
      external: link.linkType === "external",
      to: link.linkType === "internal"
        ? link.internalPath || ""
        : "",
      href: link.linkType === "external"
        ? link.externalUrl || ""
        : "",
      openInNewTab: link.openInNewTab ?? false,
    }))
    .filter((link) => {
      return link.label && (link.external ? link.href : link.to);
    });
}

function normalizeSiteSettings(settings) {
  if (!settings) return null;

  return {
    id: settings._id,

    identity: {
      siteName: settings.identity?.siteName || "",
      logo: normalizeImage(
        settings.identity?.logo,
        400,
        400
      ),
    },

    navbar: {
      links: normalizeNavigationLinks(
        settings.navbar?.links
      ),

      cta: {
        label: settings.navbar?.cta?.label || "",
        href: settings.navbar?.cta?.href || "",
      },

      mobileDescription:
        settings.navbar?.mobileDescription || "",
    },

    footer: {
      brandDescription:
        settings.footer?.brandDescription || "",

      tagline:
        settings.footer?.tagline || "",

      navigationHeading:
        settings.footer?.navigationHeading || "Explore",

      navigationLinks: normalizeNavigationLinks(
        settings.footer?.navigationLinks
      ),

      contactHeading:
        settings.footer?.contactHeading || "Find Us",

      copyrightText:
        settings.footer?.copyrightText || "All rights reserved.",

      showBackToHome:
        settings.footer?.showBackToHome ?? true,
    },

    contact: {
      email: settings.contact?.email || [],
      phoneNumber: settings.contact?.phoneNumber || [],
      address: settings.contact?.address || [],
    },
  };
}

export async function getSiteSettings() {
  const settings = await sanityClient.fetch(siteSettingsQuery);

  return normalizeSiteSettings(settings);
}
