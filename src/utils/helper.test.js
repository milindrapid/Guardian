import { formatToArrayItems } from "./helper";
import { obj, arrayItems } from "../__mocks__/mockData";

test("Should format object to array items", () => {
  expect(formatToArrayItems(obj)).toEqual(arrayItems);
});
