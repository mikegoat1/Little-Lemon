import React from "react";
import { VStack, HStack, Text, Heading, Box, Image } from "@chakra-ui/react";
import imageB from "../icons_assets/Mario and Adrian b.jpg";
import imageA from "../icons_assets/Mario and Adrian A.jpg";

const About = () => {
    return (
        <section>
            <HStack
                display={"flex"}
                justifyContent={"space-evenly"}
                pt={45}
                pb={200}
                as="article"
                aria-labelledby="about-heading"
            >
                <div>
                    <Box>
                        <Heading
                            id="about-heading"
                            fontFamily="Markazi Text"
                            fontSize={55}
                            margin={"0 auto"}
                            pr={300}
                        >
                            Little Lemon
                        </Heading>
                    </Box>
                    <Box
                        margin={"0 auto"}
                        width={"50%"}
                        fontFamily="Markazi Text"
                        fontSize={40}
                        lineHeight={.1}
                        pb={20}
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
                        <Text>
                            Meet Adrian and Mario, the passionate duo behind Little Lemon, infusing every dish with Mediterranean charm.
                            With a shared love for authentic flavors, Adrian and Mario bring their culinary expertise to every plate at Little Lemon.
                            Adrian and Mario's dedication to quality ingredients and creative flair shines through in every dish they craft at Little Lemon.
                        </Text>
                    </Box>
                </div>
                <Box position={"relative"} width={"50%"}>
                    <Image
                        alt="Adrian and Mario standing together with smiles"
                        w={"272px"}
                        h={"338px"}
                        src={imageB}
                        position={"absolute"}
                        top={"-40px"}
                        right={"400px"}
                        zIndex={1}
                        objectFit={"cover"}
                    />
                    <Image
                        alt="Adrian and Mario posing in front of the restaurant"
                        src={imageA}
                        w={"276px"}
                        h={"338px"}
                        top={"-100px"}
                        right={"200px"}
                        position={"absolute"}
                        objectFit={"cover"}
                    />
                </Box>
            </HStack>
        </section>
    );
};

export default About;
