import React from "react";
import ClientLogoOne from '../../../assets/icon/about page icon/client-logo-01.jpg'
import ClientLogoTwo from '../../../assets/icon/about page icon/client-logo-02.jpg'
import ClientLogoThree from '../../../assets/icon/about page icon/client-logo-04.jpg'
import ClientLogoFour from '../../../assets/icon/about page icon/client-logo-06.jpg'
import ClientLogoFive from '../../../assets/icon/about page icon/client-logo-07.jpg'
import ClientLogoSix from '../../../assets/icon/about page icon/client-logo-08.jpg'
import ClientLogoSeven from '../../../assets/icon/about page icon/client-logo-10.jpg'
import ClientLogoEight from '../../../assets/icon/about page icon/client-logo-12.jpg'

function PartnarSection() {
  return (
    <div>
      <div className="w-10/12 mx-auto py-20 flex items-center justify-between">
        <div>
          <h1 className="text-3xl w-[200px] font-semibold">Who Will You Learn With?</h1>
          <p className="text-lg w-[230px] text-gray-500 mt-6">
            Lorem ipsum dolor sit amet, consectetur cing elit. Suspe ndisse
            suscipit sagittis leo sit met condimentum esti
          </p>
          <button
            className="btn px-10 py-8 text-lg border-none text-[#0071dc] hover:bg-[#0071dc] hover:text-white mt-6">
            View all partners
          </button>
        </div>

        <div className="flex items-center">
       <div className="grid grid-cols-4 gap-40">
       <img src={ClientLogoOne} alt="" />
        <img src={ClientLogoTwo} alt="" />
        <img src={ClientLogoThree} alt="" />
        <img src={ClientLogoFour} alt="" />
        <img src={ClientLogoFive} alt="" />
        <img src={ClientLogoSix} alt="" />
        <img src={ClientLogoSeven} alt="" />
        <img src={ClientLogoEight} alt="" />
       </div>
        </div>
      </div>
    </div>
  );
}

export default PartnarSection;
