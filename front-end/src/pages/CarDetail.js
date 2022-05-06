import React, { useState } from 'react';
import axios from 'axios'
import { useLocation, useNavigate } from 'react-router-dom';

function CarDetail() {

    const { state } = useLocation();
    const [car, setCar] = useState([]);
    const navigate = useNavigate();
    let leasePrice = 0;
    let financePrice = 0;

    React.useEffect(() => {
        getInfo();
    }, [])

    const getInfo = () => {
        try {
            axios
                .get(`http://localhost:5000/view/${state.car}`)
                .then(response => {
                    setCar(response.data)
                })

        } catch (err) {
            console.error(err.message)
        }
    }

    const calculateFinance = (price) => {
        financePrice = (price / 60).toFixed(2);
    }

    const calculateLease = (price) => {
        leasePrice = ((price * .60) / 32).toFixed(2)
    }

    const redirect = (id, price) => {
        navigate("/Checkout", { state: { carID: id, monthlyDue: price, userID: state.userID } });
    }


    return (
        <div className="jumbotron">
            {car.map(car => (
                <div>
                    {calculateFinance(car.price)}
                    {calculateLease(car.price)}
                    <h1 className="display-4">{car.make}</h1>
                    <h1 className="display-4">{car.model}</h1>
                    <img className="detailImage" src={car.image_path} alt="car"></img>
                    <p>{car.vin}</p>
                    <h1 className="display-6">${car.price}</h1>
                    <h5>
                        <button className="btn btn-primary" onClick={() => (redirect(car.id, financePrice))}>Buy Now</button> for ${financePrice} per month for 60 months
                        <br />Or<br />
                        <button className="btn btn-primary" onClick={() => (redirect(car.id, leasePrice))}>Lease Now</button> for ${leasePrice} per month for 32 months
                    </h5>
                </div>
            ))}
        </div>
    )
}

export default CarDetail;