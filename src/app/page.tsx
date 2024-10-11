'use client'
import { useEffect, useState } from "react";
import Header from "./components/Header/page";
import Banner from "./components/banner/page";
import About from "./components/about/page";
import Services from "./components/services/page";
import Projects from "./components/projects/page";
import Testimonials from "./components/testimonials/page";
import Contact from "./components/contact/page";
import Footer from "./components/footer/page";


export default function Home() {

  const [informations, setInformations] = useState([]);

  useEffect(() => {
    fetch('personalInformation.json')
      .then(response => response.json())
      .then(data => {
        setInformations(data);
      });
  }, []);

  return (
    <>
      <div>
        <header>
          <Header></Header>
          <Banner informations={informations}></Banner>
        </header>

        <main>
          <About informations={informations}></About>
          <Services informations={informations}></Services>
          <Projects informations={informations}></Projects>
          <Testimonials informations={informations}></Testimonials>
          <Contact></Contact>
        </main>

        <footer>
          <Footer></Footer>
        </footer>
      </div>

    </>
  );
}
