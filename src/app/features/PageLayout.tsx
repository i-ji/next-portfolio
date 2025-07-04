import { ReactNode } from "react";
import Header from "./header/Header";
import { useAnimation } from "@/utils/animations";

type PageLayoutProps = {
  title: string;
  contentSlot: ReactNode;
  subjects: string[];
};

const PageLayout = ({ title, contentSlot, subjects }: PageLayoutProps) => {
  useAnimation({ subjects });

  return (
    <div className="bg-[url('/img/hero.png')] w-screen h-screen bg-cover bg-center bg-fixed">
      <div className="bg-[#f2e5d5]/85 w-screen h-screen overflow-scroll">
        <div className="fixed w-full z-10">
          <Header />
        </div>

        <div className="max-w-[768px] mx-auto pt-[120px] sm:pt-[152px] px-4">
          <h2
            className="text-center font-bold  sm:text-4xl text-3xl mb-8 sm:mb-10"
            id="title"
          >
            {title}
          </h2>
          {contentSlot}
        </div>
      </div>
    </div>
  );
};

export default PageLayout;
