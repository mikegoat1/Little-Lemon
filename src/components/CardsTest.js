import React from "react";
import { VStack, HStack, Image, Text, Box } from "@chakra-ui/react";
import Ratings from "./Ratings.js";

const CardsTest = ({ rating, name, reviewText }) => {
    return (
        <>
            <VStack>
                <HStack>
                    <Box>
                        <Text>
                            Ratings:
                        </Text>
                        <Box>
                            <Ratings rating={rating}></Ratings>
                        </Box>
                    </Box>
                </HStack>

                <HStack>
                    <Box>
                        <Image>

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