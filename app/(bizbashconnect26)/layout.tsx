import Footer from "components/layout/Footer";

export default function BizBashConnect26Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children} <Footer />
    </>
  );
}
