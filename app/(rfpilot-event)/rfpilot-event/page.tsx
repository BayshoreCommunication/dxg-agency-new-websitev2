import Footer from "components/rfpilot-event/Footer";
import HeroPage from "components/rfpilot-event/HeroPage";
import LetsTalk from "components/rfpilot-event/LetsTalk";
import MeetUs from "components/rfpilot-event/MeetUs";
import OnePartner from "components/rfpilot-event/OnePartner";

const page = () => {
  return (
    <div>
      <HeroPage />
      <MeetUs />
      <OnePartner />
      <LetsTalk />
      <Footer />
    </div>
  );
};

export default page;
