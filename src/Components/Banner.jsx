import {CreditCard, MessageCircleMore, RotateCcw, Van} from "lucide-react";
import React from "react";

function Banner() {
  return (
    <section className="mx-auto max-w-7xl">
      <div className=" overflow-x-auto mt-13  ">
        <img
          src="https://marketplace.canva.com/EAGHC5NUD-Q/1/0/1600w/canva-black-and-white-modern-fashion-sale-banner-landscape-n7GVeIDu0Tg.jpg"
          alt="Fashion Sale Banner"
          className="w-full h-auto  object-contain"
        />
      </div>
      <div className="bg-white border-b rounded-md border-gray-200 shadow-md">
        <div className="lg:mx-10  lg:pt-15  lg:mb-15 lg:pl-0 my-5">
          <div className="grid grid-cols-2 gap-5 justify-items-center  lg:flex lg:justify-between lg:items-start lg:gap-2">
            <div className="  lg:flex lg:items-center lg:gap-2 ">
              <Van className="lg:w-9 lg:h-10 w-6 h-7 " />
              <div>
                <h1 className="font-semibold text-xs lg:text-lg">Free shipping</h1>
                <p className="text-[8px] lg:text-sm text-gray-600">
                  When you spend 150$ or more
                </p>
              </div>
            </div>
            <div className=" lg:flex lg:items-center lg:gap-2">
              <MessageCircleMore className="lg:w-9 lg:h-10  w-6 h-7 " />
              <div>
                <h1 className="font-semibold text-xs lg:text-lg">We are available 24/7</h1>
                <p className="text-[8px] lg:text-sm text-gray-600">
                  Need help? Contact us anytime
                </p>
              </div>
            </div>
            <div className=" lg:flex lg:items-center lg:gap-2">
              <RotateCcw className="lg:w-9 lg:h-10 w-6 h-7" />
              <div>
                <h1 className="font-semibold text-xs lg:text-lg">Satisfied or return</h1>
                <p className="text-[8px] lg:text-sm text-gray-600">
                  Easy 30-day return policy
                </p>
              </div>
            </div>
            <div className=" lg:flex lg:items-center lg:gap-2">
              <CreditCard className="lg:w-9 lg:h-10 w-6 h-7" />
              <div>
                <h1 className="font-semibold text-xs lg:text-lg">100% secure payment</h1>
                <p className="text-[8px] lg:text-sm text-gray-600">
                  Visa, Mastercard, Esewa, Paypal
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
/*      */
