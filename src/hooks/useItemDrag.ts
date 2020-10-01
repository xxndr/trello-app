import { useDrag } from "react-dnd";
import { useAppState } from "./useAppState";
import { DragItem } from "../dragAndDrop/DragItem";
import { useEffect } from "react";
import { getEmptyImage } from "react-dnd-html5-backend";
import { setDraggedItem } from "../actions";

export const useItemDrag = (item: DragItem) => {
  const { dispatch } = useAppState();
  const [, drag, preview] = useDrag({
    item,
    begin: () => {
      dispatch(setDraggedItem(item));
    },
    end: () => {
      dispatch(setDraggedItem(undefined));
    },
  });

  useEffect(() => {
    preview(getEmptyImage(), { captureDraggingState: true });
  }, [preview]);

  return { drag };
};
