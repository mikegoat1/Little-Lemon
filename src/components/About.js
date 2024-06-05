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
                pt={["30px", "45px"]}
                pb={["100px", "200px"]}
                w={"auto"}
                flexDirection={{sm:"column"}}
            >
                <VStack

                >
                    <Box>
                        <Heading
                            fontFamily="Markazi Text"
                            fontSize={55}
                            margin={"0 auto"}
                            pr={{sm:"0px",md:"115px",lg:"250px",xl:"340px"}}

                        >Little Lemon</Heading>
                    </Box>
                    <Box
                        margin={"0 auto"}
                        width={"50%"}
                        fontFamily="Markazi Text"
                        fontSize={40}
                        lineHeight={0.5}
                        pb={20}

                    >
                        <Text>Chicago</Text>
                    </Box>
                    <Box
                        fontFamily="Karla"
                        fontSize={18}
                        width="50%"
                        margin="0 auto"
                        pr={{sm:"0px",md:"200px"}}

                    >
                        <Text>Meet Adrian and Mario, the passionate duo behind Little Lemon, infusing every dish with Mediterranean charm.
                            With a shared love for authentic flavors, Adrian and Mario bring their culinary expertise to every plate at Little Lemon.
                            Adrian and Mario's dedication to quality ingredients and creative flair shines through in every dish they craft at Little Lemon.
                        </Text>
                    </Box>
                </VStack>
                <Box
                    position={{sm:"none",md:"relative"}} width={"50%"}
                    display={{sm:"flex" ,md:"block"}} justifyContent={{sm:"center"}} gap={{sm:"18px"}}
                >
                    <Image
                        alt="Adrian and Mario"
                        w={"272px"}
                        h={"338px"}
                        src={imageB}
                        position={{sm:"none", md:"absolute"}}
                        top={"-200px"}
                        right={"-90px"}
                        zIndex={1}
                        objectFit={"cover"}

                    ></Image>
                    <Image
                        alt="Adrian and Mario"
                        src={imageA}
                        w={"276px"}
                        h={"338px"}
                        top={"-280px"}
                        right={"-250px"}
                        position={{sm:"none", md:"absolute"}}
                        objectFit={"cover"}
                    ></Image>
                </Box>
            </HStack>
        </>
    )
}

export default About;