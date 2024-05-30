import { render, screen } from "@testing-library/react";
import BookingForm from "../components/BookingForm";

test("Render the BookingForm FormLabels", () => {
    render(<BookingForm />);
    const formLabelElement = screen.getByText("FIRST NAME");
    expect(formLabelElement).toBeInTheDocument();
});