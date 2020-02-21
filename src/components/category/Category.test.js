import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import pretty from "pretty";

import Category from "./Category";

let container = null;

beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("renders with category name", () => {
  // arrange
  const testCategory = "Test Category";

  // act
  act(() => {
    render(<Category category={testCategory} />, container);
  });

  // assert
  expect(container.textContent).toBe(testCategory);
});

it("renders when category is not selected", () => {
  // arrange
  const testCategory = "Test Category";
  const isSelected = false;

  // act
  act(() => {
    render(<Category category={testCategory} isSelected={isSelected}/>, container);

    expect(pretty(container.innerHTML)).toMatchInlineSnapshot(
      `"<div class=\\"category\\">Test Category</div>"`
    );
  });
});

it("renders when category is selected", () => {
  // arrange
  const testCategory = "Test Category";
  const isSelected = true;

  // act
  act(() => {
    render(<Category category={testCategory} isSelected={isSelected} />, container);

    expect(pretty(container.innerHTML)).toMatchInlineSnapshot(
      `"<div class=\\"category category__selected\\">Test Category</div>"`
    );
  });
});
