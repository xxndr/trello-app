export enum DragTypes {
  column = "COLUMN",
  card = "CARD",
}

export type ColumnDragItem = {
  type: DragTypes.column;
  id: string;
  text: string;
  index: number;
};

export type CardDragItem = {
  type: DragTypes.card;
  id: string;
  text: string;
  index: number;
  columnId: string;
};

export type DragItem = ColumnDragItem | CardDragItem;
