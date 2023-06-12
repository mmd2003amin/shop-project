import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { DataClothing, DataDigital, DataHealth, DataTool } from "./Data"
import { v4 } from 'uuid';

//Redux
import { useSelector } from 'react-redux';

//Images
import logo from "../images/logo.png";

//Icons
import { Close } from './SVG';
import { FcSearch , FcLike } from "react-icons/fc";
import { BiShoppingBag } from "react-icons/bi";
import { BsFillPersonFill } from "react-icons/bs";


const Navbar = ({openMenu , setOpenMenu}) => {
    const [ data , setData ] = useState([...DataClothing , ...DataDigital , ...DataHealth , ...DataTool])
    const [ search , setSearch ] = useState("");
    const [ openSearch , setOpenSearch ] = useState(false);

    const quantity = useSelector(state => state.cartSlice.totalQuantity);

    const menuHandler = () => {
        setOpenMenu(!openMenu)
    }

    const searchHandler = (e) => {
        setSearch(e.target.value)
    };

    const openSearchHandler = () => {
        setOpenSearch(true)
    };

    const closeSearchHandler = () => {
        setOpenSearch(false)
    };

    const filterSearch = search.length && data.filter(item => item.name.includes(search));
    
    return (
        <div className={`font-vazirRegular text-sm lg:text-md z-30 sticky top-0 bg-white shadow-navbar mb-5
         pt-2.5 pb-2.5 flex flex-row-reverse md:grid grid-cols-2 lg:flex lg:flex-row justify-between items-center`}>
            
            {/* Logo */}
            <Link className="mt-1 mr-10 hidden w-24 md:flex lg:w-36" to="/"><img src={logo} alt="image" /></Link>

            {/* HambergerMenu */}
            <div dir="ltr" className={`mt-1 ml-10 lg:hidden`} onClick={menuHandler}>
                <hr className={`w-6 h-0.5 bg-neutral-950 mb-1.5 ${openMenu ? "translate-y-2 rotate-fortyFive duration-300" : "duration-300"}`}/>
                <hr className={`w-4 h-0.5 bg-neutral-950 ${openMenu ? "translate-x-5 bg-white opacity-0 duration-300" : "duration-300"}`}/>
                <hr className={`w-6 h-0.5 bg-neutral-950 mt-1.5 ${openMenu ? "translate-y-tow rotate-45 duration-300" : " duration-300"}`}/>
            </div>

            {/* Search */}
            <div onClick={() => setOpenSearch(true)} className="mt-4 mr-7 p-2.5 rounded-lg w-full bg-stone-100 hidden md:flex items-center lg:w-1/2">
                <input onChange={searchHandler} value={search} className="outline-none w-full bg-stone-100  text-stone-400" type="text" placeholder="جستجو ..."/>
                <span className="cursor-pointer text-lg md:text-xl lg:text-2xl">{<FcSearch />}</span>
            </div>

            {/* Items */}
            <div>
                <div className="p-4 md:p-0 md:mt-5 mr-10 md:ml-10 flex justify-end text-lg md:text-xl lg:mt-5">
                    <div onClick={openSearchHandler} className="navbar-items bg-gray-500 ml-2 md:hidden"><FcSearch /></div>
                    <div className="navbar-items bg-green-600 lg:bg-stone-100 hover:bg-green-200 hover:text-green-900"><Link to="/signIn"><BsFillPersonFill /></Link></div>
                    <div className="navbar-items bg-red-600 lg:bg-stone-100 hover:bg-red-200 mr-2 lg:mr-4"><Link to="/beLoved"><FcLike /></Link></div>
                    <div className="navbar-items bg-blue-600 lg:bg-stone-100 hover:bg-blue-200 hover:text-blue-900 relative mr-2 lg:mr-4">
                        <Link to="/cart"><BiShoppingBag className="hover:animate-shop" /></Link>
                        <span className="absolute top-[-8px] left-[-8px] text-white bg-red-700 rounded-full p-1 w-6 h-6 font-vazirMedium text-sm text-center">{quantity}</span>
                    </div>
                </div>
            </div>

            {/* SearchBox */}
            <div className={`shadow-xl font-vazirMedium w-full h-fit bg-white absolute top-0 
            ${openSearch ? "duration-700 translate-y-0" : "duration-700 translate-y-[-1200px]  md:translate-y-[-800px]"}`}>
               <span onClick={closeSearchHandler} className="cursor-pointer absolute top-2 left-2"><Close /></span>

                <div className="p-2.5 border-b border-solid border-blue-500 w-[90%] flex mx-auto items-center mt-10">
                    <input onChange={searchHandler} value={search} className="outline-none w-full  text-gray-800" type="text" placeholder="جستجو ..."/>
                    <span className="cursor-pointer text-lg"><FcSearch /></span>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 m-5 md:m-7 lg:m-14">
                    {search.length ? filterSearch.slice(0 , 12).map(item => 
                            <Link to={`/${item.page}/${item.id}`} key={v4()} className="border border-solid border-gray-300 rounded-md p-2" >
                                <div  className="w-22 mx-auto"><img src={item.image1}/></div>
                                <h2 className="text-center mt-2">{item.name}</h2>
                            </Link>
                    ) : ""}
                </div>
            </div>

        </div>
    );
};

export default Navbar;