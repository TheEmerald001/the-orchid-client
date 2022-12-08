import React from "react";
import "./ViewPage.css";
import { Link } from "react-router-dom";
import Footer from "./Footer";

export default function ViewPage() {
  return (
    <div className="about-orchid">
      <div className="about-info">
        <h1 id="h1">
          <br />
          <span>T</span>heOrchid 
        </h1>
        <img id = "img1" src="https://i.pinimg.com/564x/1b/b3/66/1bb3667a4c418596a91ef4485e2efb60.jpg" alt="flower"/>
        <img id = "img2" src="https://i.pinimg.com/564x/1b/b3/66/1bb3667a4c418596a91ef4485e2efb60.jpg" alt="flower"/>
        <p className="learn">
        Learn about flowers in our online museum and  garden. See the beautiful diversity of flowers and understand how important they are in our ecosystem.
        </p>

        <button className="view-all">
        <Link to={"/flowers"}>
          <span> Explore More </span>
        </Link>
          </button>
      </div>
      <div className="fun_fact">
        <div className="funfact">
        <h1>Fun Facts!</h1>
        <img src="https://i.pinimg.com/236x/6f/1c/3f/6f1c3f16330f860806528ac918397d22.jpg" alt="flower"/>
        <p className="p1">Flowers have been used to treat acne since ancient times. The Chinese believed that when you eat flowers, your skin becomes clear. They also believed that eating carrots would make your hair grow faster (and orange carrots were especially good for this purpose).</p>

        <p className="p2">
        The Egyptians worshiped flowers because they believed them to be gods. They even created an entire religion called “floralism” where people worshipped the sun by adorning themselves with flowers during particular times of day.
        </p>
        <p className="p3">
        In Ancient Rome, women wore crowns made out of real flowers on special occasions like weddings and birthdays because they thought it would bring good fortune to their marriages and children!
        </p>
        </div>
        <Footer />
      </div>
    </div>
    
  );
}