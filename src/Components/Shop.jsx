import axios from "axios";
import {Search, ShoppingCart, SquarePlus} from "lucide-react";
import React from "react";
import {useState, useEffect} from "react";
import {useCart} from "../Contexts/CartContext";
import { useNavigate } from "react-router-dom";


function Shop() {
  const [cards, setCards] = useState([]);
  const [search, setSearch] = useState("");
  const {addtoCart} = useCart();
 const navigate = useNavigate();
  

  function handleSearch(event) {
    setSearch(event.target.value);
  }

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => setCards(response.data));
  }, []);

  const handleimageclick = (id) => {
    navigate(`/products/${id}`);
  };

  return (
    <section className="max-w-7xl mx-auto">
      <div className="mx-7 lg:my-14 my-10">
        <h1 className="text-center font-bold text-2xl">ALL PRODUCTS</h1>
        <div className="flex-1 relative mt-8">
          <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search products..."
            value={search}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg"
            onChange={handleSearch}
          />
        </div>
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mt-8">
          {cards
            .filter((card) =>
              card.title.toLowerCase().includes(search.toLowerCase())
            )
            .map((card) => (
              <div
                key={card.id}
              
                className="bg-white shadow-lg border border-gray-400 shadow-neutral-400 rounded-2xl overflow-hidden flex flex-col"
              >
                <div className=" h-24 md:h-48 hover:cursor-pointer hover:scale-110 transition-all  relative bg-gray-100 flex items-center justify-center p-2 md:p-4">
                  <img
                  onClick={() => handleimageclick(card.id)}
                    src={card.image}
                    alt={card.title}
                    className="max-h-full max-w-full object-contain"
                  />
                  <button
                    className="md:hidden absolute top-1 right-1"
                    onClick={() => addtoCart(card)}
                  >
                    <SquarePlus className="h-8 w-8 fill-gray-500 text-white" />
                  </button>
                </div>
                <div className="md:p-4 px-4 py-2 flex flex-col grow">
                  <h3 className="font-semibold text-xs md:text-sm mb-2 line-clamp-2 h-8.5 md:h-10">
                    {card.title}
                  </h3>

                  <p className=" text-sm md:text-lg font-bold text-gray-900 mb-3">
                    ${card.price}
                  </p>
                  <button
                    className="w-full hidden md:flex bg-black text-white py-2 px-4 rounded-lg hover:bg-gray-800 transition-colors items-center justify-center gap-2 mt-auto"
                    onClick={() => addtoCart(card)}
                  >
                    <ShoppingCart className="h-4 w-4" />
                    <span className="lg:text-sm md:text-xs">Add to Cart</span>
                  </button>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}

export default Shop;
