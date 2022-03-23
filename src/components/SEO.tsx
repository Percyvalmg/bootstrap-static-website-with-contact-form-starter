import Head from "next/head";
import React from "react";
import logo from "../assets/images/logo.png";

interface SEOProps {
  title: string;
  description?: string;
  hidePageFromSearchEngines: boolean;
}

export const SEO: React.FC<SEOProps> = ({
  title,
  hidePageFromSearchEngines = false,
  description = "Company Description",
}) => {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <title>{title} - Company Name</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content={description} />
      <meta
        name="keywords"
        content="Website, "
      />
      <meta name="author" content="Rathe Media." />
      <meta property="og:description" content={description} />
      <meta property="og:url" content="https://company.domain" />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="en_ZA" />
      <meta property="og:title" content={`${title} - Company Name`} />
      <meta property="og:image" content={logo.src} />
      <meta name="twitter:title" content={`${title} - Company Name`} />
      <meta name="twitter:image" content={logo.src} />
      <meta name="twitter:url" content="https://company.domain" />
      <meta property={`twitter:card`} content={`summary`} />
      {hidePageFromSearchEngines && <meta name="robots" content="noindex" />}
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};