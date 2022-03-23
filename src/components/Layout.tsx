import React from "react";
import { Footer, Header, SEO } from ".";

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
      />
      <Header />
      {children}
      <Footer />
    </>
  );
};