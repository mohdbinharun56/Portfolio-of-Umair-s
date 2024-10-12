'use client'
import { useEffect, useRef, useState } from "react";
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
  const [theme, setTheme] = useState(false);

  useEffect(() => {
    fetch('personalInformation.json')
      .then(response => response.json())
      .then(data => {
        setInformations(data);
      });
  }, []);

  const handleNav = (targetId: string) => {
    const element = document.querySelector(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleTheme = (e: any) => {
    e.preventDefault();
    const element = document.body;
    element.classList.toggle("dark");
    setTheme(!theme);

    console.log(theme);
  }

  return (
    <>
      <div>
        <header>
          <Header handleTheme={handleTheme} handleNav={handleNav} theme={theme}></Header>
          <Banner informations={informations} ></Banner>
        </header>

        <main>
          <About informations={informations}></About>
          <Services informations={informations} theme={theme}></Services>
          <Projects informations={informations}></Projects>
          <Testimonials informations={informations} theme={theme}></Testimonials>
          <Contact></Contact>
        </main>

        <footer>
          <Footer theme={theme} handleNav={handleNav}></Footer>
        </footer>
      </div>

    </>
  );
}
