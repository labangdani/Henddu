
// import React, { useState, useEffect } from 'react';
import { Carousel } from 'primereact/carousel';
import { MdLocationPin } from "react-icons/md";
import cityimage from '../../assets/images/Rectangle_2.png';
import "./Carousel.css"


export default function BasicDemo() {
    // const [products, setProducts] = useState([]);

    const responsiveOptions = [

        {
            breakpoint: '1024px',
            numVisible: 4,
            numScroll: 1
        },
        {
            breakpoint: '768px',
            numVisible: 2,
            numScroll: 1
        },
        {
            breakpoint: '575px',
            numVisible: 1,
            numScroll: 1
        }
    ];

    const cyties = [
        {
            id: 1,
            cityImage: cityimage,
            cityName: "youpougon",
            aqiNumber: 150
        },
        {
            id: 2,
            cityImage: cityimage,
            cityName: "cocody",
            aqiNumber: 154
        },
        {
            id: 3,
            cityImage: cityimage,
            cityName: "abidjan",
            aqiNumber: 45
        },
        {
            id: 4,
            cityImage: cityimage,
            cityName: "san-pédro",
            aqiNumber: 200
        },

    ];

    // useEffect(() => {
    //     ProductService.getProductsSmall().then((data) => setProducts(data.slice(0, 9)));
    // }, []);

    const onClickHandle = () => {
        // navigate(to,)
        console.log('good')
    };

    const cityCard = (city) => {
        return (

            <div
                onClick={onClickHandle} className="bg-white rounded-lg flex space-x-4 items-center p-2 w-44 shadow shadow-slate-200 mx-2">
                <div>
                    <img src={city.cityImage} alt="capture city" />
                </div>
                <div>
                    <h1 className="font-bold text-md">{city.cityName}</h1>
                    <div className="flex space-x-1">
                        <MdLocationPin size={10} color="#0D7377" />
                        <span className="text-[0.50rem]">{city.aqiNumber} AQI</span>
                    </div>
                </div>
            </div>


        );
    };

    return (
        <div className="">
            <Carousel value={cyties} numVisible={4} numScroll={4} responsiveOptions={responsiveOptions} itemTemplate={cityCard} showIndicators={false} />
        </div>
    )
}
