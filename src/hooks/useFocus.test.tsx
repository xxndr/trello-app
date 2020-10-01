import { useFocus } from "./useFocus";
import { render, screen } from "@testing-library/react";
import React from "react";

const Input = () => {
  const ref = useFocus();
  return <input type="text" ref={ref} />;
};

test("should focus on input field when it appears", () => {
  render(<Input />);
  expect(screen.getByRole("textbox")).toHaveFocus();
});
