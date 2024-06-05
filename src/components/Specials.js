import React from "react";
import Card from "./Card";
import greekSalad from "../icons_assets/greek salad.jpg";
import bruchetta from "../icons_assets/bruchetta.svg";
import lemonDesert from "../icons_assets/lemon dessert.jpg";
import { Box, Button, VStack, HStack, Text, Stack } from "@chakra-ui/react"

const cardInfo = [
    {
        image: greekSalad,
        title: "Greek Salad",
        price: "$12.99",
        description: "The famous Greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
        aria: "Greek Salad - A Greek salad with crispy lettuce, peppers, olives, Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons."
    },
    {
        image: bruchetta,
        title: "Bruchetta",
        price: "$5.99",
        description: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
        aria: "Bruchetta - Bruschetta made from grilled bread smeared with garlic and seasoned with salt and olive oil."
    },
    {
        image: lemonDesert,
        title: "Lemon Desert",
        price: "$5.00",
        description: "This comes straight from Grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
        aria: "Lemon Desert - Lemon dessert made from Grandma's recipe, with authentic ingredients."
    }
];

const Special = () => {
    return (
        <VStack
            pt={{ base: 10, md: 20 }}
            pb={{ base: 10, md: 20 }}
            spacing={{ base: 5, md: 10 }}
        >
            <HStack
                pb={{ base: 5, md: 10 }}
                margin={"0 auto"}
                width={{ base: "90%", md: "80%", lg: "50%" }}
                justifyContent={"space-between"}
                flexDirection={{ base: "column", md: "row" }}
                alignItems={{ base: "center", md: "flex-start" }}
            >
                {/* This will contain the button and title. */}
                <Box
                    fontFamily="Markazi Text"
                    fontSize={{ base: 24, md: 40 }}
                    fontWeight={"regular"}
                    textAlign={{ base: "center", md: "left" }}
                    mb={{ base: 5, md: 0 }}
                >
                    <Text>
                        This Week's Specials!
                    </Text>
                </Box>

                <Box>
                    <Button
                        colorScheme="yellow"
                        size={"lg"}
                    >
                        Online Menu
                    </Button>
                </Box>
            </HStack>
            <Box
                width={"100%"}
            >
                {/* This will contain all of the cards */}
                <Stack
                    direction={{ base: "column", md: "row" }}
                    alignItems={"center"}
                    spacing={{ base: 5, md: "3rem" }}
                    justifyContent={"center"}
                >
                    {cardInfo.map((data, index) => {
                        return (
                            <Card
                                aria={data.aria}
                                key={index}
                                image={data.image}
                                title={data.title}
                                price={data.price}
                                description={data.description} />
                        )
                    })}
                </Stack>
            </Box>
        </VStack>
    )
}

export default Special;
