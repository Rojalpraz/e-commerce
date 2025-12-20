import Navbar from "../Components/Navbar";
import Banner from "../Components/Banner";
import Shop from "../Components/Shop";

import Footer from "../Components/Footer";
import Testimonials from "../Components/Testimonials";


function Home() {
  return (
    
      <div className="min-h-screen max-w-7xl mx-auto overflow-hidden bg-gray-100/40">
     
        <Banner />
        <Shop />
        <Testimonials />
       
        <Footer />
      </div>
   
  );
}

export default Home;
