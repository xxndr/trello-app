import { moveItem } from "./moveItem";
const initialsItemsArr = [{ id: "0" }, { id: "1" }, { id: "2" }];

const updatedItemsArr = [{ id: "2" }, { id: "1" }, { id: "0" }];

test("should correctly move item", () => {
  expect(moveItem(initialsItemsArr, 0, 2)).toEqual(updatedItemsArr);
});
