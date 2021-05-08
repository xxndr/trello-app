import { findItemIndexById, Item } from "./findItemIndexById";

const items: Item[] = [{ id: "0" }, { id: "1" }, { id: "2" }];

test("should return correct index", () => {
  expect(findItemIndexById<Item>(items, "1")).toBe(1);
});
