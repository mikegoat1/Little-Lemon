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
                                <Select placeholder="Select a date" borderColor={"black"}backgroundColor={"white"}>
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
                                <Select placeholder="Select a time" borderColor={"black"}backgroundColor={"white"}>
                                    <option>12:00 PM</option>
                                    <option>1:00 PM</option>
                                    <option>2:00 PM</option>
                                </Select>
                            </FormControl>
                        </Box>
                        <Box display={"flex"} gap={"5%"}>
                            <BsFillPersonFill size={40} />
                            <FormControl>
                                <Select placeholder="People" borderColor={"black"}backgroundColor={"white"}>
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
                            <FormLabel fontFamily={"karla"} fontWeight={"bold"} color={"white"} fontSize={"20px"}>FIRST NAME</FormLabel>
                            <Input w={"70%"}backgroundColor={"white"}>

                            </Input>
                        </FormControl>
                        <FormControl >
                            <FormLabel fontFamily={"karla"} fontWeight={"bold"} color={"white"} fontSize={"20px"} >LAST NAME</FormLabel>
                            <Input w={"70%"}backgroundColor={"white"}>

                            </Input>
                        </FormControl>
                        <FormControl >
                            <FormLabel fontFamily={"karla"} fontWeight={"bold"} color={"white"} fontSize={"20px"} >EMAIL</FormLabel>
                            <Input w={"70%"}backgroundColor={"white"}>

                            </Input>
                        </FormControl>
                        <FormControl mb={10} >
                            <FormLabel fontFamily={"karla"} fontWeight={"bold"} color={"white"} fontSize={"20px"} >OCCASSION</FormLabel>
                            <Input w={"70%"} backgroundColor={"white"}>

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
                <FormControl display={"flex"} alignItems={"center"} padding={"10%"} mt={20} mb={20} >
                    <FormLabel fontFamily={"karla"} fontWeight={"bold"} color={"black"} fontSize={"20px"} >PHONE</FormLabel>
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