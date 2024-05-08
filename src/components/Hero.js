import React from "react";
import { Box, Image } from "@chakra-ui/react";
import heroImage from "../icons_assets/restauranfood.jpg";


const Hero = () => {



    return (
        <>
            <Box
                backgroundColor="#495E57"
                display={"flex"}
                justifyContent={"center"}

            >
                {/* This boxes contains the Title, City, Description, and button */}
                <Box
                    pt={4} // Add padding top to create space between title and image
                    pr={4}
                    zIndex={1}
                >
                    <Box fontFamily="Markazi Text"
                        fontSize={55}
                        color="#F4CE14"
                    >
                        <h1 style={{ marginBottom: "0" }} >Little Lemon</h1>
                    </Box>
                    <Box
                        fontFamily="Markazi Text"
                        fontSize={40}
                        color={"white"}
                        margin="0 auto"
                        lineHeight={0} >

                        <h2>Chicago</h2>
                    </Box>
                    <Box
                        fontFamily="Karla"
                        fontSize={18}
                        color={"white"}
                        width="50%"
                        margin="0 auto" >
                        We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
                    </Box>
                </Box>
                {/* This box will contain the image for the hero Link */}
                <Box>
                    <Image
                        src={heroImage}
                        alt="Restaurant food"
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