export const trainersQuery = `
  *[
    _type == "trainer"
    && status == "active"
  ]
  | order(displayOrder asc)
`;

export const workshopsQuery = `
  *[
    _type == "workshop"
  ]
  | order(schedule.sessions[0].start asc) {
    ...,
    "slug": slug.current,
    "speakers": speakers[] {
      ...,
      "trainer": trainer-> {
        name,
        designation,
        shortTitle,
        image
      }
    }
  }
`;


export const coursesQuery = `
  *[
    _type == "course"
  ]
  | order(displayOrder asc) {
    _id,
    title,
    "slug": slug.current,
    description,
    coverImage,
    duration,
    formats,
    learningOutcomes,
    displayOrder
  }
`;
