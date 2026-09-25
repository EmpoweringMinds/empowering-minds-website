import {defineField, defineType} from 'sanity'

export const trainerType = defineType({
  name: 'trainer',
  title: 'Trainer',
  type: 'document',

  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),

    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
      },
      validation: (rule) => rule.required(),
    }),

    defineField({
      name: 'role',
      title: 'Role',
      type: 'string',
    }),

    defineField({
      name: 'designation',
      title: 'Designation',
      type: 'string',
    }),

    defineField({
      name: 'shortTitle',
      title: 'Short Title',
      type: 'string',
    }),

    defineField({
      name: 'bio',
      title: 'Bio',
      type: 'text',
      rows: 6,
    }),

    defineField({
      name: 'expertise',
      title: 'Expertise',
      type: 'array',
      of: [
        {
          type: 'string',
        },
      ],
    }),

    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),

    defineField({
      name: 'featured',
      title: 'Featured',
      type: 'boolean',
      initialValue: false,
    }),

    defineField({
      name: 'displayOrder',
      title: 'Display Order',
      type: 'number',
      initialValue: 0,
    }),

    defineField({
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: [
          {title: 'Active', value: 'active'},
          {title: 'Archived', value: 'archived'},
        ],
        layout: 'radio',
      },
      initialValue: 'active',
    }),
  ],
})