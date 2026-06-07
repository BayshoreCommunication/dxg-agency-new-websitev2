import { caseStudies } from "data/caseStudies";
import CaseStudyCard from "./CaseStudyCard";

export default function DifferentCard() {
  return (
    <>
      {caseStudies.slice(-3).map((study) => (
        <CaseStudyCard key={study.id} data={study} />
      ))}
    </>
  );
}
