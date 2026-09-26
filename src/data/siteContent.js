import {
  BriefcaseBusiness,
  Building2,
  Brain,
  GraduationCap,
  HeartHandshake,
  Lightbulb,
  Target,
  Users,
  TrendingUp,
} from "lucide-react";

export const navLinks = [
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Programs", to: "/programs" },
  { label: "Trainers", to: "/trainers" },
  { label: "Contact", to: "/contact" },
  { label: "Workshops", to: "/workshops" },
  {
    label: "Empowering U",
    href: "https://empoweringu.theempoweringminds.com",
    external: true,
  },
];

export const homepageSections = {
  whoWeAre:
    "Empowering Minds is a Human Capital Development initiative focused on strengthening institutions and organisations through structured behavioural, emotional and mind based transformation.",

  intersectionIntro: "We operate at the intersection of",

  intersectionAreas: [
    {
      title: "Applied Psychology",
      icon: Brain,
    },
    {
      title: "Behavioural Science",
      icon: Users,
    },
    {
      title: "Emotional Intelligence",
      icon: HeartHandshake,
    },
    {
      title: "Neuro-Linguistic Programming (NLP)",
      icon: Lightbulb,
    },
    {
      title: "Performance Acceleration Frameworks",
      icon: TrendingUp,
    },
  ],

  approachTitle: "Engineering Human Capital for Performance",

  approachIntro:
    "We design structured developmental interventions aligned with measurable institutional and organisational outcomes. We do not only conduct workshops. We engineer ecosystems which transform employees into performance multipliers, leading to enhanced productivity and accelerated profits.",

  challengeTitle: "The Evolving Human Capital Challenge",

  challengeIntro:
    "Across educational institutions and corporate organisations, the psychological demands of modern environments are intensifying.",

  challengePoints: [
    "Rising stress exposure",
    "Limited structured coping mechanisms",
    "Emotional fatigue under sustained pressure",
    "Increasing complexity in leadership responsibilities",
    "Communication misalignment within teams",
    "Burnout-driven productivity fluctuations",
  ],

  copingTitle: "Coping Architecture: The Untaught Skill",

  copingIntro:
    "The ability to regulate stress, handle rejection, adapt to uncertainty and change, maintain clarity under pressure, and sustain consistent performance is rarely structured into formal systems. Yet it directly determines productivity, resilience, and long-term success.",

  audiences: [
    {
      title: "Educational Institutions",
      description:
        "We architect human capital development to prepare students for professional environments while strengthening faculty, academic leaders, administrative teams, and institutional management.",
      icon: GraduationCap,
    },
    {
      title: "Corporate Organisations",
      description:
        "We help organisations strengthen emotional regulation, performance stability, leadership, collaborative execution, strategic clarity, and behavioural alignment.",
      icon: Building2,
    },
    {
      title: "Entrepreneurial Performance Conditioning",
      description:
        "We design structured psychological performance systems that strengthen risk tolerance, emotional endurance, decision clarity, resilience, and founder stability.",
      icon: BriefcaseBusiness,
    },
    {
      title: "Internship & Placement",
      description:
        "Our Power Internship & Placement Wing provides corporate conditioning, industry readiness, practical exposure, career guidance, interview preparation, skill enhancement, and industry connections.",
      icon: Target,
    },
  ],

  outcomesTitle: "Measurable Outcomes",

  outcomes: [
    "Enhanced productivity",
    "Performance optimization",
    "Reduced stress-driven inefficiencies",
    "Strengthened leadership pipelines",
    "Improved workplace cohesion",
    "Sustainable institutional growth",
  ],

  whyTitle: "Why Empowering Minds?",

  whyPoints: [
    {
      title: "Structured, Not Generic",
      description:
        "Every intervention is customized to institutional or organisational objectives.",
    },
    {
      title: "Psychology-Led Frameworks",
      description:
        "Grounded in Applied Psychology, Behavioural Science, and NLP.",
    },
    {
      title: "Coping Architecture Integration",
      description:
        "We strengthen resilience as a strategic performance capability.",
    },
    {
      title: "Dual Ecosystem Expertise",
      description:
        "Experience across educational institutions and corporate organisations.",
    },
    {
      title: "Measurable Performance Focus",
      description:
        "Our objective is not attendance. It is performance enhancement.",
    },
    {
      title: "Long-Term Human Capital Strategy",
      description:
        "We build developmental systems, not one-time workshops.",
    },
  ],
};

export const serviceGroups = [
  {
    id: "educational-institutions",
    title: "Educational Institutions",
    eyebrow: "For Institutions",
    description:
      "We help educational institutions prepare students for professional environments while strengthening the people and systems that support them.",
    icon: GraduationCap,

    areas: [
      {
        id: "student-development",
        serviceGroup: "educational-institutions",
        title: "Student Development Strategy",
        description:
          "We prepare students not only for examinations, but for professional environments through structured development in communication, confidence, leadership, emotional intelligence, and career readiness.",
        price: null,
        priceLabel: "Contact us",
          modules: [
          "Communication & Interpersonal Effectiveness",
          "Interview Mastery & Resume Building",
          "Leadership Development",
          "Entrepreneurial Mindset Conditioning",
          "Emotional Intelligence",
          "Interpersonal Skills",
          "Better Focus & Clear Goal Setting",
          "Structured Stress Management",
          "Coping Mechanism Development",
          "Corporate Readiness",
          "Leap to Success Framework",
        ],
        ctaLabel: "Request a Callback",
      },

      {
        id: "faculty-institutional-staff",
        serviceGroup: "educational-institutions",
        title: "Faculty & Institutional Staff Development",
        description:
          "We develop behavioural and professional capabilities across faculty members, academic leaders, administrative teams, and institutional management.",
        price: null,
        priceLabel: "Contact us",
          modules: [
          "Communication Skills",
          "Workplace Behavioural Alignment",
          "Leadership Skills",
          "Decision-Making Skills",
          "Emotional Intelligence",
          "Structured Stress Management",
          "POSH Training",
          "Image Management",
          "Foundational Soft Skills",
          "Effective Classroom Management",
          "Engaging & Interactive Learning Techniques",
          "AI Tools in Lead Generation for Business",
        ],
        ctaLabel: "Request a Callback",
      },
    ],
  },

  {
    id: "corporate-organisations",
    title: "Corporate Organisations",
    eyebrow: "For Corporates",
    description:
      "We help organisations strengthen human capability, leadership, behavioural alignment, and sustainable performance.",
    icon: Building2,

    areas: [
      {
        id: "human-capital-acceleration",
        serviceGroup: "corporate-organisations",
        title: "Human Capital Acceleration",
        description:
          "Modern organisations require more than technical competence. We strengthen the behavioural and psychological capabilities that support stable, sustainable performance.",
        price: null,
        priceLabel: "Contact us",
          modules: [
          "Peak Performance",
          "Emotional Intelligence",
          "Neuro-Linguistic Programming (NLP)",
          "Structured Stress Management",
          "Image Management",
          "Corporate Readiness",
          "Memory Enhancement",
          "Leadership Skills",
          "POSH Training",
          "Foundational Soft Skills",
          "Communication Skills",
          "Workplace Behavioural Alignment",
          "Engaging & Interactive Learning Techniques",
        ],
        ctaLabel: "Request a Callback",
      },

      {
        id: "entrepreneurial-performance",
        serviceGroup: "corporate-organisations",
        title: "Entrepreneurial Performance Conditioning",
        description:
          "We help entrepreneurs and business leaders strengthen the psychological and interpersonal capabilities needed to navigate uncertainty, make decisions, and sustain performance.",
        price: null,
        priceLabel: "Contact us",
          modules: [
          "Peak Performance",
          "Emotional Intelligence",
          "Neuro-Linguistic Programming (NLP)",
          "Advanced Stress Management",
          "Coping Mechanism Mastery",
          "Interpersonal Effectiveness",
          "Conflict Resolution",
          "Communication Mastery",
          "Executive Presence",
          "Work-Life Integration",
          "POSH Training",
          "Industry-Specific Workshops",
        ],
        ctaLabel: "Request a Callback",
      },
    ],
  },
  {
    id: "individual-growth",
    title: "Individual Growth",
    eyebrow: "For Individuals",
    description:
      "We help individuals strengthen the personal, behavioural, and professional capabilities needed to grow with greater confidence, clarity, resilience, and effectiveness.",
    icon: Users,

    areas: [
      {
        id: "personal-growth",
        serviceGroup: "individual-growth",
        title: "Personal Growth & Performance",
        description:
          "A structured approach to developing the mindset, emotional capabilities, interpersonal effectiveness, and performance habits that support meaningful personal and professional growth.",
        price: null,
        priceLabel: "Contact us",
          modules: [
          "Mindset & Performance",
          "Emotional Intelligence",
          "Confidence Building",
          "Communication Skills",
          "Interpersonal Effectiveness",
          "Structured Stress Management",
          "Coping Mechanism Development",
          "Better Focus & Clear Goal Setting",
          "Decision-Making Skills",
          "Leadership Skills",
        ],
        ctaLabel: "Request a Callback",
      },

      {
        id: "professional-growth",
        serviceGroup: "individual-growth",
        title: "Professional Growth & Effectiveness",
        description:
          "We strengthen the behavioural and professional capabilities individuals need to communicate effectively, navigate workplace environments, and perform with greater clarity and confidence.",
        price: null,
        priceLabel: "Contact us",
          modules: [
          "Professional Communication",
          "Workplace Behavioural Alignment",
          "Presentation & Personal Presence",
          "Leadership Development",
          "Emotional Regulation",
          "Executive Presence",
          "Conflict Resolution",
          "Performance Enhancement",
          "Career Readiness",
          "Image Management",
        ],
        ctaLabel: "Request a Callback",
      },
    ],
  },

  {
    id: "train-the-trainer",
    title: "Train the Trainer",
    eyebrow: "For Trainers",
    description:
      "We equip trainers and facilitators with the knowledge, behavioural capabilities, and practical techniques required to deliver engaging and effective development experiences.",
    icon: GraduationCap,

    areas: [
      {
        id: "trainer-development",
        serviceGroup: "train-the-trainer",
        title: "Trainer Development",
        description:
          "We develop trainers who can facilitate learning with confidence, structure, emotional intelligence, and practical engagement techniques.",
        price: null,
        priceLabel: "Contact us",
          modules: [
          "Trainer Communication Skills",
          "Facilitation Skills",
          "Presentation & Trainer Presence",
          "Emotional Intelligence",
          "Interpersonal Effectiveness",
          "Behavioural Techniques",
          "Neuro-Linguistic Programming (NLP)",
          "Adult Learning Principles",
          "Engaging & Interactive Learning Techniques",
          "Classroom Management",
        ],
        ctaLabel: "Request a Callback",
      },

      {
        id: "training-design-delivery",
        serviceGroup: "train-the-trainer",
        title: "Training Design & Delivery",
        description:
          "We help trainers translate development concepts into structured, engaging learning experiences that can be delivered effectively to different audiences.",
        price: null,
        priceLabel: "Contact us",
          modules: [
          "Training Needs Understanding",
          "Learning Session Design",
          "Facilitation Techniques",
          "Participant Engagement",
          "Questioning & Active Listening",
          "Group Dynamics",
          "Experiential Learning Techniques",
          "Feedback & Assessment",
          "Managing Difficult Participants",
          "Training Delivery Practice",
        ],
        ctaLabel: "Request a Callback",
      },
    ],
  },
];

export const aboutContent = {
  heroTitle: "Where Human Potential Meets Structured Development",

  heroText:
    "Empowering Minds is a Human Capital Development initiative focused on strengthening institutions and organisations through structured behavioural, emotional, and mind-based transformation.",

  whoWeAreTitle: "Who We Are",

  whoWeAre:
    "We work at the intersection of Applied Psychology, Behavioural Science, Emotional Intelligence, Neuro-Linguistic Programming (NLP), and Performance Acceleration Frameworks.",

  approach:
    "We design structured developmental interventions aligned with measurable institutional and organisational outcomes. We do not simply conduct workshops. We engineer ecosystems that help people become performance multipliers, leading to enhanced productivity and stronger organisational outcomes.",

  founderTitle: "A Note from the Founder",

  founderName: "Ira Saha",

  founderRole: "Founder, Empowering Minds",

  founderNote:
    "Over years of working with students, educators, professionals, and institutional leaders, one consistent insight emerged: HR is one of the most important assets of any organisation, yet it is often not given due importance.",

  founderNoteContinued:
    "The focus is often placed on technical knowledge and skills. Technical competence may open doors, but behavioural alignment sustains success.",

  founderStory:
    "Empowering Minds was founded to integrate Applied Psychology and structured Human Resource Development into academic and corporate environments. Our work focuses on strengthening coping mechanisms, emotional regulation, leadership maturity, communication effectiveness, and performance enhancement to improve overall productivity and profitability.",

  founderClosing:
    "We do not create motivation. We create measurable transformation. When internal alignment is engineered correctly, performance becomes sustainable.",

  founderShortTitle: "A Note from the Founder",
  
  founderShortNote: "Empowering Minds was founded on a simple belief: sustainable performance begins with people. Our work brings Applied Psychology and Human Resource Development together to help individuals and organisations grow with greater clarity, resilience, and effectiveness.",
  
  founderShortClosing: "When people are better equipped to understand themselves, work with others, and navigate change, performance becomes more sustainable.",

  whyTitle: "Why Empowering Minds?",

  whyPoints: [
    {
      title: "Structured, Not Generic",
      description:
        "Every intervention is customized to institutional or organisational objectives.",
    },
    {
      title: "Psychology-Led Frameworks",
      description:
        "Our work is grounded in Applied Psychology, Behavioural Science, and NLP.",
    },
    {
      title: "Coping Architecture Integration",
      description:
        "We strengthen resilience as an essential driver of sustainable performance.",
    },
    {
      title: "Dual Ecosystem Expertise",
      description:
        "Our work spans educational institutions and corporate organisations.",
    },
    {
      title: "Measurable Performance Focus",
      description:
        "Our objective is not attendance. It is performance enhancement.",
    },
    {
      title: "Long-Term Human Capital Strategy",
      description:
        "We build developmental systems, not one-time workshops.",
    },
  ],
};

export const contactDetails = {
  phones: ["+91 7908466757", "+91 7003055263"],
  email: "empoweringminds19@gmail.com",
  address: [
    "Yamuna Building, 86 Golaghata Road",
    "Dakshindari, South Dumdum",
    "Kolkata – 700048",
  ],
};

export const faqs = [
  {
    question: "Who does Empowering Minds work with?",
    answer:
      "We work with educational institutions, corporate organisations, professionals, and entrepreneurs through structured development interventions.",
  },
  {
    question: "Can interventions be customized?",
    answer:
      "Yes. Our interventions are customized around the needs and objectives of the institution or organisation.",
  },
  {
    question: "What areas do you work on?",
    answer:
      "Our work spans performance, emotional intelligence, communication, leadership, behavioural alignment, stress management, interpersonal effectiveness, and other professional development areas.",
  },
];

export const testimonials = [
  {
    quote:
      "The interactive sessions gave our managers positive inspiration and valuable insights into strategic thinking, motivation, and effectiveness. The programme helped participants better align their roles and actions with organisational goals.",

    name: "K. S. Adhikari",
    role: "Chairman",
    organisation: "Synergy Industrial Services Private Limited",

    programme: "The Leap to Success",
  },
];

export const webinar = {
  eyebrow: "Upcoming Webinar",
  title: "Peak Performance Webinar",
  description:
    "A focused learning experience for professionals, managers, entrepreneurs and corporate teams who want to optimize their capabilities and achieve their fullest potential.",

  date: "11 & 12 October 2026",
  time: "6:00 PM IST",
  format: "Live on Zoom",

  price: '₹299',

  image: "/images/webinar.jpg",
  imageAlt: "Participants attending a professional webinar",

  highlights: [
    "Real knowledge",
    "Practical insights",
    "Real change",
    "Real time transformation",
  ],

  bonus: {
    eyebrow: "Registration Benefit",
    title: "A Complimentary Image & Executive Presence Session",
    description:
      "Everyone who registers for the webinar receives a complimentary image session.",
  },

  ctaTitle: "Ready to perform at your full potential",
  cta: "Register for the Webinar",
  link: "/webinar",
};