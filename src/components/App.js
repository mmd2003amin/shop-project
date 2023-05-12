//http://rtlr.ir/253796

//https://digikala.masirwp.com/#

import React, { useState } from "react";

//Components
import Navbar from "./Navbar";
import SliderHeader from "./SliderHeader";
import Menu from "./Menu";
import MenuDesktop from "./MenuDesktop";
import Banner from "./Banner";
import Pages from "./Pages";
import SuperMarket from "./SuperMarket";
import Amazing from "./Amazing";
import Service from "./Service";
import Widgets from "./Widgets";

const App = () => {
  const [openMenu , setOpenMenu] = useState(false);
  return (
    <div dir="rtl" className="bg-stone-100">
      <Navbar openMenu={openMenu} setOpenMenu={setOpenMenu}/>
      <Menu openMenu={openMenu}/>
      <MenuDesktop />
      <SliderHeader />
      <Banner />
      <Pages />
      <SuperMarket />
      <Amazing />    
      <Service />
      <Widgets />
    </div>
  );
}

export default App;