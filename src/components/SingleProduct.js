import React from "react";
import "./SingleProduct.css";


const SingleProduct = ({ id, title, price, description, image }) => {
    return(
    <div className="prod" id={id}>
      <div>
        <p className="title">{title}</p>
        <p className="description">{description}</p>
        <p className="price">{price}</p>
      </div>
      <img
        className="image"
        style={{ width: 300, height: 300 }}
        src={image}
        alt={image}
      />
      


    </div>
    )
};


export default SingleProduct