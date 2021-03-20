import React from 'react';
import Header from '../Header/Header';
import './Contact.css';

const Contact = () => {
    return (
        <div className='container'>
            <div className='bg-dark mt-3 rounded mb-3'>
                <Header></Header>
            </div>
            <div className='row address-container'>
                <div className="col-sm-12 col-lg-6 col-xlg-6">
                    <h3>Welcome Sundarban Express</h3>
                    <p>Sundarban express is a place where you find 4 types of transport services. We are currently servicing Bike, Bus, Car and also Train transport.</p>
                    <h6>Feel free contact with US!</h6>
                    <p>Head Office</p>
                    <p>Mobile : 017xx-xxxxxx</p>
                    <p>Email : sundarban@express.com</p>
                </div>
                <div className="col-sm-12 col-lg-6 col-xlg-6 address-local">
                    <h3>Our local office</h3>
                    <address>
                        Gabtali Counters, dhaka <br/>
                        Phone:  017xx-xxxxxx
                    </address>
                    <address>
                        Shyamoli Counters, dhaka <br/>
                        Phone: 017xx-xxxxxx
                    </address>
                    <address>
                        Sonadanga, Khulna <br/>
                        Phone: 017xx-xxxxxx
                    </address>
                    
                </div>

            </div>
        </div>
    );
};

export default Contact;