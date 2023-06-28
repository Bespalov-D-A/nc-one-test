import {addFavorite} from "../lib";

test("testing make like for product", () => {
  addFavorite(false, 2, arg => console.log(arg));
});
