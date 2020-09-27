import { useDrag } from "react-dnd";
import { useAppState } from "./useAppState";
import { DragItem } from "../dragAndDrop/DragItem";
import { useEffect } from "react";
import { getEmptyImage } from "react-dnd-html5-backend";
import { ActionTypes } from "../actions/types";

export const useItemDrag = (item: DragItem) => {
  const { dispatch } = useAppState();
  const [, drag, preview] = useDrag({
    item,
    begin: () => {
      dispatch({
        type: ActionTypes.setDraggedItem,
        payload: item,
      });
    },
    end: () => {
      dispatch({
        type: ActionTypes.setDraggedItem,
        payload: undefined,
      });
    },
  });

  useEffect(() => {
    preview(getEmptyImage(), { captureDraggingState: true });
  }, [preview]);

  return { drag };
};
