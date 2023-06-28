import { reactLocalStorage } from "reactjs-localstorage";

export function setLike(callback: (arg1: boolean) => void, id: number) {
  const favorites: {} | undefined | { arr: number[] } =
    reactLocalStorage.getObject("fav");
  if (favorites && "arr" in favorites && Array.isArray(favorites.arr)) {
    if (favorites.arr.find(e => e === id)) callback(true);
  }
}
