import { apiUrl } from "../config";
import { Iimage } from "../config/types";

export const getProducts = async (): Promise<Iimage[]> => {
  const res = await fetch(`${apiUrl}/image`, {
    method: "GET",
  });
  return await res.json();
};
