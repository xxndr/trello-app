import React from "react";
import { ColumnContainer, ColumnTitle } from "./styles";
import { AddNewItem } from "./AddNewItem";
import { useAppState } from "./useAppState";
import { Card } from "./Card";

interface ColumnProps {
  text: string;
  index: number;
}

export const Column = ({ text, index }: ColumnProps) => {
  const { state } = useAppState();

  return (
    <ColumnContainer>
      <ColumnTitle>{text}</ColumnTitle>
      {state.lists[index].tasks.map((task) => (
        <Card text={task.text} key={task.id} />
      ))}
      <AddNewItem
        onAdd={() => {}}
        toggleButtonText={"+ Add another task"}
        dark
      />
    </ColumnContainer>
  );
};
