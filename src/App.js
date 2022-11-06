import "./App.scss";

import banner from "./assets/banner.png";
import articleImg2 from "./assets/img_1.png";
import articleImg1 from "./assets/img_2.png";
import img1 from "./assets/img_4.jpg";
import img2 from "./assets/img_5.jpg";
import img3 from "./assets/img_6.jpg";
import img4 from "./assets/img_7.jpg";

const Banner = (props) => {
  return (
    <div id="banner">
      <img src={props.img} className="image" />
    </div>
  );
};

const Article1 = (props) => {
  return (
    <div className="article article-1">
      <div className="image-wrapper">
        <img src={props.img} className="image" />
      </div>
      <div className="content-wrapper">
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      </div>
    </div>
  );
};

const Article2 = (props) => {
  return (
    <div className="article article-2">
      <div className="image-wrapper-mobile">
        <img src={props.img} className="image" />
      </div>
      <div className="content-wrapper">
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
          <br />
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      </div>
      <div className="image-wrapper">
        <img src={articleImg2} className="image" />
      </div>
    </div>
  );
};

const Horizontal = (props) => {
  // console.log("Horizontal", props.imgs);
  return (
    <div id="horizontal">
      {props.imgs.map((image, i) => {
        {
          /* console.log("images item", image); */
        }
        return (
          <div key={i} className="image-wrapper">
            <img src={image} className="image image-1" alt="" />
          </div>
        );
      })}
    </div>
  );
};

const Newsletter = (props) => {
  return (
    <div id="newsletter">
      <div className="title-wrapper">
        <h3>NEWSLETTER</h3>
      </div>
      <div className="forms-wrapper">
        <input placeholder="Email" />
        <button onClick={props.greetingFn}>SUBMIT</button>
      </div>
    </div>
  );
};

const App = () => {
  const showArticle = true;

  const greeting = () => {
    alert("email submitted!");
  };

  return (
    <div className="App">
      <Banner img={banner}></Banner>
      {showArticle ? <Article1 img={articleImg1} /> : <></>}
      {showArticle ? <Article2 img={articleImg2} /> : <></>}
      <Horizontal imgs={[img1, img2, img3, img4, img1]} />
      <Newsletter greetingFn={greeting} />
    </div>
  );
};

export default App;
