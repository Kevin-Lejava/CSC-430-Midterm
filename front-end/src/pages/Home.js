import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div className="jumbotron">
            <h1 className="display-4 jumbo-text">Welcome</h1>
            <p className="lead jumbo-text">Browse through our wide selection of vehicles</p>
            <Link className="btn btn-primary btn-lg" to="/Login" role="button">Come On In!</Link>
            <h2>Or</h2>
            <Link className="btn btn-primary btn-lg" to="/Register" role="button">Get Started</Link>
        </div>
    );
}

export default Home;