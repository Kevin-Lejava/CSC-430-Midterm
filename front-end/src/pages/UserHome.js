import React, { useState } from 'react';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

function UserHome() {

    const [cars, setCars] = useState([])
    const [make, setMake] = useState("")
    const [color, setColor] = useState("")
    const navigate = useNavigate();
    let carID = 0;

    const getAllCars = () => {
        try {
            axios
                .get(`http://localhost:5000/car`)
                .then(response => {
                    setCars(response.data)
                    console.log(response.data)
                })

        } catch (err) {
            console.error(err.message)
        }
    }

    React.useEffect(() => {
        getAllCars();
    }, [])

    const handleMake = (event) => {
        setMake(event.target.value)
        console.log(make)
    }

    const handleColor = (event) => {
        setColor(event.target.value)
        console.log(color)
    }

    const handleSubmit = async (event) => {
        event.preventDefault()

        if (make !== "-" && color !== "-")
            try {
                axios
                    .get(`http://localhost:5000/car/${make}/${color}`)
                    .then(response => {
                        setCars(response.data)
                        console.log(response.data)
                    })

            } catch (err) {
                console.error(err.message)
            }

        else if (make !== "-")
            try {
                axios
                    .get(`http://localhost:5000/car/${make}`)
                    .then(response => {
                        setCars(response.data)
                        console.log(response.data)
                    })

            } catch (err) {
                console.error(err.message)
            }

        else if (color !== "-")
            try {
                axios
                    .get(`http://localhost:5000/car/${color}`)
                    .then(response => {
                        setCars(response.data)
                        console.log(response.data)
                    })

            } catch (err) {
                console.error(err.message)
            }

        else
            getAllCars();
    }

    const setSelection = (id) => {
        carID = id;
        console.log(carID)
        redirect()
    }

    const redirect = () => {
        navigate('/CarDetail', { state: { car: carID } });
    }

    return (
        <div>
            <div className="jumbotron">
                <h1 className="display-4 jumbo-text">Welcome</h1>
                <hr className="my-4" />
                <form className="row row-cols-2 d-inline-flex bd-highlight" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="select-make">Make</label>
                        <select className="form-control" id="select-make" onChange={handleMake}>
                            <option>-</option>
                            <option>Mercedes-Benz</option>
                            <option>BMW</option>
                            <option>Audi</option>
                            <option>Honda</option>
                            <option>Ford</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="select-color">Color</label>
                        <select className="form-control" id="select-color" onChange={handleColor}>
                            <option>-</option>
                            <option>Black</option>
                            <option>White</option>
                            <option>Red</option>
                            <option>Silver</option>
                            <option>Grey</option>
                            <option>Blue</option>
                        </select>
                    </div>

                    <button className="btn btn-primary">Filter</button>
                </form>
            </div>

            <div className=" container d-flex flex-row bd-highlight mb-3" >
                <div className="row row-cols-3">
                    {cars.map(car => (
                        <div className="body-text" key={car.id}>
                            <div className="card">
                                <img src={car.image_path} className="card-img-top card-img" alt="Car" />

                                <div className="card-body" >
                                    <h5 className="card-title">{car.make}</h5>
                                    <h6 className="card-title">{car.model}</h6>
                                </div>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">${car.price}</li>
                                    <li className="list-group-item"><button className="btn btn-primary" onClick={(e) => { setSelection(car.id); }}>View</button></li>
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div >
    );
}

export default UserHome; 