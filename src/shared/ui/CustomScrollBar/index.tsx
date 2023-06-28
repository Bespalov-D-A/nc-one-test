import useTheme from "@mui/material/styles/useTheme";
import React, { useEffect, useRef, useState } from "react";
import { Scrollbars } from "react-custom-scrollbars";
import s from "./index.module.scss";

interface IScrollBar {
  component: () => React.ReactElement;
  scrollStyles?: { [key: string]: any };
  thumbStyles?: { [key: string]: any };
  trackStyles?: { [key: string]: any };
}

//Кастомный скролбар, для компонентов с прокруткой
//Подстраивается под размер родителя
const CustomScrollBar: React.FC<IScrollBar> = props => {
  const { scrollStyles, thumbStyles, trackStyles, component } = props;
  const [update, setUpdate] = useState<boolean>(false);
  const theme = useTheme();
  const scrollbarsRef = useRef<Scrollbars>(null);

  function scrollTo() {
    if (scrollbarsRef.current) {
      scrollbarsRef.current.scrollToBottom();
      scrollbarsRef.current.scrollToTop();
    }
  }

  useEffect(() => {
    let time = setTimeout(() => scrollTo(), 100);
    return () => clearTimeout(time);
  }, []);

  return (
    <Scrollbars
      className={s.scrollBar}
      onUpdate={() => setUpdate(!update)}
      ref={scrollbarsRef}
      autoHide={false}
      renderTrackVertical={(style, ...props) => (
        <div
          {...props}
          style={
            trackStyles
              ? { ...style, ...trackStyles }
              : {
                  ...style,
                  position: "absolute",
                  right: 0,
                  top: 0,
                  bottom: 0,
                  width: 15,
                  backgroundColor: "#c3c3c3",
                }
          }
        />
      )}
      renderTrackHorizontal={(style, ...props) => (
        <div style={{ display: "none" }} />
      )}
      renderThumbHorizontal={(style, ...props) => (
        <div style={{ display: "none" }} />
      )}
      renderThumbVertical={(style, ...props) => (
        <div
          {...props}
          style={
            thumbStyles
              ? { ...style, ...thumbStyles }
              : {
                  ...style,
                  borderRadius: 15,
                  backgroundColor: theme.palette.primary.main,
                  width: 15,
                  position: "relative",
                  zIndex: 10,
                }
          }
        />
      )}
    >
      <div
        className="scrollbar-custom"
        style={
          scrollStyles
            ? scrollStyles
            : { position: "relative", height: "100%", padding: "0 15px 0 0" }
        }
      >
        {component()}
      </div>
    </Scrollbars>
  );
};

export default CustomScrollBar;
