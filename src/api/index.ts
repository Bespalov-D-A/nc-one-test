import { apiUrl } from "../config";
import { Iimage } from "../config/types";

export const getProducts = async (): Promise<Iimage[]> => {
  const res = await fetch(`${apiUrl}/image`, {
    method: "GET",
  });
  return await res.json();
};

export const getOneProduct = async (id: number ): Promise<Iimage> => {
  const res = await fetch(`${apiUrl}/image?id=${id}`, {
    method: "GET",
  });
  return await res.json();
};
