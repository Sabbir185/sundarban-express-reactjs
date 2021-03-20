import React from 'react';
import './Result.css';


const Result = (props) => {
    const {name, image, cost, profile} = props.result;

    return (
        <div className='result-container row'>
            <div className="col">
                <img className='vehicle-img' src={image} alt=""/>
            </div>
            <div className="col">
                <h5 className='vehicle-type'>{name}</h5>
            </div>
            <div className="col">
                <img className='user-profile' src={profile} alt=""/>
            </div>
            <div className="col">
                <h5 className='vehicle-cost'>{cost}</h5>
            </div>
        </div>
    )     
};

export default Result;