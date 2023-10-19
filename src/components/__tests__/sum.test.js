import { sum } from "../sum";

test("Sum function should calculate the sum of two number", () => {
  const result = sum(3, 4);

  // below line called assertion
  expect(result).toBe(7);
});
