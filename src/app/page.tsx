'use client'
import { useEffect, useState } from "react";
import Header from "./components/Header/page";
import Banner from "./components/banner/page";
import About from "./components/about/page";
import Services from "./components/services/page";
import Projects from "./components/projects/page";


export default function Home() {

  const [informations, setInformations] = useState([]);

  useEffect(() => {
    fetch('personalInformation.json')
      .then(response => response.json())
      .then(data => {
        setInformations(data);
      });
  }, [])

  // if(!informations){
  //   return <h1>Loading....</h1>
  // }
  return (
    <>
      <div>
        <Header></Header>
        <Banner informations={informations}></Banner>
        <About informations={informations}></About>
        <Services informations={informations}></Services>
        <Projects informations={informations}></Projects>
      </div>

    </>
  );
}
