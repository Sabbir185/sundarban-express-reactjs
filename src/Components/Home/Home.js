import React, { createContext, useEffect, useState } from 'react';
import Header from '../Header/Header';
import vehicleData from '../fakeData/vehicleInfo.json';
import VehicleCarts from '../VehicleCarts/VehicleCarts';
import './Home.css';

const Home = () => {
    const [vehicle, setVehicle] = useState([]);
    useEffect(()=>{
        setVehicle(vehicleData);
    },[])
 
    return (
        <div className="home-bg">
            <div className="container">
                <Header></Header>
                <div className='cart-container'>
                    {
                        vehicle.map(data => <VehicleCarts key={data.id} cart={data} ></VehicleCarts>)
                    }
                </div>
            </div>
        </div>       
    );
};

export default Home;