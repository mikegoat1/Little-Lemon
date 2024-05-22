import React from "react";
import { VStack, HStack, Text, Heading, Box, Image } from "@chakra-ui/react";
import imageB from "../icons_assets/Mario and Adrian b.jpg"
import imageA from "../icons_assets/Mario and Adrian A.jpg"
const About = () => {
    return (
        <>
            <HStack
                display={"flex"}
                justifyContent={"space-evenly"}
            >
                <VStack

                >
                    <Box>
                        <Heading
                            fontFamily="Markazi Text"
                            fontSize={55}
                            margin={"0 auto"}

                        >Little Lemon</Heading>
                    </Box>
                    <Box
                        margin={"0 auto"}
                        width={"50%"}
                        fontFamily="Markazi Text"
                        fontSize={40}

                    >
                        <Text>Chicago</Text>
                    </Box>
                    <Box
                        fontFamily="Karla"
                        fontSize={18}
                        width="50%"
                        margin="0 auto"
                        pr={200}

                    >
                        <Text>Meet Adrian and Mario, the passionate duo behind Little Lemon, infusing every dish with Mediterranean charm.
                            With a shared love for authentic flavors, Adrian and Mario bring their culinary expertise to every plate at Little Lemon.
                            Adrian and Mario's dedication to quality ingredients and creative flair shines through in every dish they craft at Little Lemon.
                        </Text>
                    </Box>
                </VStack>
                <Box>
                    <Image
                        w={1000}
                        src={imageB}
                    ></Image>
                    <Image
                        src={imageA}
                        w={1000}
                    ></Image>
                </Box>
            </HStack>
        </>
    )
}

export default About;