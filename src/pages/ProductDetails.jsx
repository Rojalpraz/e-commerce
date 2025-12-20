import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useCart } from "../Contexts/CartContext";
function ProductDetails() {
    const[product, setProduct] = useState({});
    const{id}=useParams();
    const {addtoCart}=useCart();
 useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((response) => response.json())
      .then((data) => setProduct(data));
 },[id])


     
  return (
    <div className="max-w-7xl mx-auto  ">
      
      <div className="flex lg:mx-25 lg:mt-35 mx-7 mt-28 gap-10 flex-col lg:grid lg:grid-cols-2 lg:gap-14  ">
        <div className="md:h-[480px] h-[370px] border border-gray-300 rounded-lg p-5">
          <img
            className="w-full h-full object-contain"
            src={product.image}
          />
        </div>
        <div className="">
          <h1 className="font-bold text-2xl">{product.title}</h1>

          <div className="py-4 flex gap-8 items-center">
            <div className="font-semibold text-lg" >Price:<span className=" font-normal "> ${product.price}</span>
            </div>
            <div className="font-semibold text-lg"> Availability: <span className="font-normal">In Stock</span></div>
          </div>
          <div>Select Size:</div>
          <div className="grid-cols-5 space-x-3 pt-2 pb-5">
            <button className="bg-black rounded-full text-white px-5 py-3 hover:bg-blue-400 ">S</button>
            <button className="bg-black rounded-full text-white px-5 py-3  hover:bg-blue-400 ">M</button>
            <button className="bg-black rounded-full text-white px-5 py-3  hover:bg-blue-400 ">L</button>
            <button className="bg-black rounded-full text-white px-5 py-3  hover:bg-blue-400 ">XL</button>
            <button className="bg-black rounded-full text-white px-5 py-3  hover:bg-blue-400 ">XXL</button>
          </div>
          <span>{product.description}.</span>
          <div className="py-5">
          <button onClick={()=>addtoCart(product)} className="bg-black hover:bg-blue-600/70 px-15  py-3 lg:rounded-full w-full lg:w-auto text-white">Add To Cart</button></div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
