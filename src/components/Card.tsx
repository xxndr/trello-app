import React, { useRef } from "react";

import { CardContainer } from "../styles/styles";
import { useDrop } from "react-dnd";
import { CardDragItem, DragTypes } from "../dragAndDrop/DragItem";
import { useAppState } from "../hooks/useAppState";
import { useItemDrag } from "../hooks/useItemDrag";
import { isHidden } from "../utils/isHidden";
import { ActionTypes } from "../actions/types";

interface CardProps {
  text: string;
  id: string;
  index: number;
  columnId: string;
  isPreview?: boolean;
}

export const Card = ({ text, id, index, columnId, isPreview }: CardProps) => {
  const { dispatch, state } = useAppState();

  const { drag } = useItemDrag({
    type: DragTypes.card,
    id,
    text,
    index,
    columnId,
  });

  const ref = useRef<HTMLDivElement>(null);

  const [, drop] = useDrop({
    accept: DragTypes.card,
    hover(item: CardDragItem) {
      if (item.id === id) {
        return;
      }

      const dragIndex = item.index;
      const hoverIndex = index;
      const sourceColumn = item.columnId;
      const targetColumn = columnId;
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
    },
  });

  drag(drop(ref));

  return (
    <CardContainer
      ref={ref}
      isHidden={isHidden(isPreview, state.draggedItem, DragTypes.card, id)}
      isPreview={isPreview}
    >
      {text}
    </CardContainer>
  );
};
