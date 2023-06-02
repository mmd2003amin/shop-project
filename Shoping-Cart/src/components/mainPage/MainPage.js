import React, { useState } from "react";

//Components
import SliderHeader from "./SliderHeader";
import Menu from "./Menu";
import MenuDesktop from "./MenuDesktop";
import Banner from "./Banner";
import Pages from "./Pages";
import SuperMarket from "./SuperMarket";
import Amazing from "./Amazing";
import Service from "./Service";
import Widgets from "./Widgets";

const MainPage = ({openMenu}) => {

    return (
        <div>
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
};

export default MainPage;