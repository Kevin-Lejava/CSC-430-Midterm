import { Link, useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import axios from 'axios'

function Login(props) {
    const [user_email, setEmail] = useState("")
    const [user_password, setPassword] = useState("")
    const navigate = useNavigate();


    const handleEmail = (event) => {
        setEmail(event.target.value)
    }

    const handlePassword = (event) => {
        setPassword(event.target.value)
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        try {
            const body = { user_email, user_password }
            const response = await axios({
                method: 'post',
                url: `http://localhost:5000/auth/login`,
                data: body
            })
            if (response.status === 200) {
                try {
                    await axios.get(`http://localhost:5000/id/${user_email}`).then(response => {
                        navigate('/UserHome', { state: { userID: response.data[0].id } });
                    })
                } catch (err) {
                    console.error(err.message);
                }
            }

        } catch (err) {
            console.error(err.message);
            alert("Invalid Username and or password");
        }
    }

    return (

        <div className="form body-text">
            <form onSubmit={handleSubmit}>
                <div>
                    <nav className="navbar navbar-expand-lg navbar-dark ">
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <Link className="btn btn-primary btn-lg" to="/" role="button">Home</Link>
                                </li>
                                <Link className="btn btn-primary btn-lg" to="/Register" role="button">Register</Link>
                            </ul>
                        </div>
                    </nav>

                    <label htmlFor="email"></label>
                    <input type="text" placeholder="Email" name="email" onChange={handleEmail} />
                </div>
                <div>
                    <label htmlFor="password"></label>
                    <input type="password" placeholder="Password" name="password" onChange={handlePassword} />
                </div>
                <button className="btn btn-primary">Log In</button>

            </form>
        </div>
    )
}

export default Login 