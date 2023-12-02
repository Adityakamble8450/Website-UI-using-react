"use client";
import React, { useState } from "react";
import { RiCloseLine, RiMenu3Line } from "react-icons/ri";
import "./Navbar.css";

const Navbar = () => {
  const [toggel, setToggel] = useState(false);

  return (
    <div className="GPT4__navbar">
      <div className="GTP4__navbar-links">
        <div className="GTP4__navbar-links-logo">
          <img src="/assets/logo.svg" alt="logo" />
        </div>
        <div className="GTP4__navbar-links-container">
          <p>
            <a href="home">Home</a>
          </p>
          <p>
            <a href="#GTP4">What is GPT4</a>
          </p>
          <p>
            <a href="#openAi">Open Ai</a>
          </p>
          <p>
            <a href="#CaseStudy">Case Study</a>
          </p>
          <p>
            <a href="#library">Library</a>
          </p>
        </div>
      </div>
      <div className="GPT4__navbar-signs">
        <p>Sign in</p>
        <button>Sign up</button>
      </div>
      <div className="GPT4__navbar-menu">
        {toggel ? (
          <RiCloseLine
            color="#fff"
            size={27}
            onClick={() => setToggel(false)}
          />
        ) : (
          <RiMenu3Line color="#fff" size={27} onClick={() => setToggel(true)} />
        )}
        {toggel && (
          <div className="GPT4__Navbar-menu-cantaiaer scale-up-center  ">
            <div className="GPT4__navbar-menu-container-links">
              <p>
                <a href="home">Home</a>
              </p>
              <p>
                <a href="#GTP4">What is GPT4</a>
              </p>
              <p>
                <a href="#openAi">Open Ai</a>
              </p>
              <p>
                <a href="#CaseStudy">Case Study</a>
              </p>
              <p>
                <a href="#library">Library</a>
              </p>
            </div>
            <div className="GPT4__navbar-menu-container-sings">
              <p>Sign in</p>
              <button type="button">Sign up</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
