import {Routes} from "react-router-dom";
import {Route} from "react-router-dom";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import Navbar from "./Components/Navbar";


function App() {
  return (
    <div className=" w-full overflow-hidden">   
     <Navbar/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products/:id" element={<ProductDetails />} />
    </Routes>
    </div>

  );
}

export default App;
