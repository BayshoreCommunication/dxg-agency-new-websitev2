import Footer from "components/layout/Footer";
import Header from "components/layout/Header";
import RootLayoutComponent from "components/layout/RootLayout";
import ClientLayout from "./client-layout";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <RootLayoutComponent>
      <Header />
      <ClientLayout>{children}</ClientLayout>
      <Footer />
    </RootLayoutComponent>
  );
}
