import ClientLayout from "@/(main)/client-layout";
import Footer from "components/layout/Footer";
import Header from "components/layout/Header";

export default function BizBashConnect26Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <ClientLayout>{children}</ClientLayout>
      <Footer />
    </>
  );
}
