import React,{ useState } from 'react';

// Components
import { ItemsMenu } from './ItemsMenu';

//Images
import logo from "../images/logo.png";

//Icons
import { BsPlusCircle } from "react-icons/bs";

const Menu = ({openMenu}) => {

    const [openList1 , setOpenList1] = useState(false);
    const [openList2 , setOpenList2] = useState(false);
    const [openList3 , setOpenList3] = useState(false);

    const openHandler1 = (e) => {
        setOpenList1(!openList1);
        setOpenList2(false);
        setOpenList3(false);
    }
    const openHandler2 = (e) => {
        setOpenList1(false);
        setOpenList2(!openList2);
        setOpenList3(false);
    }
    const openHandler3 = (e) => {
        setOpenList1(false);
        setOpenList2(false);
        setOpenList3(!openList3);
    }

    return (
        <div className={`font-vazirMedium w-[65%] md:w-1/3 h-full lg:hidden bg-white shadow-navbar absolute top-0 z-40 ${openMenu ? "duration-700 translate-y-0" : "duration-700 translate-x-[320px]"}`}>

            {/* Logo */}
            <div className="w-16 li:w-22 absolute top-4 left-4"><img src={logo} alt="logo"/></div>

            {/* items */}
            <div className={`mt-10`}>
                <ul className="text-li bg-white font-normal text-sm menu-mobile li:menu-mobile-li">

                    {/* Item1 */}
                    <li>
                        <div className="flex items-center mb-3" onClick={openHandler1}>
                            <a>کالای دیجیتال</a>
                            <BsPlusCircle className={`mr-2 ${openList1 ? "rotate-45 duration-300" : "duration-300"}`} />
                        </div>
                        <div className="items-menu">
                            <ItemsMenu item1="لوازم جانبی گوشی" item2="گوشی موبایل" item3="ساعت هوشمند" item4="اسپیکر بلوتوث و باسیم" item5="موبایل" />
                        </div>
                    </li>

                    <div className={`absolute top-[72px] bg-white w-full items-menu-animate ${openList1 ? "translate-y-[158px] duration-500" : "translate-y-[0px] duration-500"}`}>
                        
                        {/* Item2 */}
                        <li>
                            <div className="flex items-center mb-3" onClick={openHandler2}>
                                <a>آرایشی،بهداشت</a>
                                <BsPlusCircle className={`mr-2 ${openList2 ? "rotate-45 duration-300" : "duration-300"}`} />
                            </div>
                            <div className="items-menu">
                                <ItemsMenu item1="لوازم آرایشی" item2="مراقبت پوست" item3="لوازم بهداشتی" item4="عطر و ادکلن" item5="لوازم شخصی برقی" />
                            </div>
                        </li>

                        <div className={`absolute top-[30px] bg-white w-full items-menu-animate ${openList2 ? "translate-y-[158px] duration-500" : "translate-y-[0px] duration-500"}`}>

                            {/* Item3 */}
                            <li>
                                <div className="flex items-center mb-3" onClick={openHandler3}>
                                    <a>خودرو،ابزار و اداری</a>
                                    <BsPlusCircle className={`mr-2 ${openList3 ? "rotate-45 duration-300" : "duration-300"}`} />
                                </div>
                                <div className={`items-menu`}>
                                    <ItemsMenu item1="ابزار برقی" item2="ابزار غیربرقی" item3="حفاظتی و امنیتی" item4="خودرو" item5="موتور" />
                                </div>
                            </li>

                            <div className={`absolute top-[30px] bg-white w-full items-menu-animate ${openList3 ? "translate-y-[158px] duration-500" : "translate-y-[0px] duration-500"}`}>

                                {/* Item 4 , 5 , 6 , 7 */}
                                <li><a>مد و پوشاک</a></li>
                                <li><a>خانه و آشپزخانه</a></li>
                                <li><a>کتاب،لوازم تحریر</a></li>
                                <li className="pb-6"><a>ورزش و سفر</a></li>
                            </div>
                        </div>
                    </div>
                </ul>
            </div>
        </div>
    );
};

export default Menu;