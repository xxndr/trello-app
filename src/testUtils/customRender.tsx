import { render } from "@testing-library/react";
import { AppStateProvider } from "../components/AppStateContext";
import * as React from "react";

export const customRender = (
  ui: React.ReactNode,
  { providerProps, ...renderOptions }
) => {
  return render(
    <AppStateProvider {...providerProps}>{ui}</AppStateProvider>,
    renderOptions
  );
};
