import { reactLocalStorage } from "reactjs-localstorage";
import { Iimage, Iproduct } from "../../../config/types";

//Функция установки продукта как выбранного в избранное
//записывает данные в глобальный стейт либо удаляет
export const setActiveProducts = (
  arr: Iimage[],
  callback: (arg1: Iimage[]) => void
) => {
  const favorites: {} | undefined | { arr: number[] } =
    reactLocalStorage.getObject("fav");
  let newArr: Iproduct[] = [];
  if (favorites && "arr" in favorites && Array.isArray(favorites.arr)) {
    newArr = arr.map((e, index) => {
      if ((favorites as { arr: number[] }).arr.includes(e.id))
        return { ...e, active: true };
      else return { ...e, active: false };
    });
  }
  callback(newArr);
};

//функция расчет колво столбцов для сетки
export const maxColumns = (containerWidth: number, cardWidth: number) =>
  Math.floor((containerWidth - 85) / cardWidth);

//доп. функция расчета колва столбцов для сетки
export const columnCount = (
  containerWidth: number,
  cardWidth: number,
  dataLength: number
) =>
  maxColumns(containerWidth, cardWidth) > dataLength - 1
    ? dataLength - 1
    : maxColumns(containerWidth, cardWidth);
