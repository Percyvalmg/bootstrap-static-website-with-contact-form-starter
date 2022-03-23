import AOS from "aos";
import "bootstrap/dist/css/bootstrap.min.css";

import '../styles/globals.css'
import '../styles/about.css'
import '../styles/contact.css'
import '../styles/services.css'
import '../styles/hero.css'
import '../styles/header.css'
import '../styles/footer.css'

import type { AppProps } from 'next/app'
import { useEffect } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      mirror: false,
    });
  }, []);
  return <Component {...pageProps} />
}

export default MyApp
