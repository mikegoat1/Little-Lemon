import React from "react";
import { useLocation } from "react-router-dom";
import { Box, Heading, VStack, Text } from "@chakra-ui/react";




const ConfirmedBooking = () => {
    const location = useLocation(); 
    const {email, firstName, guestNumber, lastName, occasion, phoneNumber,time} = location.state || {}; 
    return (
        <>
            <Box >
                <Heading> Your Reservation is Confirmed</Heading>
                <VStack>
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