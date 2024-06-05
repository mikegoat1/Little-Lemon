import React, { useState } from "react";
import { Image, Box, IconButton, Flex } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
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
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleMenuToggle = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <Box maxWidth="auto" margin="auto">
            <Flex
                justifyContent="space-between"
                px={{ base: 4, md: 8, lg: 32 }}
                py={8}
                alignItems="center"
                fontFamily="Karla"
                fontSize={20}
                as="nav"
                aria-label="Main navigation"
            >
                <Link to="/">
                    <Image src={headerLogo} alt="Little Lemon logo" width={{ base: "200px", sm: "200px", md: "200px", lg: "200px", xl: "260px" }} />
                </Link>
                <IconButton
                    display={{ base: "block", lg: "none" }}
                    icon={isMenuOpen ? <CloseIcon /> : <HamburgerIcon />}
                    onClick={handleMenuToggle}
                    aria-label="Toggle navigation"
                />
                <Flex
                    as="ul"
                    listStyleType="none"
                    padding={0}
                    margin={0}
                    display={{ base: isMenuOpen ? "flex" : "none", lg: "flex" }}
                    flexDirection={{ base: "column", lg: "row" }}
                    position={{ base: "fixed", lg: "static" }}
                    top={0}
                    left={0}
                    width={{ base: "100%", lg: "auto" }}
                    height={{ base: "100vh", lg: "auto" }}
                    backgroundColor={{ base: "white", lg: "transparent" }}
                    zIndex={10}
                    justifyContent={{ lg: "space-between" }}
                    alignItems="center"
                >
                    {links.map((data, index) => (
                        <Box as="li" key={index} margin={{ base: 4, lg: "0 20px" }}>
                            <Link
                                to={data.url}
                                onClick={handleMenuToggle}
                                style={{ textDecoration: "none", color: "black", fontWeight: "bold" }}
                                aria-label={data.name}
                            >
                                {data.name}
                            </Link>
                        </Box>
                    ))}
                </Flex>
            </Flex>
        </Box>
    );
};

export default Nav;
