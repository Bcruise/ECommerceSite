import React from 'react'

const Register = () => {
  return (
    <div className="RContainer">
      <div className="RWrapper">
        <h1 className="RTitle">CREATE AN ACCOUNT</h1>
        <form className="RForm">
          <input className="RInput" placeholder="name"></input>
          <input className="RInput" placeholder="last name"></input>
          <input className="RInput" placeholder="username"></input>
          <input className="RInput" placeholder="email"></input>
          <input className="RInput" placeholder="password"></input>
          <input className="RInput" placeholder="confirm password"></input>
          <span className="RAgreement">By creating an account. I consent to the processing of my personal data in accordance with the <b>PRIVACY POLICY</b></span>
          <button className="RButton">CREATE</button>
        </form>
      </div>
    </div>
  )
}

export default Register