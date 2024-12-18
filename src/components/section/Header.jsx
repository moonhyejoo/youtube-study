import React from "react";

import Logo_new from "../header/Logo_new";
import Menu from "../header/Menu";
import Sns from "../header/Sns";


const Header = () => {


    return (
        <header id="header" role="banner">
            <Logo_new />
            <Menu />
            <Sns />

        </header>
    )
}

export default Header
