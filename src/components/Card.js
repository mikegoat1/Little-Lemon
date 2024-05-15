import React from "react";
import { VStack, Image, Box, Text, HStack, Icon } from "@chakra-ui/react";


const Card = ({image, title, price, description}) => {
    return (
        <Box>
            <VStack>
                <Box>
                    <Image>
                        Random Image for Dishes
                    </Image>
                </Box>
                <Box>
                    <HStack>
                        {/* Title and prices */}
                    </HStack>
                </Box>
                <Box>
                    <Text>
                        {/* Description */}
                    </Text>
                </Box>
                <Box>
                    <HStack>
                        {/* Order Delivery  and Icon*/}
                        <Text>

                        </Text>
                        <Icon>

                        </Icon>
                    </HStack>
                </Box>
            </VStack>
        </Box>
    )
}

export default Card;