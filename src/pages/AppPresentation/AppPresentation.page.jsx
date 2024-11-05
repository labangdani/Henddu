import whitelogo from "../../assets/logos/logo_white.png"
import monitoringIcon from "../../assets/images/icons_monitoring.png"
import chartanalyticsIcon from "../../assets/images/chart_analytics.png"
import forecastVector from "../../assets/images/forecast_vector.png"
import dashboard11 from "../../assets/images/dashboard11.png"
import ButtonSpinner from "../../components/ButtonSpinner/ButtonSpinner"
import { useState } from "react"

function AppPresentation() {

  const [currentTab, setCurrentTab] = useState("1")

  return (
    <div className="">
      <div className="grid grid-rows-2 ">
        <div className="bg-[#0D7377] h-[400px]">
          <div className="flex justify-center mt-2 xl:mt-8 mb-10">
            <img className="xs:w-18 xs:h-8 sm:w-28 sm:h-10 lg:w-48 lg:h-16 xl:w-64 xl:h-20" src={whitelogo} alt="capture whitelogo" />
          </div>
        </div>
        <div className="bg-gray-100"> </div>
        <div className="absolute self-center bg-white rounded-lg shadow-xl p-5 my-20 mx-5 sm:mx-10 md:mx-20 lg:mx-32 xl:mx-56">
          <div className="flex justify-between mb-10 mx-5 lg:mx-40 xl:mx-48">
            {/* 1 */}
            <div >
              <button className="py-4 px-10 border-b-4 border-[#0D7377] " onClick={() => setCurrentTab("1")}>
                <div className="flex justify-center">
                  <img className="mb-2" src={monitoringIcon} alt="capture monitoringicon" />
                </div>
                <span className="capitalize text-gray-400 text-center">monitoring</span>
              </button>
            </div>

            {/* 2 */}
            <div>
              <button  onClick={() => setCurrentTab("2")} className={`py-4 px-10 border-b-4 ${currentTab === '2' ? 'border-[#0D7377]' : 'border-gray-500'} `}>
                <div className="flex justify-center">
                  <img className="mb-2" src={chartanalyticsIcon} alt="capture chartanalyticsIcon" />
                </div>
                <span className="capitalize text-gray-400 text-center">analysis</span>
              </button>
            </div>
            {/* 3 */}
            <div>
              <button className="py-4 px-10 border-b-4 border-[#0D7377] ">
                <div className="flex justify-center">
                  <img className="mb-2" src={forecastVector} alt="capture forecastVector" />
                </div>
                <span className="capitalize text-gray-400 text-center">forecast</span>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 mx-10 lg:mx-20 space-x-10">

            {currentTab === "1" && <div>
              <p className="font-bold xl:text-lg mb-5">Anticipate the future evolution of your indicators using sophisticated forecasting models.</p>
              <ul className="list-disc space-y-2 ml-5 xl:text-lg mb-10">
                <li><span className="text-gray-400">Short, medium, and long-term forecasts</span></li>
                <li><span className="text-gray-400">Choice of different forecasting models</span></li>
                <li><span className="text-gray-400">Visualization of confidence intervals</span></li>
                <li><span className="text-gray-400">Export of results</span></li>
              </ul>
              <ButtonSpinner stylebtn={"p-1 px-8 text-center rounded-md bg-[#108286] first-letter:uppercase cursor-pointer text-white"}>Explore</ButtonSpinner>
            </div>}

            {currentTab === "2" && <div> Test2</div>}

            <div className="flex justify-center">
              <img className=" w-full h-full object-contain" src={dashboard11} alt="capture dashboard11" />
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}

export default AppPresentation;
