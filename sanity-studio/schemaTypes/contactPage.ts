
import { defineArrayMember, defineField, defineType } from "sanity";

export const contactPage = defineType({
    name: "contactPage",
    title: "Contact Page Content",
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
            name: "contactInformation",
            title: "Contact Information",
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
                    name: "phoneNumber",
                    title: "Phone Number",
                    type: "array",
                    of: [{type: "string"}],
                }),
                defineField({
                    name: "email",
                    title: "Email",
                    type: "array",
                    of: [{type: "string"}],
                }),
                defineField({
                    name: "address",
                    title: "Address",
                    type: "string",
                }),
            ],
        }),
        defineField({
            name: "faqs",
            title: "FAQs",
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
                    name: "faqObject",
                    title: "FAQ Object",
                    type: "array",
                    of: [
                        defineArrayMember({
                            type: "object",
                            fields: [
                                defineField({
                                    name: "question",
                                    title: "Question",
                                    type: "string",
                                }),
                                defineField({
                                    name: "answer",
                                    title: "Answer",
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
