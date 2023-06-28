export {};
import { getProducts } from "..";
import {products} from "./assests.data";

global.fetch = jest.fn().mockResolvedValue({
  json: jest.fn().mockResolvedValue(products),
}) as jest.Mock;

describe("getData", () => {
    beforeEach(() => {
    global.fetch = jest.fn().mockResolvedValue({
      json: jest.fn().mockResolvedValue(products),
    }) as jest.Mock;
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
  test("correct value", async () => {
    const data = await getProducts();
    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(data).toEqual(products);  
  });
});
