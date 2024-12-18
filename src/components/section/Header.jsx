import React from "react";

import LogoNew from "../header/LogoNew";
import Menu from "../header/Menu";
import Sns from "../header/Sns";


const Header = () => {


    return (
        <header id="header" role="banner">
            <LogoNew />
            <Menu />
            <Sns />

        </header>
    )
}

export default Header
