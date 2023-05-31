import React, { useState } from 'react';
import { ItemsMenuDesktop } from './ItemsMenuDesktop';
import { DataMenuDesktop } from '../Data';
import { v4 } from 'uuid';
import { Link } from 'react-router-dom';

const MenuDesktop = () => {
    const [data , setData] = useState(DataMenuDesktop)
    const [open , setOpen] = useState();
    const openMenu = () => {
        setOpen(true)
    }

    const closeMenu = () => {
        setOpen(false)
    }

    return (
        <div>
            <ul className="font-vazirMedium right-0 hidden lg:flex justify-around mt-8 mr-3 menu-desktop after:after-items-menu-desktop">
                <li onMouseEnter={openMenu} onMouseLeave={closeMenu}><Link to="/digital">کالای دیجیتال</Link></li>
                <li onMouseEnter={openMenu} onMouseLeave={closeMenu}><Link to="/health">آرایشی،بهداشت</Link></li>
                <li onMouseEnter={openMenu} onMouseLeave={closeMenu}><Link to="/tool">خودرو،ابزار و اداری</Link></li>
                <li><Link to="/clothing">مد و پوشاک</Link></li>
                {data.map(item => <li key={v4()}>{item.name}</li>)}
            </ul>
            <ItemsMenuDesktop open={open} setOpen={setOpen}/>
        </div>
    );
};

export default MenuDesktop;