import React, { useState } from 'react';
import { v4 } from 'uuid';

import image from "../../images/headPhone.png"
import { DataItemsMenuDesktop } from '../Data';

const ItemsMenuDesktop = ({open , setOpen}) => {
    const [data , setData] = useState(DataItemsMenuDesktop);
    
    const openMenu = () => {
        setOpen(true)
    }
    const closeMenu = () => {
        setOpen(false)
    }

    return (
        <div 
        className={`absolute z-20 bg-white flex justify-around w-70% mr-10 p-2 pt-3 h-[380px] shadow-menuDesk items-menu-desktop menu-desktop-h2 ${open ? "flex" : "hidden"}`}
         onMouseEnter={openMenu} onMouseLeave={closeMenu}
        >
            {data.map(item =>
                <div key={v4()}>
                    <h2>{item.name}</h2>
                    <ul>
                        <li>{item.item1}</li>
                        <li>{item.item2}</li>
                        <li>{item.item3}</li>
                        <li>{item.item4}</li>
                        <li>{item.item5}</li>
                        <li>{item.item6}</li>
                        <li>{item.item7}</li>
                    </ul>
                    <h2>{item.name2}</h2>
                    <ul>
                        <li>{item.item8}</li>
                        <li>{item.item9}</li>
                    </ul>
                    <h2>{item.name3}</h2>
                    <h2>{item.name4}</h2>
                </div>
            )}

            <div className="pt-36">
                <img src={image} alt="image"/>
            </div>
        </div>
    );
};

export { ItemsMenuDesktop };