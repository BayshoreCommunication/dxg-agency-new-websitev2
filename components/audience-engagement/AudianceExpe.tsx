import InteractyEmbed from "./InteractyEmbed";

const AUDIENCE_EXPERIENCE_PROJECT_HASH = "992f72e5740b4dcf";

const AudianceExpe = () => {
  return (
    <InteractyEmbed
      compactOpeningSlide={false}
      projectHash={AUDIENCE_EXPERIENCE_PROJECT_HASH}
      scrollOffset="7rem"
    />
  );
};

export default AudianceExpe;
