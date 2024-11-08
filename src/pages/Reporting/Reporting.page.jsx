import TopBar from "../../components/TopBar/TopBar"
import MenuBar from "../../components/MenuBar/MenuBar"


function Reporting() {
    return (
        <div>
            <TopBar />
            <div className="flex h-screen">
                <MenuBar />
                <div className="flex-auto relative flex flex-col">
                    reporting                </div>
            </div>
        </div>
    );
}

export default Reporting;