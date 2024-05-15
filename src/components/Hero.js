import React from "react";
import { Box, Image, Button, Text } from "@chakra-ui/react";
import heroImage from "../icons_assets/restauranfood.jpg";


const Hero = () => {



    return (
        <>
            <Box
                backgroundColor="#495E57"
                display={"flex"}
                justifyContent={"flex-start"}

            >
                {/* This boxes contains the Title, City, Description, and button */}
                <Box
                    pt={6} // Add padding top to create space between title and image
                    pr={0}
                    pl={20}
                    zIndex={1}
                >
                    <Box fontFamily="Markazi Text"
                        fontSize={55}
                        color="#F4CE14"
                        margin={"0 auto"}
                        width={"50%"}
                    >
                        <h1  >Little Lemon</h1>
                    </Box>
                    <Box
                        fontFamily="Markazi Text"
                        fontSize={40}
                        color={"white"}
                        margin={"0 auto"}
                        width={"50%"}
                        marginBottom={20}
                        lineHeight={0}
                    >

                        <h2>Chicago</h2>
                    </Box>
                    <Box
                        fontFamily="Karla"
                        fontSize={18}
                        color={"white"}
                        width="50%"
                        margin="0 auto"
                        pr={400}
                        marginBottom={20}>
                        <Text>

                            We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.

                        </Text>
                    </Box>
                    <Box
                        width="50%"
                        margin="0 auto 2%"
                    >
                        <Button
                            colorScheme="yellow"
                            size={"lg"}
                        >
                            Reserve a Table
                        </Button>
                    </Box>
                </Box>
                {/* This box will contain the image for the hero Link */}
                <Box>
                    <Image
                        src={heroImage}
                        alt="Restaurant food"
                        position={"absolute"}
                        right={"20%"}
                        top={"15%"}
                        width={375}
                        height={432}
                        borderRadius={18}
                    ></Image>
                </Box>
            </Box>

        </>
    )
}

export default Hero;