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
});
