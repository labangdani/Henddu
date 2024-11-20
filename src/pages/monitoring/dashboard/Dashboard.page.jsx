import TopBar from "../../../components/TopBar/TopBar"
import MenuBar from "../../../components/MenuBar/MenuBar"
import Map from "../../../components/map/Map";
import CityCard from "../../../components/CityCard/CityCard"


function Dashboard() {
    return (
        <div>
            <TopBar />
            <div className="flex top-12 fixed w-full">
                <MenuBar />
                {/* <div className="overflow-y-auto h-screen overflow-hidden"> */}
                <div className="flex-auto">
                    <div className="flex justify-between my-4 mx-5">
                        <CityCard />
                        <CityCard />
                        <CityCard />
                        <CityCard />
                    </div>
                    <Map />
                </div>
                {/* </div> */}
            </div>
        </div>
    );
}

export default Dashboard;