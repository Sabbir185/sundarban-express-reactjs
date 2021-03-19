import React from 'react';
import { useParams } from 'react-router';

const Destination = () => {
    const {id} = useParams();
    console.log(id)
    return (
        <div>
            <h3>This is destination</h3>
        </div>
    );
};

export default Destination;