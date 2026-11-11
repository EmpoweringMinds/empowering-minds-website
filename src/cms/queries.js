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
    && isActive == true
  ]
  | order(displayOrder asc) {
    _id,
    title,
    "slug": slug.current,
    description,
    fullDescription,
    coverImage,
    duration,
    formats,
    learningOutcomes,
    targetAudience,
    additionalModules[]-> {
      _id,
      title,
      "slug": slug.current,
      shortDescription,
      fullDescription,
      coverImage,
      displayOrder,
      isActive
    },
    displayOrder,
    isActive
  }
`;

export const developmentModuleQuery = `
  *[
_type == "developmentModule"
&& isActive == true
]
| order(displayOrder asc) {
  _id,
  title,
  "slug": slug.current,
  shortDescription,
  fullDescription,
  coverImage,
  displayOrder,
  isActive
}
`
export const coursesPageQuery = `
  *[
    _type == "coursesPage"
    && _id == "coursesPage"
  ][0] {
    _id,

    hero {
      eyebrow,
      heading,
      description,
      heroImage,
      primaryCTA,
      secondaryCTA
    },

    introduction {
      heading,
      description
    },

    developmentAreas {
      heading,
      description,
      areaCards[] {
        title,
        description,
        iconName
      }
    },

    courseDirectory[] {
    _ref
    },

    additionalModules[] {
      _ref
    },

    audience {
      heading,
      description,
      audienceCards[] {
        title,
        description,
        audienceImage
      }
    },

    developmentApproach {
      heading,
      description,
      developmentSteps[] {
        title,
        description
      }
    },

    learningFormats {
      heading,
      description,
      formatCards[] {
        title,
        description,
        iconName
      }
    },

    finalCTA {
      heading,
      description,
      primaryCTA,
      secondaryCTA
    },

    seo {
      metaTitle,
      metaDescription,
      ogImage,
      noIndex
    }
  }
`;

export const aboutPageQuery = `
  *[
    _type == "aboutPage"
    && _id == "aboutPage"
  ][0] {
    _id,

    hero {
      eyebrow,
      heading,
      description,
      heroImage,
      primaryCTA,
      secondaryCTA
    },

    introduction {
      eyebrow,
      heading,
      description,
      fullDescription
    },

    foundations {
      eyebrow,
      heading,
      accent,
      description,
      areaCards[] {
        number,
        title,
        description,
        iconName
      },
      closingStatement
    },

    founderSection {
      eyebrow,
      title,
      founderName,
      founderRole,
      founderNote,
      founderNoteContinued,
      founderStory,
      founderClosing,
      founderImage
    },

    whyEmpoweringMinds {
      eyebrow,
      heading,
      description,
      whyCards[] {
        title,
        description
      }
    },

    developmentPathways {
      eyebrow,
      heading,
      description,
      developmentPathwayCards[] {
        number,
        title,
        description,
        iconName,
        symbol,
        ctaLabel,
        theme,
        linkTo
      }
    },

    finalCTA {
      heading,
      description,
      primaryCTA,
      secondaryCTA
    },

    seo {
      metaTitle,
      metaDescription,
      ogImage,
      noIndex
    }
  }
`;

export const programsPageQuery = `
  *[
    _type == "programsPage"
    && _id == "programsPage"
  ][0] {
    _id,

    hero {
      eyebrow,
      heading,
      description,
      heroImage,
      primaryCTA,
      secondaryCTA
    },

    developmentAreas {
      eyebrow,
      heading,
      description,
      areaCards[] {
        number,
        title,
        description,
        iconName,
        category
      }
    },

    programsByAudience {
      eyebrow,
      heading,
      description,
      serviceGroups[] {
        id,
        eyebrow,
        heading,
        description,
        iconName,
        groupCards[] {
          id,
          heading,
          description,
          groupReferance,
          modules[],
          ctaLabel
        }
      }
    },

    deliveryApproach {
      eyebrow,
      heading,
      accentHeading,
      description,
      image
    },

    finalCTA {
      heading,
      description,
      primaryCTA,
      secondaryCTA
    },

    seo {
      metaTitle,
      metaDescription,
      ogImage,
      noIndex
    }
  }
`;