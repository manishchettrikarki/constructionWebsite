import { ReactNode } from "react";
import { Header } from "@components/app/header";
import { Footer } from "@/components/app/footer";
import { ScrollTop } from "@/components/app/scrollToTop";
import ConstructionScrollBar from "@/components/constructionLift";

interface AppLayoutProps {
  children: ReactNode;
}

//
export default function AppLayout({ children }: AppLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-gray-300">
      {/* <ConstructionScrollBar /> */}
      <Header />
      <main className="min-h-screen">{children}</main>
      <Footer />
      <ScrollTop />
    </div>
  );
}
