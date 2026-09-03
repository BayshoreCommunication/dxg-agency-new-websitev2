import { Bebas_Neue } from "next/font/google";
import Image from "next/image";

const displayFont = Bebas_Neue({ subsets: ["latin"], weight: "400" });

const services = [
  {
    title: "Production Management (Flat)",
    background: "/images/rfp-event/Group 31.png",
    icon: "/images/rfp-event/meeting 1 (3).png",
  },
  {
    title: "AV Technology",
    background: "/images/rfp-event/Group 30.png",
    icon: "/images/rfp-event/meeting 1 (2).png",
  },
  {
    title: "Virtual & Hybrid Events",
    background: "/images/rfp-event/Group 28.png",
    icon: "/images/rfp-event/meeting 1 (1).png",
  },
  {
    title: "Creative Services",
    background: "/images/rfp-event/Group 32.png",
    icon: "/images/rfp-event/meeting 1 (4).png",
  },
  {
    title: "Photography & Video Production",
    background: "/images/rfp-event/Group 29 (1).png",
    icon: "/images/rfp-event/meeting 1 (5).png",
  },
  {
    title: "Audience Engagement",
    background: "/images/rfp-event/Frame 224.png",
    icon: "/images/rfp-event/meeting 1 (6).png",
  },
];

const OnePartner = () => {
  return (
    <section className="bg-black px-4 py-12 text-white sm:px-6 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl">
        <h2
          className={`${displayFont.className} text-center text-4xl uppercase leading-none sm:text-5xl lg:text-6xl`}
        >
          One partner. Every part of your event.
        </h2>

        <div className="mt-8 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ title, background, icon }) => (
            <article
              key={title}
              className="group relative isolate aspect-[530/495] overflow-hidden rounded-xl"
            >
              <Image
                src={background}
                alt=""
                fill
                sizes="(min-width: 1280px) 420px, (min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                className="-z-20 object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black/75 via-transparent to-transparent" />

              <div className="flex h-full flex-col items-center justify-end px-5 pb-7 text-center sm:pb-6 lg:pb-8">
                <Image
                  src={icon}
                  alt=""
                  width={62}
                  height={62}
                  className="h-14 w-14 object-contain drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] lg:h-16 lg:w-16"
                />
                <h3 className="mt-3 max-w-[280px] text-sm font-bold uppercase leading-tight tracking-wide sm:text-base lg:text-lg">
                  {title}
                </h3>
              </div>
            </article>
          ))}

          <article className="group relative isolate min-h-[260px] overflow-hidden rounded-xl sm:col-span-2 sm:min-h-[300px] lg:col-span-3 lg:min-h-[390px]">
            <Image
              src="/images/rfp-event/Frame 226.png"
              alt=""
              fill
              sizes="(min-width: 1280px) 1280px, 100vw"
              className="-z-20 object-cover transition duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black/75 via-transparent to-transparent" />

            <div className="flex h-full min-h-[260px] flex-col items-center justify-end px-5 pb-7 text-center sm:min-h-[300px] lg:min-h-[390px] lg:pb-9">
              <Image
                src="/images/rfp-event/meeting 1.png"
                alt=""
                width={62}
                height={62}
                className="h-14 w-14 object-contain drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] lg:h-16 lg:w-16"
              />
              <h3 className="mt-3 text-sm font-bold uppercase leading-tight tracking-wide sm:text-base lg:text-lg">
                Meeting Planning Support
              </h3>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default OnePartner;
