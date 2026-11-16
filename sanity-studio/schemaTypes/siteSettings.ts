
import { defineArrayMember, defineField, defineType } from "sanity";

const navigationLinkFields = [
  defineField({
    name: "label",
    title: "Link Label",
    type: "string",
    validation: (rule) => rule.required(),
  }),
  defineField({
    name: "linkType",
    title: "Link Type",
    type: "string",
    options: {
      list: [
        { title: "Internal Page", value: "internal" },
        { title: "External URL", value: "external" },
      ],
      layout: "radio",
    },
    initialValue: "internal",
    validation: (rule) => rule.required(),
  }),
  defineField({
    name: "internalPath",
    title: "Internal Path",
    description: "Example: /courses",
    type: "string",
    hidden: ({ parent }) => parent?.linkType !== "internal",
  }),
  defineField({
    name: "externalUrl",
    title: "External URL",
    type: "url",
    hidden: ({ parent }) => parent?.linkType !== "external",
  }),
  defineField({
    name: "isVisible",
    title: "Show Link",
    type: "boolean",
    initialValue: true,
  }),
  defineField({
    name: "openInNewTab",
    title: "Open in New Tab",
    type: "boolean",
    initialValue: false,
  }),
];

const navigationLinks = defineArrayMember({
  type: "object",
  fields: navigationLinkFields,
});

export const siteSettings = defineType({
  name: "siteSettings",
  title: "Global Site Settings",
  type: "document",
  fields: [
    defineField({
        name: "title",
        title: "Title",
        type: "string",
        validation: (rule) => rule.required(),
    }),
    defineField({
      name: "identity",
      title: "Site Identity",
      type: "object",
      fields: [
        defineField({
          name: "siteName",
          title: "Site Name",
          type: "string",
          validation: (rule) => rule.required(),
        }),
        defineField({
          name: "logo",
          title: "Site Logo",
          type: "image",
          options: { hotspot: true },
        }),
      ],
    }),

    // NAVBAR

    defineField({
      name: "navbar",
      title: "Navbar Settings",
      type: "object",
      fields: [
        defineField({
          name: "links",
          title: "Navigation Links",
          type: "array",
          of: [navigationLinks],
        }),
        defineField({
          name: "cta",
          title: "Navbar CTA",
          type: "object",
          fields: [
            defineField({
              name: "label",
              title: "Button Label",
              type: "string",
            }),
            defineField({
              name: "href",
              title: "Button Destination",
              description: "Example: tel:+919876543210 or /contact",
              type: "string",
            }),
          ],
        }),
        defineField({
          name: "mobileDescription",
          title: "Mobile CTA Description",
          type: "string",
        }),
      ],
    }),

    // FOOTER

    defineField({
      name: "footer",
      title: "Footer Settings",
      type: "object",
      fields: [
        defineField({
          name: "brandDescription",
          title: "Brand Description",
          type: "text",
          rows: 3,
        }),
        defineField({
          name: "tagline",
          title: "Brand Tagline",
          type: "string",
        }),
        defineField({
          name: "navigationHeading",
          title: "Navigation Heading",
          type: "string",
          initialValue: "Explore",
        }),
        defineField({
          name: "navigationLinks",
          title: "Footer Navigation Links",
          description: "These can be different from the Navbar links.",
          type: "array",
          of: [navigationLinks],
        }),
        defineField({
          name: "contactHeading",
          title: "Contact Section Heading",
          type: "string",
          initialValue: "Find Us",
        }),
        defineField({
          name: "copyrightText",
          title: "Copyright Text",
          type: "string",
          initialValue: "All rights reserved.",
        }),
        defineField({
          name: "showBackToHome",
          title: "Show Back to Home Link",
          type: "boolean",
          initialValue: true,
        }),
      ],
    }),

    // GLOBAL CONTACT INFORMATION

    defineField({
      name: "contact",
      title: "Global Contact Information",
      type: "object",
      fields: [
        defineField({
          name: "email",
          title: "Email Addresses",
          type: "array",
          of: [{ type: "string" }],
        }),
        defineField({
          name: "phoneNumber",
          title: "Phone Numbers",
          type: "array",
          of: [{ type: "string" }],
        }),
        defineField({
          name: "address",
          title: "Address Lines",
          description: "Add each address line separately.",
          type: "array",
          of: [{ type: "string" }],
        }),
      ],
    }),
  ],
});
