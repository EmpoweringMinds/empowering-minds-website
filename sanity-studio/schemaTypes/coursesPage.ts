
import { defineArrayMember, defineField, defineType } from "sanity";

export const coursesPage = defineType({
    name: "coursesPage",
    title: "Courses Page Content",
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
            ],
        }),
        defineField({
            name: "developmentAreas",
            title: "Development Areas",
            type: "object",
            fields: [
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
                    name: "areaCards",
                    title: "Area Cards",
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
                                defineField({
                                    name: "iconName",
                                    title: "Icon Name",
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
            name: "courseDirectory",
            title: "Courses Directory",
            type: "array",
            of: [
                {
                    type: "reference",
                    to: [{ type: "course" }],
                },
            ],
        }),
        defineField({
            name: "additionalModules",
            title: "Additional modules",
            type: "array",
            of: [
                {
                    type: "reference",
                    to: [{ type: "developmentModule" }], 
                }
            ]
        }),
        defineField({
            name: "audience",
            title: "Target audience",
            type: "object",
            fields: [
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
                    name: "audienceCards",
                    title: "Audience Cards",
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
                                defineField({
                                    name: "audienceImage",
                                    title: "Target Audience Image",
                                    type: "image",
                                }),
                            ],
                        }),
                    ],
                    validation: (rule) => rule.required(),
                }),
            ],
        }),
        defineField({
            name: "developmentApproach",
            title: "Development Approach",
            type: "object",
            fields: [
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
                    name: "developmentSteps",
                    title: "Development Steps",
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
            name: "learningFormats",
            title: "Learning Formats",
            type: "object",
            fields: [
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
                    name: "formatCards",
                    title: "Format Cards",
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
                                defineField({
                                    name: "iconName",
                                    title: "Icon Name",
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
