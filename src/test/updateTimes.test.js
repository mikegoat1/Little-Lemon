import { updateTimes } from "../components/BookingPage";

test('updateTimes returns the same state that is provided', () => {
    const initialState = [
        "12:00 PM",
        "1:00 PM",
        "2:00 PM",
    ];
    const action = { type: 'UPDATE_TIMES', payload: "Some Date" };
    const result = updateTimes(initialState, action);
    expect(result).toEqual(initialState);
});
