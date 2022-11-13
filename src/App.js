import "./App.scss";
import { useState, useEffect, useReducer } from "react";

import { ThemeContext, theme } from "./utils/contexts/theme-context";

import Banner from "./components/Banner";
import Article1 from "./components/Article1";
import Article2 from "./components/Article2";
import Horizontal from "./components/Horizontal";
import Newsletter from "./components/Newsletter";

import banner from "./assets/banner.png";
import articleImg2 from "./assets/img_1.png";
import articleImg1 from "./assets/img_2.png";
import img1 from "./assets/img_4.jpg";
import img2 from "./assets/img_5.jpg";
import img3 from "./assets/img_6.jpg";
import img4 from "./assets/img_7.jpg";

// ----- useReducers -----
const initialState = true;

const showArticleReducer = (state, action) => {
  switch (action.type) {
    case "false":
      return true;
    case "true":
      return false;
    default:
      return null;
  }
};
// ----- END useReducers -----

const App = () => {
  // const showArticle = true;
  // const [showArticle, setShowArticle] = useState(true); // dinonaktifkan krn showArticle diganti dengan state

  // merubah tampilan theme dengan klik tombol
  const [themeId, setThemeId] = useState("light");

  // setReducer
  const [state, dispatch] = useReducer(showArticleReducer, initialState);

  const greeting = () => {
    // alert("email submitted");
    // setShowArticle(showArticle ? false : true); // untuk men-triger Article mucul atau tidaknya
    // setThemeId(themeId === "light" ? "dark" : "light"); // untuk membuat tampilan dark dgn klik tombol
    dispatch({ type: `${state}` });
  };

  useEffect(() => {
    //   console.log("showArticle has changed to", showArticle);
    // }, [showArticle]);

    // showArticle diganti dengan state
    console.log("showArticle has changed to", state);
  }, [state]);

  return (
    <ThemeContext.Provider value={theme[themeId]}>
      <div className="App">
        <Banner img={banner} />
        {/* {showArticle ? <Article1 img={articleImg1} /> : <></>}
        {showArticle ? <Article2 img={articleImg2} /> : <></>} */}

        {/* =========== atau menggunakan dibawah jika tidak ada opsi pd ternary / end operation =========== */}
        {/* {showArticle && <Article1 img={articleImg1} />}
        {showArticle && <Article2 img={articleImg2} />} */}

        {/* jika menggunakan useReducer, maka showArticle diganti dengan state */}
        {state && <Article1 img={articleImg1} />}
        {state && <Article2 img={articleImg2} />}
        <Horizontal imgs={[img1, img2, img3, img4, img1]} />
        <Newsletter greetingFn={greeting} />
      </div>
    </ThemeContext.Provider>
  );
};

export default App;
