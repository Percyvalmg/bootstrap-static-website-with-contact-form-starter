import Head from "next/head";
import React from "react";
import logo from "../assets/images/logo.png";
import { CompanyDetails } from "../types/CompanyDetails";

interface SEOProps {
  title: string;
  description?: string;
  companyDetails: CompanyDetails;
  hidePageFromSearchEngines: boolean;
}

export const SEO: React.FC<SEOProps> = ({
  title,
  companyDetails: { name, aboutCompany, website },
  hidePageFromSearchEngines = false,
  description,
}) => {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <title>
        {title} - {name}
      </title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content={description || aboutCompany} />
      <meta name="keywords" content=", " />
      <meta name="author" content="Yelah" />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={website} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="en_ZA" />
      <meta property="og:title" content={`${title} - ${name}`} />
      <meta property="og:image" content={logo.src} />
      <meta name="twitter:title" content={`${title} - ${name}`} />
      <meta name="twitter:image" content={logo.src} />
      <meta name="twitter:url" content={website} />
      <meta property={`twitter:card`} content={`summary`} />
      {hidePageFromSearchEngines && <meta name="robots" content="noindex" />}
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};
