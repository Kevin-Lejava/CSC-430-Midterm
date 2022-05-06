import React from 'react';
import axios from 'axios'
import { useLocation, useNavigate } from 'react-router-dom';

function Checkout() {

    const { state } = useLocation();
    const navigate = useNavigate();

    console.log(state.userID)
    console.log(state.carID)

    const handleSubmit = async (event) => {
        event.preventDefault()

        var confirmation_number = ""
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
        let user_id = state.userID
        let vehicle_id = state.carID

        for (var i = 0; i < 15; i++)
            confirmation_number += possible.charAt(Math.floor(Math.random() * possible.length))

        try {
            const body = { confirmation_number, user_id, vehicle_id }
            const response = await axios({
                method: 'post',
                url: `http://localhost:5000/checkout`,
                data: body
            }).then(navigate('/Confirmation', { state: { confirmationNum: confirmation_number } }))

        } catch (err) {
            console.error(err.message)
        }
    }

    return (
        <div className="form body-text">
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="card-num">Card Number:</label>
                    <input type="text" placeholder="XXXX-XXXX-XXXX-XXXX" name="card-num" />
                </div>
                <div>
                    <label htmlFor="date"> Experation Date: </label>
                    <input type="date" placeholder="Username" name="date" />
                </div>
                <div>
                    <label htmlFor="CVV">CVV:</label>
                    <input type="CVV" placeholder="Last 3 digits on the back" name="CVV" />
                </div>
                <button className=" btn btn-primary">Check Out</button>
            </form>
        </div>
    );
}

export default Checkout;