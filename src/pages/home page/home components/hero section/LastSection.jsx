import React from "react";
import ComputingLogo from "../../../../assets/icon/computing.png";
import CertificateLogo from "../../../../assets/icon/certificate.png"
import AcademicLogo from "../../../../assets/icon/academic.png"
import ManagerLogo from "../../../../assets/icon/manager.png"

function LastSection() {
  return (
    <div className="bg-[#0071DC] py-5">
      <div className="w-10/12 mx-auto flex items-center justify-between">
        <div className="flex items-center gap-4">
          <img className="w-[50px]" src={ComputingLogo} alt="" />
          <h1 className="text-2xl w-[200px] font-semibold text-gray-100">
            Learn The Essential Skills
          </h1>
        </div>
        <div className="flex items-center gap-4">
          <img className="w-[50px]" src={CertificateLogo} alt="" />
          <h1 className="text-2xl w-[200px] font-semibold text-gray-100">
          Earn Certificates And Degrees
          </h1>
        </div>
        <div className="flex items-center gap-4">
          <img className="w-[50px]" src={AcademicLogo} alt="" />
          <h1 className="text-2xl w-[250px] font-semibold text-gray-100">
          Get Ready for The Next Career
          </h1>
        </div>
        <div className="flex items-center gap-4">
          <img className="w-[50px]" src={ManagerLogo} alt="" />
          <h1 className="text-2xl w-[280px] font-semibold text-gray-100">
          Master at Different Areas
          </h1>
        </div>
      </div>
    </div>
  );
}

export default LastSection;
