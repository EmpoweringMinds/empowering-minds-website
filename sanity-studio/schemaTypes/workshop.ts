import { Children } from "react";
import { defineArrayMember, defineField, defineType } from "sanity";

export const workshop = defineType({
    name: 'workshop',
    title: 'Workshop',
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
                source: 'name'
            },
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'format',
            title: 'Format',
            type: 'string',
            options: {
                list: ['Live-Online','In-Person','Hybrid'],
                layout: 'dropdown',
            },
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'eyebrow',
            title: 'Eyebrow',
            type: 'string',
        }),
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'subtitle',
            title: 'Subtitle',
            type: 'string',
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'string',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'supportingText',
            title: 'Supporting Text',
            type: 'string',
        }),
        defineField({
            name: 'body',
            title: 'Body',
            type: 'array',
            of: [{type: 'block'}],
        }),
        defineField({
            name: 'speakers',
            title: 'Speakers',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        defineField({
                            name: 'type',
                            title: 'Speaker Type',
                            type: 'string',
                            options: {
                                list: [
                                    { title: 'Trainer', value: 'trainer' },
                                    { title: 'Guest Speaker', value: 'guest' },
                                ],
                                layout: 'dropdown',
                            },
                            validation: (rule) => rule.required(),
                        }),
                        defineField({
                            name: 'trainer',
                            title: 'Trainer',
                            type: 'reference',
                            to: [{ type: 'trainer' }],
                            hidden: ({ parent }) => parent?.type !== 'trainer',
                        }),

                        defineField({
                            name: 'guest',
                            title: 'Guest Speaker',
                            type: 'object',
                            hidden: ({ parent }) => parent?.type !== 'guest',
                            fields: [
                                defineField({
                                    name: 'name',
                                    title: 'Name',
                                    type: 'string',
                                    validation: (rule) => rule.required(),
                                }),

                                defineField({
                                    name: 'role',
                                    title: 'Role',
                                    type: 'string',
                                }),

                                defineField({
                                    name: 'bio',
                                    title: 'Bio',
                                    type: 'text',
                                }),

                                defineField({
                                    name: 'image',
                                    title: 'Image',
                                    type: 'image',
                                    options: {
                                        hotspot: true,
                                    },
                                }),
                            ],
                        }),
                    ],
                },
            ],
        }),
        defineField({
            name: 'schedule',
            title: 'Schedule',
            type: 'object',
            fields: [
                defineField({
                    name: 'timezone',
                    title: 'Time Zone',
                    type: 'string',
                    options: {
                        list: ['Asia/Kolkata'],
                        layout: 'dropdown',
                    },
                    validation: (rule) => rule.required(),
                }),
                defineField({
                    name: 'sessions',
                    title: 'Sessions',
                    type: 'array',

                    of: [{
                        type: 'object',
                        fields: [
                            defineField({
                                name: 'title',
                                title: 'Title',
                                type: 'string',
                                validation: (rule) => rule.required(),
                            }),
                            defineField({
                                name: 'type',
                                title: 'Type',
                                type: 'string',
                                options: {
                                    list: ['Workshop','Bonus'],
                                    layout: 'dropdown',
                                },
                                validation: (rule) => rule.required(),
                            }),
                            defineField({
                                name: 'start',
                                title: 'Starting Date & Time',
                                type: 'datetime',
                                validation: (rule) => rule.required(),
                            }),
                            defineField({
                                name: 'end',
                                title: 'Ending Date & Time',
                                type: 'datetime',
                                validation: (rule) => rule.required().min(rule.valueOfField('start'))
                            }),
                            defineField({
                                name: 'capacity',
                                title: 'Capacity',
                                type: 'number',
                                validation: (rule) => rule.min(1),
                            }),  
                        ],
                    }],
                }),
            ],
        }),
        defineField({
            name: 'registration',
            title: 'Registration',
            type: 'object',
            fields: [
                defineField({
                    name: 'opensAt',
                    title: 'Opens At',
                    type: 'datetime',
                    validation: (rule) => rule.required()
                }),
                defineField({
                    name: 'closesAt',
                    title: 'Closes At',
                    type: 'datetime',
                    validation: (rule) => rule.required().min(rule.valueOfField('opensAt'))
                }),
            ],
        }), 
        defineField({
            name:'pricing',
            title:'Pricing',
            type: 'object',

            fields: [
                defineField({
                    name: 'currency',
                    title: 'Currency',
                    type: 'string',
                    options: {
                        list: ['INR',],
                        layout: 'dropdown',
                    },
                    validation: (rule) => rule.required(),
                }),
                defineField({
                    name: 'regularPrice',
                    title: 'Regular Price',
                    type: 'number',
                    validation: (rule) => rule.required().min(0),
                }),
                defineField({
                    name: 'earlyBird',
                    title: 'Early Bird',
                    type: 'object',
                    
                    fields: [
                        defineField({
                            name: 'enabled',
                            title: 'Enabled',
                            type: 'boolean',
                        }),
                        defineField({
                            name: 'price',
                            title: 'Price',
                            type: 'number',
                            validation: (rule) => rule.min(0),
                        }),
                        defineField({
                            name: 'validFrom',
                            title: 'Valid From',
                            type: 'datetime',
                        }),
                        defineField({
                            name: 'validUntil',
                            title: 'Valid Until',
                            type: 'datetime',
                            validation: (rule) => rule.required().min(rule.valueOfField('validFrom'))
                        }),
                        defineField({
                            name: 'maximumRegistrations',
                            title: 'Maximum Registrations',
                            type: 'number',
                            validation: (rule) => rule.min(1),
                        }),
                    ],
                }),
            ],
        }),
        defineField({
            name: 'content',
            title: 'Content',
            type: 'object',
            fields: [
                defineField({
                    name: 'highlights',
                    title: 'Highlights',
                    type: 'array',
                    of: [{type: 'string'}],
                }),
                defineField({
                    name: 'bonus',
                    title: 'Registration Benefit',
                    type: 'object',

                    fields: [
                        defineField({
                            name: 'enabled',
                            title: 'Enabled',
                            type: 'boolean',
                        }),
                        defineField({
                            name: 'eyebrow',
                            title: 'Eyebrow',
                            type: 'string',
                        }),
                        defineField({
                            name: 'title',
                            title: 'Title',
                            type: 'string',
                            validation: (rule) => rule.required(),
                        }),
                        defineField({
                            name: 'description',
                            title: 'Description',
                            type: 'string',
                        }),
                        defineField({
                            name: 'bonusImage',
                            title: 'Image',
                            type: 'image',
                        }),
                    ],
                }),
            ],
        }),
        defineField({
            name: 'resources',
            title: 'Resources',
            type: 'array',

            of: [
                defineArrayMember({
                    name: 'resourceObject',
                    title: 'Resource Object',
                    type: 'object',

                    fields: [
                        defineField({
                            name: 'title',
                            title: 'Title',
                            type: 'string',
                            validation: (rule) => rule.required(),
                        }),
                        defineField({
                            name: 'type',
                            title: 'Type',
                            type: 'string',
                            options: {
                                list: ['Recording','Presentation','Workbook'],
                                layout: 'radio',
                            },
                            validation: (rule) => rule.required(),
                        }),
                        defineField({
                            name: 'url',
                            title: 'URL',
                            type: 'url',
                            validation: (rule) => rule.uri({scheme: ['http', 'https', 'mailto', 'tel']}),
                        }),
                        defineField({
                            name: 'description',
                            title: 'Description',
                            type: 'string',
                        }),
                        defineField({
                            name: 'availableFrom',
                            title: 'Available From',
                            type: 'datetime',
                        }),
                    ],
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
            ]
        })
    ],
})