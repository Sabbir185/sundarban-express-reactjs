import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router';
import VehicleData from '../fakeData/vehicleInfo.json';
import Header from '../Header/Header';
import './Destination.css';
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRoute } from '@fortawesome/free-solid-svg-icons';
import MapImg from '../images/Map.png';
import Result from '../Result/Result';
import resultData from '../fakeData/resultData.json';

const Destination = (props) => {
    const [destination, setDestination] = useState({});
    const {id} = useParams();
    

    // result fake data
    const[result, setResult] = useState([]);
    useEffect(()=>{
        setResult(resultData);
    },[])

    const resultFilteredData = result.filter(data => data.foreignKey == id);
    
    // destination search form
    const [toggle, setToggle] = useState(false);
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => {
        setToggle(true);
        return setDestination(data)
    };


    return (
        <div className='container'>
            <div className='bg-dark mt-3 rounded mb-3'>
                <Header></Header>
            </div>
            <div className="row destination-container">
                <div className="col-4 bg-color">

                    { toggle===false && <form  onSubmit={handleSubmit(onSubmit)}>
                            <input name="from"  ref={register({ required: true })} placeholder='From' className='form-control'/>
                            {errors.from && <span>This field is required</span>}
                            <br/>
                            <input name="to"  ref={register({ required: true })} placeholder='To'  className='form-control'/>
                            {errors.to && <span>This field is required</span>}
                            <br/>
                            <input type="submit" value="Search"  className='btn btn-primary w-100'/>
                        </form>
                    }   

                    

            
                    { toggle &&   <div>
                            <div className='row'>
                                <div className="col-4">
                                    <FontAwesomeIcon style={{fontSize:'100px', color:'#3498DB'}} icon={faRoute} />
                                </div>
                                <div className="col-8">
                                    <h1 style={{fontWeight:'700',color:'salmon'}}>{destination.from}</h1>
                                    <h1 style={{fontWeight:'700',color:'salmon'}}>{destination.to}</h1>
                                </div>
                            </div>
                            <hr/>
                            {
                                resultFilteredData.map(data => <Result result={data}></Result> )  
                            }
                        </div>
                    }
                </div>
                <div className="col-7 bg-color">
                    <img className='map-style' src={MapImg} alt=""/>
                </div>
            </div>
        </div>
    );
};

export default Destination;