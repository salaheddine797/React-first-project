import React from "react";
import "./Header.css";
import RightHeader from "./RightHeader";
import LeftHeader from "./LeftHeader";

function Header(){


    return(
        <div className="header">
            <div>
                <RightHeader />
            </div>
            <div>
                <LeftHeader />
            </div>
        </div>
    )
}

export default Header;




