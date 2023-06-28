import { getOneProduct } from "../../../api";
import { Iproduct } from "../../../config/types";

export const remapFavorites = (
  arr: Iproduct[],
  favorites: number[]
): Iproduct[] => {
  return arr
    .map((product: Iproduct) => {
      if (favorites.includes(product.id)) return product;
      else return null;
    })
    .filter((e): e is Iproduct => e !== null);
};

export const getAllFavProducts = async (ids: number[]) => {
  try {
    const requests = ids.map(id => {
      return getOneProduct(id);
    });
    const result = await Promise.all(requests);
    return result;
  } catch (e) {
    console.log(e);
  }
};
