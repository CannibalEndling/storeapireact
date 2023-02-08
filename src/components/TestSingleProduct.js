import React from "react";
import "./SingleProduct.css";
import Swal from 'sweetalert2'



const TestSingleProduct = ({ id, title, price, description, image }) => {
    return(

    <div className="prod" id={id}>
 
      <div>
        <p className="title">{title}</p>
        <p className="description">{Readmore}</p>
        <p className="price">{price + " $"}</p>
      </div>
      <img
        className="image"
        style={{ width: 300, height: 300 }}
        src={image}
        alt={image}
      
      />
<button onClick={Readmore}
    >  Read More
    </button> 


      


    </div>
    )
};



// <button onClick={() => Swal.fire=({
//     title: {title},
//     text: {description},
//     icon: {image},
//     confirmButtonText: 'დახურვა',})
// }
// >  Read Description
// </button>









function Readmore({ title, description, image })  {
    return ( 
    <button onClick={() => Swal.fire={
        title: {title},
        text: {description},
        icon: {image},
        confirmButtonText: 'დახურვა',}
    }
    >  Read More
    </button> 
    )
    };





export {TestSingleProduct, Readmore}