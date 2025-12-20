import {Star} from "lucide-react";
import React from "react";

function Testimonials() {
  const details = [
    {
      name: "Rafael Stokes",
      Description:
        "Amazing service and fast delivery! Got my new phone in perfect condition. Will definitely shop here again!",
      pic: "https://websitedemos.net/electronic-store-04/wp-content/uploads/sites/1055/2022/03/electronic-store-reviewer-avatar-image-3.jpg",
    },
    {
      name: "Rafael Stokes",
      Description:
        " Highly recommend! My laptop arrived ahead of time and customer care was super helpful",
      pic: "https://websitedemos.net/electronic-store-04/wp-content/uploads/sites/1055/2022/03/electronic-store-reviewer-avatar-image-1.jpg",
    },
    {
      name: "Johnathan Goldberg",
      Description:
        "Quality products, fair prices, and lightning-fast delivery. My go-to electronics store!",
      pic: "https://websitedemos.net/electronic-store-04/wp-content/uploads/sites/1055/2022/03/electronic-store-reviewer-avatar-image-6.jpg",
    },
    {
      name: "Olive Borer",
      Description:
        "Smooth experience from browsing to delivery. Great deals and genuine gadgets!",
      pic: "https://websitedemos.net/electronic-store-04/wp-content/uploads/sites/1055/2022/03/electronic-store-reviewer-avatar-image-2.jpg",
    },
    {
      name: "Priscilla Doe",
      Description:
        "Impressed with the range and support. Bought a smart TV and the setup help was a bonus!",
      pic: "https://websitedemos.net/electronic-store-04/wp-content/uploads/sites/1055/2022/03/electronic-store-reviewer-avatar-image-5.jpg",
    },
    {
      name: "Joseph Reinger",
      Description:
        "Authentic products and great after-sales service. A reliable store for all electronics!",
      pic: "https://websitedemos.net/electronic-store-04/wp-content/uploads/sites/1055/2022/03/electronic-store-reviewer-avatar-image-4.jpg",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto  my-15">
      <div className="text-center font-bold text-2xl">
        What is everyone saying?
      </div>

      <div className="mx-10 grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
        {details.map((item, index) => (
          <div
            key={index}
            className="bg-white border  border-gray-200 rounded-md shadow-lg pt-5 pb-8 px-7"
          >
            <div className="flex flex-col  pt-4 px-2 ">
            <div className="flex mb-2 ">
              <Star className="w-4 h-4" fill="gold" />
              <Star className="w-4 h-4" fill="gold" />
              <Star className="w-4 h-4" fill="gold" />
              <Star className="w-4 h-4" fill="gold" />
              <Star className="w-4 h-4" fill="gold" />
            </div>
           
              <p className="text-base text-gray-500 mb-4">{item.Description}</p>
              </div>
              <div className="flex gap-3 items-center">
                <img className="w-10 h-10 rounded-full " src={item.pic} />
                <span className="font-medium">{item.name}</span>
             
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
