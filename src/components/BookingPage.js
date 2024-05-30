import React, { useReducer } from "react";
import FormSubmit from "./BookingForm";

const initializeTimes = () => {
    return ["12:00 PM", "1:00 PM", "2:00 PM"];
};

const updateTimes = (state, action) => {
    switch (action.type) {
        case "UPDATE_TIMES":
            return ["12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM"];
        default:
            return state;
    }
};

const BookingPage = () => {
    const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());
    return (
        <>
            <FormSubmit availableTimes={availableTimes} dispatch={dispatch} />
        </>
    );
};

export default BookingPage;