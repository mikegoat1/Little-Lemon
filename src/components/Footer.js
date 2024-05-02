import React from "react";
import { Heading, HStack, Image, Text, VStack, Box } from "@chakra-ui/react";


function Footer() {
    return (
        <HStack>
            <footer>
                <VStack>
                    <Image></Image>
                </VStack>
                <ul>
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

                </VStack>

                <VStack>

                </VStack>

            </footer>
        </HStack>

    )
}

export default Footer;