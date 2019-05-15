// Test away!
import React from "React";
import renderer from "react-test-renderer";
import { render } from "react-testing-library";
import "react-testing-library/cleanup-after-each";
import "jest-dom/extend-expect";

import Display from "./Display";

describe("Display.js", () => {
  describe("Display Snapshot", () => {
    it("matches snapshot", () => {
      const tree = renderer.create(<Display />);

      expect(tree.toJSON()).toMatchSnapshot();
    });
  });
  describe("prop test", () => {
    it('show "Closed" when prop is true', () => {
      const closed = true;
      const { getByText } = render(<Display closed={closed} />);
      getByText("Closed");
    });
    it('show "Opened" when prop is false', () => {
      const closed = false;
      const { getByText } = render(<Display closed={closed} />);
      getByText("Open");
    });
    it('show "Locked" when  locked prop is true', () => {
      const locked = true;
      const { getByText } = render(<Display locked={locked} />);
      getByText("Locked");
    });
    it('show "Unlocked" when  locked prop is false', () => {
      const locked = false;
      const { getByText } = render(<Display locked={locked} />);
      getByText("Unlocked");
    });
  });
  describe("class test", () => {
    it("when locked use the red-led class", () => {
      const locked = true;
      const { getByText } = render(<Display locked={locked} />);
      expect(getByText("Locked")).toHaveClass("red-led");
    });
    it("when closed use the red-led class", () => {
      const closed = true;
      const { getByText } = render(<Display closed={closed} />);
      expect(getByText("Closed")).toHaveClass("red-led");
    });
    it("when unlocked use the green-led class", () => {
      const locked = false;
      const { getByText } = render(<Display locked={locked} />);
      expect(getByText("Unlocked")).toHaveClass("green-led");
    });
    it("when opened use the red-led class", () => {
      const closed = false;
      const { getByText } = render(<Display closed={closed} />);
      expect(getByText("Open")).toHaveClass("green-led");
    });
  });
});
