import { Bebas_Neue } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const displayFont = Bebas_Neue({ subsets: ["latin"], weight: "400" });

const LetsTalk = () => {
  return (
    <section className="relative isolate overflow-hidden bg-black px-4 py-16 text-white sm:px-8 sm:py-20 lg:py-28">
      <Image
        src="/images/rfp-event/image 102.png"
        alt=""
        fill
        sizes="100vw"
        className="-z-20 object-cover object-center"
      />
      <div className="absolute inset-0 -z-10 bg-black/25" />

      <div className="mx-auto grid max-w-7xl overflow-hidden rounded-[28px] border-2 border-primary bg-black p-4 sm:grid-cols-[0.72fr_1.28fr] sm:gap-8 sm:p-5 lg:gap-12 lg:p-8">
        <div className="relative min-h-[300px] overflow-hidden rounded-2xl sm:min-h-[340px] lg:min-h-[390px]">
          <Image
            src="/images/rfp-event/image 101.png"
            alt="DXG exhibition booth"
            fill
            sizes="(min-width: 1280px) 430px, (min-width: 640px) 38vw, 100vw"
            className="object-cover object-center"
          />
        </div>

        <div className="flex flex-col items-start justify-center px-3 py-8 sm:px-0 sm:py-6 lg:pr-12">
          <h2
            className={`${displayFont.className} text-4xl uppercase leading-[0.95] sm:text-5xl lg:text-6xl`}
          >
            Let&apos;s talk about your next event
          </h2>

          <p className="mt-5 max-w-xl text-sm leading-6 text-white/80 sm:text-base">
            A strategy call isn&apos;t a sales call-it&apos;s a working session. No
            pressure. No pitch deck. Just solutions.
          </p>

          <Link
            href="/contact-us"
            className="btn-slide-primary mt-7 inline-flex min-h-12 items-center justify-center rounded-full px-7 py-3 text-xs font-bold uppercase tracking-wide sm:text-sm"
          >
            Schedule a Strategy Call
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LetsTalk;
