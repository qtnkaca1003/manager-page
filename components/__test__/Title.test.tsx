import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import * as React from "react";
import CTitle from "../atoms/title";

describe("Running Test for CAvatar ", () => {
  test("render CTitle ", () => {
    render(<CTitle title="Title" />);
  });
  test("test CTitle", () => {
    render(<CTitle title="welcome to next.js!" />);
    const p = screen.getByText("welcome to next.js!");
    expect(p).toBeInTheDocument();
  });
});
