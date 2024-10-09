'use client'
import { useEffect, useState } from "react";
import Header from "./components/Header/page";
import Banner from "./components/banner/page";


export default function Home() {

  const [informations, setInformations] = useState([]);

  useEffect(() => {
    fetch('personalInformation.json')
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setInformations(data);
      });
  }, [])
  return (
    <>
      <div>
        <Header></Header>
        {
          <Banner informations={informations}></Banner>
        }
      </div>

    </>
  );
}
