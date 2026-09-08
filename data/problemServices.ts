export type ProblemService = {
  slug: string;
  icon: string;
  title: string;
  desc: string;
  heroImage: string;
  bannerImage: string;
  details: string[];
};

const serviceImagePath = "/images/problems-we-solve/new-service-image";

export const problemServices: ProblemService[] = [
  {
    slug: "event-production-management",
    icon: `${serviceImagePath}/event-production-management-card.png`,
    title: "Event Production Management",
    desc: "From the first production meeting to the final cue, we coordinate every moving part so your event runs smoothly, confidently, and on schedule.",
    heroImage: `${serviceImagePath}/event-production-management-hero.png`,
    bannerImage: `${serviceImagePath}/event-production-management-hero.png`,
    details: [
      "Great events feel effortless because the hard work happens behind the scenes. Our event production management team turns your vision into a practical plan, aligning schedules, crews, venues, vendors, equipment, and content around one clear production strategy.",
      "On-site, we lead every cue and manage every detail with calm precision. From load-in and rehearsals through showtime and strike, we anticipate challenges before they affect your audience, giving you the freedom to focus on your guests, speakers, and message.",
    ],
  },
  {
    slug: "audiovisual-production",
    icon: `${serviceImagePath}/audiovisual-production-card.png`,
    title: "Audiovisual Production",
    desc: "Expert sound, lighting, video, staging, and show control combine to make every message clear and every moment feel intentional.",
    heroImage: `${serviceImagePath}/audiovisual-production-hero.png`,
    bannerImage: `${serviceImagePath}/audiovisual-production-hero.png`,
    details: [
      "Audiovisual production shapes how your audience sees, hears, and experiences your event. We design integrated sound, lighting, video, projection, LED, staging, and show-control systems around your venue, program, and creative goals.",
      "Our experienced technicians prepare, test, and operate every element with exacting attention to detail. Whether you are producing an intimate leadership meeting or a large general session, we deliver reliable technology, polished execution, and a consistent experience from every seat.",
    ],
  },
  {
    slug: "hybrid-virtual-event-production",
    icon: `${serviceImagePath}/hybrid-virtual-event-production-card.png`,
    title: "Hybrid & Virtual Event Production",
    desc: "We connect in-room and remote audiences through reliable platforms, broadcast-quality production, and experiences designed for active participation.",
    heroImage: `${serviceImagePath}/hybrid-virtual-event-production-hero.png`,
    bannerImage: `${serviceImagePath}/hybrid-virtual-event-production-hero.png`,
    details: [
      "A successful hybrid or virtual event is more than a camera pointed at a stage. We plan the experience for both the room and the screen, combining broadcast workflows, streaming platforms, remote speaker support, graphics, and audience interaction into one connected production.",
      "From pre-event testing to live technical direction, our team keeps presenters confident and viewers engaged. The result is a stable, professional experience that gives every attendee clear access to the content, wherever they choose to join.",
    ],
  },
  {
    slug: "attendee-engagement",
    icon: `${serviceImagePath}/attendee-engagement-card.png`,
    title: "Attendee Engagement",
    desc: "Thoughtful interaction turns passive viewers into active participants and creates memorable moments that continue beyond the event.",
    heroImage: `${serviceImagePath}/attendee-engagement-hero.png`,
    bannerImage: `${serviceImagePath}/attendee-engagement-hero.png`,
    details: [
      "Attention is earned, not assumed. We design attendee journeys that invite people to participate through live polling, Q&A, social experiences, interactive technology, networking moments, and content formats built around your audience.",
      "Every engagement choice supports a purpose, whether that is increasing learning, strengthening community, generating conversation, or creating useful feedback. By connecting strategy, creative, and technology, we help attendees feel included and give them a reason to stay involved.",
    ],
  },
  {
    slug: "event-content-production",
    icon: `${serviceImagePath}/event-content-production-card.png`,
    title: "Event Content Production",
    desc: "We transform ideas and information into focused event content that supports your speakers, strengthens your story, and holds attention.",
    heroImage: `${serviceImagePath}/event-content-production-hero.png`,
    bannerImage: `${serviceImagePath}/event-content-production-hero.png`,
    details: [
      "Strong content gives an event direction. We work with your team to shape themes, session flow, scripts, presentations, motion graphics, videos, and show moments into a clear narrative that supports your business goals.",
      "Our content producers balance creativity with the realities of live production. We prepare every asset for the screen, coordinate reviews and playback requirements, and make sure speakers have what they need to deliver confidently, so the story feels cohesive from opening to close.",
    ],
  },
  {
    slug: "event-creative-experience-design",
    icon: `${serviceImagePath}/event-experience-design-card.png`,
    title: "Event Creative & Experience Design",
    desc: "Strategy, storytelling, and spatial design come together to create a distinctive event experience that feels unmistakably yours.",
    heroImage: `${serviceImagePath}/event-experience-design-hero.png`,
    bannerImage: `${serviceImagePath}/event-experience-design-hero.png`,
    details: [
      "Memorable events begin with a strong creative idea. We translate your objectives and brand into an experience system that can guide the stage, screens, lighting, environmental graphics, scenic elements, transitions, and attendee touchpoints.",
      "Our designers consider how the experience looks, feels, and moves from one moment to the next. Whether we are developing a complete creative direction or extending an established campaign, every choice works together to make your message more engaging and your event more recognizable.",
    ],
  },
  {
    slug: "event-videography-photography",
    icon: `${serviceImagePath}/event-photography-videography-card.png`,
    title: "Event Videography & Photography",
    desc: "Purposeful photography and video preserve the energy of your event while creating valuable content for campaigns, stakeholders, and future audiences.",
    heroImage: `${serviceImagePath}/event-photography-videography-hero.png`,
    bannerImage: `${serviceImagePath}/event-photography-videography-hero.png`,
    details: [
      "Your event creates moments worth using long after the room clears. Our photographers and videographers capture speakers, attendees, environments, details, and behind-the-scenes energy with a plan shaped around your communication and marketing needs.",
      "We shoot with the final deliverables in mind, from highlight films and session recordings to executive interviews, social edits, sponsor assets, and image libraries. You receive polished, versatile content that documents the experience and extends its value well beyond event day.",
    ],
  },
  {
    slug: "meeting-planning-support",
    icon: `${serviceImagePath}/meeting-planning-support-card.png`,
    title: "Meeting Planning Support",
    desc: "Flexible planning expertise adds capacity where you need it, helping your team manage details, decisions, and deadlines without losing momentum.",
    heroImage: `${serviceImagePath}/meeting-planning-support-hero.png`,
    bannerImage: `${serviceImagePath}/meeting-planning-support-hero.png`,
    details: [
      "Sometimes a successful meeting needs more planning capacity, specialized production knowledge, or simply another experienced partner at the table. We adapt to your team and support the areas that need attention, from venue and vendor coordination to schedules, speaker logistics, and technical planning.",
      "Our role can be focused or comprehensive, depending on your needs. We bring structure to the process, identify risks early, and keep decisions moving, helping you protect your time while maintaining control of the experience and confidence in every detail.",
    ],
  },
];

export function getProblemService(slug: string) {
  return problemServices.find((service) => service.slug === slug);
}
