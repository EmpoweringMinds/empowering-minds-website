
import { defineArrayMember, defineField, defineType } from "sanity";

export const testimonials = defineType({
    name: "testimonials",
    title: "Testimonials",
    type: "document",

    fields: [
        defineField({
            name: "title",
            title: "Page Title",
            type: "string",
            validation: (rule) => rule.required(),
        }),
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
        defineField ({
            name: "accentHeading",
            title: "Heading Accent",
            type: "string",
        }),
        defineField({
            name: "description",
            title: "Subheading",
            type: "text",
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: "carouselImages",
            title: "List of Images",
            type: "array",
            of: [{type: "image"}]
        }),
        defineField({
            name: "testimonial",
            title: "List of Testimonials",
            type: "array",
            of: [
                defineArrayMember({
                    type: "object",
                    fields: [
                        defineField({
                            name: "quote",
                            title: "Quote",
                            type: "text",
                        }),
                        defineField({
                            name: "name",
                            title: "Name",
                            type: "string",
                        }),
                        defineField({
                            name: "role",
                            title: "Role",
                            type: "string",
                        }),
                        defineField({
                            name: "organisation",
                            title: "Organisation",
                            type: "string",
                        }),
                        defineField({
                            name: "program",
                            title: "Program",
                            type: "string",
                        }),
                    ],
                }),
            ],
            validation: (rule) => rule.required(),
        }),
    ]
});
