import React, { useState } from 'react';
import axios from 'axios'
import { Navigate, Link } from 'react-router-dom';

function Register() {
    const [user_email, setEmail] = useState("")
    const [username, setUsername] = useState("")
    const [user_password, setPassword] = useState("")
    const [redirect, setRedirect] = useState(false)

    const handleEmail = (event) => {
        setEmail(event.target.value)
    }

    const handleUsername = (event) => {
        setUsername(event.target.value)
    }

    const handlePassword = (event) => {
        setPassword(event.target.value)
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        try {
            const body = { user_email, username, user_password }
            const response = await axios({
                method: 'post',
                url: `http://localhost:5000/auth/register`,
                data: body
            })
            if (response.status === 200)
                setRedirect(true);

        } catch (err) {
            console.error(err.message);
        }
    }

    if (redirect)
        return (<Navigate to="/Login" />)

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
                                <li className="nav-item">
                                    <Link className="btn btn-primary btn-lg" to="/Login" role="button">Login</Link>
                                </li>
                            </ul>
                        </div>
                    </nav>

                    <label htmlFor="email">  </label>
                    <input type="text" placeholder="Email" name="email" onChange={handleEmail} />
                </div>
                <div>
                    <label htmlFor="text">  </label>
                    <input type="text" placeholder="Username" name="username" onChange={handleUsername} />
                </div>
                <div>
                    <label htmlFor="password"></label>
                    <input type="password" placeholder="Password" name="password" onChange={handlePassword} />
                </div>
                <button className=" btn btn-primary">Sign Up</button>
            </form>
        </div>
    )
}

export default Register;