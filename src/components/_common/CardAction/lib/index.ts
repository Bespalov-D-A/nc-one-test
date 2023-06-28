import { reactLocalStorage } from "reactjs-localstorage";

//Функция добавления в избранное
export function addFavorite(
  active: boolean,
  id: number,
  setFavoriteProductsIds: (arg1: number[]) => void
) {
  try {
    const favorites: {} | undefined | { arr: number[] } =
      reactLocalStorage.getObject("fav");
    if (favorites && "arr" in favorites && Array.isArray(favorites.arr)) {
      if (active) {
        const index = favorites.arr.findIndex(e => e === id);
        index !== -1 && favorites.arr.splice(index, 1);
      } else {
        favorites.arr.push(id);
      }
      reactLocalStorage.setObject("fav", favorites);
      setFavoriteProductsIds(favorites.arr);
    } else {
      const fav: { arr: number[] } = { arr: [] };
      fav.arr.push(id);
      reactLocalStorage.setObject("fav", fav);
      setFavoriteProductsIds(fav.arr);
    }
  } catch (e) {
    console.log(e);
  }
}
