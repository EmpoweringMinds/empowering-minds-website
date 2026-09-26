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