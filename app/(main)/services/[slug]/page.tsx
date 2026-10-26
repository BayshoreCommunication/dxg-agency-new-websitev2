import { notFound, redirect } from "next/navigation";
import { getProblemService, problemServices } from "data/problemServices";

type ServiceDetailsPageProps = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return problemServices.map((service) => ({
    slug: service.slug,
  }));
}

export function generateMetadata({ params }: ServiceDetailsPageProps) {
  const service = getProblemService(params.slug);

  if (!service) {
    return {
      title: "Service Not Found | DXG Digital",
    };
  }

  return {
    title: `${service.title} | DXG Digital`,
    description: service.desc,
    alternates: {
      canonical: `https://www.dxg.agency/${service.slug}`,
    },
    openGraph: {
      title: `${service.title} | DXG Digital`,
      description: service.desc,
      url: `https://www.dxg.agency/${service.slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title: `${service.title} | DXG Digital`,
      description: service.desc,
    },
  };
}

export default function ServiceDetailsPage({
  params,
}: ServiceDetailsPageProps) {
  const service = getProblemService(params.slug);

  if (!service) {
    notFound();
  }

  redirect(`/${service.slug}`);
}

