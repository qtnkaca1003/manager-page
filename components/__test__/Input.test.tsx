import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import * as React from "react";
import CInput from "../atoms/input/index";

describe("Running Test for CAvatar ", () => {
  test("render CAvatar ", () => {
    render(<CInput placeholder="Some thing..." />);
  });
  test("test CInput", () => {
    render(<CInput placeholder="Test Input" />);
    const input = screen.getByPlaceholderText("Test Input");
    expect(input).toHaveAttribute("placeholder", "Test Input");
  });
});
