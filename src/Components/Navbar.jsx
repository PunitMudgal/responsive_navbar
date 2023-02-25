import "./navbar.css";
import React, { useState } from "react";
import { HiOutlinePlus, HiOutlineX } from "react-icons/hi";

export default function Navbar() {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="vite__navbar">
      <div className="vite__navbar-links">
        <div className="vite__navbar-links_logo">
          <span>Navbar</span>
        </div>
        <div className="vite__navbar-links_container">
          <p>
            <a href="#home">Home</a>
          </p>
          <p>
            <a href="#home">blog</a>
          </p>
          <p>
            <a href="#home">contact us</a>
          </p>
          <p>
            <a href="#home">something else</a>
          </p>
          <p>
            <a href="#home">about</a>
          </p>
        </div>
      </div>
      <div className="vite__navbar-login">
        <p>sign in</p>
        <button>Log in</button>
      </div>

{/* for mobile screen  */}
      <div className="vite__navbar-menu">
        {toggle ? (
          <HiOutlineX
            className="rotate-in-2-cw"
            size={30}
            onClick={() => setToggle(false)}
          />
        ) : (
          <HiOutlinePlus
            className="rotate-in-2-ccw"
            size={30}
            onClick={() => setToggle(true)}
          />
        )}

        {toggle && (
          <div className="vite__navbar-menu_container">
            <div className="vite__navbar-menu_container-links">
              <p>
                <a href="#home">Home</a>
              </p>
              <p>
                <a href="#home">blog</a>
              </p>
              <p>
                <a href="#home">contact us</a>
              </p>
              <p>
                <a href="#home">something else</a>
              </p>
              <p>
                <a href="#home">about</a>
              </p>
            </div>
            <div className="vite__navbar-menu_container-login">
              <p>sign in</p>
              <button>Log in</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
