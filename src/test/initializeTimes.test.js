import { initializeTimes } from "../components/BookingPage";

test("initializedTimes returns the correct initial times", () => {
    const expectedTimes = [
        "12:00 PM", "1:00 PM", "2:00 PM",
    ];
    const results = initializeTimes();
    expect(results).toEqual(expectedTimes)
});