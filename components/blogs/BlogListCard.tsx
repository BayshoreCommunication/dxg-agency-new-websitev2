import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ApiBlog } from "types/blog";
import TypingTitle from "components/layout/TypingTitle";
import Reveal from "components/shared/Reveal";

type Props = {
  blog: ApiBlog;
  revealDelay?: number;
};

export default function BlogListCard({ blog, revealDelay = 0 }: Props) {
  return (
    <Reveal className="h-full" delay={revealDelay} duration={0.85}>
      <Link href={`/blogs/${blog.slug}`} className="group block">
        <Reveal kind="image" className="relative aspect-[1.52/1] overflow-hidden rounded-sm">
          <Image
            src={blog.image}
            alt={blog.title}
            fill
            sizes="(min-width: 1280px) 360px, (min-width: 640px) 50vw, 100vw"
            className="object-cover grayscale contrast-125 brightness-75 transition duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-primary/45 mix-blend-color" />
          <div className="absolute inset-0 bg-[#001826]/20" />
        </Reveal>

        <Reveal as="p" className="mt-5 text-sm font-semibold text-white/65">
          {blog.date}
        </Reveal>

        <TypingTitle
          as="h3"
          className="mt-3 line-clamp-2 text-2xl font-black leading-tight text-primary"
        >
          {blog.title}
        </TypingTitle>

        <Reveal as="p" className="mt-4 line-clamp-3 text-base leading-7 text-white/70">
          {blog.shortDesc}
        </Reveal>

        <div className="mt-6">
          <span className="btn-slide-primary inline-flex w-fit items-center gap-2 rounded-full px-5 py-2.5 text-xs font-bold">
            Explore More
            <ArrowUpRight className="h-2.5 w-2.5" />
          </span>
        </div>
      </Link>
    </Reveal>
  );
}
