
import { defineArrayMember, defineField, defineType } from "sanity";

export const courses = defineType({
    name: "course",
    title: "Course",
    type: "document",

    fields: [
        defineField({
            name: "title",
            title: "Course Title",
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
            name: "description",
            title: "Course Description",
            description: "A concise description displayed on the homepage.",
            type: "text",
            rows: 3,
            validation: (rule) => rule.required(),
        }),

        defineField({
            name: "coverImage",
            title: "Cover Image",
            type: "image",
            options: {
                hotspot: true,
            },
        }),

        defineField({
            name: "duration",
            title: "Duration",
            description: "For example: 4 weeks or 6 sessions.",
            type: "string",
            validation: (rule) => rule.required(),
        }),

        defineField({
            name: "formats",
            title: "Delivery Formats",
            description: "Select one or both available formats.",
            type: "array",
            of: [
                defineArrayMember({
                    type: "string",
                    options: {
                        list: [
                            { title: "Live Online", value: "live-online" },
                            { title: "In-Person", value: "in-person" },
                        ],
                    },
                }),
            ],
            validation: (rule) => rule.required().min(1),
        }),

        defineField({
            name: "learningOutcomes",
            title: "Learning Outcomes",
            description: "What participants can expect to learn.",
            type: "array",
            of: [
                defineArrayMember({
                    type: "string",
                }),
            ],
            validation: (rule) => rule.required().min(1),
        }),

        defineField({
            name: "displayOrder",
            title: "Display Order",
            description: "Lower numbers appear first on the homepage.",
            type: "number",
            initialValue: 0,
            validation: (rule) => rule.required().integer().min(0),
        }),
    ],

    preview: {
        select: {
            title: "title",
            subtitle: "duration",
            media: "coverImage",
        },
    },
});
