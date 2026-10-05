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
      canonical: `/${service.slug}`,
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

