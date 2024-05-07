import React from "react";
import {  HStack, Image, VStack } from "@chakra-ui/react";
import logo from "../icons_assets/Logo.png";


const Footer = () => {
    return (
        <HStack>
            <footer>
                <VStack>
                    <Image src={logo}></Image>
                </VStack>
                <ul>
                    <li>
                        Doormat Navigation
                    </li>
                    <li>
                        <a href="#home">HOME</a>
                    </li>
                    <li>
                        <a href="#about">ABOUT</a>
                    </li>
                    <li>
                        <a to="/menu" href="#menu">MENU</a>
                    </li>
                    <li>
                        <a to="/reservations" href="#reservations">RESERVATIONS</a>
                    </li>
                    <li>
                        <a to="/order_online" href="#order_online">ORDER ONLINE</a>
                    </li>
                    <li>
                        <a to="/login" href="#login">LOGIN</a>
                    </li>
                </ul>
                <VStack>
                    <ul>
                        <li>Contacts</li>
                        <li>
                            <a href="#address">Address</a>
                        </li>
                        <li>
                            <a href="#phone">Phone Number</a>
                        </li>
                        <li>
                            <a href="#email">Email</a>
                        </li>
                    </ul>
                </VStack>

                <VStack>
                    <ul>
                        <li>Social Media Link</li>
                        <li>
                            <a href="#address">Address</a>
                        </li>
                        <li>
                            <a href="#phone">Phone Number</a>
                        </li>
                        <li>
                            <a href="#email">Email</a>
                        </li>
                    </ul>
                </VStack>
            </footer>
        </HStack>

    )
}

export default Footer;