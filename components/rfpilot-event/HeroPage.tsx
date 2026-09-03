import { Bebas_Neue } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const displayFont = Bebas_Neue({ subsets: ["latin"], weight: "400" });

const HeroPage = () => {
  return (
    <main className="overflow-hidden bg-black text-white">
      <section className="relative isolate min-h-[620px] overflow-hidden sm:aspect-[3840/2192] sm:min-h-0">
        <Image
          src="/images/rfp-event/image 100.png"
          alt="DXG event production in a large conference venue"
          fill
          priority
          sizes="100vw"
          className="-z-20 object-cover object-center"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/15 via-transparent to-black/85" />
        <div className="absolute inset-x-0 bottom-0 -z-10 h-[48%] bg-gradient-to-t from-black/95 via-black/45 to-transparent" />

        <div className="absolute inset-0 mx-auto flex w-full max-w-7xl flex-col items-center px-5 pb-6 pt-8 text-center sm:px-8 sm:pb-[9%] sm:pt-[6%]">
          <Link href="/" aria-label="DXG Digital home">
            <Image
              src="/images/logo.png"
              alt="DXG Digital Experience Group"
              width={160}
              height={116}
              className="h-auto w-24 sm:w-36 lg:w-40"
            />
          </Link>

          <h1
            className={`${displayFont.className} mt-auto max-w-6xl text-[clamp(3rem,5.8vw,5.5rem)] uppercase leading-[0.88] tracking-[0.01em]`}
          >
            <span className="block lg:whitespace-nowrap">
              Your event is too important for
            </span>
            <span className="mt-3 block text-primary lg:whitespace-nowrap">
              the wrong AV partner.
            </span>
          </h1>
        </div>
      </section>
    </main>
  );
};

export default HeroPage;
