import React from "react";
import { Image, Box } from "@chakra-ui/react";
import headerLogo from "../icons_assets/Logo.svg"

const links = [{
    name: "Home",
    url: "#home"
},
{
    name: "About",
    url: "#about"
},
{
    name: "Menu",
    url: "#menu"
},
{
    name: "Reservations",
    url: "#reservations"
},
{
    name: "Order Online",
    url: "#order_onine"
},
{
    name: "Login",
    url: "#login"
}
]

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
                        {links.map((data, index) => {
                            return (
                                <li style={{ marginRight: "10px" }}>
                                    <a href={data.url} style={{ textDecoration: "none", color: "black", fontWeight:"bold" }}>{data.name}</a>
                                </li>
                            )
                        })}
                    </ul>

                </Box>
            </Box>
        </>
    )
}

export default Nav;