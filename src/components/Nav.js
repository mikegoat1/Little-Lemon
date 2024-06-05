import React from "react";
import { Image, Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import headerLogo from "../icons_assets/LogoHeader.png";

const links = [
    { name: "Home", url: "/" },
    { name: "About", url: "/about" },
    { name: "Menu", url: "/menu" },
    { name: "Reservations", url: "/reservations" },
    { name: "Order Online", url: "/order_online" },
    { name: "Login", url: "/login" }
];

const Nav = () => {
    return (
        <Box maxWidth="1280px" margin="0 20% 0 2%">
            <Box
                display="flex"
                justifyContent="space-between"
                px={32}
                py={8}
                alignItems="center"
                fontFamily="Karla"
                fontSize={20}
                as="nav"
                aria-label="Main navigation"
            >
                <Link to="/">
                    <Image src={headerLogo} alt="Little Lemon logo" width={260} />
                </Link>
                <ul style={{ listStyleType: 'none', padding: 0, margin: 0, display: 'flex' }}>
                    {links.map((data, index) => (
                        <li key={index} style={{ marginRight: "20px" }}>
                            <Link
                                to={data.url}
                                style={{ textDecoration: "none", color: "black", fontWeight: "bold" }}
                                aria-label={data.name}
                            >
                                {data.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </Box>
        </Box>
    );
};

export default Nav;
