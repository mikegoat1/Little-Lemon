import { fireEvent, render, screen } from "@testing-library/react";
import BookingForm from "../components/BookingForm";

test("Render the BookingForm FormLabels", () => {
    render(<BookingForm />);


    const formLabelElementF = screen.getByText("FIRST NAME");

    expect(formLabelElementF).toBeInTheDocument();
});