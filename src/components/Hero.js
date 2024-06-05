import React from "react";
import { Box, Image, Button, Text } from "@chakra-ui/react";
import heroImage from "../icons_assets/restauranfood.jpg";

const Hero = () => {
    return (
        <>
            <Box
                w="full"
                backgroundColor="#495E57"
                display="flex"
                flexDirection={{ base: "column", md: "row" }}
                justifyContent="space-between"
                p={{ base: 4, md: 20 }}
                alignItems="center"
            >
                <Box
                    pt={6}
                    pr={0}
                    pl={{ base: 4, md: 20 }}
                    zIndex={1}
                    textAlign={{ base: "center", md: "left" }}
                    flex="1"
                >
                    <Box
                        fontFamily="Markazi Text"
                        fontSize={{ base: 40, md: 55 }}
                        color="#F4CE14"
                        mb={4}
                    >
                        <h1>Little Lemon</h1>
                    </Box>
                    <Box
                        fontFamily="Markazi Text"
                        fontSize={{ base: 24, md: 40 }}
                        color="white"
                        mb={6}
                    >
                        <h2>Chicago</h2>
                    </Box>
                    <Box
                        fontFamily="Karla"
                        fontSize={{ base: 14, md: 18 }}
                        color="white"
                        mb={6}
                        maxW="md"
                        mx={{ base: "auto", md: "0" }}
                    >
                        <Text>
                            We are a family-owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
                        </Text>
                    </Box>
                    <Button
                        colorScheme="yellow"
                        size="lg"
                        mx={{ base: "auto", md: "0" }}
                    >
                        Reserve a Table
                    </Button>
                </Box>
                <Box flex="1" display="flex" justifyContent="center" alignItems="center">
                    <Image
                        src={heroImage}
                        alt="Restaurant food"
                        width={{ base: "50%", md: "60%" }}
                        height="auto"
                        borderRadius={18}
                        mt={{ base: 8, md: 0 }}
                    />
                </Box>
            </Box>
        </>
    );
}

export default Hero;
