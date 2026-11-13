import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'


export default defineConfig({
  name: 'default',
  title: 'Empowering Minds',

  projectId: 'nb9kk4a8',
  dataset: 'production',

  plugins: [structureTool({
    structure: (S) => 
      S.list()
        .title('Content')
        .items([
          S.listItem()
            .title('Pages')
            .id('pageContent')
            .child(
              S.list()
              .title('Pages')
              .items([
                S.listItem()
                  .title('Courses Page')
                  .child(
                    S.document()
                      .schemaType('coursesPage')
                      .documentId('coursesPage')
                  ),
                S.listItem()
                .title('About Page')
                .child(
                  S.document()
                    .schemaType('aboutPage')
                    .documentId('aboutPage')
                ),
                S.listItem()
                .title('Programs Page')
                .child(
                  S.document()
                    .schemaType('programsPage')
                    .documentId('programsPage')
                ),
                S.listItem()
                .title('Trainers Page')
                .child(
                  S.document()
                    .schemaType('trainersPage')
                    .documentId('trainersPage')
                ),
                S.listItem()
                .title('Contact Page')
                .child(
                  S.document()
                    .schemaType('contactPage')
                    .documentId('contactPage')
                ),
                S.listItem()
                .title('Homepage Content')
                .child(
                  S.document()
                    .schemaType('homePage')
                    .documentId('homePage')
                ),
              ])
            ),
          S.divider(),

          S.documentTypeListItem('course')
            .title('Courses'),
          S.documentTypeListItem('developmentModule')
            .title('Development Modules'),
          S.documentTypeListItem('workshop')
            .title('Workshops'),
          S.documentTypeListItem('trainer')
            .title('Trainers'),
          S.documentTypeListItem('testimonials')
            .title('Testimonials'),
        ]),
  }), 
  visionTool()
  ],

  schema: {
    types: schemaTypes,
  },
})
