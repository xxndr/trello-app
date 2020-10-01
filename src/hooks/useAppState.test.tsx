import { useAppState } from "./useAppState";
import { renderHook } from "@testing-library/react-hooks";
import { appData, AppStateProvider } from "../components/AppStateContext";
import React from "react";

test("should correctly handly", () => {
  const wrapper = ({ children }: React.PropsWithChildren<{}>) => (
    <AppStateProvider>{children}</AppStateProvider>
  );

  const { result } = renderHook(() => useAppState(), { wrapper });
  expect(result.current).toEqual({
    dispatch: expect.any(Function),
    state: appData,
  });
});
