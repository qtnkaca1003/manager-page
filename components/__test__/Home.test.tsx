import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import * as React from "react";
import Home from "../home/index";

describe("Running Test for Home ", () => {
  test("render Home ", () => {
    render(<Home />);
  });
  test("test Home", () => {
    render(<Home />);
    const home = screen.getByRole("link");
    expect(home).toHaveAttribute("href", "/");
  });
});
