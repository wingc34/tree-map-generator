import React from "react";
import 'jest-styled-components';
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import TreeMapItem from "./treeMapItem";

describe("Testing Row Input Functionality", () => {
  test("render Tree Map Item", () => {
    render(<TreeMapItem />);

    const itemEl = screen.getByTestId("tree-map-item");
    expect(itemEl).toBeInTheDocument();
  });

  test("render Item Name and Precentage", () => {
    render(<TreeMapItem itemName="test" percent={10} />);

    const itemText = screen.getByText("test", {exact: false});
    const itemPrecent = screen.getByText("10%", {exact: false});
    expect(itemText).toBeInTheDocument();
    expect(itemPrecent).toBeInTheDocument();
  });

  test("render Item in correct width", () => {
    const calWeight = 30;
    render(<TreeMapItem calWeight={calWeight} itemName="test" percent={10} />);

    const itemEl = screen.getByTestId("tree-map-item");
    expect(itemEl).toHaveStyleRule('width', '30%');
  });

  test("render Item in background green color", () => {
    const percent = 30;
    render(<TreeMapItem calWeight={30} itemName="test" percent={percent} />);

    const itemEl = screen.getByTestId("tree-map-item");
    expect(itemEl).toHaveStyleRule('background-color', 'green');
  });

  test("render Item in background red color", () => {
    const percent = -30;
    render(<TreeMapItem calWeight={30} itemName="test" percent={percent} />);

    const itemEl = screen.getByTestId("tree-map-item");
    expect(itemEl).toHaveStyleRule('background-color', 'red');
  });
});
