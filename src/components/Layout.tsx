import React from "react";
import { Footer, Header, SEO } from ".";
import {companyDetails} from "../data";
import { ScrollTopBtn } from "./ScrollTopBtn";

interface LayoutProps {
  description: string;
  title: string;
  hidePageFromSearchEngines: boolean;
}

export const Layout: React.FC<LayoutProps> = ({
  description,
  children,
  hidePageFromSearchEngines,
  title,
}) => {
  return (
    <>
      <SEO
        description={description}
        title={title}
        hidePageFromSearchEngines={hidePageFromSearchEngines}
        companyDetails={companyDetails}
      />
      <Header companyDetails={companyDetails} />
      {children}
      <Footer companyDetails={companyDetails}/>
      <ScrollTopBtn/>
    </>
  );
};