import React from "react";
import Link from "next/link";

interface NavBarProps {}

export const NavBar: React.FC<NavBarProps> = ({}) => {
  return (
    <nav id="navbar" className="navbar">
      <ul>
        <li>
          <Link href="/">
            <a className="active">Home</a>
          </Link>
        </li>
        <li>
          <Link href="/#about">
            <a>About</a>
          </Link>
        </li>
        <li>
          <Link href="/#services">
            <a>Services</a>
          </Link>
        </li>

        <li className="dropdown">
          <a href="#">
            <span>Drop Down</span>{" "}
            <i className="bi bi-chevron-down dropdown-indicator"></i>
          </a>
          <ul>
            <li>
              <Link href="/">
                <a>Drop Down 1</a>
              </Link>
            </li>

            <li>
              <Link href="/">
                <a>Drop Down 2</a>
              </Link>
            </li>
          </ul>
        </li>
        <li>
          <Link href="/#contact">
            <a>Contact</a>
          </Link>
        </li>
        <li>
          <Link href="/#about">
            <a className="get-a-quote">Action Button</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};
