import React from "react";
import { VStack, HStack, Image, Text, Box } from "@chakra-ui/react";
import Ratings from "./Ratings.js";

const CardsTest = ({ rating, name, reviewText, image }) => {
    return (
        <>
            <VStack
                backgroundColor="white"
                fontFamily="karla"

            >
                <HStack justifyContent={"center"} w={"100%"} pt={5} mr={9}>
                    <Box>
                        <Text
                        fontWeight={"bold"}
                        >
                            Ratings:
                        </Text>
                    </Box>
                    <Box>
                        <Ratings rating={rating}></Ratings>
                    </Box>

                </HStack>

                <HStack w={"100%"} justifyContent={"space-evenly"} alignContent={"center"} >
                    <Box>
                        <Image src={image}>

                        </Image>
                    </Box>

                    <Box>
                        <Text
                        fontWeight={"bold"}
                        >
                            {name}
                        </Text>
                    </Box>
                </HStack>

                <Box pl={5} pr={5} pt={3} pb={3}fdeswqwesdrfsewaq w={"300px"}>
                    <Text>
                        {reviewText}
                    </Text>
                </Box>
            </VStack>
        </>
    )
}

export default CardsTest;