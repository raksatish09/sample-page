import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import '../styles/navbar.css';

const Navbar = () => {
  const [menuopen, setmenuopen] = useState(false);
  const [showmodel, setshowmodel] = useState(false);
  const [formtype, setformtype] = useState("login");
  const [showpassword, setshowpassword] = useState(false);

  const openmodel = (type) => {
    setformtype(type);
    setshowmodel(true);
  };

  return (
    <>
      <nav className="navbar">
        <div className="logo">Oraicar</div>
        <button className="menu-btn" onClick={() => setmenuopen(!menuopen)}>☰</button>
        <div className={`menu-container ${menuopen ? 'active' : ''}`}>
          <ul className="nav-links">
            <li><a href="#">How Oraicar Works</a></li>
            <li><a href="#">About App</a></li>
            <li><a href="#">Gift Cards</a></li>
            <li><a href="#">Contact Support</a></li>
            <li><a href="#">Legal</a></li>
            <li><a href="#">Insurance&Protection</a></li>
            <li><a href="#">Host Tools</a></li>
            <li><a href="#">Calculator</a></li>
          </ul>
          <div className="nav-buttons">
            <button className="login-btn" onClick={() => openmodel("login")}>Signup/Login</button>
            <button className="host-btn" onClick={() => openmodel("signup")}>Become a Host</button>
          </div>
        </div>
      </nav>

     
      {showmodel && (
  <div className="modal-overlay" onClick={() => setshowmodel(false)}>
    <div className="display" onClick={(e) => e.stopPropagation()}>
      <div className="modal-header">
        <h2 className="welcome-heading">Welcome</h2>
        <button className="close-btn" onClick={() => setshowmodel(false)}>×</button>
      </div>
      
     
      {formtype === "login" ? (
        <>
          <div className='input-group'>
            <label className="input-label" htmlFor="email">Email or UserName</label>
            <input id="email" type="email" placeholder=" Enter Email Or UserName" className="input-field" />
            <hr id="h1"/>
            
            <div className="password-container">
              <label className="input-label" htmlFor="password">Password</label>
              <input 
                id="password"
                type={showpassword ? "text" : "password"} 
                placeholder="Password" 
                className="input-field"
              />
              <hr id="h1"/>
              
              <FontAwesomeIcon 
                icon={showpassword ? faEyeSlash : faEye} 
                className="eye-icon"
                onClick={() => setshowpassword(!showpassword)}
              />
            </div>

            <div className="checkbox-group">
              <label><input type="checkbox" /> I agree to the terms and privacy policy</label>
              <label><input type="checkbox" /> Send me promotions via email</label>
            </div>

            <button className="continue-btn">Login</button>
            <p id="p1">Don't have an account? <a id="l1" href="#" onClick={() => setformtype("signup")}>Sign Up Here</a></p>
          </div>
        </>
      ) : (
        
        <>
          <div className="input-group">
            <label className="input-label" htmlFor="first-name">First Name</label>
            <input id="first-name" type="text" placeholder="First Name" className="input-field" />
          </div>
          <hr id="h1"/>
          
        
          <div className="input-group">
            <label className="input-label" htmlFor="last-name">Last Name</label>
            <input id="last-name" type="text" placeholder="Last Name" className="input-field" />
          </div>
          <hr id="h1"/>
          
        
          <div className="input-group">
            <label className="input-label" htmlFor="signup-email">Email</label>
            <input id="signup-email" type="email" placeholder="Email" className="input-field" />
          </div>
          <hr id="h1"/>
          
        
          <div className="input-group">
            <label className="input-label" htmlFor="signup-password">Password</label>
            
            <div className="password-container">
              <input 
                id="signup-password"
                type={showpassword ? "text" : "password"} 
                placeholder="Password" 
                className="input-field"
              />
              <hr id="h1"/>
              
              <FontAwesomeIcon 
                icon={showpassword ? faEyeSlash : faEye} 
                className="eye-icon"
                onClick={() => setshowpassword(!showpassword)}
              />
            </div>
          </div>
        
          <div className="checkbox-group">
            <label><input type="checkbox" /> I agree to the terms and privacy policy</label>
            <label><input type="checkbox" /> Send me promotions via email</label>
          </div>
          
          <button className="continue-btn">Sign Up</button>
          <p>Already have an account? <a id="l1" href="#" onClick={() => setformtype("login")}>Login Here</a></p>
        </>
      )}
    </div>
  </div>
)}

    </>
  );
};

export default Navbar;
