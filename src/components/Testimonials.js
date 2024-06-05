import React from "react";
import { VStack, HStack, Heading, Box } from "@chakra-ui/react";
import CardsTest from "./CardsTest";

const reviews = [
    {
        rating: 5,
        name: "Emily T.",
        reviewText: "Little Lemon is a hidden gem! The food is an incredible blend of traditional Mediterranean flavors with a unique modern twist. The family-owned vibe makes it feel warm and welcoming. Highly recommend the lamb shawarma - it's absolutely delicious!",
        imageUrl: "https://loremflickr.com/100/100?random=1"
    },
    {
        rating: 4,
        name: "Michael S.",
        reviewText: "I had a fantastic experience at Little Lemon. The ambiance is cozy, and the staff is very friendly. The hummus platter is a must-try! My only critique is that the portions are a bit small for the price, but the quality more than makes up for it.",
        imageUrl: "https://loremflickr.com/100/100?random=2"

    },
    {
        rating: 3,
        name: "Sarah L.",
        reviewText: "The food at Little Lemon is good, with interesting modern twists on Mediterranean classics. However, the service was a bit slow on a busy Saturday night. I loved the baklava for dessert - it was the perfect end to the meal.",
        imageUrl: "https://loremflickr.com/100/100?random=3"

    },
    {
        rating: 5,
        name: "David M.",
        reviewText: "Absolutely loved this place! Little Lemon offers a fantastic menu with fresh, flavorful dishes. The family-owned aspect really shines through in the service and atmosphere. The grilled octopus was a standout - perfectly cooked and seasoned. Will definitely be coming back!",
        imageUrl: "https://loremflickr.com/100/100?random=4"

    }
];

const Testimonials = () => {
    return (
        <>
            <VStack
                backgroundColor="#495E57"
                padding={120}
                
            >
                <Box>
                    <Heading
                        color={"#F4CE14"}
                        fontFamily="Markazi Text"
                        fontSize={64}
                        pb={10}

                    >Testimonials</Heading>
                </Box>
                <HStack alignItems={"stretch"} spacing={10} flexDirection={{sm:"column",md:"row"}}>
                    {reviews.map((data, index) => {
                        return (
                            <CardsTest
                                key={index}
                                rating={data.rating}
                                name={data.name}
                                reviewText={data.reviewText}
                                image={data.imageUrl}
                            ></CardsTest>
                        )
                    })}
                </HStack>
            </VStack>
        </>
    )
}

export default Testimonials;