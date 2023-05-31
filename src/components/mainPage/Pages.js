import { useState } from "react";
import { Link  } from "react-router-dom";
import { DataPages } from "../Data";
import { v4 } from "uuid";
const Pages = () => {
    const [ data , setData ] = useState(DataPages);
    
    return (
        <div className="pages item-pages">
            {data.map(item => 
                <Link to={item.path} key={v4()}>
                    <img src={item.img} alt="image"/>
                </Link>    
            )}
        </div>
    );
};

export default Pages;