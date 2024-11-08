import TopBar from "../../components/TopBar/TopBar"
import MenuBar from "../../components/MenuBar/MenuBar"


function DataShaColl() {
    return (
        <div>
            <TopBar />
            <div className="flex h-screen">
                <MenuBar />
                <div className="flex-auto relative flex flex-col">
                </div>
            </div>
        </div>
    );
}

export default DataShaColl;