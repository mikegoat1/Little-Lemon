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
                <HStack>
                    <IconButton
                        aria-label="Back button"
                        variant={"outline"}
                        isRound={"true"}
                        colorScheme="#495E57"

                        icon={<IoIosArrowBack size={30} />} />
                </HStack>
                <form >
                    <HStack>
                        <Box display={"flex"}>
                            <CalendarIcon
                                boxSize={10}
                            />
                            <FormControl >
                                <Select placeholder="Select a date">
                                    <option>MON, MAY 28</option>
                                    <option>TUES, MAY 29</option>
                                    <option>WED, MAY 30 </option>
                                </Select>
                            </FormControl>

                        </Box>
                        <Box display={"flex"}>
                            <TimeIcon
                                boxSize={10}
                            />
                            <FormControl>
                                <Select placeholder="Select a time">
                                    <option>12:00 PM</option>
                                    <option>1:00 PM</option>
                                    <option>2:00 PM</option>
                                </Select>
                            </FormControl>
                        </Box>
                        <Box display={"flex"}>
                            <BsFillPersonFill size={40} />
                            <FormControl>
                                <Select placeholder="People">
                                    <option>1 Person</option>
                                    <option>2 People</option>
                                    <option>3 People</option>
                                </Select>
                            </FormControl>
                        </Box>
                    </HStack>
                </form>
            </Box>
        </>
    )
}

export default FormSubmit;