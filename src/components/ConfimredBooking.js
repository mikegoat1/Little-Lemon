import React from "react";
import { useLocation } from "react-router-dom";
import { Box, Heading, VStack, Text } from "@chakra-ui/react";




const ConfirmedBooking = () => {
    const location = useLocation();
    const { email, firstName, guestNumber, lastName, occasion, phoneNumber, time } = location.state || {};
    return (
        <>
            <Box w={"100%"} backgroundColor={"#F4CE14"} pb={"2%"} borderBottom={"2px"}>
                <Heading
                    textAlign={"center"}
                    p={"3%"}
                    fontFamily="Markazi Text"
                    fontSize={55}
                    borderTop={"2px"}
                > Your Reservation is Confirmed</Heading>
                <VStack
                    backgroundColor={"white"}
                    w={"fit-content"}
                    m={"0 auto"}
                    p={"3%"}
                    // marginBottom={"10%"}
                    fontFamily="karla"
                    fontSize="20px"
                    fontWeight="bold"
                    border={"3px solid black"}
                    borderRadius={"5%"}
                    >
                    <Text>
                        Name: {firstName} {lastName}
                    </Text>
                    <Text>
                        Email: {email}
                    </Text>
                    <Text>
                        Phone: {phoneNumber}
                    </Text>
                    <Text>
                        Guest Number: {guestNumber}
                    </Text>
                    <Text>
                        Reservation Time: {time}
                    </Text>
                    <Text>
                        Occasion: {occasion}
                    </Text>

                </VStack>
            </Box>

        </>
    )
};

export default ConfirmedBooking;