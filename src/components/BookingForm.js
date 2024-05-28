import React from "react";
// import { useFormik } from "formik";
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
import { CalendarIcon } from "@chakra-ui/icons";
// import useSubmit from "../hooks/useSubmit";
// import * as Yup from "yup";
// import { useAlertContext } from "../context/alertContext";


const FormSubmit = () => {
    // const { isLoading, response, submit } = useSubmit();
    // const { onOpen } = useAlertContext();

    // const formik = useFormik({
    //     initialValues: {
    //                 firstName: "",
    //                 lastName: "",
    //                 email: "",
    //                 type: "",
    //                 date: "",
    //                 time: "",
    //                 guestNumber: 0,
    //                 occassion: "",
    //                 phoneNumber: ""
    //             },
    //                     validationSchema: Yup.object({
    //         firstName: Yup.string().required("Required"),
    //         lastName: Yup.string().required("Required"),
    //         email: Yup.string().email("Invalid email address").required("Required"),
    //         type: Yup.string(),
    //         occassion: Yup.string(),
    //         guestNumber: Yup.number().min(1),

    //     }),
    // })

    return (

        <>
            <Box w={"100%"} backgroundColor={"#F4CE14"}>
                <HStack>
                    <IconButton
                        aria-label="Back button"
                        variant={"outline"}
                        isRound={"true"}
                        colorScheme="#495E57"
                        icon={<IoIosArrowBack />} />
                </HStack>
                <form >
                    <HStack>

                        <Box>
                            <CalendarIcon
                                boxSize={10}
                            />
                            <FormControl>
                                <Select placeholder="Select a date">
                                    <option>MON, MAY 28</option>
                                    <option>TUES, MAY 29</option>
                                    <option>WED, MAY 30 </option>

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