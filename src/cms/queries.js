export const trainersQuery = `
  *[
    _type == "trainer"
    && status == "active"
  ]
  | order(displayOrder asc)
`;