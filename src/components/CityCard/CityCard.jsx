import React from "react";
import { MdLocationPin } from "react-icons/md";
// import cityimage from '../../assets/images/Rectangle_2.png';


const CityCard = ({ cityImage, cityName, aqiNumber }) => {

  const onClickHandle = () => {
    // navigate(to,)
    console.log(cityName)
  }

  return (
    <div>

      <div onClick={onClickHandle} className="bg-white rounded-lg flex space-x-4 items-center p-2 w-48 shadow shadow-slate-200">
        <div>
          <img src={cityImage} alt="capture city" />
        </div>
        <div>
          <h1 className="font-bold text-md">{cityName}</h1>
          <div className="flex space-x-1">
            <MdLocationPin size={10} color="#0D7377" />
            <span className="text-[0.50rem]">{aqiNumber} AQI</span>
          </div>
        </div>
      </div>

     

    </div>

  );
};

export default CityCard;