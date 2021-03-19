import React from 'react';
import './VehicleCart.css';

const VehicleCarts = (props) => {
    const {name, image} = props.cart;
    
    return (
        
        <div className="card cart-style">
            <div className='cart-img'>
                <img src={image} className="card-img-top img-fluid" alt=" "/>
            </div>
            <div className="card-body">
                <h5>{name}</h5>
            </div>
        </div>
        
    );
};

export default VehicleCarts;