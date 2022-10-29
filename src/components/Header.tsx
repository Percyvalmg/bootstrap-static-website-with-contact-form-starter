import React from "react";
import { CompanyDetails } from "../types/CompanyDetails";
import { NavBar } from "./NavBar";

interface HeaderProps {
  companyDetails: CompanyDetails;
}

export const Header: React.FC<HeaderProps> = ({ companyDetails: { name } }) => {
  return (
    <header id="header" className="header d-flex align-items-center fixed-top">
      <div className="container-fluid container-xl d-flex align-items-center justify-content-between">
        <a href="index.html" className="logo d-flex align-items-center">
          {/* <!-- Uncomment the line below if you also wish to use an image logo --> */}
          {/* <img src="assets/img/logo.png" alt=""> */}
          <h1>{name}</h1>
        </a>

        <NavBar />

        <i className="mobile-nav-toggle mobile-nav-show bi bi-list"></i>
        <i className="mobile-nav-toggle mobile-nav-hide d-none bi bi-x"></i>
      </div>
    </header>
  );
};
