import React from 'react';


const Login = () => {
  return (
    <div className="LContainer">
      <div className="LWrapper">
        <h1 className="RTitle">SIGN IN</h1>
        <form className="LForm">
          <input className="LInput" placeholder="username"></input>
          <input className="LInput" placeholder="password"></input>
          <span className="RAgreement">By creating an account. I consent to the processing of my personal data in accordance with the <b>PRIVACY POLICY</b></span>
          <button className="RButton">LOGIN</button>
          <a className="LLink">FORGOTTEN PASSWORD</a>
          <a className="LLink">CREATE A NEW ACCOUNT</a>
        </form>
      </div>
    </div>
  )
}

export default Login