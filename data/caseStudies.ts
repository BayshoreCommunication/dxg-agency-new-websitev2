export type CaseStudy = {
  id: number;
  slug: string;
  study: string;
  title: string;
  highlight: string;
  subtitle: string;
  quote: string;
  quoteAuthor: string;
  image: string;
  background: string;
  stats: {
    icon: string;
    label: string;
    value: string;
  }[];
  sections: {
    icon: string;
    title: string;
    highlight: string;
    content?: string;
    list?: string[];
  }[];
};

export const caseStudies: CaseStudy[] = [
  {
    id: 1,
    slug: "association-event-new-orleans",
    study: "Case Study #1",
    title: "Association",
    highlight: "Event",
    subtitle:
      "National Association Conference | 6,500 Attendees | New Orleans, LA",
    quote:
      "DXG helped us solve a major visibility challenge and made execution seamless across the entire event.",
    quoteAuthor: "-Association Planning Committee",
    image: "/images/home/case-study/case-study-1.png",
    background: "#111111",

    stats: [
      {
        icon: "/images/home/case-study/location.png",
        label: "Location",
        value: "New Orleans, LA",
      },
      {
        icon: "/images/home/case-study/duration.png",
        label: "Duration",
        value: "5 Days",
      },
      {
        icon: "/images/home/case-study/general-session.png",
        label: "(2) Large",
        value: "General Sessions",
      },
      {
        icon: "/images/home/case-study/hybrid.png",
        label: "Hybrid",
        value: "New Orleans, LA",
      },
    ],

    sections: [
      {
        icon: "/images/home/case-study/challenge.png",
        title: "The",
        highlight: "Challenge",
        content:
          "The client needed to ensure that all 6,500 attendees could clearly see critical content during live voting sessions.",
      },
      {
        icon: "/images/home/case-study/approach.png",
        title: "The",
        highlight: "Approach",
        content:
          "DXG redesigned the room layout so every attendee had a clear sightline to critical content.",
      },
      {
        icon: "/images/home/case-study/result.png",
        title: "The",
        highlight: "Result",
        list: [
          "Clear visibility for all attendees",
          "Zero visibility-related disruptions",
          "Presenters stayed confident",
        ],
      },
    ],
  },

  {
    id: 2,
    slug: "corporate-event-orlando",
    study: "Case Study #2",
    title: "Corporate",
    highlight: "Event",
    subtitle: "Corporate Sales Conference | 850 Attendees | Orlando, FL",
    quote:
      "DXG elevated the entire experience. Everything ran smoothly, and the final product exceeded expectations.",
    quoteAuthor: "-Sr Marketing Event Manager",
    image: "/images/home/case-study/case-study-2.png",
    background: "#151515",

    stats: [
      {
        icon: "/images/home/case-study/location.png",
        label: "Location",
        value: "Orlando, FL",
      },
      {
        icon: "/images/home/case-study/duration.png",
        label: "Duration",
        value: "5 Days",
      },
      {
        icon: "/images/home/case-study/general-session.png",
        label: "(2) Large",
        value: "General Session & 12+ Breakouts",
      },
      {
        icon: "/images/home/case-study/hybrid.png",
        label: "Hybrid",
        value: "Content Capture + Post-Event Media",
      },
    ],

    sections: [
      {
        icon: "/images/home/case-study/challenge.png",
        title: "The",
        highlight: "Challenge",
        content:
          "The client needed to deliver a high-impact general session experience while ensuring seamless execution.",
      },
      {
        icon: "/images/home/case-study/approach.png",
        title: "The",
        highlight: "Approach",
        content:
          "DXG designed a production-driven environment focused on clarity, flow, and audience engagement.",
      },
      {
        icon: "/images/home/case-study/result.png",
        title: "The",
        highlight: "Result",
        list: [
          "Elevated stage experience",
          "Seamless execution",
          "High-quality captured content",
        ],
      },
    ],
  },

  {
    id: 3,
    slug: "association-event-savannah",
    study: "Case Study #3",
    title: "Association",
    highlight: "Event",
    subtitle:
      "Multi-Room Association Conference | 1,200 Attendees | Savannah, GA",
    quote:
      "We hold our event every other year and DXG continues to elevate the experience.",
    quoteAuthor: "-Director Conferences & Navigation Services",
    image: "/images/home/case-study/case-study-3.png",
    background: "#101010",

    stats: [
      {
        icon: "/images/home/case-study/location.png",
        label: "Location",
        value: "Savannah, GA",
      },
      {
        icon: "/images/home/case-study/duration.png",
        label: "Duration",
        value: "5 Days",
      },
      {
        icon: "/images/home/case-study/general-session.png",
        label: "(2) Large",
        value: "General Session & 25+ Breakouts",
      },
      {
        icon: "/images/home/case-study/hybrid.png",
        label: "Hybrid",
        value: "Content Capture + Post-Event Media",
      },
    ],

    sections: [
      {
        icon: "/images/home/case-study/challenge.png",
        title: "The",
        highlight: "Challenge",
        content:
          "The planning team was navigating high AV costs and low-quality deliverables.",
      },
      {
        icon: "/images/home/case-study/approach.png",
        title: "The",
        highlight: "Approach",
        content:
          "DXG became a single production partner — eliminating multi-vendor chaos.",
      },
      {
        icon: "/images/home/case-study/result.png",
        title: "The",
        highlight: "Result",
        list: [
          "Consistent production quality",
          "Reduced vendor management",
          "Stronger attendee experience",
        ],
      },
    ],
  },

  {
    id: 4,
    slug: "corporate-event-las-vegas-arrival",
    study: "Case Study #4",
    title: "Corporate",
    highlight: "Event",
    subtitle: "General Session / 8 Breakout Rooms | 700 Attendees | Las Vegas, NV",
    quote: "Hybrid Event • Production Management • AV Technology",
    quoteAuthor: "",
    image: "https://www.dropbox.com/scl/fi/53ev0rw4ki9a3r5jdloef/AI-Arival-Las-Vegas.png?rlkey=rjqsh4vvsts2yj0ol8zv14i59&raw=1",
    background: "#111111",
    stats: [
      {
        icon: "/images/home/case-study/location.png",
        label: "Location",
        value: "Las Vegas, NV",
      },
      {
        icon: "/images/home/case-study/duration.png",
        label: "Duration",
        value: "4 Days",
      },
      {
        icon: "/images/home/case-study/hybrid.png",
        label: "Services",
        value: "Hybrid Event, Production Management, AV Technology",
      },
    ],
    sections: [
      {
        icon: "/images/home/case-study/challenge.png",
        title: "The",
        highlight: "Challenge",
        content:
          "The client needed to deliver a hybrid general session alongside 8 breakout rooms for 700 attendees in Las Vegas.",
      },
      {
        icon: "/images/home/case-study/approach.png",
        title: "The",
        highlight: "Approach",
        content:
          "DXG managed full production, AV technology, and hybrid connectivity to ensure a seamless multi-room experience.",
      },
      {
        icon: "/images/home/case-study/result.png",
        title: "The",
        highlight: "Result",
        list: [
          "Seamless hybrid connectivity",
          "Consistent AV across all rooms",
          "Flawless production execution",
        ],
      },
    ],
  },

  {
    id: 5,
    slug: "corporate-event-tampa-wellcare",
    study: "Case Study #5",
    title: "Corporate",
    highlight: "Event",
    subtitle: "General Session | 500 Attendees | Tampa, FL",
    quote: "Production Management • Graphics & Animation • Conference Capture • Event Experience Design • Audiovisual Technology",
    quoteAuthor: "",
    image: "https://www.dropbox.com/scl/fi/es6u6g2ag14gqeswdcvq9/AI-Wellcare-2019.png?rlkey=osd07ulkgji0etuynekr44lus&raw=1",
    background: "#151515",
    stats: [
      {
        icon: "/images/home/case-study/location.png",
        label: "Location",
        value: "Tampa, FL",
      },
      {
        icon: "/images/home/case-study/duration.png",
        label: "Duration",
        value: "3 Days",
      },
      {
        icon: "/images/home/case-study/hybrid.png",
        label: "Services",
        value: "Production Management, Graphics & Animation, Conference Capture, Event Experience Design, Audiovisual Technology",
      },
    ],
    sections: [
      {
        icon: "/images/home/case-study/challenge.png",
        title: "The",
        highlight: "Challenge",
        content:
          "The client required a polished general session for 500 attendees with high-quality graphics and full conference capture.",
      },
      {
        icon: "/images/home/case-study/approach.png",
        title: "The",
        highlight: "Approach",
        content:
          "DXG delivered end-to-end production management with custom graphics, animation, and complete conference capture.",
      },
      {
        icon: "/images/home/case-study/result.png",
        title: "The",
        highlight: "Result",
        list: [
          "High-impact general session",
          "Professional graphics & animation",
          "Complete conference capture",
        ],
      },
    ],
  },

  {
    id: 6,
    slug: "nonprofit-event-charlotte-lumina",
    study: "Case Study #6",
    title: "Non-Profit",
    highlight: "Event",
    subtitle: "General Session | 300 Attendees | Charlotte, NC",
    quote: "Production Management • Meeting Planning Support • Audiovisual Technology • Event Experience Design • Graphics & Animation • Conference Capture",
    quoteAuthor: "",
    image: "https://www.dropbox.com/scl/fi/k9fu8091mq3p1yvzknbn8/AI-Lumina-Foundation.png?rlkey=0ut9b3qusa6mqecm2cmrp2qbt&raw=1",
    background: "#101010",
    stats: [
      {
        icon: "/images/home/case-study/location.png",
        label: "Location",
        value: "Charlotte, NC",
      },
      {
        icon: "/images/home/case-study/duration.png",
        label: "Duration",
        value: "3 Days",
      },
      {
        icon: "/images/home/case-study/hybrid.png",
        label: "Services",
        value: "Production Management, Meeting Planning Support, Audiovisual Technology, Event Experience Design, Graphics & Animation, Conference Capture",
      },
    ],
    sections: [
      {
        icon: "/images/home/case-study/challenge.png",
        title: "The",
        highlight: "Challenge",
        content:
          "The non-profit needed comprehensive event support for 300 attendees including planning support, AV, and full conference capture.",
      },
      {
        icon: "/images/home/case-study/approach.png",
        title: "The",
        highlight: "Approach",
        content:
          "DXG provided full-service production covering all technical and experiential needs from planning through capture.",
      },
      {
        icon: "/images/home/case-study/result.png",
        title: "The",
        highlight: "Result",
        list: [
          "Smooth event execution",
          "Full conference documented",
          "Strong attendee experience",
        ],
      },
    ],
  },

  {
    id: 7,
    slug: "corporate-event-orlando-avi-spl",
    study: "Case Study #7",
    title: "Corporate",
    highlight: "Event",
    subtitle: "General Session / 10 Breakout Rooms | 700 Attendees | Orlando, FL",
    quote: "Hybrid Event • Production Management • Audiovisual Technology • Event Experience Design • Graphics & Animation • Conference Capture",
    quoteAuthor: "",
    image: "https://www.dropbox.com/scl/fi/k7fukg2tkg7zwrylam9rd/AI-AVI-SPL-2022.png?rlkey=ldnxu3v0cxs0wd0chhjpqfi0j&raw=1",
    background: "#111111",
    stats: [
      {
        icon: "/images/home/case-study/location.png",
        label: "Location",
        value: "Orlando, FL",
      },
      {
        icon: "/images/home/case-study/duration.png",
        label: "Duration",
        value: "5 Days",
      },
      {
        icon: "/images/home/case-study/hybrid.png",
        label: "Services",
        value: "Hybrid Event, Production Management, Audiovisual Technology, Event Experience Design, Graphics & Animation, Conference Capture",
      },
    ],
    sections: [
      {
        icon: "/images/home/case-study/challenge.png",
        title: "The",
        highlight: "Challenge",
        content:
          "The client needed a large-scale hybrid event with a main general session and 10 breakout rooms for 700 attendees.",
      },
      {
        icon: "/images/home/case-study/approach.png",
        title: "The",
        highlight: "Approach",
        content:
          "DXG orchestrated full hybrid production management, AV technology, and graphics across all event spaces.",
      },
      {
        icon: "/images/home/case-study/result.png",
        title: "The",
        highlight: "Result",
        list: [
          "Successful hybrid broadcast",
          "Seamless 10-room execution",
          "Premium visual experience",
        ],
      },
    ],
  },

  {
    id: 8,
    slug: "corporate-event-tampa-outdoor",
    study: "Case Study #8",
    title: "Corporate",
    highlight: "Event",
    subtitle: "Outdoor Concert | 600 Attendees | Tampa, FL",
    quote: "Production Management",
    quoteAuthor: "",
    image: "https://www.dropbox.com/scl/fi/4ko7r9p8qmq5oysd2bu88/Reliaquest-Outdoor-Event-No-Logo.png?rlkey=ovb5klglhdl51gs0vqi6sv58m&raw=1",
    background: "#151515",
    stats: [
      {
        icon: "/images/home/case-study/location.png",
        label: "Location",
        value: "Tampa, FL",
      },
      {
        icon: "/images/home/case-study/duration.png",
        label: "Duration",
        value: "1 Day",
      },
      {
        icon: "/images/home/case-study/hybrid.png",
        label: "Services",
        value: "Production Management",
      },
    ],
    sections: [
      {
        icon: "/images/home/case-study/challenge.png",
        title: "The",
        highlight: "Challenge",
        content:
          "The client needed professional production management for an outdoor concert experience for 600 attendees.",
      },
      {
        icon: "/images/home/case-study/approach.png",
        title: "The",
        highlight: "Approach",
        content:
          "DXG handled all production logistics for the outdoor environment, ensuring a polished and high-impact concert experience.",
      },
      {
        icon: "/images/home/case-study/result.png",
        title: "The",
        highlight: "Result",
        list: [
          "Flawless outdoor execution",
          "High-impact concert atmosphere",
          "On-time production delivery",
        ],
      },
    ],
  },

  {
    id: 9,
    slug: "nonprofit-event-sarasota-ringling",
    study: "Case Study #9",
    title: "Non-Profit",
    highlight: "Event",
    subtitle: "General Session | 400 Attendees | Sarasota, FL",
    quote: "Production Management • Audiovisual Technology • Event Experience Design • Graphics & Animation",
    quoteAuthor: "",
    image: "https://www.dropbox.com/scl/fi/dmlacxbtzggj15q5xws15/Ringling-Visionaires.JPG?rlkey=ztq7m55se9zbhprr2uyion4rz&raw=1",
    background: "#101010",
    stats: [
      {
        icon: "/images/home/case-study/location.png",
        label: "Location",
        value: "Sarasota, FL",
      },
      {
        icon: "/images/home/case-study/duration.png",
        label: "Duration",
        value: "1 Day",
      },
      {
        icon: "/images/home/case-study/hybrid.png",
        label: "Services",
        value: "Production Management, Audiovisual Technology, Event Experience Design, Graphics & Animation",
      },
    ],
    sections: [
      {
        icon: "/images/home/case-study/challenge.png",
        title: "The",
        highlight: "Challenge",
        content:
          "The non-profit needed a visually compelling general session for 400 attendees with event experience design and custom graphics.",
      },
      {
        icon: "/images/home/case-study/approach.png",
        title: "The",
        highlight: "Approach",
        content:
          "DXG combined production management with strong visual design to elevate the non-profit's signature event.",
      },
      {
        icon: "/images/home/case-study/result.png",
        title: "The",
        highlight: "Result",
        list: [
          "Elevated event experience",
          "Striking visual presentation",
          "Seamless AV delivery",
        ],
      },
    ],
  },

  {
    id: 10,
    slug: "corporate-event-oxon-hill",
    study: "Case Study #10",
    title: "Corporate",
    highlight: "Event",
    subtitle: "General Session | 700 Attendees | Oxon Hill, MD",
    quote: "Production Management • Event Experience Design • Audiovisual Technology • Graphics & Animation • Conference Capture",
    quoteAuthor: "",
    image: "https://www.dropbox.com/scl/fi/36crg95v2oa2bejks60ue/Higher-Logic-2019-Updated.JPG?rlkey=dt2u7zyq43xgwku4bzx6s7e47&raw=1",
    background: "#111111",
    stats: [
      {
        icon: "/images/home/case-study/location.png",
        label: "Location",
        value: "Oxon Hill, MD",
      },
      {
        icon: "/images/home/case-study/duration.png",
        label: "Duration",
        value: "3 Days",
      },
      {
        icon: "/images/home/case-study/hybrid.png",
        label: "Services",
        value: "Production Management, Event Experience Design, Audiovisual Technology, Graphics & Animation, Conference Capture",
      },
    ],
    sections: [
      {
        icon: "/images/home/case-study/challenge.png",
        title: "The",
        highlight: "Challenge",
        content:
          "The client needed a high-quality general session with full graphics, AV support, and content capture for 700 attendees.",
      },
      {
        icon: "/images/home/case-study/approach.png",
        title: "The",
        highlight: "Approach",
        content:
          "DXG delivered comprehensive production and event experience design with full conference capture.",
      },
      {
        icon: "/images/home/case-study/result.png",
        title: "The",
        highlight: "Result",
        list: [
          "Polished general session",
          "Full content captured",
          "Elevated attendee experience",
        ],
      },
    ],
  },

  {
    id: 11,
    slug: "corporate-event-orlando-innovate",
    study: "Case Study #11",
    title: "Corporate",
    highlight: "Event",
    subtitle: "General Session | 500 Attendees | Orlando, FL",
    quote: "Production Management • Audiovisual Technology • Event Experience Design • Graphics & Animation • Conference Capture • Meeting Planning Support",
    quoteAuthor: "",
    image: "https://www.dropbox.com/scl/fi/ed6bhns7qyisgdsbmdtar/Innovate-for-Impact.png?rlkey=n4dezi5oo9zh9nc8c59wa3kvf&raw=1",
    background: "#151515",
    stats: [
      {
        icon: "/images/home/case-study/location.png",
        label: "Location",
        value: "Orlando, FL",
      },
      {
        icon: "/images/home/case-study/duration.png",
        label: "Duration",
        value: "3 Days",
      },
      {
        icon: "/images/home/case-study/hybrid.png",
        label: "Services",
        value: "Production Management, Audiovisual Technology, Event Experience Design, Graphics & Animation, Conference Capture, Meeting Planning Support",
      },
    ],
    sections: [
      {
        icon: "/images/home/case-study/challenge.png",
        title: "The",
        highlight: "Challenge",
        content:
          "The client required comprehensive production support including planning, graphics, capture, and AV for 500 attendees.",
      },
      {
        icon: "/images/home/case-study/approach.png",
        title: "The",
        highlight: "Approach",
        content:
          "DXG provided full-service production management and meeting planning support for a seamless event.",
      },
      {
        icon: "/images/home/case-study/result.png",
        title: "The",
        highlight: "Result",
        list: [
          "Streamlined event planning",
          "Premium production quality",
          "Complete conference documentation",
        ],
      },
    ],
  },

  {
    id: 12,
    slug: "corporate-event-grapevine-texas",
    study: "Case Study #12",
    title: "Corporate",
    highlight: "Event",
    subtitle: "General Session / 8 Breakout Rooms | 450 Attendees | Grapevine, TX",
    quote: "Production Management • Audiovisual Technology • Event Experience Design • Graphics & Animation",
    quoteAuthor: "",
    image: "https://www.dropbox.com/scl/fi/4860yx3qkwvd01udzmx3n/AI-Forte-2025-Event.png?rlkey=ubog71sm3gwa0qswkmuospkf3&raw=1",
    background: "#101010",
    stats: [
      {
        icon: "/images/home/case-study/location.png",
        label: "Location",
        value: "Grapevine, TX",
      },
      {
        icon: "/images/home/case-study/duration.png",
        label: "Duration",
        value: "4 Days",
      },
      {
        icon: "/images/home/case-study/hybrid.png",
        label: "Services",
        value: "Production Management, Audiovisual Technology, Event Experience Design, Graphics & Animation",
      },
    ],
    sections: [
      {
        icon: "/images/home/case-study/challenge.png",
        title: "The",
        highlight: "Challenge",
        content:
          "The client needed production and AV support across a general session and 8 breakout rooms for 450 attendees.",
      },
      {
        icon: "/images/home/case-study/approach.png",
        title: "The",
        highlight: "Approach",
        content:
          "DXG managed multi-room AV and event experience design with custom graphics across all sessions.",
      },
      {
        icon: "/images/home/case-study/result.png",
        title: "The",
        highlight: "Result",
        list: [
          "Consistent multi-room experience",
          "Dynamic visual content",
          "Professional AV execution",
        ],
      },
    ],
  },

  {
    id: 13,
    slug: "corporate-event-orlando-bank-of-america",
    study: "Case Study #13",
    title: "Corporate",
    highlight: "Event",
    subtitle: "General Session / 12 Breakout Rooms | 1,000 Attendees | Orlando, FL",
    quote: "Production Management • Audiovisual Technology • Event Experience Design",
    quoteAuthor: "",
    image: "https://www.dropbox.com/scl/fi/3phl9nfbjepucmpwbozgw/Bank-of-America.png?rlkey=snnzz7ukrlymqrhyhbb1hijnw&raw=1",
    background: "#111111",
    stats: [
      {
        icon: "/images/home/case-study/location.png",
        label: "Location",
        value: "Orlando, FL",
      },
      {
        icon: "/images/home/case-study/duration.png",
        label: "Duration",
        value: "5 Days",
      },
      {
        icon: "/images/home/case-study/hybrid.png",
        label: "Services",
        value: "Production Management, Audiovisual Technology, Event Experience Design",
      },
    ],
    sections: [
      {
        icon: "/images/home/case-study/challenge.png",
        title: "The",
        highlight: "Challenge",
        content:
          "The client required large-scale production management for 1,000 attendees across a general session and 12 breakout rooms.",
      },
      {
        icon: "/images/home/case-study/approach.png",
        title: "The",
        highlight: "Approach",
        content:
          "DXG coordinated full production and AV technology delivery across all 13 event spaces.",
      },
      {
        icon: "/images/home/case-study/result.png",
        title: "The",
        highlight: "Result",
        list: [
          "High-capacity event success",
          "Seamless 12-room AV execution",
          "Elevated attendee experience",
        ],
      },
    ],
  },

  {
    id: 14,
    slug: "corporate-event-washington-dc",
    study: "Case Study #14",
    title: "Corporate",
    highlight: "Event",
    subtitle: "General Session / 12 Breakout Rooms | 1,200 Attendees | Washington, DC",
    quote: "Hybrid Event • Production Management • Audiovisual Technology • Event Experience Design • Graphics & Animation • Conference Capture",
    quoteAuthor: "",
    image: "https://www.dropbox.com/scl/fi/v7lriqoonh3udcrk8m72s/AI-Orlando-Conference.png?rlkey=n4so1iob1s76q5qxpxtek9jib&raw=1",
    background: "#151515",
    stats: [
      {
        icon: "/images/home/case-study/location.png",
        label: "Location",
        value: "Washington, DC",
      },
      {
        icon: "/images/home/case-study/duration.png",
        label: "Duration",
        value: "4 Days",
      },
      {
        icon: "/images/home/case-study/hybrid.png",
        label: "Services",
        value: "Hybrid Event, Production Management, Audiovisual Technology, Event Experience Design, Graphics & Animation, Conference Capture",
      },
    ],
    sections: [
      {
        icon: "/images/home/case-study/challenge.png",
        title: "The",
        highlight: "Challenge",
        content:
          "The client needed a full hybrid production for 1,200 attendees with a general session and 12 breakout rooms in Washington, DC.",
      },
      {
        icon: "/images/home/case-study/approach.png",
        title: "The",
        highlight: "Approach",
        content:
          "DXG delivered complete hybrid event production, AV, graphics, and conference capture across all spaces.",
      },
      {
        icon: "/images/home/case-study/result.png",
        title: "The",
        highlight: "Result",
        list: [
          "Successful hybrid event",
          "Complete session documentation",
          "Premium production quality",
        ],
      },
    ],
  },

  {
    id: 15,
    slug: "corporate-event-phoenix-arizona",
    study: "Case Study #15",
    title: "Corporate",
    highlight: "Event",
    subtitle: "General Session / 12 Breakout Rooms | 1,500 Attendees | Phoenix, AZ",
    quote: "Hybrid Event • Production Management • Audiovisual Technology • Event Experience Design • Graphics & Animation • Conference Capture",
    quoteAuthor: "",
    image: "https://www.dropbox.com/scl/fi/ead4k29xngxmify7498lj/AI-Phoenix-Conference.png?rlkey=cfr89thqvfx059rzf6yihscdf&raw=1",
    background: "#101010",
    stats: [
      {
        icon: "/images/home/case-study/location.png",
        label: "Location",
        value: "Phoenix, AZ",
      },
      {
        icon: "/images/home/case-study/duration.png",
        label: "Duration",
        value: "5 Days",
      },
      {
        icon: "/images/home/case-study/hybrid.png",
        label: "Services",
        value: "Hybrid Event, Production Management, Audiovisual Technology, Event Experience Design, Graphics & Animation, Conference Capture",
      },
    ],
    sections: [
      {
        icon: "/images/home/case-study/challenge.png",
        title: "The",
        highlight: "Challenge",
        content:
          "The client needed a high-impact hybrid conference for 1,500 attendees across a general session and 12 breakout rooms.",
      },
      {
        icon: "/images/home/case-study/approach.png",
        title: "The",
        highlight: "Approach",
        content:
          "DXG managed full production, hybrid technology, graphics, animation, and conference capture end-to-end.",
      },
      {
        icon: "/images/home/case-study/result.png",
        title: "The",
        highlight: "Result",
        list: [
          "Flawless hybrid broadcast",
          "Comprehensive content capture",
          "Superior event experience",
        ],
      },
    ],
  },

  {
    id: 16,
    slug: "corporate-event-las-vegas-conference",
    study: "Case Study #16",
    title: "Corporate",
    highlight: "Event",
    subtitle: "General Session / 8 Breakout Rooms | 900 Attendees | Las Vegas, NV",
    quote: "Hybrid Event • Production Management • Audiovisual Technology • Event Experience Design • Graphics & Animation • Conference Capture",
    quoteAuthor: "",
    image: "https://www.dropbox.com/scl/fi/3sjns0bkslrivu4m9kx0g/AI-Las-Vegas-Conference.png?rlkey=fuuyvxy8fra8ryob2xibwnh70&raw=1",
    background: "#111111",
    stats: [
      {
        icon: "/images/home/case-study/location.png",
        label: "Location",
        value: "Las Vegas, NV",
      },
      {
        icon: "/images/home/case-study/duration.png",
        label: "Duration",
        value: "3 Days",
      },
      {
        icon: "/images/home/case-study/hybrid.png",
        label: "Services",
        value: "Hybrid Event, Production Management, Audiovisual Technology, Event Experience Design, Graphics & Animation, Conference Capture",
      },
    ],
    sections: [
      {
        icon: "/images/home/case-study/challenge.png",
        title: "The",
        highlight: "Challenge",
        content:
          "The client needed hybrid production for 900 attendees across a general session and 8 breakout rooms in Las Vegas.",
      },
      {
        icon: "/images/home/case-study/approach.png",
        title: "The",
        highlight: "Approach",
        content:
          "DXG delivered full hybrid event production with AV, graphics, and conference capture across all spaces.",
      },
      {
        icon: "/images/home/case-study/result.png",
        title: "The",
        highlight: "Result",
        list: [
          "Polished hybrid event",
          "Consistent multi-room experience",
          "Full content documentation",
        ],
      },
    ],
  },

  {
    id: 17,
    slug: "corporate-event-chicago",
    study: "Case Study #17",
    title: "Corporate",
    highlight: "Event",
    subtitle: "General Session / 6 Breakout Rooms | 750 Attendees | Chicago, IL",
    quote: "Hybrid Event • Production Management • Audiovisual Technology • Event Experience Design • Graphics & Animation • Conference Capture",
    quoteAuthor: "",
    image: "https://www.dropbox.com/scl/fi/vfd4uhjbu1swrcjuyd3d8/AI-Chicago-Conference.png?rlkey=8s1hwqsz3rtw170ikt4azxlej&raw=1",
    background: "#151515",
    stats: [
      {
        icon: "/images/home/case-study/location.png",
        label: "Location",
        value: "Chicago, IL",
      },
      {
        icon: "/images/home/case-study/duration.png",
        label: "Duration",
        value: "3 Days",
      },
      {
        icon: "/images/home/case-study/hybrid.png",
        label: "Services",
        value: "Hybrid Event, Production Management, Audiovisual Technology, Event Experience Design, Graphics & Animation, Conference Capture",
      },
    ],
    sections: [
      {
        icon: "/images/home/case-study/challenge.png",
        title: "The",
        highlight: "Challenge",
        content:
          "The client required hybrid event production for 750 attendees with a general session and 6 breakout rooms in Chicago.",
      },
      {
        icon: "/images/home/case-study/approach.png",
        title: "The",
        highlight: "Approach",
        content:
          "DXG managed complete hybrid production including AV, event design, graphics, and conference capture.",
      },
      {
        icon: "/images/home/case-study/result.png",
        title: "The",
        highlight: "Result",
        list: [
          "Seamless hybrid experience",
          "High-quality session documentation",
          "Elevated event design",
        ],
      },
    ],
  },

  {
    id: 18,
    slug: "association-event-little-rock",
    study: "Case Study #18",
    title: "Association",
    highlight: "Event",
    subtitle: "General Session / 5 Breakout Rooms | 700 Attendees | Little Rock, AR",
    quote: "Production Management • Audiovisual Technology • Event Experience Design",
    quoteAuthor: "",
    image: "https://www.dropbox.com/scl/fi/8r6owksyabfr7eyti3y9t/LOA-Symposium.png?rlkey=rmtjiq53wr3x7r0safcbt3af1&raw=1",
    background: "#101010",
    stats: [
      {
        icon: "/images/home/case-study/location.png",
        label: "Location",
        value: "Little Rock, AR",
      },
      {
        icon: "/images/home/case-study/duration.png",
        label: "Duration",
        value: "3 Days",
      },
      {
        icon: "/images/home/case-study/hybrid.png",
        label: "Services",
        value: "Production Management, Audiovisual Technology, Event Experience Design",
      },
    ],
    sections: [
      {
        icon: "/images/home/case-study/challenge.png",
        title: "The",
        highlight: "Challenge",
        content:
          "The association needed full AV and production support for 700 attendees across a general session and 5 breakout rooms.",
      },
      {
        icon: "/images/home/case-study/approach.png",
        title: "The",
        highlight: "Approach",
        content:
          "DXG delivered production management, AV technology, and event experience design for a complete event solution.",
      },
      {
        icon: "/images/home/case-study/result.png",
        title: "The",
        highlight: "Result",
        list: [
          "Professional event execution",
          "Consistent AV quality",
          "Strong attendee engagement",
        ],
      },
    ],
  },

  {
    id: 19,
    slug: "association-event-phoenix-tech",
    study: "Case Study #19",
    title: "Association",
    highlight: "Event",
    subtitle: "General Session / 40 Breakout Rooms | 4,000 Attendees | Phoenix, AZ",
    quote: "Production Management • Audiovisual Technology • Event Experience Design",
    quoteAuthor: "",
    image: "https://www.dropbox.com/scl/fi/qxa9agdnovc2hgc2eu7w9/AI-Tech-Conference-Phoenix.png?rlkey=x4ali15vddsraclczvutke6dp&raw=1",
    background: "#111111",
    stats: [
      {
        icon: "/images/home/case-study/location.png",
        label: "Location",
        value: "Phoenix, AZ",
      },
      {
        icon: "/images/home/case-study/duration.png",
        label: "Duration",
        value: "4 Days",
      },
      {
        icon: "/images/home/case-study/hybrid.png",
        label: "Services",
        value: "Production Management, Audiovisual Technology, Event Experience Design",
      },
    ],
    sections: [
      {
        icon: "/images/home/case-study/challenge.png",
        title: "The",
        highlight: "Challenge",
        content:
          "The association needed large-scale production for 4,000 attendees across a general session and 40 breakout rooms.",
      },
      {
        icon: "/images/home/case-study/approach.png",
        title: "The",
        highlight: "Approach",
        content:
          "DXG managed comprehensive production management, AV technology, and event experience design at scale.",
      },
      {
        icon: "/images/home/case-study/result.png",
        title: "The",
        highlight: "Result",
        list: [
          "Flawless large-scale execution",
          "Consistent quality across 40 rooms",
          "Exceptional attendee experience",
        ],
      },
    ],
  },

  {
    id: 20,
    slug: "association-event-atlanta-nasp",
    study: "Case Study #20",
    title: "Association",
    highlight: "Event",
    subtitle: "General Session / 4 Breakout Rooms | 500 Attendees | Atlanta, GA",
    quote: "Production Management • Audiovisual Technology • Event Experience Design",
    quoteAuthor: "",
    image: "https://www.dropbox.com/scl/fi/56d40257q4lblg39aoi7l/AI-NASP-Conference.png?rlkey=s1515heiahsdzlvzqy9zinbdw&raw=1",
    background: "#151515",
    stats: [
      {
        icon: "/images/home/case-study/location.png",
        label: "Location",
        value: "Atlanta, GA",
      },
      {
        icon: "/images/home/case-study/duration.png",
        label: "Duration",
        value: "3 Days",
      },
      {
        icon: "/images/home/case-study/hybrid.png",
        label: "Services",
        value: "Production Management, Audiovisual Technology, Event Experience Design",
      },
    ],
    sections: [
      {
        icon: "/images/home/case-study/challenge.png",
        title: "The",
        highlight: "Challenge",
        content:
          "The association needed complete production and AV support for 500 attendees across a general session and 4 breakout rooms.",
      },
      {
        icon: "/images/home/case-study/approach.png",
        title: "The",
        highlight: "Approach",
        content:
          "DXG provided production management, AV technology, and event experience design for a polished association conference.",
      },
      {
        icon: "/images/home/case-study/result.png",
        title: "The",
        highlight: "Result",
        list: [
          "Professional association event",
          "Seamless multi-room execution",
          "Elevated event experience",
        ],
      },
    ],
  },
];

export function getCaseStudy(slug: string) {
  return caseStudies.find((study) => study.slug === slug);
}
