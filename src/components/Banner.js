import { useEffect, useState } from "react";
import axios from "axios";

const Banner = (props) => {
  const [image, setImage] = useState("");

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/photos/1")
      .then((response) => setImage(response.data.url))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div id="banner">
      {/* <img src={props.img} className="image" /> */}
      <img src={image} className="image" />
    </div>
  );
};

export default Banner;
