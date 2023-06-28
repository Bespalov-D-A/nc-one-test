import { getOneProduct } from "../../../api";

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


