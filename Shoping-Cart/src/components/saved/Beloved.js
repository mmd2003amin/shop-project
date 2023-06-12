import React from 'react';
import { v4 } from 'uuid';
import { isInData } from '../helper';

//Icons
import { Like , Score } from '../SVG';

//Redux
import { useSelector , useDispatch } from 'react-redux';
import { saveToBeloved, removeFromBeloved } from '../../features/beLoved/beLovedSlice';
import { Link } from 'react-router-dom';

const Beloved = () => {
    const state = useSelector(state => state.beLovedSlice.data);
    const dispatch = useDispatch();

    return (
        <div className="pages-sections">
            {state.map(item => 
                <div key={v4()} className="pb-9 border border-solid border-gray-100 bg-white 
                 hover:shadow-2xl flex flex-col justify-around">
                    <Link to={`/${item.page}/${item.id}`}>
                        <div className="w-40 lg:w-48 mb-16 mx-auto pt-2.5"><img src={item.image1}/></div>
                        <h2 className="text-center">{item.name}</h2>
                    </Link>
                    <div className="flex justify-between m-8">
                        <span
                         className={isInData(state , item.name) ? "likeT" : "likeF"} 
                         onClick={() =>isInData(state , item.name) ? dispatch(removeFromBeloved(item)) : dispatch(saveToBeloved(item))}>
                            <Like/>
                        </span>
                        <span>{item.price}</span>
                    </div>
                    <Link to={`/${item.page}/${item.id}`} className="flex justify-end ml-7">
                        <span>{item.score}</span>
                        <span><Score /></span>
                    </Link>
                </div>      
            )}
        </div>
    );
};

export default Beloved;