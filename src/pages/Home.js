import React from "react";
import Bannerslider from "../components/Bannerslider";
import Choosebest from "../components/Choosebest";
import Newsletter from "../components/Newsletter";
import Team from "../components/Team";
import About from "../components/About";
import Contacthome from "../components/Contacthome";
import Homeblog from "../components/Homeblog";
import Producthome from "../components/Producthome";
function Home() {
  return (
    <div>
      <Bannerslider />
      <Producthome />
      <About />
      <Contacthome />
      <Team />
      <Choosebest />
      <Homeblog />
      <Newsletter />
    </div>
  );
}

export default Home;
