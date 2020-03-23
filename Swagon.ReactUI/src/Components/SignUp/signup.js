import React from "react";
import './signup.css';

const SignUp = () => {
    return(
    <div className="SignupContainer">
        <h2>Signup</h2>
        <hr></hr>
        <form  class="form">
            <div className="form-group rounded field">
                <input type="email" className="form-control" id="email" placeholder="andy@gmail.com" className="email"></input>
                <label htmlFor="email">Email</label>
            </div>

            <div className="form-group rounded field">
                <input type="password" className="form-control" id="pwd" placeholder="🙊" className="pswd"></input>
                <label htmlFor="pwd">Password</label>
            </div>

            <div className="form-group rounded field">
                <input type="password" className="form-control" id="cpwd" placeholder="testing your memory..." className="cpswd"></input>
                <label htmlFor="cpwd">Conform Password</label>
            </div>

            <div className="sbutton">
                <button type="submit" className="btn btn-primary">Submit</button>
                <div><h5 className="col">have a account? <a href ="#">Login</a>  </h5></div>
            </div>
        </form>
    </div>
    );
}
export default SignUp;
