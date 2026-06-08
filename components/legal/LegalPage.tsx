import parse from "html-react-parser";
import type { LegalPageContent } from "data/legalPages";

type LegalPageProps = {
  page: LegalPageContent;
};

export default function LegalPage({ page }: LegalPageProps) {
  return (
    <div className="bg-black pt-20">
      <div className="bg-white text-black">
        <div className="mx-auto w-full px-2.5 md:px-28">
          <article
            aria-label={page.title}
            className="m-auto max-w-[1400px] px-4 py-10 text-base leading-7 text-black sm:px-8 [&_a]:font-semibold [&_a]:text-primary [&_a]:underline [&_a]:underline-offset-4 [&_h1]:py-2 [&_h1]:text-center [&_h1]:text-3xl [&_h1]:font-bold [&_h2]:pt-5 [&_h2]:text-2xl [&_h2]:font-extrabold [&_h3]:pt-5 [&_h3]:text-xl [&_h3]:font-extrabold [&_h4]:pt-5 [&_h4]:text-lg [&_h4]:font-bold [&_li]:pt-3 [&_p]:pt-5 [&_strong]:font-bold [&_ul]:list-disc [&_ul]:pl-6"
          >
            {parse(page.contentHtml)}
          </article>
        </div>
      </div>
    </div>
  );
}
