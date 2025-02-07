import React from "react";
import "../styles/LandingPage.css";
import { MDBBtn } from 'mdb-react-ui-kit';
function LandingPage() {
  return (
    <div className="downPage">
      <header className="lp_header">
        <div className="header_logo"></div>
        <h3>IEEEBlogs</h3>
      </header>
    <nav className="lp_navbar">
        {/* <img src={logo} alt="logo" className="logo" /> */}
        <div className="lp_buttons">
          {/* <button className="login-button">Login</button> */}
          <MDBBtn className='lp_login-button'><a className='lp_a' href='/login'>Login</a></MDBBtn>
          <MDBBtn className='lp_login-button'><a className='lp_a' href='/register'>Register</a></MDBBtn>
          {/* <button className="register-button">Register</button> */}
        </div>
      </nav>
      <div className="uppage">
        <h1>Publish your Blogs!</h1>
        <p>Join the world of bloging right here, today!</p>
        <p>Create a unique and beautiful blog. It's easy and free.</p>
        <h3>Join us now!</h3>
      </div>
      <footer className="lp_footer">
        &copy; 2023 Career Development Website
        <div className="links">
          <a href="https://www.youtube.com/watch?v=oHg5SJYRHA0">Youtube</a>
          <a href="https://github.com/IEEE-BlogApp/frontend">Github</a>
        </div>
      </footer>
    </div>
  );
}

export default LandingPage;
