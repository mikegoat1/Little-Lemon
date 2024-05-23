import React from "react";
import { HStack, Image, VStack } from "@chakra-ui/react";
import logo from "../icons_assets/Logo.png";


const Footer = () => {
    return (
        <HStack
            display={"flex"}
            w={"100%"}
            backgroundColor="#495E57"

        >
            <footer
                style={{ display: "flex", justifyContent: "space-evenly", width: "100%", marginTop: "50px", marginBottom: "50px" }}

            >
                <VStack>
                    <Image src={logo}></Image>
                </VStack>
                <ul
                    style={{ listStyle: "none" }}
                >
                    <li
                        style={{ color: "#F4CE14", fontFamily: "karla", fontSize: "20px", fontWeight: "bold" }}
                    >
                        Doormat Navigation
                    </li>
                    <li
                        style={{ fontFamily: "karla", fontSize: "20px", color: "white" }}
                    >
                        <a href="#home">Home</a>
                    </li>
                    <li
                        style={{ fontFamily: "karla", fontSize: "20px", color: "white" }}

                    >
                        <a href="#about">About</a>
                    </li>
                    <li
                        style={{ fontFamily: "karla", fontSize: "20px", color: "white" }}

                    >
                        <a to="/menu" href="#menu">Menu</a>
                    </li>
                    <li
                        style={{ fontFamily: "karla", fontSize: "20px", color: "white" }}

                    >
                        <a to="/reservations" href="#reservations">Reservations</a>
                    </li>
                    <li
                        style={{ fontFamily: "karla", fontSize: "20px", color: "white" }}

                    >
                        <a to="/order_online" href="#order_online">Order Online</a>
                    </li>
                    <li
                        style={{ fontFamily: "karla", fontSize: "20px", color: "white" }}

                    >
                        <a to="/login" href="#login">Login</a>
                    </li>
                </ul>
                <VStack>
                    <ul
                        style={{ listStyle: "none" }}

                    >
                        <li
                            style={{ color: "#F4CE14", fontFamily: "karla", fontSize: "20px", fontWeight: "bold" }}

                        >Contacts</li>
                        <li
                            style={{ fontFamily: "karla", fontSize: "20px", color: "white" }}

                        >
                            <a href="#address">Address</a>
                        </li>
                        <li
                            style={{ fontFamily: "karla", fontSize: "20px", color: "white" }}

                        >
                            <a href="#phone">Phone Number</a>
                        </li>
                        <li
                            style={{ fontFamily: "karla", fontSize: "20px", color: "white" }}

                        >
                            <a href="#email">Email</a>
                        </li>
                    </ul>
                </VStack>

                <VStack>
                    <ul
                        style={{ listStyle: "none" }}

                    >
                        <li
                            style={{ color: "#F4CE14", fontFamily: "karla", fontSize: "20px", fontWeight: "bold" }}

                        >Social Media Link</li>
                        <li
                            style={{ fontFamily: "karla", fontSize: "20px", color: "white" }}

                        >
                            <a href="#address">Address</a>
                        </li>
                        <li
                            style={{ fontFamily: "karla", fontSize: "20px", color: "white" }}

                        >
                            <a href="#phone">Phone Number</a>
                        </li>
                        <li
                            style={{ fontFamily: "karla", fontSize: "20px", color: "white" }}

                        >
                            <a href="#email">Email</a>
                        </li>
                    </ul>
                </VStack>
            </footer>
        </HStack>

    )
}

export default Footer;