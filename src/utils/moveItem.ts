export const moveItem = <T>(array: T[], from: number, to: number) => {
  const startIndex = to < 0 ? array.length + to : to;
  [array[from], array[startIndex]] = [array[startIndex], array[from]];
  return array;
};
