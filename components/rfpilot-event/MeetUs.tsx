import { Bebas_Neue } from "next/font/google";
import Image from "next/image";

const displayFont = Bebas_Neue({ subsets: ["latin"], weight: "400" });

const MeetUs = () => {
  return (
    <section className="bg-black px-4 py-10 text-white sm:px-6 sm:py-16 lg:py-20">
      <div className="relative isolate mx-auto min-h-[620px] max-w-7xl overflow-hidden rounded-[28px] sm:aspect-[1634/691] sm:min-h-0">
        <Image
          src="/images/rfp-event/Group 29.png"
          alt="DXG exhibition booth"
          fill
          sizes="(min-width: 1280px) 1280px, 100vw"
          className="-z-20 object-cover object-[68%_center] sm:object-center"
        />

        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/95 via-black/60 to-black/15 sm:bg-gradient-to-r sm:from-black sm:via-black/45 sm:to-transparent" />

        <div className="flex h-full min-h-[620px] flex-col justify-start px-7 py-10 sm:min-h-0 sm:w-[38%] sm:justify-center sm:px-10 sm:py-8 lg:px-14">
          <h2
            className={`${displayFont.className} text-5xl uppercase leading-[0.9] sm:text-[clamp(2.6rem,4vw,4.6rem)]`}
          >
            <span className="block text-primary">Thank you</span>
            <span className="block">for meeting us</span>
            <span className="block">at the booth!</span>
          </h2>

          <span className="mt-7 h-px w-20 bg-primary sm:mt-6" />

          <p className="mt-7 max-w-xs text-sm leading-6 text-white/85 sm:mt-6 sm:text-[clamp(0.7rem,1vw,1rem)] sm:leading-relaxed">
            It was great connecting with you. We look forward to helping you
            elevate your next event.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MeetUs;
