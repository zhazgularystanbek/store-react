import React from "react";
import logo from "../../assets/images/Logo.png";
import searchIcon from "../../assets/images/searchIcon.png";
import backetIcon from "../../assets/images/backet.png";

const Header = () => {
  return (
    <header id="header">
      <div className="container">
        <div className="header">
          <img src={logo} alt="logo" className="logo" />
          <div className="nav-block">
            <div className="search-block">
              <input type="text" placeholder="Search here" />
              <img src={searchIcon} alt="icons" />
            </div>
            <div className="backet">
              <div className="backet-block">
                <img src={backetIcon} alt="" />
                <div className="b-number">
                  <span>1</span>
                </div>
              </div>
              <p>Корзина</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
