import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import userEvent from "@testing-library/user-event";
import DataInput from "./datainput";

describe("Testing Row Input Functionality", () => {
  test("render Row input", () => {
    render(<DataInput />);

    const inputEl = screen.getByTitle("row-input");
    expect(inputEl).toBeInTheDocument();
    expect(inputEl).toHaveAttribute("type", "number");
  });

  test('pass valid number to Row input', () => {
    const mockFunc = jest.fn();
    const number = 5;
    render(<DataInput rowNum={number} onRowNumChange={mockFunc} />);
 
    const inputEl = screen.getByTitle("row-input");
    expect(inputEl).toBeInTheDocument();
 
    expect(screen.getByTitle("row-input")).toHaveValue(number);
  });
  test('pass string to Row input', () => {
    const mockFunc = jest.fn();
    const string = 'qq';
    render(<DataInput rowNum={string} onRowNumChange={mockFunc} />);
 
    const inputEl = screen.getByTitle("row-input");
    expect(inputEl).toBeInTheDocument();
 
    expect(screen.getByTitle("row-input")).not.toHaveValue(string);
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
