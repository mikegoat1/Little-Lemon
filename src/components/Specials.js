import React from "react";
import Card from "./Card";
import greekSalad from "../icons_assets/greek salad.jpg";
import bruchetta from "../icons_assets/bruchetta.svg";
import lemonDesert from "../icons_assets/lemon dessert.jpg";
import { Box, Button, VStack, HStack, Text } from "@chakra-ui/react"

const cardInfo = [{
    image: greekSalad,
    title: "Greek Salad",
    price: "$12.99",
    description: "The famous Greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. "
},
{
    image: bruchetta,
    title: "Bruchetta",
    price: "$5.99",
    description: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. "
},
{
    image: lemonDesert,
    title: "Lemon Desert",
    price: "$5.00",
    description: "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined."
}]

const Special = () => {
    return (
        <>
            <VStack
                pt={100}
            >
                <HStack
                    pb={50}
                    margin={"0 auto"}
                    width={"50%"}
                    justifyContent={"space-between"}
                >
                    {/* This will contain the button and title. */}
                    <Box
                        fontFamily="Markazi Text"
                        fontSize={40}
                        fontWeight={"regular"}
                    >
                        <Text>
                            This Weeks Specials!
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
                <Box>
                    {/* This will contain all of the cards */}
                    <HStack alignItems={"start"} gap={"3rem"}>
                        {cardInfo.map((data, index) => {
                            return (
                                <Card
                                    key={index}
                                    image={data.image}
                                    title={data.title}
                                    price={data.price}
                                    description={data.description} ></Card>
                            )
                        })}
                    </HStack>
                </Box>
            </VStack>
        </>
    )
}

export default Special;