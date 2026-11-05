
import {defineField, defineType } from "sanity";

export const developmentModule = defineType({
    name: "developmentModule",
    title: "Development Module",
    type: "document",

    fields: [
        defineField({
            name: "title",
            title: "Module Name",
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
            name: "shortDescription",
            title: "Module card description",
            description: "A concise description displayed on the module card.",
            type: "text",
            rows: 3,
            validation: (rule) => rule.required(),
        }),

        defineField({
            name: "fullDescription",
            title: "Expanded description",
            description: "A full description displayed on the expanded module card.",
            type: "text",
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
            name: "displayOrder",
            title: "Display Order",
            description: "Lower numbers appear first on the homepage.",
            type: "number",
            initialValue: 0,
            validation: (rule) => rule.required().integer().min(0),
        }),
        
        defineField({
            name: "isActive",
            title: "Toggles Visibility",
            type: "boolean",
        })
    ],

    preview: {
        select: {
            title: "title",
            media: "coverImage",
        },
    },
});
