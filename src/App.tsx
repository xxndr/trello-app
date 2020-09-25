import React from "react";
import { AppContainer } from "./styles";
import { Column } from "./Column";
import { AddNewItem } from "./AddNewItem";
import { useAppState } from "./useAppState";

function App() {
  const { state } = useAppState();

  return (
    <AppContainer>
      {state.lists.map((list, i) => {
        return <Column text={list.text} key={list.id} index={i} />;
      })}
      <AddNewItem onAdd={console.log} toggleButtonText={"+ Add another list"} />
    </AppContainer>
  );
}

export default App;
