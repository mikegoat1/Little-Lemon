import React from "react";
import { VStack, Image, Box, Text, HStack, Icon } from "@chakra-ui/react";
import { ReactComponent as delivery } from "../icons_assets/delivery.svg"

const Card = ({ image, title, price, description }) => {
    return (
        <Box>
            <VStack
                background={"#EDEFEE"}
                borderTopRadius={16}
                h={438}
                justifyContent={"space-between"}

            >
                <Box>
                    <Image
                        width={264}
                        height={185}
                        src={image}
                        borderTopRadius={16}
                        border={"1px solid black"}
                    >

                    </Image>
                </Box>
                <Box>
                    <HStack gap={"4.5rem"}>
                        {/* Title and prices */}
                        <Box
                            fontFamily={"karla"}
                            fontSize={18}
                            fontWeight={"bold"}
                        >
                            <Text>{title}</Text>
                        </Box>
                        <Box
                            fontFamily={"karla"}
                            fontSize={18}
                            fontWeight={"medium"}
                            color={"#EE9972"}
                        >
                            <Text>
                                {price}
                            </Text>
                        </Box>
                    </HStack>
                </Box>
                <Box>
                    <Text
                        width={216}
                        color={"#495E57"}
                    >
                        {description}
                        {/* Description */}
                    </Text>
                </Box>
                <Box>
                    <HStack gap={10} pb={5}>
                        {/* Order Delivery  and Icon*/}
                        <Text
                            fontFamily={"karla"}
                            fontSize={16}
                            fontWeight={"bold"}
                        >
                            Order a Delivery
                        </Text>
                        <Icon as={delivery} />
                    </HStack>
                </Box>
            </VStack>
        </Box>
    )
}

export default Card;