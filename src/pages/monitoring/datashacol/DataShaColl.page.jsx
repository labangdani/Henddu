import TopBar from "../../../components/TopBar/TopBar"
import MenuBar from "../../../components/MenuBar/MenuBar"
import { LuFileDown } from "react-icons/lu";
import { RiArrowUpLine } from "react-icons/ri";



function DataShaColl() {
    return (
        <div>
            <TopBar />
            <div className="flex top-12 fixed w-full">
                <div>
                    <MenuBar />
                </div>
                <div className="overflow-y-auto h-screen overflow-hidden bg-[#F1F1F1] p-7 w-full">
                    <div className="grid grid-cols-4 gap-2 ">
                        <div className="col-span-3 w-full">
                            <div className="flex justify-between">
                                <h1 className="text-[#103A5E] text-lg font-semibold">Data sharing & collaboration</h1>
                                <div className="flex space-x-2">
                                    <div >
                                        <input
                                            type="search"
                                            class="relative m-0 block flex-auto rounded border border-solid bg-white bg-clip-padding px-3 py-1 text-base font-normal leading-[1.6] text-surface outline-none transition duration-200 ease-in-out placeholder:text-neutral-500 "
                                            placeholder="Search"
                                            aria-label="Search"
                                            id="exampleFormControlInput2"
                                            aria-describedby="button-addon2" />
                                    </div>
                                    <button className="bg-[#0D7377] rounded text-white text-sm px-4 flex items-center space-x-2">
                                        <RiArrowUpLine size={16} />
                                        <span> Upload</span>
                                    </button>
                                </div>
                            </div>
                            <div className="bg-white border border-solid p-5 rounded mt-5">
                                <h1 className="text-base font-medium mb-4">History</h1> 

                           </div>
                        </div>
                        <div className="col-span-1 bg-white rounded p-5 mt-14">
                            <div className="flex space-x-2 mb-4">
                                <button className="bg-[#0D7377] rounded w-full text-white text-sm">share</button>
                                <button className="p-2 bg-gray-500 text-white rounded">
                                    <LuFileDown />
                                </button>
                            </div>
                            <hr />
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
}

export default DataShaColl;