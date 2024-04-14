'use client';
import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import { AiFillHome } from "react-icons/ai";
import { CgMenu } from "react-icons/cg";
import { MdCancel } from "react-icons/md";
import { Button } from "./Button";
import "./navbar.css";
import Link from "next/link";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };
  useEffect(() => {
    showButton();
    window.addEventListener("resize", showButton);
  }, []);
  

  // new code for a navbar

  // above is new code for a navbar
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link href="/" className="navbar-logo" onClick={closeMobileMenu}>
          <img src="/images/frc-logo-nobg.png" alt="FRC Logo" className="logo-image" />

          </Link>
          <div className="menu-icon" onClick={handleClick}>
            {click ? <MdCancel color="#fff" /> : <CgMenu color="#fff" />}
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link href="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                href="/about"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                About us
              </Link>
            </li>
            <li className="nav-item">
              <Link
                href="/products"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Contact Us
              </Link>
            </li>
            <li className="nav-item">
              <Link
                href="sign-up"
                className="nav-links-mobile"
                onClick={closeMobileMenu}
              >
                Sign Up
              </Link>
            </li>
          </ul>

          {  button && <Button                 href="sign-up"
 buttonStyle="btn--outline"> Sign-up </Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
