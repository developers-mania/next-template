import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";

/** Layout for public pages: header + footer around every page in (main). */
const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <main className="mx-auto w-full max-w-5xl flex-1 px-4 py-12">{children}</main>
      <Footer />
    </>
  );
};

export default MainLayout;
