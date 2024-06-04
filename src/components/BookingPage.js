import React, { useEffect, useReducer } from "react";
import FormSubmit from "./BookingForm";
import { fetchAPI } from "../hooks/api"


const initializeTimes = () => {
    return ["12:00 PM", "1:00 PM", "2:00 PM"];
};

const updateTimes = (state, action) => {
    console.log(action.payload)
    const date1 = new Date(action.payload)
    console.log(fetchAPI(date1))

    switch (action.type) {
        case "UPDATE_TIMES":
            return fetchAPI(date1);
        default:
            return state;
    }
};

const BookingPage = () => {


    const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());

    useEffect(() => {

    }, [])

    return (
        <>
            <FormSubmit availableTimes={availableTimes} dispatch={dispatch} />
        </>
    );
};

export default BookingPage;