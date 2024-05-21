import React from "react";
import { VStack, HStack, Image, Text, Box } from "@chakra-ui/react";
import Ratings from "./Ratings.js";

const CardsTest = ({ rating, name, reviewText, image }) => {
    return (
        <>
            <VStack
                backgroundColor="white"

            >
                <HStack justifyContent={"center"} w={"100%"} pt={5} mr={75}>
                    <Box>
                        <Text>
                            Ratings:
                        </Text>
                    </Box>
                    <Box>
                        <Ratings rating={rating}></Ratings>
                    </Box>

                </HStack>

                <HStack w={"100%"} justifyContent={"space-around"} alignContent={"center"} >
                    <Box>
                        <Image src={image}>

                        </Image>
                    </Box>

                    <Box>
                        <Text>
                            {name}
                        </Text>
                    </Box>
                </HStack>

                <Box>
                    <Text>
                        {reviewText}
                    </Text>
                </Box>
            </VStack>
        </>
    )
}

export default CardsTest;