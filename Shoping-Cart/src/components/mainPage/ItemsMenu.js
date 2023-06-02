import React  from 'react';
import { Link } from 'react-router-dom';

const ItemsMenu = ({ path , item1 , item2 , item3 , item4 , item5 }) => {

    return (
        <ul>
            <li><Link to={`/${path}`}>{item1}</Link></li>
            <li><Link to={`/${path}`}>{item2}</Link></li>
            <li><Link to={`/${path}`}>{item3}</Link></li>
            <li><Link to={`/${path}`}>{item4}</Link></li>
            <li><Link to={`/${path}`}>{item5}</Link></li>
        </ul>
    );
};

export { ItemsMenu };