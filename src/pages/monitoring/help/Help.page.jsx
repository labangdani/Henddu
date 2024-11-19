import TopBar from "../../../components/TopBar/TopBar"
import MenuBar from "../../../components/MenuBar/MenuBar"


function Help() {
    return (
        <div>
            <TopBar />
            <div className="flex top-12 fixed ">
                <MenuBar />
                <div className="overflow-y-auto h-screen overflow-hidden flex-auto bg-[#F1F1F1] p-5">
                    <h1>Help</h1>
                    <div className="bg-white">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa quod iure magnam minus nostrum at! Quo animi suscipit enim, autem tempora vitae possimus beatae asperiores natus nostrum sapiente praesentium omnis.
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Help;