import React from "react";
import { MdLocationPin } from "react-icons/md";
import cityimage from '../../assets/images/Rectangle_2.png';


const CityCard = () => {
  return (
    <div>
      <div className="bg-white rounded-lg flex space-x-4 items-center p-2 w-48 shadow shadow-slate-200">
        <div>
          <img src={cityimage} alt="capture city" />
        </div>
        <div>
          <h1 className="font-bold text-md">Abidjan</h1>
          <div className="flex space-x-1">
            <MdLocationPin size={10} color="#0D7377"/>
            <span className="text-[0.50rem]">150 AQI</span>
          </div>
        </div>
      </div>
    </div>

  );
};

export default CityCard;