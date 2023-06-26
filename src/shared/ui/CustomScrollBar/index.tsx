import useTheme from "@mui/material/styles/useTheme";
import React, { useEffect, useRef, useState } from "react";
import { Scrollbars } from "react-custom-scrollbars";

interface IScrollBar {
  component: () => React.ReactElement;
}

//Кастомный скролбар, для компонентов с прокруткой
//Подстраивается под размер родителя
const CustomScrollBar: React.FC<IScrollBar> = ({ component }) => {
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
      onUpdate={() => setUpdate(!update)}
      ref={scrollbarsRef}
      autoHide={false}
      style={{
        width: "100%",
        height: "100%",
        flex: 1,
      }}
      renderTrackVertical={(style, ...props) => (
        <div
          {...props}
          style={{
            ...style,
            position: "absolute",
            right: 0,
            top: 0,
            bottom: 0,
            width: 15,
            backgroundColor: "#c3c3c3",
          }}
        />
      )}
      renderThumbVertical={(style, ...props) => (
        <div
          {...props}
          style={{
            ...style,
            borderRadius: 15,
            backgroundColor: theme.palette.primary.main,
            width: 15,
            position: "relative",
            zIndex: 10,
          }}
        />
      )}
    >
      <div
        className="scrollbar-custom"
        style={{ position: "relative", height: "100%", padding: "0 15px 0 0" }}
      >
        {component()}
      </div>
    </Scrollbars>
  );
};

export default CustomScrollBar;
