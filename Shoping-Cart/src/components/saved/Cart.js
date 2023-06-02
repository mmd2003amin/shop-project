import React , { useState } from 'react';
import { isInData, quantityCouant } from '../helper';
import { Link } from 'react-router-dom';
import { DataPages } from '../Data';
import { v4 } from 'uuid';

//Icons
import { Minus, Plus, Trash , Truck , Shield , StoreI } from '../SVG';
import trashImage from "../../images/trash.svg";

//Redux
import { removeItem , increase , decrease , clear } from '../../redux/cart/cartDispatch';
import { useSelector , useDispatch } from 'react-redux';

const Cart = () => {
    const [ data , setData ] = useState(DataPages);
    const state = useSelector(state => state.cartState);
    const dispath = useDispatch();

    return (
        <div className="bg-white font-vazirRegular pt-12 flex flex-col-reverse lg:flex-row justify-between">
            <div>
                {state.data.map(item => 
                    <div key={v4()} className="flex flex-col li:flex-row cart-check w-[90%] mx-auto lg:w-full lg:mr-16 mb-6">

                        <div>
                            <img className="w-32 sm:w-40 ml-8" src={item.image1} alt="image"/>
                            <div className="flex items-center w-fit border border-solid border-gray-400 rounded-md mt-10 sm:mr-5 p-1">
                                <div className="ml-4">
                                    {isInData(state.data , item.name) && <button onClick={() => dispath(increase(item))}><Plus /></button>}
                                </div>
                                <span className="w-7 text-center font-vazirExtraBold text-lg text-red-600">{item.quantity}</span>
                                <div>
                                    {quantityCouant(state.data , item.name) === 1 && <button className="mr-4" onClick={() => dispath(removeItem(item))}><Trash /></button>}
                                    {quantityCouant(state.data , item.name) > 1 && <button className="mr-4" onClick={() => dispath(decrease(item))}><Minus /></button>}
                                </div>
                            </div>
                        </div>

                        <div className="mt-1 sm:mt-8">
                            <div className="flex items-center mx-auto p-3 mb-2">
                                <Shield />
                                <span className="text-[12px] sm:text-sm mr-5">گارانتی اصالت و سلامت فیزیکی کالا</span>
                            </div>

                            <div className="flex items-center mx-auto mb-5 mr-3">
                                <StoreI />
                                <span className="text-[12px] sm:text-sm mr-5">موجود در انبار جی تی کالا</span>
                            </div>

                            <div className="flex items-center mx-auto mt-3 mr-3">
                                <Truck />
                                <span className="text-[12px] sm:text-sm mr-5">ارسال جی تی کالا از ۲ روز کاری دیگر</span>
                            </div>

                            <h3 className="total">قیمت : <span>{item.price}</span></h3>
                        </div>
                    </div>
                )}
            </div>
            
            {state.data.length > 0 && 
                <div className="cart-check sm:mr-14 lg:mr-0 mb-6 lg:mb-0 mx-auto w-[90%] sm:w-1/2 lg:w-1/4 lg:fixed 
                top-52 left-32 flex flex-col h-52">
                    <h3 className="total">قیمت کل : <span>{state.totalPrice}</span></h3>
                    <h3 className="total">تعداد کل : <span>{state.totalQuantity}</span></h3>
                    <div className="cart-check-button flex justify-between mt-10">
                        <button onClick={() => dispath(clear())}>تسویه حساب</button>
                        <button onClick={() => dispath(clear())}>پاک کردن همه</button>
                    </div>
                </div>
            }
            {state.totalQuantity === 0 &&
                <div className="mx-auto w-[80%]">
                    <div className="flex flex-col items-center w-full p-8 border border-solid border-gray-300 rounded-md mb-10">
                        <img className="w-32 sm:w-auto" src={trashImage} alt="image"/>
                        <h1 className="mt-5 text-sm li:text-md font-vazirMedium">سبد خرید شما خالی است!</h1>
                        <p className="mt-2 text-[11px] sm:text-sm font-vazirRegular text-gray-400 ">می‌توانید برای مشاهده محصولات بیشتر به صفحات زیر بروید :</p>
                    </div>
                    <div className="pages item-pages">
                        {data.map(item => 
                            <Link to={item.path} key={v4()}>
                                <img src={item.img} alt="image"/>
                            </Link>    
                        )}
                    </div>
                </div>
            }
        </div>
    );
};

export default Cart;