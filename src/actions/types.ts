import { DragItem } from "../dragAndDrop/DragItem";

export enum ActionTypes {
  addList = "ADD_LIST",
  addTask = "ADD_TASK",
  moveList = "MOVE_LIST",
  setDraggedItem = "SET_DRAGGED_ITEM",
  moveTask = "MOVE_TASK",
}

export type Action =
  | {
      type: ActionTypes.addList;
      payload: string;
    }
  | {
      type: ActionTypes.addTask;
      payload: {
        text: string;
        listId: string;
      };
    }
  | {
      type: ActionTypes.moveList;
      payload: {
        dragIndex: number;
        hoverIndex: number;
      };
    }
  | {
      type: ActionTypes.setDraggedItem;
      payload: DragItem | undefined;
    }
  | {
      type: ActionTypes.moveTask;
      payload: {
        dragIndex: number;
        hoverIndex: number;
        sourceColumn: string;
        targetColumn: string;
      };
    };
