import "./App.scss";

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

const App = () => {
  const showArticle = true;

  const greeting = () => {
    alert("email submitted");
  };

  return (
    <div className="App">
      <Banner img={banner} />
      {showArticle ? <Article1 img={articleImg1} /> : <></>}
      {showArticle ? <Article2 img={articleImg2} /> : <></>}
      <Horizontal imgs={[img1, img2, img3, img4, img1]} />
      <Newsletter greetingFn={greeting} />
    </div>
  );
};

export default App;
