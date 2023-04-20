import React from "react";
import "./navbar.css";
import NavLogo from "./NavLogo";
import ListNav from "./ListNav";
import LoginNav from "./LoginNav";




function NavBar() {




  
  return (
    <nav className="navBar">
      <div className="logoEl">
        <NavLogo />
      </div>
      <div className="list_login">
        <div className="list">
          <ListNav />
        </div>
        <div className="login">
          <LoginNav />
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
