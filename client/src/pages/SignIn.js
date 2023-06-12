import React, { useState } from 'react';
import "../styles/login.css";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
const SignIn = () => {
  const [details, setDetails] = useState({
    userid: "",
    password: "",
  });
  // const [error, setError] = useState("");

  const navigate = useNavigate();
  function onSubmit(e) {
    e.preventDefault(e);
    const { userid, password } = details;
    let url = "https://tenxmanikanta-syed-bindhu.onrender.com/api/users/signin";
    axios.post(url, {
      email: userid,
      password: password,
    })
      .then((res) => {
        console.log(res);
        localStorage.setItem("email", res.data.email);
        localStorage.setItem("name", res.data.name);
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("userID", res.data.userId);
        navigate("/home");
      })
      .catch((err) => console.log(err));
    // setError("Invalid email or password. Please try again.");
  }


  return (
    <div style={{ backgroundColor: "#e1f9f4" }}>
      <div className='formdiv'>
        <form
          onSubmit={(e) => onSubmit(e)}
          className="container formtag"
          style={{ width: "500px", maxWidth: "80%", maxHeight: "70%", background: "#FFFFFF", color: "gray" }}
        >
          <h1 style={{ color: "#4C57B6", font: "Open Sans" }}>Real Estate</h1>
          <img
            className="logo"
            alt="logo"
            style={{ maxHeight: "100px", maxWidth: "100px" }}
            src="https://tse4.mm.bing.net/th?id=OIP.dHd62xgmWq55oIPv43HuzwHaHa&pid=Api&P=0&h=180"
          />
          <h6>Enter your credentials to access</h6>
          {/* {error && error !== "" && (
            <div className="alert alert-danger" role="alert">
              {error}
            </div>
          )} */}
          <div className='input-group mb-3'>
            <input
              style={{ margin: "0 10px", height: "54px" }}
              type="text"
              className="form-control"
              placeholder="User ID"
              aria-label="Email"
              value={details.userid}
              onChange={(e) => setDetails({ ...details, userid: e.target.value })}
              aria-describedby="basic-addon1"
            />
          </div>
          <div className='input-group mb-3'>
            <input
              style={{ margin: "0 10px", height: "54px" }}
              type="password"
              id="myInput"
              value={details.password}
              onChange={(e) =>
                setDetails({ ...details, password: e.target.value })
              }
              className="form-control"
              placeholder="Password"
              aria-label="Password"
              aria-describedby="basic-addon1"
            />
          </div>
          <button
            type="submit"
            onClick={(e) => {
              onSubmit(e);
            }}
            className="btn custom-btn"
            id="form-submit"
          >
            Login
          </button>
          <span className="linkform">
            <span style={{ color: "gray" }}>Don't have an account? </span><Link to="/signup">Sign Up</Link>
          </span>
        </form>
      </div>
    </div>
  )
}

export default SignIn