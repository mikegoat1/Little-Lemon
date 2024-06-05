import React from "react";
import { useLocation } from "react-router-dom";
import { Box, Heading, VStack, Text } from "@chakra-ui/react";

const ConfirmedBooking = () => {
    const location = useLocation();
    const { email, firstName, guestNumber, lastName, occasion, phoneNumber, time } = location.state || {};
    return (
        <Box as="main" w="100%" backgroundColor="#F4CE14" pb="2%" borderBottom="2px">
            <Heading
                as="h1"
                textAlign="center"
                p="3%"
                fontFamily="Markazi Text"
                fontSize={55}
                borderTop="2px"
            >
                Your Reservation is Confirmed
            </Heading>
            <VStack
                as="section"
                backgroundColor="white"
                w="fit-content"
                m="0 auto"
                p="3%"
                fontFamily="Karla"
                fontSize="20px"
                fontWeight="bold"
                border="3px solid black"
                borderRadius="5%"
            >
                <Text as="p">
                    <strong>Name:</strong> {firstName} {lastName}
                </Text>
                <Text as="p">
                    <strong>Email:</strong> {email}
                </Text>
                <Text as="p">
                    <strong>Phone:</strong> {phoneNumber}
                </Text>
                <Text as="p">
                    <strong>Guest Number:</strong> {guestNumber}
                </Text>
                <Text as="p">
                    <strong>Reservation Time:</strong> {time}
                </Text>
                <Text as="p">
                    <strong>Occasion:</strong> {occasion}
                </Text>
            </VStack>
        </Box>
    );
};

export default ConfirmedBooking;
