import React from "react";

function Nav() {
    return (
        <nav>
            <img src="../icons_assets/Logo .svg" alt="Little Lemon logo"></img>
            <ul>
                <li>
                    {/* This will possibly be on the same page */}
                    <a href="#home">HOME</a>
                </li>
                <li>
                    {/* This will possibly be on the same page */}
                    <a href="#about">ABOUT</a>
                </li>
                <li>
                    {/* This will be on a new generated page */}
                    <a to="/menu" href="#menu">MENU</a>
                </li>
                <li>
                    {/* This will be on a new generated page */}
                    <a to="/reservations" href="#reservations">RESERVATIONS</a>
                </li>
                <li>
                    {/* This will be on a new gnerated page */}
                    <a to="/order_online" href="#order_online">ORDER ONLINE</a>
                </li>
                <li>
                    {/* This will be on a new generated page */}
                    <a to="/login" href="#login">LOGIN</a>
                </li>
            </ul>
        </nav>
    )
}

export default Nav;