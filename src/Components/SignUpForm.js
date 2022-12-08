import "./SignUp.css";
import React, { useContext } from "react";
import { FlowerContext } from "./FlowerContext";

import { Link } from "react-router-dom";

// function SignUp({ onLogin }) {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [passwordConfirmation, setPasswordConfirmation] = useState("");
//   const [imageUrl, setImageUrl] = useState("");
//   const [bio, setBio] = useState("");
//   const [errors, setErrors] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);

function SignUp() {
  const {
    signupData,
    signupLoading,
    signupError,
    handleSignupChange,
    handleSubmitSignupDetails,
  } = useContext(FlowerContext);

  return (
    <div className="signup-div">
      <form className="signup-form" onSubmit={handleSubmitSignupDetails}>
        <h1><span>T</span>he Orchid</h1> 
        <div className="css">
          <label> Username </label> <br />
        <input
          type="text"
          name="username"
          autoComplete="off"
          className="signup-input"
          value={signupData.username}
          onChange={handleSignupChange}
        />
        {signupError.length > 0 ? (
          <p style={{ color: "red", fontSize: "15px" }}>
            {signupError.find((error) => error.includes("Username"))}!!!
          </p>
        ) : null}
        <br />
        <label htmlFor="password"> Password </label> <br />
        <input
          type="password"
          name="password"
          autoComplete="current-password"
          className="signup-input"
          value={signupData.password}
          onChange={handleSignupChange}
        />
        {signupError.length > 0 ? (
          <p style={{ color: "red", fontSize: "15px" }}>
            {signupError.find((error) => error.includes("Password"))}!!!
          </p>
        ) : null}
        <br />
        <label type="password"> Password Confirmation </label> <br />
        <input
          type="password"
          name="password_confirmation"
          autoComplete="current-password"
          className="signup-input"
          value={signupData.password_confirmation}
          onChange={handleSignupChange}
        />
        {signupError.length > 0 ? (
          <p style={{ color: "red", fontSize: "15px" }}>
            {signupError.find((error) => error.includes("confirmation"))}!!!
          </p>
        ) : null}
        <br />
        <label type="imageUrl"> Profile Image </label> <br />
        <input
          type="text"
          id="imageUrl"
          className="signup-input"
          name="image_url"
          value={signupData.image_url}
          onChange={handleSignupChange}
        /> <br/>
        <label>Bio</label>
        <textarea
          rows="3"
          autoComplete="off"
          className="signup-input"
          type="text"
          onChange={handleSignupChange}
        />
        <br />
        <button type="submit" id="signup-btn">
          {signupLoading ? "Loading..." : "Sign Up"}
        </button>
        <Link id="link" to={"/login"}>
          <span id="login-section"> Have an account already?  Login </span>
        </Link></div>
        
      </form>
    </div>
  );
}

export default SignUp;
