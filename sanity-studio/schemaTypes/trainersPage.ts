
import {defineField, defineType } from "sanity";

export const trainersPage = defineType({
    name: "trainersPage",
    title: "Trainers Page Content",
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
            name: "fromFounder",
            title: "Note from Founder Section",
            type: "object",
            fields: [
                defineField({
                    name: "eyebrow",
                    title: "Eyebrow",
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
                    name: "fullDescription",
                    title: "Full Description",
                    type: "text",
                }),
                defineField({
                    name: "quote",
                    title: "Quote",
                    type: "text",
                }),
                defineField({
                    name: "founderImage",
                    title: "Founder Image",
                    type: "image",
                })
            ],
        }),
        defineField({
            name: "directorySection",
            title: "Trainer Directory Section",
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
