import TopBar from "../../components/TopBar/TopBar"
import MenuBar from "../../components/MenuBar/MenuBar"
import Map from "../../components/map/Map";


function Dashboard() {
    return (
        <div>
            <TopBar />
            <div className="flex h-screen ">
                <div className="h-full overflow-hidden">
                    <MenuBar />
                </div>
                <div className="flex-auto ">
                    <Map />
                </div>
            </div>
        </div>
    );
}

export default Dashboard;