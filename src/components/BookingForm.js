import React from "react";
import { useFormik } from "formik";
import {
    Box,
    IconButton,
    FormControl,
    FormErrorMessage,
    FormLabel,
    Input,
    Select,
    VStack,
    HStack,
    Button
} from "@chakra-ui/react";
import { IoIosArrowBack } from "react-icons/io";
import { BsFillPersonFill } from "react-icons/bs";
import { CalendarIcon, TimeIcon } from "@chakra-ui/icons";
import useSubmit from "../hooks/useSubmit";
import * as Yup from "yup";
// import { useAlertContext } from "../context/alertContext";


const FormSubmit = () => {
    const { isLoading, response, submit } = useSubmit();
    // // const { onOpen } = useAlertContext();

    const formik = useFormik({
        initialValues: {
            firstName: "",
            lastName: "",
            email: "",
            date: "",
            time: "",
            guestNumber: 0,
            occassion: "",
            phoneNumber: ""
        },
        validationSchema: Yup.object({
            firstName: Yup.string().required("Required"),
            lastName: Yup.string().required("Required"),
            email: Yup.string().email("Invalid email address").required("Required"),
            occassion: Yup.string(),
            guestNumber: Yup.number().min(1, "Guest number at least 1"),

        }),
    })

    return (

        <>
            <Box w={"100%"} backgroundColor={"#F4CE14"}>
                <HStack

                    position={"relative"}
                >
                    <IconButton
                        top={"20px"}
                        left={"5%"}
                        position={"absolute"}
                        aria-label="Back button"
                        variant={"outline"}
                        isRound={"true"}
                        colorScheme="#495E57"

                        icon={<IoIosArrowBack size={30} />} />
                </HStack>
                <form onSubmit={formik.handleSubmit}>


                    <HStack
                        display={"flex"}
                        justifyContent={"center"}
                        gap={"2%"}
                        margin={"0 auto"}
                        pb={"5%"}
                        pt={"5%"}
                    >
                        {/* DATE */}
                        <Box display={"flex"} gap={"5%"}>
                            <CalendarIcon
                                boxSize={10}
                            />
                            <FormControl >
                                <Select
                                    id="date"
                                    name="date"
                                    placeholder="Select a date"
                                    borderColor={"black"}
                                    backgroundColor={"white"}
                                    {...formik.getFieldProps("date")}

                                >
                                    <option value="MON, MAY 28" >MON, MAY 28</option>
                                    <option value="TUE, MAY 29" >TUE, MAY 29</option>
                                    <option value="WED, MAY 30" >WED, MAY 30 </option>
                                </Select>
                            </FormControl>

                        </Box>

                        {/* TIME */}
                        <Box display={"flex"} gap={"5%"} >
                            <TimeIcon
                                boxSize={10}
                            />
                            <FormControl>
                                <Select
                                    id="time"
                                    name="time"
                                    placeholder="Select a time"
                                    borderColor={"black"}
                                    backgroundColor={"white"}
                                    {...formik.getFieldProps("time")}
                                >
                                    <option value="12:00 PM" >12:00 PM</option>
                                    <option value="1:00 PM">1:00 PM</option>
                                    <option value="2:00 PM">2:00 PM</option>
                                </Select>
                            </FormControl>
                        </Box>

                        {/* PEOPLE */}
                        <Box display={"flex"} gap={"5%"}>
                            <BsFillPersonFill size={40} />
                            <FormControl isInvalid={formik.touched.guestNumber && formik.errors.guestNumber} >
                                <Select
                                    id="guestNumber"
                                    name="guestNumber"
                                    placeholder="People"
                                    borderColor={"black"}
                                    backgroundColor={"white"}
                                    {...formik.getFieldProps("guestNumber")}
                                >
                                    <option value={1}>1 Person</option>
                                    <option value={2}>2 People</option>
                                    <option value={3}>3 People</option>
                                </Select>
                                <FormErrorMessage>{formik.errors.guestNumber}</FormErrorMessage>
                            </FormControl>
                        </Box>
                    </HStack>

                </form>
            </Box>
            <Box>
                <Box
                    width={"90%"}
                    margin={"0 auto"}
                    pt={"5%"}
                    backgroundColor={"#495E57"}
                    borderBottomRightRadius={"20px"}
                    borderBottomLeftRadius={"20px"}
                >
                    <VStack
                        w={"40%"}
                        m={"0 auto"}
                        gap={10}

                    >
                        {/* FIRST NAME */}
                        <FormControl isInvalid={formik.touched.firstName && formik.errors.firstName}>
                            <FormLabel
                                htmlFor="firstName"
                                fontFamily={"karla"}
                                fontWeight={"bold"}
                                color={"white"}
                                fontSize={"20px"}>
                                FIRST NAME
                            </FormLabel>
                            <Input
                                w={"70%"}
                                backgroundColor={"white"}
                                id="firstName"
                                name="firstName"
                                {...formik.getFieldProps("firstName")}
                            >
                            </Input>
                            <FormErrorMessage>{formik.errors.firstName}</FormErrorMessage>
                        </FormControl>

                        {/* LAST NAME */}
                        <FormControl isInvalid={formik.touched.lastName && formik.errors.lastName} >
                            <FormLabel
                                htmlFor="lastName"
                                fontFamily={"karla"}
                                fontWeight={"bold"}
                                color={"white"}
                                fontSize={"20px"}>
                                LAST NAME
                            </FormLabel>
                            <Input
                                w={"70%"}
                                backgroundColor={"white"}
                                id="lastName"
                                name="lastName"
                                {...formik.getFieldProps("lastName")}
                            >
                            </Input>
                            <FormErrorMessage>{formik.errors.lastName}</FormErrorMessage>
                        </FormControl>

                        {/* EMAILS */}
                        <FormControl isInvalid={formik.touched.email && formik.errors.email} >
                            <FormLabel
                                htmlFor="email"
                                fontFamily={"karla"}
                                fontWeight={"bold"}
                                color={"white"}
                                fontSize={"20px"}>
                                EMAIL
                            </FormLabel>
                            <Input
                                w={"70%"}
                                backgroundColor={"white"}
                                id="email"
                                name="email"
                                {...formik.getFieldProps("email")}
                            >

                            </Input>
                            <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
                        </FormControl>

                        {/* OCCASSIONS */}
                        <FormControl mb={10} >
                            <FormLabel
                                fontFamily={"karla"}
                                fontWeight={"bold"}
                                color={"white"}
                                fontSize={"20px"}
                            >OCCASSION</FormLabel>
                            <Input w={"70%"} backgroundColor={"white"} placeholder="Optional" >

                            </Input>
                        </FormControl>
                    </VStack>
                </Box>
            </Box>
            <Box
                w={"30%"}
                backgroundColor={"#F4CE14"}
                margin={"0 auto"}
                borderRadius={"20px"}

            >
                <FormControl
                    display={"flex"}
                    alignItems={"center"}
                    padding={"10%"}
                    mt={20}
                    mb={20}

                >
                    <FormLabel
                        fontFamily={"karla"}
                        fontWeight={"bold"}
                        color={"black"}
                        fontSize={"20px"}
                    >
                        PHONE</FormLabel>
                    <Input w={"70%"} backgroundColor={"white"}>

                    </Input>
                </FormControl>

            </Box>

            <Box
                display={"flex"}
                justifyContent={"center"}
                width="50%"
                margin="0 auto 2%"
            >
                <Button
                    colorScheme="yellow"
                    size={"lg"}
                >
                    Reserve a Table
                </Button>
            </Box>

        </>
    )
}

export default FormSubmit;