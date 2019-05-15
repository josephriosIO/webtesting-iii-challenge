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
  describe("Check if toggle buttons show disabled", () => {
    it("closed toggle button should be disabed if gate is closed", () => {
      const { getByText } = render(<Dashboard />);
      const closeGateButton = getByText("Close Gate");
      expect(closeGateButton.textContent).toBe("Close Gate");
    });
  });
});
