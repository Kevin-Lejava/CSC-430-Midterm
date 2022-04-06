import React from 'react';

function Checkout() {
    return (
        <div>
            <form className="container bd-highlight mb-3">
                <div className="form-group">
                    <label htmlFor="card-number">Card Number: </label>
                    <input className="form-control" id="card-number" />
                    <small id="card-number" className="form-text text-muted">XXXX-XXXX-XXXX-XXXX</small>
                </div>
                <div className="form-group">
                    <label htmlFor="expiration-date">Expiration-Date</label>
                    <input className="form-control" id="expiration-date" />
                </div>
                <div className="form-group">
                    <label htmlFor="CVV">CVV</label>
                    <input className="form-control" id="CVV" />
                </div>

                <button className="btn btn-primary">Checkout</button>
            </form>
        </div>
    );
}

export default Checkout;