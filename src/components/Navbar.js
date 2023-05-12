import React from 'react';
import 'animate.css';

//Images
import logo from "../images/logo.png";

//Icons
import { FcSearch , FcLike } from "react-icons/fc";
import { BiShoppingBag } from "react-icons/bi";
import { BsFillPersonFill } from "react-icons/bs";

const Navbar = ({openMenu , setOpenMenu}) => {

    const menuHandler = () => {
        setOpenMenu(!openMenu)
    }
    
    return (
        <div className={`font-vazirRegular text-sm lg:text-md z-30 lg:sticky top-0 bg-white shadow-navbar mb-5 pt-2.5 pb-2.5 grid grid-cols-2 lg:flex justify-between items-center`}>
            
            {/* Logo */}
            <div className="cursor-pointer mt-1 mr-10 w-20 md:w-24 lg:w-36">
                <img src={logo}/>
            </div>

            {/* HambergerMenu */}
            <div dir="ltr" className={`mt-1 ml-10 lg:hidden`} onClick={menuHandler}>
                <hr className={`w-6 h-0.5 bg-neutral-950 mb-1.5 ${openMenu ? "translate-y-2 rotate-fortyFive duration-300" : "duration-300"}`}/>
                <hr className={`w-4 h-0.5 bg-neutral-950 ${openMenu ? "translate-x-5 bg-white opacity-0 duration-300" : "duration-300"}`}/>
                <hr className={`w-6 h-0.5 bg-neutral-950 mt-1.5 ${openMenu ? "translate-y-tow rotate-45 duration-300" : " duration-300"}`}/>
            </div>

            {/* Search */}
            <div className="mt-4 mr-7 p-2.5 rounded-lg w-full bg-stone-100 flex items-center lg:w-1/2">
                <input className="outline-none w-full bg-stone-100  text-stone-400" type="text" placeholder="جستجو ..."/>
                <span className="cursor-pointer text-lg md:text-xl lg:text-2xl">{<FcSearch />}</span>
            </div>

            {/* Items */}
            <div>
                <div className="mt-5 ml-10 flex justify-end text-lg md:text-xl lg:mt-5">
                    <div className="cursor-pointer lg:text-[#8e939b] lg:bg-stone-100 rounded-md lg:p-3.5 transition-all hover:shadow-lg hover:text-green-900 hover:bg-green-200">{<BsFillPersonFill />}</div>
                    <div className="cursor-pointer hidden mr-4 lg:flex lg:bg-stone-100 rounded-md lg:p-3.5 hover:shadow-lg transition-all hover:bg-red-200">{<FcLike />}</div>
                    <div className="cursor-point lg:text-[#8e939b] mr-2 lg:mr-4 lg:bg-stone-100 rounded-md lg:p-3.5 hover:shadow-lg transition-all hover:text-blue-900 hover:bg-blue-200">{<BiShoppingBag className="hover:animate-shop" />}</div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;