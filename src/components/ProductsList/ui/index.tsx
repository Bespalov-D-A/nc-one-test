import {
  FixedSizeGrid,
  GridChildComponentProps,
  VariableSizeGrid as Grid,
} from "react-window";
import React, { useEffect, useState } from "react";
import { getProducts } from "../../../api";
import { apiUrl, cardWidth } from "../../../config";
import { Iproduct } from "../../../config/types";
import { useGlobalState } from "../../../store";
import { ProductCard } from "../../ProductCard";
import { columnCount, maxColumns } from "../lib";
import s from "./index.module.scss";
import AutoSizer from "react-virtualized-auto-sizer";
import { useMediaQuery } from "react-responsive";

interface IProductsList {}

const ProductsList: React.FC<IProductsList> = props => {
  const [products, setProducts] = useGlobalState("products");
  const [favoriteProductsIds] = useGlobalState("favoriteProductsIds");
  const [isLoad, setIsLoad] = useState<boolean>(false);

  const isActive = (id: number) =>
    id && !!favoriteProductsIds.includes(Number(id)) ? true : false;

  useEffect(() => {
    setIsLoad(true);
    getProducts()
      .then(
        res => setProducts(res) //Сетаем полученные товары в глобальный стейт
      )
      .catch(e => console.log(e))
      .finally(() => setIsLoad(false));
  }, []);

  interface IDrawProducts extends GridChildComponentProps {
    width: number;
  }

  //Функция отрисовки продуктов
  //Вернет элемент сетки внутри которого карточка продукта
  const DrawProducts = (props: IDrawProducts) => {
    const { style, columnIndex, width, rowIndex, data } = props;
    const count = columnCount(width, cardWidth, data.length); //Получаем колво столбцов которое надо отрисовать
    const item = data[columnIndex + rowIndex * count]; //Получаем итерируемый элемент (продукт)
    const isMobile = useMediaQuery({
      query: "(max-width: 1280px)",
    });

    return item ? (
      <div
        style={{
          ...style,
          top: `${parseFloat(style.top ? String(style.top) : "0") + 85}px`, //Отступ сверху для сетки
          left: `${
            parseFloat(style.left ? String(style.left) : "0") +
            Math.ceil(((width - (isMobile ? 0 : 85)) % cardWidth) / 2)
          }px`, //Центрируем сетку по центру страницы
        }}
      >
        <ProductCard
          id={item.id}
          name={item.name}
          active={isActive(item.id)}
          price={item.price}
          src={`${apiUrl + item.src}`}
          setProducts={(newProducts: Iproduct[]) => setProducts(newProducts)}
        />
      </div>
    ) : (
      <div></div>
    );
  };

  return (
    <div className={s.wrap}>
      <AutoSizer>
        {({ height, width }: { height: number; width: number }) => {
          return (
            products &&
            products.length > 0 && (
              <FixedSizeGrid
                columnCount={maxColumns(width, cardWidth)}
                columnWidth={cardWidth}
                height={height}
                rowCount={Math.ceil(
                  products.length / maxColumns(width, cardWidth)
                )}
                rowHeight={480}
                width={width}
              >
                {(props: GridChildComponentProps) =>
                  DrawProducts({ ...props, data: products, width })
                }
              </FixedSizeGrid>
            )
          );
        }}
      </AutoSizer>
    </div>
  );
};

export default ProductsList;
