import React from "react";
import { AppContainer } from "../styles/styles";
import { Column } from "./Column";
import { AddNewItem } from "./AddNewItem";
import { useAppState } from "../hooks/useAppState";
import { CustomDragLayer } from "../dragAndDrop/customDragLayer";
import { ActionTypes } from "../actions/types";

function App() {
  const { state, dispatch } = useAppState();

  return (
    <AppContainer>
      <CustomDragLayer />
      {state.lists.map((list, i) => {
        return <Column text={list.text} key={list.id} index={i} id={list.id} />;
      })}
      <AddNewItem
        onAdd={(text) => dispatch({ type: ActionTypes.addList, payload: text })}
        toggleButtonText={"+ Add another list"}
      />
    </AppContainer>
  );
}

export default App;
