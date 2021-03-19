import React from 'react';
import { useHistory } from 'react-router';
import './VehicleCart.css';

const VehicleCarts = (props) => {
    const {name, image, id} = props.cart;

    const history = useHistory();
    const cardHandler = (id) => {
        history.push(`/destination/${id}`);
    }
    
    return (
        
        <div onClick={()=>cardHandler(id)} className="card cart-style">
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