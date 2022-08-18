import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import userEvent from "@testing-library/user-event";
import DataInput from "./datainput";

describe("Testing Row Input Functionality", () => {
  test("render Row input", () => {
    render(<DataInput />);

    const inputEl = screen.getByTestId("row-input");
    expect(inputEl).toBeInTheDocument();
    expect(inputEl).toHaveAttribute("type", "number");
  });

  test("change number to Row input", () => {
    render(<DataInput />);

    const inputEl = screen.getByTestId("row-input");
    fireEvent.change(inputEl, { target: { value: 2 } });
    expect(inputEl).toBeInTheDocument();
    expect(inputEl).toHaveValue(2);
  });

  test("not allow not number value to Row input", () => {
    render(<DataInput />);

    const inputEl = screen.getByTestId("row-input");
    fireEvent.change(inputEl, { target: { value: "qwe" } });
    expect(inputEl).toBeInTheDocument();
    expect(inputEl).not.toHaveValue("qwe");
  });
});

describe("Testing JSON Input Functionality", () => {
  test("render JSON input", () => {
    render(<DataInput />);

    const inputEl = screen.getByTestId("json-input");
    expect(inputEl).toBeInTheDocument();
  });

  test("type in JSON input", () => {
    const arr = [
      { name: "A", weight: 3, value: -0.02 },
      { name: "B", weight: 3, value: 0.05 },
      { name: "C", weight: 6, value: 0.015 },
      { name: "D", weight: 2, value: -0.01 },
      { name: "E", weight: 3, value: 0.01 },
    ];
    const expectResult = JSON.stringify(arr);
    render(<DataInput />);

    const inputEl = screen.getByTestId("json-input");

    userEvent.type(inputEl, expectResult);

    expect(inputEl).toBeInTheDocument();
    expect(inputEl).toHaveValue(expectResult);
  });
});

describe("Testing Button Functionality", () => {
  test('Pressing "Generate Tree Map" button', () => {
    const mockFunc = jest.fn();
    render(<DataInput onButtonClick={mockFunc} />);

    const generateBtn = screen.getByText("Generate Tree Map");
    userEvent.click(generateBtn);
    expect(mockFunc).toBeCalledTimes(1);
  });
  test('Pressing "Prettify Json" button', () => {
    const mockFunc = jest.fn();
    render(<DataInput onPrettifyJsonClick={mockFunc} />);

    const prettifyBtn = screen.getByText("Prettify Json");
    userEvent.click(prettifyBtn);
    expect(mockFunc).toBeCalledTimes(1);
  });
});
