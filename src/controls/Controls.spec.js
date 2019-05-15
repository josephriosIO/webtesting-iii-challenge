// Test away!
import React from "react";
import { render, fireEvent } from "react-testing-library";
import "react-testing-library/cleanup-after-each";

import Dashboard from "../dashboard/Dashboard";
import Controls from "./Controls";

describe("Controls.js", () => {
  describe("check for toggle buttons", () => {
    it("should display 2 buttons, Close Gate and Lock Gate", () => {
      const { getByText } = render(<Controls />);
      getByText("Close Gate");
      getByText("Lock Gate");
    });
  });
  describe("check for button text changes", () => {
    it("should display Open Gate on Close Gate click", () => {
      const { getByText } = render(<Dashboard />);
      const closeGateButton = getByText("Close Gate");
      fireEvent.click(closeGateButton);
      expect(closeGateButton.textContent).toBe("Open Gate");
    });
    it("should display Unlock Gate on Lock Gate click", () => {
      const { getByText } = render(<Dashboard />);
      const lockGateButton = getByText("Lock Gate");
      const closeGateButton = getByText("Close Gate");
      fireEvent.click(closeGateButton);
      fireEvent.click(lockGateButton);
      expect(lockGateButton.textContent).toBe("Unlock Gate");
    });
  });
  describe("check for disabled buttons", () => {
    it("close button should be disabled if gate is closed and locked", () => {
      const { getByText } = render(<Controls locked={true} closed={true} />);
      expect(getByText("Unlock Gate").hasAttribute("disabled")).toBeFalsy();
      expect(getByText("Open Gate").hasAttribute("disabled")).toBeTruthy();
    });

    it("lock button should be disabled if gate is open", () => {
      const { getByText } = render(<Controls closed={false} />);
      expect(getByText("Close Gate").hasAttribute("disabled")).toBeFalsy();
      expect(getByText("Lock Gate").hasAttribute("disabled")).toBeTruthy();
    });
  });
});
