import { useContext } from "react";
import { AppStateContext } from "../components/AppStateContext";

export const useAppState = () => {
  return useContext(AppStateContext);
};
