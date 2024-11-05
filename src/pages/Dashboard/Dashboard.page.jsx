import TopBar from "../../components/TopBar/TopBar"
import MenuBar from "../../components/MenuBar/MenuBar"


function Dashboard() {
    return (
        <div>
            <TopBar />
            <div class="flex h-full">
                <MenuBar />

                <div
                    class=" bg-gray-400 flex flex-col flex-1 overflow-x-hidden"
                >
                    <main class="grow">
                    </main>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;