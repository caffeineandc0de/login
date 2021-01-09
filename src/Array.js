import React from "react";
import "./Login.css";

function Login(props) {
  const [userName, setuserName] = React.useState("");

  const handleSubmit = (e, text) => {
    if (text === "userName") {
      setuserName(e.target.value);
    }
  };

  return (
    <div className="app">
      <div className="bg"></div>
      <div className="bg2">
        <form className="bg1">
          <div className="inputs">
            <input
              type="text"
              name=""
              placeholder="username"
              onChange={handleSubmit("userName")}
            />
            <input
              type="text"
              name=""
              placeholder="phone number"
              //   onChange={handleSubmit("phoneNumber")}
            />
            <input type="text" name="" placeholder="email" />
            <input type="text" name="" placeholder="adhar number" />
            <div style={{ display: "flex", flexDirection: "row" }}>
              <input type="radio" value="male" name="gender" />
              Male
              <input type="radio" value="male" name="gender" />
              Female
              <input type="radio" value="male" name="gender" />
              Others
            </div>
            <input type="text" name="" placeholder="date of birth" />

            <p className="light">
              <a href="#">Forgot password?</a>
            </p>
            <button style={{ width: "120px", marginTop: "-30px" }}>
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
