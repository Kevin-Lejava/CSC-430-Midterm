import React from 'react';
import { useLocation } from 'react-router-dom';

function Confirmation() {
    const { state } = useLocation();

    return (
        <div>
            <h1>Order Successful! Your new car will be delivered to you some day! Here is your confirmation number: {state.confirmationNum}</h1>
        </div>
    );
}

export default Confirmation;