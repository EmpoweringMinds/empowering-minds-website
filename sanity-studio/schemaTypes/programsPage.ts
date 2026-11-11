
import { defineArrayMember, defineField, defineType } from "sanity";

export const programsPage = defineType({
    name: "programsPage",
    title: "Programs Page Content",
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
            name: "developmentAreas",
            title: "Development Areas",
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
                                    name: "iconName",
                                    title: "Icon Name",
                                    type: "string",
                                }),
                                defineField({
                                    name: "category",
                                    title: "Category",
                                    type: "string",
                                    validation: (rule) => rule.required(),
                                }),
                            ],
                        }),
                    ],
                    validation: (rule) => rule.required(),
                }),
            ],
        }),
        defineField({
            name: "programsByAudience",
            title: "Programs By Audience",
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
                    name: "serviceGroups",
                    title: "Service Groups",
                    type: "array",
                    of: [
                        defineArrayMember({
                            type: "object",
                            fields: [
                                defineField({
                                    name: "id",
                                    title: "ID",
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
                                    name: "iconName",
                                    title: "Icon Name",
                                    type: "string",
                                }),
                                defineField({
                                    name:"groupCards",
                                    title: "Group Cards",
                                    type: "array",
                                    of: [
                                        defineArrayMember({
                                            type: "object",
                                            fields: [
                                                defineField({
                                                    name: "id",
                                                    title: "ID",
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
                                                    name: "groupReferance",
                                                    title: "Group Referance",
                                                    type: "string",
                                                    options: {
                                                        list: [
                                                            {
                                                                title: "Educational Institutions",
                                                                value: "educational-institutions",
                                                            },
                                                            {
                                                                title: "Corporate Organisations",
                                                                value: "corporate-organisations",
                                                            },
                                                            {
                                                                title: "Individual Growth",
                                                                value: "individual-growth",
                                                            },
                                                            {
                                                                title: "Train the Trainer",
                                                                value: "train-the-trainer",
                                                            },
                                                        ],
                                                    },
                                                    validation: (rule) => rule.required(),
                                                }),
                                                defineField({
                                                    name: "modules",
                                                    title: "Modules",
                                                    type: "array",
                                                    of: [{type: "string"}],
                                                }),
                                                defineField({
                                                    name: "ctaLabel",
                                                    title: "CTA Label",
                                                    type: "string",
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                            ],
                        }),
                    ],
                }),
            ],
        }),
        defineField({
            name: "deliveryApproach",
            title: "Delivery Approach",
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
                    name: "accentheading",
                    title: "Accent Heading",
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
                    name: "image",
                    title: "Image",
                    type: "image"
                })
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
