import type { NextPage } from "next";
import { Layout, About, Contact, Services, Hero } from "../components";

const Home: NextPage = () => {
  return (
    <Layout
      title="Home"
      description="company description"
      hidePageFromSearchEngines={false}
    >
      <main id={"main"}>
        <Hero />
        <About />
        <Services />
        <Contact />
      </main>
    </Layout>
  );
};

export default Home;
