import React, { useState } from 'react';
import { DataHealth } from '../Data';
import { v4 } from 'uuid';
import { isInData } from '../helper';
import { Link } from 'react-router-dom';

//Redux
// import { saveToBeloved , removeFromBeloved } from '../../redux/beLoved/dispatchBeLoved';
import { saveToBeloved , removeFromBeloved } from '../../features/beLoved/beLovedSlice';
import { useDispatch , useSelector } from 'react-redux';

//Icons
import { Like , Score } from '../SVG';

const Health = () => {
    const [ data , setData ] = useState(DataHealth);
    const state = useSelector(state => state.beLovedSlice.data);
    const dispatch = useDispatch();

    return (
        <div>
            <div className="pages-sections">
            {data.map(item => 
                <div key={v4()} className="pages-sections-map">
                    <Link to={`/health/${item.id}`} >
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
                    <Link to={`/health/${item.id}`}  className="flex justify-end ml-7">
                        <span>{item.score}</span>
                        <span><Score /></span>
                    </Link>
                </div>  
            )}
        </div>
        </div>
    );
};

export default Health;