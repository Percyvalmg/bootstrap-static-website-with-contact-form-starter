import React from "react";

interface ScrollTopBtnProps {}

export const ScrollTopBtn: React.FC<ScrollTopBtnProps> = ({}) => {
  return (
    <a
      href="#"
      className="scroll-top d-flex align-items-center justify-content-center"
    >
      <i className="bi bi-arrow-up-short"></i>
    </a>
  );
};
