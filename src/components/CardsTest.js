import React from "react";
import { VStack, HStack, Image, Text, Icon, Box } from "@chakra-ui/react";

const CardsTest = () => {
    return (
        <>
            <VStack>
                <Box>
                    <Text>
                        Ratings
                    </Text>
                </Box>
                <HStack>
                    <Box>
                        <Image>

                        </Image>
                    </Box>

                    <Box>
                        <Text>
                            Name
                        </Text>
                    </Box>
                </HStack>

                <Box>
                    <Text>
                        Review Text
                    </Text>
                </Box>
            </VStack>
        </>
    )
}

export default CardsTest;