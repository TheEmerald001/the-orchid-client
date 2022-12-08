import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { FlowerContext } from "./FlowerContext";
import { useContext } from "react";


export default function Header({ loggedUser }) {
  const { handleLogoutClick } = useContext(FlowerContext);

  return (
    <header>
      <div className="header-div"> <Link to={"/"}>
        <h3 id="home"> Home</h3>
      </Link>
      <Link to={"/flowers"}>
      <h3 id="collection"> Our Collection</h3>
      </Link>
      <Link to={"/flowers/:id"}>
      </Link>
      {loggedUser ? (
        <button className="header-login" onClick={handleLogoutClick}>
          Log out
        </button>
      ) : (
        <Link to={"/login"}>
          <button className="header-login">Login</button>
        </Link>
      )}
      <Link to={"/signup"}>
        <button className="header-sign">Sign Up</button>
      </Link></div>
    </header>
  );
}