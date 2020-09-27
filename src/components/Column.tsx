import React, { useRef } from "react";
import { ColumnContainer, ColumnTitle } from "../styles/styles";
import { AddNewItem } from "./AddNewItem";
import { useAppState } from "../hooks/useAppState";
import { Card } from "./Card";
import { useDrop } from "react-dnd";
import { useItemDrag } from "../hooks/useItemDrag";
import { DragItem, DragTypes } from "../dragAndDrop/DragItem";
import { isHidden } from "../utils/isHidden";
import { ActionTypes } from "../actions/types";

interface ColumnProps {
  text: string;
  index: number;
  id: string;
  isPreview?: boolean;
}

export const Column = ({ text, index, id, isPreview }: ColumnProps) => {
  const { state, dispatch } = useAppState();

  const ref = useRef<HTMLDivElement>(null);

  const [, drop] = useDrop({
    accept: [DragTypes.column, DragTypes.card],
    hover: (item: DragItem) => {
      if (item.type === DragTypes.column) {
        const dragIndex = item.index;
        const hoverIndex = index;

        if (dragIndex === hoverIndex) {
          return;
        }

        dispatch({
          type: ActionTypes.moveList,
          payload: {
            dragIndex,
            hoverIndex,
          },
        });
        item.index = hoverIndex;
      } else {
        const dragIndex = item.index;
        const hoverIndex = 0;
        const sourceColumn = item.columnId;
        const targetColumn = id;
        if (sourceColumn === targetColumn) {
          return;
        }

        dispatch({
          type: ActionTypes.moveTask,
          payload: {
            dragIndex,
            hoverIndex,
            sourceColumn,
            targetColumn,
          },
        });
        item.index = hoverIndex;
        item.columnId = targetColumn;
      }
    },
  });

  const { drag } = useItemDrag({
    id,
    text,
    index,
    type: DragTypes.column,
  });

  drag(drop(ref));

  return (
    <ColumnContainer
      ref={ref}
      isHidden={isHidden(isPreview, state.draggedItem, DragTypes.column, id)}
      isPreview={isPreview}
    >
      <ColumnTitle>{text}</ColumnTitle>
      {state.lists[index].tasks.map((task, taskIndex) => (
        <Card
          id={task.id}
          text={task.text}
          key={task.id}
          index={taskIndex}
          columnId={state.lists[index].id}
        />
      ))}
      <AddNewItem
        onAdd={(task) => {
          console.log("add");
          dispatch({
            type: ActionTypes.addTask,
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
