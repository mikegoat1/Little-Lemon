import React from "react";
import { HStack, Image, VStack, Box, Link, Text } from "@chakra-ui/react";
import logo from "../icons_assets/Logo.png";

const Footer = () => {
    return (
        <Box as="footer" w="100%" backgroundColor="#495E57" py={10}
        width="auto"

        >
            <HStack
                display="flex"
                justifyContent="space-evenly"
                alignItems="flex-start"
            >
                <VStack spacing={4} alignItems="flex-start">
                    <Image src={logo} alt="Little Lemon logo" />
                </VStack>
                <VStack spacing={4} alignItems="flex-start">
                    <Text as="h2" color="#F4CE14" fontFamily="Karla" fontSize="20px" fontWeight="bold">
                        Doormat Navigation
                    </Text>
                    <ul style={{ listStyle: "none", padding: 0 }}>
                        <li style={{ fontFamily: "Karla", fontSize: "20px", color: "white" }}>
                            <Link href="#home" color="white" _hover={{ textDecoration: 'underline' }}>Home</Link>
                        </li>
                        <li style={{ fontFamily: "Karla", fontSize: "20px", color: "white" }}>
                            <Link href="#about" color="white" _hover={{ textDecoration: 'underline' }}>About</Link>
                        </li>
                        <li style={{ fontFamily: "Karla", fontSize: "20px", color: "white" }}>
                            <Link href="#menu" color="white" _hover={{ textDecoration: 'underline' }}>Menu</Link>
                        </li>
                        <li style={{ fontFamily: "Karla", fontSize: "20px", color: "white" }}>
                            <Link href="#reservations" color="white" _hover={{ textDecoration: 'underline' }}>Reservations</Link>
                        </li>
                        <li style={{ fontFamily: "Karla", fontSize: "20px", color: "white" }}>
                            <Link href="#order_online" color="white" _hover={{ textDecoration: 'underline' }}>Order Online</Link>
                        </li>
                        <li style={{ fontFamily: "Karla", fontSize: "20px", color: "white" }}>
                            <Link href="#login" color="white" _hover={{ textDecoration: 'underline' }}>Login</Link>
                        </li>
                    </ul>
                </VStack>
                <VStack spacing={4} alignItems="flex-start">
                    <Text as="h2" color="#F4CE14" fontFamily="Karla" fontSize="20px" fontWeight="bold">
                        Contacts
                    </Text>
                    <ul style={{ listStyle: "none", padding: 0 }}>
                        <li style={{ fontFamily: "Karla", fontSize: "20px", color: "white" }}>
                            <Link href="#address" color="white" _hover={{ textDecoration: 'underline' }}>Address</Link>
                        </li>
                        <li style={{ fontFamily: "Karla", fontSize: "20px", color: "white" }}>
                            <Link href="#phone" color="white" _hover={{ textDecoration: 'underline' }}>Phone Number</Link>
                        </li>
                        <li style={{ fontFamily: "Karla", fontSize: "20px", color: "white" }}>
                            <Link href="#email" color="white" _hover={{ textDecoration: 'underline' }}>Email</Link>
                        </li>
                    </ul>
                </VStack>
                <VStack spacing={4} alignItems="flex-start">
                    <Text as="h2" color="#F4CE14" fontFamily="Karla" fontSize="20px" fontWeight="bold">
                        Social Media Links
                    </Text>
                    <ul style={{ listStyle: "none", padding: 0 }}>
                        <li style={{ fontFamily: "Karla", fontSize: "20px", color: "white" }}>
                            <Link href="#facebook" color="white" _hover={{ textDecoration: 'underline' }}>Facebook</Link>
                        </li>
                        <li style={{ fontFamily: "Karla", fontSize: "20px", color: "white" }}>
                            <Link href="#twitter" color="white" _hover={{ textDecoration: 'underline' }}>Twitter</Link>
                        </li>
                        <li style={{ fontFamily: "Karla", fontSize: "20px", color: "white" }}>
                            <Link href="#instagram" color="white" _hover={{ textDecoration: 'underline' }}>Instagram</Link>
                        </li>
                    </ul>
                </VStack>
            </HStack>
        </Box>
    );
};

export default Footer;
