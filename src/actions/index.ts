import { Action, ActionTypes } from "./types";
import { DragItem } from "../dragAndDrop/DragItem";

export const addList = (text: string): Action => ({
  type: ActionTypes.addList,
  payload: text,
});

export const addTask = (task: string, id: string): Action => {
  return {
    type: ActionTypes.addTask,
    payload: {
      text: task,
      listId: id,
    },
  };
};

export const moveList = (dragIndex: number, hoverIndex: number): Action => {
  return {
    type: ActionTypes.moveList,
    payload: {
      dragIndex,
      hoverIndex,
    },
  };
};

export const moveTask = (
  dragIndex: number,
  hoverIndex: number,
  sourceColumn: string,
  targetColumn: string
): Action => {
  return {
    type: ActionTypes.moveTask,
    payload: {
      dragIndex,
      hoverIndex,
      sourceColumn,
      targetColumn,
    },
  };
};

export const setDraggedItem = (item: DragItem | undefined): Action => {
  return {
    type: ActionTypes.setDraggedItem,
    payload: item,
  };
};
