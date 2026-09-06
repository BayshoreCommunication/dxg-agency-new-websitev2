import Footer from "components/layout/Footer";
import Header from "components/layout/Header";
import RootLayoutComponent from "components/layout/RootLayout";
import ClientLayout from "../(main)/client-layout";

export default function SeoServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <RootLayoutComponent>
      <Header />
      <ClientLayout>
        <div className="bg-[#030c14] min-h-screen text-white">
          {children}
        </div>
      </ClientLayout>
      <Footer />
    </RootLayoutComponent>
  );
}
