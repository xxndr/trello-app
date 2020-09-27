import { useDragLayer, XYCoord } from "react-dnd";
import React from "react";
import { CustomDragLayerContainer } from "./styles";
import { Column } from "./Column";
import { Card } from "./Card";

function getItemStyles(currentOffset: XYCoord | null): React.CSSProperties {
  if (!currentOffset) {
    return {
      display: "none",
    };
  }

  const { x, y } = currentOffset;

  const transform = `translate(${x}px, ${y}px)`;
  return {
    transform,
    WebkitTransform: transform,
  };
}

export const CustomDragLayer: React.FC = () => {
  const { isDragging, item, currentOffset } = useDragLayer((monitor) => ({
    item: monitor.getItem(),
    currentOffset: monitor.getSourceClientOffset(),
    isDragging: monitor.isDragging(),
  }));

  if (!isDragging) {
    return null;
  }

  return (
    <CustomDragLayerContainer>
      <div style={getItemStyles(currentOffset)}>
        {item.type === "COLUMN" ? (
          <Column
            text={item.text}
            index={item.index}
            id={item.id}
            isPreview={true}
          />
        ) : (
          <Card
            id={item.id}
            index={item.index}
            text={item.text}
            isPreview={true}
            columnId={item.columnId}
          />
        )}
      </div>
    </CustomDragLayerContainer>
  );
};
