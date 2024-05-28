import React from "react";
import { useFormik } from "formik";
import {
    Box,
    IconButton,
    FormControl,
    FormErrorMessage,
    FormLabel,
    Heading,
    Input,
    Select,
    Textarea,
    VStack,
    HStack,
    Icon
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
            type: "",
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
            type: Yup.string(),
            occassion: Yup.string(),
            guestNumber: Yup.number().min(1),

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
                <form >
                    <HStack
                        display={"flex"}
                        justifyContent={"center"}
                        gap={"2%"}
                        margin={"0 auto"}
                        pb={"5%"}
                        pt={"5%"}
                    >
                        <Box display={"flex"} gap={"5%"}>
                            <CalendarIcon
                                boxSize={10}
                            />
                            <FormControl >
                                <Select placeholder="Select a date" borderColor={"black"}>
                                    <option>MON, MAY 28</option>
                                    <option>TUE, MAY 29</option>
                                    <option>WED, MAY 30 </option>
                                </Select>
                            </FormControl>

                        </Box>
                        <Box display={"flex"} gap={"5%"} >
                            <TimeIcon
                                boxSize={10}
                            />
                            <FormControl>
                                <Select placeholder="Select a time" borderColor={"black"}>
                                    <option>12:00 PM</option>
                                    <option>1:00 PM</option>
                                    <option>2:00 PM</option>
                                </Select>
                            </FormControl>
                        </Box>
                        <Box display={"flex"} gap={"5%"}>
                            <BsFillPersonFill size={40} />
                            <FormControl>
                                <Select placeholder="People" borderColor={"black"}>
                                    <option>1 Person</option>
                                    <option>2 People</option>
                                    <option>3 People</option>
                                </Select>
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
                >
                    <VStack
                        w={"40%"}
                        m={"0 auto"}
                        gap={10}
                        justifyContent={"cente4r"}

                    >
                        <FormControl >
                            <FormLabel >FIRST NAME</FormLabel>
                            <Input w={"70%"}>

                            </Input>
                        </FormControl>
                        <FormControl >
                            <FormLabel width={"fit-content"} >LAST NAME</FormLabel>
                            <Input w={"70%"}>

                            </Input>
                        </FormControl>
                        <FormControl >
                            <FormLabel width={"fit-content"} >EMAIL</FormLabel>
                            <Input w={"70%"}>

                            </Input>
                        </FormControl>
                        <FormControl mb={10} >
                            <FormLabel width={"fit-content"} >OCCASSION</FormLabel>
                            <Input w={"70%"}>

                            </Input>
                        </FormControl>
                    </VStack>
                </Box>
            </Box>
            <Box
                w={"30%"}
                backgroundColor={"#F4CE14"}
                margin={"0 auto"}

            >
                <FormControl display={"flex"} padding={"10%"} mt={20} mb={20} >
                    <FormLabel width={"fit-content"} >PHONE</FormLabel>
                    <Input w={"70%"} backgroundColor={"white"}>

                    </Input>
                </FormControl>

            </Box>

        </>
    )
}

export default FormSubmit;