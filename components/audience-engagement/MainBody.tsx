"use client";

import { useCallback, useState } from "react";
import Image from "next/image";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
  type Variants,
} from "framer-motion";
import { ArrowLeft, ArrowRight, Sparkles } from "lucide-react";

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09, delayChildren: 0.08 } },
};

const rise: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function MainBody() {
  const [showActivity, setShowActivity] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  const changeScreen = useCallback(
    (show: boolean) => {
      setShowActivity(show);
      window.scrollTo({
        top: 0,
        behavior: shouldReduceMotion ? "auto" : "smooth",
      });
    },
    [shouldReduceMotion],
  );

  return (
    <main className="min-h-screen overflow-hidden bg-[#050505] text-white selection:bg-primary selection:text-black">
      <AnimatePresence mode="wait" initial={false}>
        {!showActivity ? (
          <motion.section
            key="intro"
            className="relative isolate flex min-h-screen items-center overflow-hidden px-5 py-24 sm:px-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.985 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.45 }}
          >
            <div className="absolute inset-0 -z-30">
              <Image
                src="/images/home/hero-section/hero-bg.png"
                alt=""
                fill
                priority
                className="object-cover opacity-30"
                sizes="100vw"
              />
            </div>
            <div className="absolute inset-0 -z-20 bg-[linear-gradient(105deg,rgba(0,0,0,.98)_4%,rgba(0,0,0,.82)_52%,rgba(0,0,0,.92)_100%)]" />
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_70%_28%,rgba(46,198,245,.22),transparent_30%),radial-gradient(circle_at_18%_82%,rgba(46,198,245,.1),transparent_28%)]" />

            <motion.div
              aria-hidden="true"
              className="absolute -right-24 top-1/2 -z-10 h-[30rem] w-[30rem] -translate-y-1/2 rounded-full border border-primary/20 sm:h-[43rem] sm:w-[43rem]"
              animate={
                shouldReduceMotion
                  ? undefined
                  : { rotate: 360, scale: [1, 1.035, 1] }
              }
              transition={{
                rotate: { duration: 34, ease: "linear", repeat: Infinity },
                scale: { duration: 7, ease: "easeInOut", repeat: Infinity },
              }}
            >
              <div className="absolute inset-[12%] rounded-full border border-dashed border-white/15" />
              <div className="absolute inset-[28%] rounded-full border border-primary/30" />
            </motion.div>

            <p
              aria-hidden="true"
              className="absolute left-5 top-6 text-[10px] font-bold uppercase tracking-[0.32em] text-white/35 sm:left-8"
            >
              Tell your story · Listen closely · Go deeper
            </p>

            <motion.div
              className="mx-auto w-full max-w-[1320px]"
              variants={stagger}
              initial={shouldReduceMotion ? false : "hidden"}
              animate="visible"
            >
              <motion.div
                variants={rise}
                className="inline-flex items-center gap-2 rounded-full border border-primary/35 bg-primary/10 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.22em] text-primary sm:text-xs"
              >
                <Sparkles aria-hidden="true" className="h-4 w-4" />
                An audience engagement experience
              </motion.div>

              <motion.h1
                variants={rise}
                className="mt-8 max-w-5xl text-[clamp(3.4rem,10vw,8.8rem)] font-bold uppercase leading-[0.78] tracking-[-0.055em]"
              >
                AV <span className="text-primary">meets</span>
                <span className="mt-4 block pl-[8vw] text-[.62em] font-light tracking-[-0.035em] text-white sm:mt-6">
                  audience
                </span>
                <span className="mt-3 block text-right text-[.62em] font-light tracking-[-0.035em] text-white sm:mt-5 sm:pr-[5vw]">
                  engagement.
                </span>
              </motion.h1>

              <motion.div
                variants={rise}
                className="mt-10 flex flex-col items-start gap-6 sm:mt-14 sm:flex-row sm:items-center"
              >
                <button
                  type="button"
                  onClick={() => changeScreen(true)}
                  className="btn-slide-primary group inline-flex min-h-14 items-center justify-center gap-3 rounded-full px-8 text-sm font-bold uppercase tracking-[0.14em] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
                >
                  Show me
                  <ArrowRight
                    aria-hidden="true"
                    className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                  />
                </button>
                <p className="max-w-sm text-sm font-medium leading-6 text-white/55 sm:text-base">
                  Step into a role. Start a conversation. Leave with a story
                  you didn&apos;t expect.
                </p>
              </motion.div>
            </motion.div>

            <div
              aria-hidden="true"
              className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-primary/80 to-transparent"
            />
          </motion.section>
        ) : (
          <motion.section
            key="activity"
            className="relative bg-[#050505] px-4 pb-20 pt-28 sm:px-8 sm:pb-28 sm:pt-36"
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.5 }}
          >
            <div className="mx-auto w-full max-w-[1200px]">
              <button
                type="button"
                onClick={() => changeScreen(false)}
                className="group mb-7 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-white/60 transition hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
              >
                <ArrowLeft
                  aria-hidden="true"
                  className="h-4 w-4 transition-transform group-hover:-translate-x-1"
                />
                Back to intro
              </button>

              <div className="relative overflow-hidden rounded-xl border border-white/15 bg-white pt-[99.5%] shadow-[0_24px_100px_rgba(46,198,245,.12)] sm:rounded-2xl">
                <iframe
                  src="https://p.interacty.me/357a8513327a007e/iframe.html"
                  title="DXG audience engagement activity"
                  className="absolute inset-0 h-full w-full border-0"
                  loading="eager"
                  allowFullScreen
                />
              </div>
            </div>
          </motion.section>
        )}
      </AnimatePresence>
    </main>
  );
}
