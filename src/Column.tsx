import React from "react";
import { ColumnContainer, ColumnTitle } from "./styles";
import { AddNewItem } from "./AddNewItem";
import { useAppState } from "./useAppState";
import { Card } from "./Card";

interface ColumnProps {
  text: string;
  index: number;
  id: string;
}

export const Column = ({ text, index, id }: ColumnProps) => {
  const { state, dispatch } = useAppState();

  return (
    <ColumnContainer>
      <ColumnTitle>{text}</ColumnTitle>
      {state.lists[index].tasks.map((task) => (
        <Card text={task.text} key={task.id} />
      ))}
      <AddNewItem
        onAdd={(task) => {
          console.log("add");
          dispatch({
            type: "ADD_TASK",
            payload: {
              text: task,
              listId: id,
            },
          });
        }}
        toggleButtonText={"+ Add another task"}
        dark
      />
    </ColumnContainer>
  );
};
