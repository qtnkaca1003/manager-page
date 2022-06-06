import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import * as React from "react";
import CButtonFl from "../atoms/button";

describe("Running Test for CButtonFl ", () => {
  test("render Button ", () => {
    render(<CButtonFl title="Button" />);
  });
  test("test class name button", () => {
    render(<CButtonFl title="Button" className="primary" disabled={true} />);
    const button = screen.getByRole("button", { name: /button/i });
    expect(button).toHaveClass("primary");
    expect(button).toBeDisabled();
  });
  test("test disabled button", () => {
    render(<CButtonFl title="Button" className="primary" disabled={true} />);
    const button = screen.getByRole("button", { name: /button/i });
    expect(button).toBeDisabled();
  });   
});
