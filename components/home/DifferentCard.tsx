import { caseStudies } from "data/caseStudies";
import CaseStudyCard from "./CaseStudyCard";

export default function DifferentCard() {
  return (
    <>
      {[0, 1, 3].map((i) => (
        <CaseStudyCard key={caseStudies[i].id} data={caseStudies[i]} />
      ))}
    </>
  );
}
