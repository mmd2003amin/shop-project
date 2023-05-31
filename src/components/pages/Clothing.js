import React, { useEffect, useState } from 'react';
import { DataClothing } from '../Data';
import { v4 } from 'uuid';
import { isInData } from '../helper';
import { Link } from 'react-router-dom';

//Redux
import { saveToBeloved , removeFromBeloved } from '../../redux/beLoved/dispatchBeLoved';
import { useDispatch , useSelector } from 'react-redux';

//Icons
import { Like , Score } from '../SVG';

const Clothing = () => {
    const [data , setData] = useState(DataClothing);
    const state = useSelector(state => state.beLovedState.data);
    const dispatch = useDispatch();

    return (
        <div className="pages-sections">
            {data.map(item => 
                <div key={v4()} className="pages-sections-map">
                    <Link to={`/clothing/${item.id}`} >
                        <div className="w-40 lg:w-48 mb-16 mx-auto pt-2.5"><img src={item.image1}/></div>
                        <h2 className="text-center">{item.name}</h2>
                    </Link>
                    <div className="flex justify-between m-8 mb-5">
                        <span
                         className={isInData(state , item.name) ? "likeT" : "likeF"} 
                         onClick={() =>isInData(state , item.name) ? dispatch(removeFromBeloved(item)) : dispatch(saveToBeloved(item))}>
                            <Like/>
                        </span>
                        <span>{item.price}</span>
                    </div>
                    <Link to={`/clothing/${item.id}`} className="flex justify-end ml-7">
                        <span>{item.score}</span>
                        <span><Score /></span>
                    </Link>
                </div>  
            )}
        </div>
    );
};

export default Clothing;