// Generated from monash.edu header/footer markup.
export interface NavLink { label: string; href: string }
export interface NavItem extends NavLink { children: NavLink[] }
export interface FooterColumn { title: string; links: NavLink[] }
export interface LegalSection { title: string; lines: string[]; link?: NavLink }

export const navItems: NavItem[] = [
  {
    "label": "About",
    "href": "https://www.monash.edu/about",
    "children": [
      {
        "label": "Who we are",
        "href": "https://www.monash.edu/about/who"
      },
      {
        "label": "Governance",
        "href": "https://www.monash.edu/about/governance"
      },
      {
        "label": "Structure",
        "href": "https://www.monash.edu/about/structure"
      },
      {
        "label": "Strategic direction",
        "href": "https://www.monash.edu/about/strategic-direction"
      },
      {
        "label": "Our locations",
        "href": "https://www.monash.edu/about/our-locations"
      },
      {
        "label": "Our rankings",
        "href": "https://www.monash.edu/about/our-rankings"
      },
      {
        "label": "Events",
        "href": "https://www.monash.edu/about/events"
      },
      {
        "label": "Sustainability",
        "href": "https://www.monash.edu/about/sustainability"
      },
      {
        "label": "Jobs at Monash",
        "href": "https://www.monash.edu/about/jobs-at-monash"
      },
      {
        "label": "Raise your concerns",
        "href": "https://www.monash.edu/about/concerns-complaints"
      },
      {
        "label": "Safety and security",
        "href": "https://www.monash.edu/about/safety-security"
      },
      {
        "label": "Contact",
        "href": "https://www.monash.edu/about/contact-us"
      }
    ]
  },
  {
    "label": "Study",
    "href": "https://www.monash.edu/study-at-monash",
    "children": [
      {
        "label": "Why Monash",
        "href": "https://www.monash.edu/study-at-monash/why-choose-monash"
      },
      {
        "label": "Courses",
        "href": "https://www.monash.edu/study-at-monash/courses"
      },
      {
        "label": "How to apply",
        "href": "https://www.monash.edu/study-at-monash/how-to-apply"
      },
      {
        "label": "Fees and scholarships",
        "href": "https://www.monash.edu/study-at-monash/fees-and-scholarships"
      },
      {
        "label": "International",
        "href": "https://www.monash.edu/study-at-monash/international"
      }
    ]
  },
  {
    "label": "Research",
    "href": "https://www.monash.edu/research",
    "children": [
      {
        "label": "Find a Researcher",
        "href": "https://www.monash.edu/research/find"
      },
      {
        "label": "Find institutes and centres",
        "href": "https://www.monash.edu/research/centres"
      },
      {
        "label": "Masters by Research and PhD",
        "href": "https://www.monash.edu/research/phd-masters-by-research"
      },
      {
        "label": "Grants and funding",
        "href": "https://www.monash.edu/research/grants-funding"
      },
      {
        "label": "Research Ethics and Integrity",
        "href": "https://www.monash.edu/research/ethics-and-integrity"
      },
      {
        "label": "Researcher talent enhancement",
        "href": "https://www.monash.edu/research/talent-enhancement"
      },
      {
        "label": "Industry and commercialisation",
        "href": "https://www.monash.edu/research/industry-and-commercialisation"
      },
      {
        "label": "Donate to research",
        "href": "https://www.monash.edu/research/donate-to-research"
      },
      {
        "label": "Addressing global challenges",
        "href": "https://www.monash.edu/research/global-challenges"
      },
      {
        "label": "Responsible research",
        "href": "https://www.monash.edu/research/responsible-research"
      },
      {
        "label": "Indigenous Research & Stories of Impact",
        "href": "https://www.monash.edu/research/Indigenous-Research-and-Stories-of-Impact"
      }
    ]
  },
  {
    "label": "Enterprise",
    "href": "https://www.monash.edu/industry",
    "children": [
      {
        "label": "Partners and collaborators",
        "href": "https://www.monash.edu/industry/partners-and-collaborators"
      },
      {
        "label": "Commercialisation and innovation",
        "href": "https://www.monash.edu/industry/commercialisation"
      },
      {
        "label": "Monash Ventures",
        "href": "https://www.monash.edu/industry/monash-ventures"
      },
      {
        "label": "Monash Technology Precinct",
        "href": "https://www.monash.edu/industry/monash-technology-precinct"
      },
      {
        "label": "Monash Boston Hub",
        "href": "https://www.monash.edu/industry/monash-boston-hub"
      }
    ]
  },
  {
    "label": "International",
    "href": "https://www.monash.edu/international",
    "children": [
      {
        "label": "International students",
        "href": "https://www.monash.edu/international/international-students"
      },
      {
        "label": "Global partnerships",
        "href": "https://www.monash.edu/international/global-partnerships"
      }
    ]
  },
  {
    "label": "Newsroom",
    "href": "https://www.monash.edu/news",
    "children": []
  }
]

export const footerColumns: FooterColumn[] = [
  {
    "title": "Community",
    "links": [
      {
        "label": "Faculties",
        "href": "https://www.monash.edu/about/structure/faculties"
      },
      {
        "label": "Locations",
        "href": "https://www.monash.edu/about/our-locations"
      },
      {
        "label": "Diversity and inclusion",
        "href": "https://www.monash.edu/about/who/equity-diversity-inclusion"
      },
      {
        "label": "Safety and security",
        "href": "https://www.monash.edu/about/safety-security"
      },
      {
        "label": "Sustainability",
        "href": "https://www.monash.edu/sustainability"
      }
    ]
  },
  {
    "title": "Resources",
    "links": [
      {
        "label": "Important dates",
        "href": "https://www.monash.edu/students/dates"
      },
      {
        "label": "How to apply",
        "href": "https://www.monash.edu/study/how-to-apply"
      },
      {
        "label": "A-Z index",
        "href": "https://www.monash.edu/a-z"
      },
      {
        "label": "Policy Bank",
        "href": "https://www.monash.edu/policy-bank"
      },
      {
        "label": "FAQs",
        "href": "https://www.monash.edu/media/links/global/faqs-monash-connect"
      }
    ]
  },
  {
    "title": "Contact",
    "links": [
      {
        "label": "Contact us",
        "href": "https://www.monash.edu/about/contact-us"
      },
      {
        "label": "Campus maps",
        "href": "https://www.monash.edu/about/our-locations/maps"
      },
      {
        "label": "Jobs at Monash",
        "href": "https://www.monash.edu/jobs"
      },
      {
        "label": "Recruit a student",
        "href": "https://www.monash.edu/collaborate"
      },
      {
        "label": "Pay online",
        "href": "https://www.monash.edu/payments"
      }
    ]
  },
  {
    "title": "News",
    "links": [
      {
        "label": "Latest news",
        "href": "https://www.monash.edu/news"
      },
      {
        "label": "Monash Lens",
        "href": "https://www.monash.edu/remaps/lens"
      },
      {
        "label": "Podcasts",
        "href": "https://www.monash.edu/news/monash-university-podcasts"
      },
      {
        "label": "A Different Lens",
        "href": "https://www.monash.edu/media/links/global/a-different-lens"
      },
      {
        "label": "Monash Life",
        "href": "https://www.monash.edu/media/links/global/monash-life"
      }
    ]
  },
  {
    "title": "On Our Site",
    "links": [
      {
        "label": "Who we are",
        "href": "https://www.monash.edu/about/who"
      },
      {
        "label": "Find a course",
        "href": "https://www.monash.edu/study/courses/find-a-course"
      },
      {
        "label": "Find a researcher",
        "href": "https://www.monash.edu/research/find"
      },
      {
        "label": "Partner with Monash",
        "href": "https://www.monash.edu/industry/partners-and-collaborators"
      },
      {
        "label": "Sitemap",
        "href": "https://www.monash.edu/sitemap"
      }
    ]
  }
]

export const footerUtils: NavLink[] = [
  {
    "label": "Accessibility",
    "href": "/accessibility"
  },
  {
    "label": "Disclaimer & copyright",
    "href": "/disclaimer-copyright"
  },
  {
    "label": "Terms & conditions",
    "href": "https://www.monash.edu/terms-and-conditions"
  },
  {
    "label": "Data privacy & cyber security",
    "href": "https://www.monash.edu/privacy-monash"
  },
  {
    "label": "Data Consent Settings",
    "href": "#"
  }
]

export const footerSocial: NavLink[] = [
  {
    "label": "Facebook",
    "href": "https://www.facebook.com/Monash.University"
  },
  {
    "label": "Instagram",
    "href": "https://www.instagram.com/monash_uni"
  },
  {
    "label": "TikTok",
    "href": "https://www.tiktok.com/@monash_uni?lang=en"
  },
  {
    "label": "LinkedIn",
    "href": "https://www.linkedin.com/company/monash-university"
  }
]

export const footerLegal: LegalSection[] = [
  {
    "title": "Registered Australian University",
    "lines": [
      "ABN: 12 377 614 012",
      "TEQSA Provider ID: PRV12140"
    ]
  },
  {
    "title": "CRICOS Provider Number",
    "lines": [
      "Monash University: 00008C",
      "Monash College: 01857J"
    ]
  },
  {
    "title": "Authorised by",
    "lines": [
      "Executive Director, Marketing"
    ]
  },
  {
    "title": "",
    "lines": [
      "Last updated: Aug 2026"
    ],
    "link": { "label": "Website feedback", "href": "https://www.monash.edu/support-form" }
  }
]

export const acknowledgement: [string, string, string] = [
  "We acknowledge and pay respects to the Elders and Traditional Owners of the land on which our Australian campuses stand.",
  "https://www.monash.edu/indigenous-students",
  "Information for Indigenous Australians"
]
