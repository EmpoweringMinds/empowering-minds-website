
import { defineArrayMember, defineField, defineType } from "sanity";

export const aboutPage = defineType({
    name: "aboutPage",
    title: "About Page Content",
    type: "document",

    fields: [
        defineField({
            name: "title",
            title: "Page Title",
            type: "string",
            validation: (rule) => rule.required(),
        }),

        defineField({
            name: "slug",
            title: "Slug",
            type: "slug",
            options: {
                source: "title",
            },
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: "hero",
            title: "Hero Section",
            type: "object",
            fields: [
                defineField({
                    name: "eyebrow",
                    title: "Eyebrow",
                    type: "string",
                    validation: (rule) => rule.required(),
                }),
                defineField ({
                    name: "heading",
                    title: "Heading",
                    type: "string",
                    validation: (rule) => rule.required(),
                }),
                defineField({
                    name: "description",
                    title: "Subheading",
                    type: "text",
                    validation: (rule) => rule.required(),
                }),
                defineField({
                    name: "heroImage",
                    title: "Hero cover image",
                    type: "image",
                }),
                defineField({
                    name: "primaryCTA",
                    title: "Primary CTA label",
                    type: "string",
                    validation: (rule) => rule.required(),
                }),
                defineField({
                    name: "secondaryCTA",
                    title: "Secondary CTA label",
                    type: "string",
                    validation: (rule) => rule.required(),
                }),
            ],
        }),
        defineField({
            name: "introduction",
            title: "Introduction",
            type: "object",
            fields: [
                defineField({
                    name: "eyebrow",
                    title: "Eyebrow",
                    type: "string",
                    validation: (rule) => rule.required(),
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
                    validation: (rule) => rule.required(),
                }),
                defineField({
                    name: "fullDescription",
                    title: "Full Description",
                    type: "text",
                })
            ],
        }),
        defineField({
            name: "foundations",
            title: "Foundations",
            type: "object",
            fields: [
                defineField({
                    name: "eyebrow",
                    title: "Eyebrow",
                    type: "string",
                    validation: (rule) => rule.required(),
                }),
                defineField({
                    name: "heading",
                    title: "Heading",
                    type: "string",
                    validation: (rule) => rule.required(),
                }),
                defineField({
                    name: "accent",
                    title: "Accent",
                    type: "string",
                }),
                defineField({
                    name: "description",
                    title: "Description",
                    type: "text",
                    validation: (rule) => rule.required(),
                }),
                defineField({
                    name: "areaCards",
                    title: "Area Cards",
                    type: "array",
                    of: [
                        defineArrayMember({
                            type: "object",
                            fields: [
                                defineField({
                                    name: "number",
                                    title: "Number",
                                    type: "string",
                                    validation: (rule) => rule.required(),
                                }),
                                defineField({
                                    name: "title",
                                    title: "Card Title",
                                    type: "string",
                                    validation: (rule) => rule.required(),
                                }),
                                defineField({
                                    name: "description",
                                    title: "Short Card Description",
                                    type: "text",
                                    validation: (rule) => rule.required(),
                                    rows: 2,
                                }),
                                defineField({
                                    name:"iconName",
                                    title: "Icon Name",
                                    type: "string",
                                })
                            ],
                        }),
                    ],
                    validation: (rule) => rule.required(),
                }),
                defineField({
                    name: "closingStatement",
                    title: "Closing Statement",
                    type: "text",
                })
            ],
        }),
        defineField({
            name: "founderSection",
            title: "FounderSection",
            type: "object",
            fields: [
                defineField({
                    name: "eyebrow",
                    title: "Eyebrow",
                    type: "string",
                    validation: (rule) => rule.required(),
                }),
                defineField({
                    name: "founderTitle",
                    title: "Founder Section Title",
                    type: "string",
                    validation: (rule) => rule.required(),
                }),
                defineField({
                    name: "founderName",
                    title: "Founder Name",
                    type: "string",
                    validation: (rule) => rule.required(),
                }),
                defineField({
                    name: "founderRole",
                    title: "Founder Role",
                    type: "string",
                    validation: (rule) => rule.required(),
                }),
                defineField({
                    name: "founderNote",
                    title: "Founder Note",
                    type: "text",
                }),
                defineField({
                    name: "founderNoteContinued",
                    title: "Founder Note Continued",
                    type: "text",
                }),
                defineField({
                    name: "founderStory",
                    title: "Founder Story",
                    type: "text",
                }),
                defineField({
                    name: "founderClosing",
                    title: "Founder Section Closing Statement",
                    type: "text",
                }),
            ],
        }),
        defineField({
            name: "whyEmpoweringMinds",
            title: "Why Empowering Minds",
            type: "object",
            fields: [
                defineField({
                    name: "eyebrow",
                    title: "Eyebrow",
                    type: "string",
                    validation: (rule) => rule.required(),
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
                    validation: (rule) => rule.required(),
                }),
                defineField({
                    name: "whyCards",
                    title: "Why Section Cards",
                    type: "array",
                    of: [
                        defineArrayMember({
                            type: "object",
                            fields: [
                                defineField({
                                    name: "title",
                                    title: "Card Title",
                                    type: "string",
                                    validation: (rule) => rule.required(),
                                }),
                                defineField({
                                    name: "description",
                                    title: "Short Card Description",
                                    type: "text",
                                    validation: (rule) => rule.required(),
                                    rows: 2,
                                }),
                            ],
                        }),
                    ],
                    validation: (rule) => rule.required(),
                }),
            ],
        }),
        defineField({
            name: "developmentPathways",
            title: "Development Pathways",
            type: "object",
            fields: [
                defineField({
                    name: "eyebrow",
                    title: "Eyebrow",
                    type: "string",
                    validation: (rule) => rule.required(),
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
                    validation: (rule) => rule.required(),
                }),
                defineField({
                    name: "developmentPathwayCards",
                    title: "Development Pathway Cards",
                    type: "array",
                    of: [
                        defineArrayMember({
                            type: "object",
                            fields: [
                                defineField({
                                    name: "number",
                                    title: "Number",
                                    type: "string",
                                    validation: (rule) => rule.required(),
                                }),
                                defineField({
                                    name: "eyebrow",
                                    title: "Eyebrow",
                                    type: "string",
                                    validation: (rule) => rule.required(),
                                }),
                                defineField({
                                    name: "title",
                                    title: "Card Title",
                                    type: "string",
                                    validation: (rule) => rule.required(),
                                }),
                                defineField({
                                    name: "description",
                                    title: "Short Card Description",
                                    type: "text",
                                    validation: (rule) => rule.required(),
                                    rows: 2,
                                }),
                                defineField({
                                    name: "ctaLabel",
                                    title: "CTA label",
                                    type: "string",
                                    validation: (rule) => rule.required(),
                                }),
                                defineField({
                                    name: "iconName",
                                    title: "Icon Name",
                                    type: "string",
                                }),
                                defineField({
                                    name: "symbol",
                                    title: "Symbol Name",
                                    type: "string",
                                }),
                                defineField({
                                    name: "theme",
                                    title: "Theme",
                                    type: "string",
                                }),
                                defineField({
                                    name: "linkTo",
                                    title: "Link To",
                                    type: "string",
                                }),
                            ],
                        }),
                    ],
                    validation: (rule) => rule.required(),
                }),
            ],
        }),
        defineField({
            name: "finalCTA",
            title: "Final CTA",
            type: "object",
            fields: [
                defineField ({
                    name: "heading",
                    title: "Heading",
                    type: "string",
                    validation: (rule) => rule.required(),
                }),
                defineField({
                    name: "description",
                    title: "Subheading",
                    type: "string",
                    validation: (rule) => rule.required(),
                }),
                defineField({
                    name: "primaryCTA",
                    title: "Primary CTA label",
                    type: "string",
                    validation: (rule) => rule.required(),
                }),
                defineField({
                    name: "secondaryCTA",
                    title: "Secondary CTA label",
                    type: "string",
                    validation: (rule) => rule.required(),
                }),
            ],
        }),
        defineField ({
            name: 'seo',
            title: 'SEO',
            type: 'object',

            fields: [
                defineField({
                    name: 'metaTitle',
                    title: 'Meta Title',
                    type: 'string',
                    validation: (rule) => rule.max(60)
                }),
                defineField({
                    name: 'metaDescription',
                    title: 'Meta Description',
                    type: 'text',
                    rows: 3,
                    validation: (rule) => rule.max(160),
                }),
                defineField({
                    name: 'ogImage',
                    title: 'Social Share Image',
                    type: 'image',
                    options: {
                        hotspot: true,
                    },
                }),
                defineField({
                    name: 'noIndex',
                    title: 'Hide from Search Engines',
                    description: 'Prevent this workshop page from being indexed by search engines.',
                    type: 'boolean',
                    initialValue: false,
                }),
            ],
        }),
    ],
});
