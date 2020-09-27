import { DragItem } from "../dragAndDrop/DragItem";

export interface Task {
  id: string;
  text: string;
}

export interface Todo {
  id: string;
  text: string;
  tasks: Task[];
}

export interface AppState {
  lists: Todo[];
  draggedItem: DragItem | undefined;
}
