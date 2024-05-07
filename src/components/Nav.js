import React from "react";
import { Image, Box } from "@chakra-ui/react";
import headerLogo from "../icons_assets/Logo.svg"

const Nav = () => {
    return (
        <>
            <Box maxWidth="1280px" margin="0 auto">

                <Box
                    display="flex"
                    justifyContent="space-between"
                    px={32}
                    py={16}
                    alignItems="center"
                    fontFamily="Karla"
                    fontSize={20}
                >
                    <nav>
                        <Image src={headerLogo} alt="Little Lemon logo"></Image>
                    </nav>
                    <ul style={{ listStyleType: 'none', padding: 0, margin: 0, display: 'flex' }}>
                        <li style={{ marginRight: "10px" }}>
                            {/* This will possibly be on the same page */}
                            <a href="#home" style={{ textDecoration: "none", color:"black" }}>HOME</a>
                        </li>
                        <li style={{ marginRight: "10px" }}>
                            {/* This will possibly be on the same page */}
                            <a href="#about" style={{ textDecoration: "none", color:"black" }}>ABOUT</a>
                        </li>
                        <li style={{ marginRight: "10px" }}>
                            {/* This will be on a new generated page */}
                            <a to="/menu" href="#menu" style={{ textDecoration: "none", color:"black" }}>MENU</a>
                        </li>
                        <li style={{ marginRight: "10px" }}>
                            {/* This will be on a new generated page */}
                            <a to="/reservations" href="#reservations" style={{ textDecoration: "none", color:"black" }}>RESERVATIONS</a>
                        </li>
                        <li style={{ marginRight: "10px" }}>
                            {/* This will be on a new gnerated page */}
                            <a to="/order_online" href="#order_online" style={{ textDecoration: "none", color:"black" }}>ORDER ONLINE</a>
                        </li>
                        <li style={{ marginRight: "10px" }}>
                            {/* This will be on a new generated page */}
                            <a to="/login" href="#login" style={{ textDecoration: "none", color:"black" }}>LOGIN</a>
                        </li>
                    </ul>

                </Box>
            </Box>
        </>
    )
}

export default Nav;