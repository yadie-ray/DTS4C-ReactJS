// import React from "react";

const Horizontal = (props) => {
  // console.log("Horizontal", props.imgs);
  return (
    <div id="horizontal">
      {props.imgs.map((image, i) => {
        return (
          <div key={i} className="image-wrapper">
            <img src={image} className="image image-1" alt="" />
          </div>
        );
      })}
    </div>
  );
};

export default Horizontal;
