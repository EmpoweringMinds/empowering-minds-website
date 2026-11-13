
import { defineArrayMember, defineField, defineType } from "sanity";

export const homePage = defineType({
  name: "homePage",
  title: "Homepage Content",
  type: "document",

  fields: [
    defineField({
      name: "title",
      title: "Page Title",
      type: "string",
      initialValue: "Homepage",
      validation: (rule) => rule.required(),
    }),

    // Hero
    defineField({
      name: "hero",
      title: "Hero Section",
      type: "object",
      fields: [
        defineField({
          name: "eyebrow",
          title: "Eyebrow",
          type: "string",
        }),
        defineField({
          name: "heading",
          title: "Heading",
          type: "string",
          validation: (rule) => rule.required(),
        }),
        defineField({
          name: "description",
          title: "Description",
          type: "text",
        }),
        defineField({
          name: "heroImage",
          title: "Hero Image",
          type: "image",
          options: { hotspot: true },
        }),
        defineField({
          name: "primaryCTA",
          title: "Primary CTA",
          type: "string",
        }),
        defineField({
          name: "secondaryCTA",
          title: "Secondary CTA",
          type: "string",
        }),
      ],
    }),

    // About Preview
    defineField({
      name: "aboutPreview",
      title: "About Preview",
      type: "object",
      fields: [
        defineField({
          name: "eyebrow",
          title: "Eyebrow",
          type: "string",
        }),
        defineField({
          name: "heading",
          title: "Heading",
          type: "string",
        }),
        defineField({
          name: "description",
          title: "Description",
          type: "text",
        }),
        defineField({
          name: "supportingText",
          title: "Supporting Text",
          type: "text",
        }),
        defineField({
          name: "ctaLabel",
          title: "CTA Label",
          type: "string",
        }),
      ],
    }),

    // Course Preview Introduction
    defineField({
      name: "coursePreview",
      title: "Course Preview",
      type: "object",
      fields: [
        defineField({
          name: "eyebrow",
          title: "Eyebrow",
          type: "string",
        }),
        defineField({
          name: "heading",
          title: "Heading",
          type: "string",
        }),
        defineField({
          name: "description",
          title: "Description",
          type: "text",
        }),
      ],
    }),

    // Academy Philosophy
    defineField({
      name: "academyPhilosophy",
      title: "Academy Philosophy",
      type: "object",
      fields: [
        defineField({
          name: "eyebrow",
          title: "Eyebrow",
          type: "string",
        }),
        defineField({
          name: "heading",
          title: "Heading",
          type: "string",
        }),
        defineField({
          name: "description",
          title: "Description",
          type: "text",
        }),
        defineField({
          name: "featureCards",
          title: "Feature Cards",
          type: "array",
          of: [
            defineArrayMember({
              type: "object",
              fields: [
                defineField({
                  name: "number",
                  title: "Number",
                  type: "string",
                }),
                defineField({
                  name: "title",
                  title: "Title",
                  type: "string",
                }),
                defineField({
                  name: "description",
                  title: "Description",
                  type: "text",
                }),
              ],
            }),
          ],
        }),
      ],
    }),

    // Workshop Preview Introduction
    defineField({
      name: "workshopPreview",
      title: "Workshop Preview",
      type: "object",
      fields: [
        defineField({
          name: "eyebrow",
          title: "Eyebrow",
          type: "string",
        }),
        defineField({
          name: "heading",
          title: "Heading",
          type: "string",
        }),
        defineField({
          name: "description",
          title: "Description",
          type: "text",
        }),
      ],
    }),

    // Final CTA
    defineField({
      name: "finalCTA",
      title: "Final CTA",
      type: "object",
      fields: [
        defineField({
          name: "heading",
          title: "Heading",
          type: "string",
        }),
        defineField({
          name: "description",
          title: "Description",
          type: "text",
        }),
        defineField({
          name: "primaryCTA",
          title: "Primary CTA",
          type: "string",
        }),
        defineField({
          name: "secondaryCTA",
          title: "Secondary CTA",
          type: "string",
        }),
      ],
    }),

    // SEO
    defineField({
      name: "seo",
      title: "SEO",
      type: "object",
      fields: [
        defineField({
          name: "metaTitle",
          title: "Meta Title",
          type: "string",
          validation: (rule) => rule.max(60),
        }),
        defineField({
          name: "metaDescription",
          title: "Meta Description",
          type: "text",
          rows: 3,
          validation: (rule) => rule.max(160),
        }),
        defineField({
          name: "ogImage",
          title: "Social Share Image",
          type: "image",
          options: { hotspot: true },
        }),
        defineField({
          name: "noIndex",
          title: "Hide from Search Engines",
          type: "boolean",
          initialValue: false,
        }),
      ],
    }),
  ],
});
