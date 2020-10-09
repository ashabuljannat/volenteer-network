import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import logo from '../../logos/Group 1329.png'

const Header = () => {

  const [loggedInUser ,setLoggedInUser] = useContext(UserContext)


    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="/">
            <img src={logo} width="180" height="50" alt="" loading="lazy"/></a>
           
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <a className="nav-link active" href="/">Home <span className="sr-only">(current)</span></a>
                <a className="nav-link" >Features</a>
                <a className="nav-link" >Pricing</a>
                <h6>Name : {loggedInUser.name}</h6>
              </div>
             
              <Link to="/registration"><button className="btn btn-outline-info ml-5 my-sm-0" >Registration</button></Link>
              
              <button className="btn btn-outline-dark ml-2 my-sm-0" >Admin</button>
            </div>
            <img src={loggedInUser.photoURL} alt="" height="45px" width="45px"/>
          </nav>
        </div>
    );
};

export default Header;