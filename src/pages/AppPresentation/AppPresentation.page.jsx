import whitelogo from "../../assets/logos/logo_white.png"
import activemonitoringIcon from "../../assets/images/icons_monitoring.png"
import monitoringIcon from "../../assets/images/grayicons_monitoring.png"
import activechartanalyticsIcon from "../../assets/images/icons_chartanalytics.png"
import chartanalyticsIcon from "../../assets/images/grayicons_chartanalytics.png"
import activeforecastIcon from "../../assets/images/icons_forecast.png"
import forecastIcon from "../../assets/images/grayicons_forecast.png"
import dashboard11 from "../../assets/images/dashboard11.png"
import ButtonSpinner from "../../components/ButtonSpinner/ButtonSpinner"
import { useState } from "react"
import TabButton from "../../components/Tab/TabButton"
import { useNavigate } from "react-router-dom";



const MONITORING_TAB = "1"
const ANALYSIS_TAB = "2"
const FORECAST_TAB = "3"

function AppPresentation() {

  const [currentTab, setCurrentTab] = useState("1")

  const navigate = useNavigate();

  const onClickHandle = () => {
    console.log("navigate")
    navigate("/monitoring/dashbord");
  }

  return (
    <div>
      <div className="grid grid-rows-2 h-screen ">
        <div className="bg-[#0D7377]">
          {/* <div className="flex justify-center mt-2 xl:mt-8 mb-10">
            <img className="xs:w-18 xs:h-8 sm:w-28 sm:h-10 lg:w-48 lg:h-16 xl:w-64 xl:h-20" src={whitelogo} alt="capture whitelogo" />
          </div> */}
        </div>
        <div className="bg-gray-100"> </div>
        <div className="absolute self-center ">
          <div className="flex justify-center mb-6">
            <img className="h-14 object-contain" src={whitelogo} alt="capture whitelogo" />
          </div>
          <div className="bg-white rounded-lg shadow-xl px-4 py-8 mx-5 sm:mx-10 md:mx-20 lg:mx-80">
            <div className="flex justify-between mb-10 mx-5 lg:mx-20 text-sm">
              {/* 1 */}
              {/* <button onClick={() => setCurrentTab("1")} className={`px-6 py-4 border-b-4 ${currentTab === '1' ? 'border-[#0D7377] text-[#0D7377]' : 'border-gray-500 text-gray-400'} `}>
                <div className="flex justify-center">
                  <img className="mb-2 w-10" src={monitoringIcon} alt="capture monitoringicon" />
                </div>
                <span className="capitalize text-center">monitoring</span>
              </button> */}

              <TabButton
                title={"monitoring"}
                tabId={MONITORING_TAB}
                icon={monitoringIcon}
                activeIcon={activemonitoringIcon}
                currentTab={currentTab}
                setCurrentTab={setCurrentTab} />

              <TabButton
                title={"analysis"}
                tabId={ANALYSIS_TAB}
                icon={chartanalyticsIcon}
                activeIcon={activechartanalyticsIcon}
                currentTab={currentTab}
                setCurrentTab={setCurrentTab} />

              <TabButton
                title={"forecast"}
                tabId={FORECAST_TAB}
                icon={forecastIcon}
                activeIcon={activeforecastIcon}
                currentTab={currentTab}
                setCurrentTab={setCurrentTab} />

              {/* 2 */}
              {/* <button onClick={() => setCurrentTab("2")} className={`px-6 py-4 border-b-4 ${currentTab === '2' ? 'border-[#0D7377] text-[#0D7377]' : 'border-gray-500 text-gray-400'} `}>
                <div className="flex justify-center">
                  <img className="mb-2 w-10" src={chartanalyticsIcon} alt="capture chartanalyticsIcon" />
                </div>
                <span className="capitalize text-center">analysis</span>
              </button> */}
              {/* 3 */}
              {/* <button onClick={() => setCurrentTab("3")} className={`px-6 py-4 border-b-4 ${currentTab === '3' ? 'border-[#0D7377] text-[#0D7377]' : 'border-gray-500 text-gray-400'} `}>
                <div className="flex justify-center">
                  <img className="mb-2 w-10" src={forecastVector} alt="capture forecastVector" />
                </div>
                <span className="capitalize text-center">forecast</span>
              </button> */}
            </div>

            <div className="grid grid-cols-2 mx-2.5 lg:mx-5 space-x-10">

              {currentTab === "1" && <div className="text-sm xl:text-lg">
                <p className="font-bold mb-5">Track key indicators in real-time. Access up-to-date data on your variou.</p>
                <ul className="list-disc space-y-2 ml-5 mb-10">
                  <li><span className="text-gray-400">Live value display</span></li>
                  <li><span className="text-gray-400">Alerts for threshold exceedances</span></li>
                  <li><span className="text-gray-400">Data history</span></li>
                  <li><span className="text-gray-400">Comparison between different measurement points</span></li>
                </ul>
                <ButtonSpinner onclick={onClickHandle} stylebtn={"p-1 px-8 text-center text-xs rounded-md bg-[#108286] first-letter:uppercase cursor-pointer text-white"}>Explore</ButtonSpinner>
              </div>}

              {currentTab === "2" && <div className="text-sm xl:text-lg">
                <p className="font-bold mb-5">Deeply explore your data to identify trends, anomalies, and correlations.</p>
                <ul className="list-disc space-y-2 ml-5 mb-10">
                  <li><span className="text-gray-400">Custom report creation</span></li>
                  <li><span className="text-gray-400">Statistical analysis</span></li>
                  <li><span className="text-gray-400">Identification of factors influencing results</span></li>
                  <li><span className="text-gray-400">Export of results</span></li>
                </ul>
                <ButtonSpinner stylebtn={"p-1 px-8 text-center text-xs rounded-md bg-[#108286] first-letter:uppercase cursor-pointer text-white"}>Explore</ButtonSpinner>
              </div>}

              {currentTab === "3" && <div className="text-sm xl:text-lg">
                <p className="font-bold mb-5">Anticipate the future evolution of your indicators using sophisticated forecasting models.</p>
                <ul className="list-disc space-y-2 ml-5 mb-10">
                  <li><span className="text-gray-400">Short, medium, and long-term forecasts</span></li>
                  <li><span className="text-gray-400">Choice of different forecasting models</span></li>
                  <li><span className="text-gray-400">Visualization of confidence intervals</span></li>
                  <li><span className="text-gray-400">Export of results</span></li>
                </ul>
                <ButtonSpinner stylebtn={"p-1 px-8 text-center text-xs rounded-md bg-[#108286] first-letter:uppercase cursor-pointer text-white"} >Explore</ButtonSpinner>
              </div>}

              <div className="flex justify-center">
                <img className=" w-full h-full object-contain" src={dashboard11} alt="capture dashboard11" />
              </div>
            </div>
          </div>
        </div>


      </div>
    </div>

  );
}

export default AppPresentation;
