import React, { useState , useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { DataClothing, DataDigital, DataHealth, DataTool } from '../Data';

//Icons
import { Exclamation, Score, Shield , StoreI, Truck } from '../SVG';

//Redux
// import { saveToBeloved , removeFromBeloved } from '../../redux/beLoved/dispatchBeLoved';
import { saveToBeloved , removeFromBeloved } from '../../features/beLoved/beLovedSlice';
// import { addItem, removeItem } from "../../redux/cart/cartDispatch";
import { addItem, removeItem } from "../../features/cart/cartSlice";
import { useSelector , useDispatch } from 'react-redux';
import { isInData } from "../helper"

const Details = () => {
    const splited = window.location.pathname.split("/");
    const [ data , setData ] = useState(
    window.location.pathname === `/digital/${splited[2]}` ? DataDigital :
    window.location.pathname === `/clothing/${splited[2]}` ? DataClothing :
    window.location.pathname === `/health/${splited[2]}` ? DataHealth :
    window.location.pathname === `/tool/${splited[2]}` && DataTool
    );

    const params = useParams();
    const indexData = data[params.id - 1];
    const [showImage, setShowImage] = useState(indexData.image1)

    const dispath = useDispatch();
    const state = useSelector(state => state);

    useEffect(() => {
        window.location.pathname === `/digital/${indexData.id}` ? setData(DataDigital) :
        window.location.pathname === `/clothing/${indexData.id}` ? setData(DataClothing) :
        window.location.pathname === `/health/${indexData.id}` ? setData(DataHealth) :
        window.location.pathname === `/tool/${indexData.id}` && setData(DataTool)
    },[])

    return (
        <div className="flex flex-col md:flex-row justify-between bg-white">
            <div className="font-vazirMedium">
                <div className="flex flex-col-reverse md:flex-row">

                    <div>
                        <img className="w-52 md:w-60 lg:w-72 h-52 md:h-72 mx-auto lg:mr-24 pt-10" src={showImage} alt="image" />
                    </div>

                    <div className="mr-5 md:mr-14 pt-14 flex flex-col items-details">

                        <h1 className="w-fit text-blue-950 text-md md:text-xl pb-3 border-b 
                         border-solid border-gray-500">
                            {indexData.name}
                        </h1>
                        <div className="flex p-2">
                            <span>{indexData.score}</span>
                            <span><Score /></span>
                        </div>
                        <h1 className="text-md md:text-xl mb-5">ویژگی ها</h1>
                        <span className="">{indexData.item1}</span>
                        <span>{indexData.item2}</span>
                        <span>{indexData.item4}</span>
                        <span>{indexData.item5}</span>

                        <div>
                            {isInData(state.beLovedSlice.data , indexData.name) ?
                                <button className="bg-red-600 text-white border border-solid 
                                 border-red-600 rounded-md p-2 text-[12px] md:text-sm transition-all m-2"
                                 onClick={() => dispath(removeFromBeloved(indexData))}>
                                    به علاقه مندی اضافه شد
                                </button> : 
                                <button className="border border-solid border-black rounded-md p-2 
                                 text-[12px] md:text-sm transition-all m-2"
                                 onClick={() => dispath(saveToBeloved(indexData))}>
                                    افزودن به علاقه مندی ها
                                </button>
                            }
                        </div>

                    </div>
                </div>

                <div className="flex mt-10 lg:mt-20 mx-auto pb-5 image-details">
                    <div onClick={() => setShowImage(indexData.image3)}><img src={indexData.image3} alt="image" /></div>
                    <div onClick={() => setShowImage(indexData.image1)}><img src={indexData.image1} alt="image" /></div>
                    <div onClick={() => setShowImage(indexData.image2)}><img src={indexData.image2} alt="image" /></div>
                </div>

            </div>

            <div className="w-[90%] md:w-1/3 lg:w-1/4 font-vazirRegular mx-auto md:ml-3 md:mr-5 lg:ml-24 mt-10 md:mt-22 h-fit 
             flex flex-col bg-stone-200 border border-solid border-gray-500 rounded-md">

                <h1 className="text-blue-950 text-xl pt-3 pr-3">خرید</h1>
                <h3 className="text-md p-3 pr-8">{indexData.name}</h3>
                <hr className="h-[2px] mx-auto bg-stone-400 w-[90%]"/>

                <div className="flex items-center mx-auto p-3">
                    <Shield />
                    <span className="text-[13px] mr-5">گارانتی اصالت و سلامت فیزیکی کالا</span>
                </div>
                <hr className="h-[2px] mx-auto bg-stone-400 w-[90%]"/>

                <div className="mx-auto p-3">
                    <div className="flex items-center mx-auto">
                        <StoreI />
                        <span className="text-[13px] mr-5">موجود در انبار جی تی کالا</span>
                    </div>
                    <div className="flex items-center mx-auto mt-3">
                        <Truck />
                        <span className="text-[13px] mr-5">ارسال جی تی کالا از ۲ روز کاری دیگر</span>
                    </div>
                </div>
                <hr className="h-[2px] mx-auto bg-stone-400 w-[90%]"/>

                <div className="flex justify-between items-center p-5">
                    <div className="flex items-center">
                        <Exclamation />
                        <span className="text-sm mr-2">قیمت</span>
                    </div>
                    <div className="text-sm">
                        {indexData.price}
                    </div>
                </div>

                <div className="flex justify-center">
                    {isInData(state.cartSlice.data , indexData.name) ?
                     <button className="bg-green-600 hover:bg-green-700 button-addToCart"
                      onClick={() => dispath(removeItem(indexData))}>
                          به سبد خرید اضافه شد
                     </button> : 
                     <button className="bg-red-600 hover:bg-red-700 button-addToCart"
                      onClick={() => dispath(addItem(indexData))}>
                          افزودن به سبد خرید
                     </button>
                    }
                </div>
                
            </div>
        </div>
    );
};

export default Details;