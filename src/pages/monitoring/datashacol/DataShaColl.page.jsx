import TopBar from "../../../components/TopBar/TopBar"
import MenuBar from "../../../components/MenuBar/MenuBar"
import { LuFileDown } from "react-icons/lu";
import { RiArrowUpLine } from "react-icons/ri";
import SelectableTableHistory from "../../../components/SelectableTableHistory/SelectableTableHistory"
import { GoComment } from "react-icons/go";
import { BiEditAlt } from "react-icons/bi";
import { RiDeleteBinLine } from "react-icons/ri";
import { FaPaperclip } from "react-icons/fa6";
import { PiShareFat } from "react-icons/pi";






function DataShaColl() {
    return (
        <div>
            <div className="overflow-y-auto h-full overflow-hidden w-full">
                <div className="fixed w-full">
                    <TopBar />
                </div>
                <div className="flex pt-12">
                    <div className="fixed">
                        <MenuBar />
                    </div>
                    <div className="ml-20">
                        <div className="overflow-y-auto h-screen overflow-hidden bg-[#F1F1F1] p-7 w-full">
                            <div className="grid grid-cols-4 gap-4 w-full">
                                <div className="col-span-3 w-full">
                                    <div className="flex justify-between">
                                        <h1 className="text-[#103A5E] text-lg font-semibold">Data sharing & collaboration</h1>
                                        <div className="flex space-x-2">
                                            <div className="flex items-center bg-white border border-gray-300 rounded-lg px-3 py-1">
                                                <input
                                                    type="text"
                                                    placeholder="Search"
                                                    className="flex-grow text-sm text-gray-600 border-none outline-none"
                                                />
                                                <button>
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className="h-5 w-5 text-gray-600"
                                                        viewBox="0 0 24 24"
                                                        strokeWidth="2"
                                                        stroke="currentColor"
                                                        fill="none"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    >
                                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                        <circle cx="10" cy="10" r="7" />
                                                        <line x1="21" y1="21" x2="15" y2="15" />
                                                    </svg>
                                                </button>
                                            </div>
                                            <button className="bg-[#0D7377] rounded text-white text-sm px-4 flex items-center space-x-2">
                                                <RiArrowUpLine size={16} />
                                                <span> Upload</span>
                                            </button>
                                        </div>
                                    </div>
                                    <div className="bg-white border border-solid p-5 rounded mt-5">
                                        <h1 className="text-base font-semibold mb-4 pl-3">History</h1>
                                        <SelectableTableHistory />
                                    </div>
                                </div>
                                <div className="col-span-1 w-full">
                                    <div className="mt-12 bg-white rounded p-5">
                                        <div className="flex space-x-2 mb-4">
                                            <button className="bg-[#0D7377] rounded w-full text-white text-sm">share</button>
                                            <button className="p-2 bg-gray-500 text-white rounded">
                                                <LuFileDown />
                                            </button>
                                        </div>
                                        <hr />
                                        <div className="flex space-x-2 my-3">
                                            <button className="w-10 h-10 rounded-full bg-blue-300"></button>
                                            <button className="w-10 h-10 rounded-full bg-blue-300"></button>
                                            <button className="w-10 h-10 rounded-full bg-blue-300"></button>
                                            <button className="w-10 h-10 rounded-full bg-blue-300"></button>
                                            <button className="w-10 h-10 rounded-full bg-blue-300"></button>
                                        </div>
                                        <hr />
                                        <div className="flex justify-between my-3 text-xs">
                                            <span>2 Items Selected</span>
                                            <span>Select All</span>
                                        </div>
                                        <hr />
                                        <div className="mt-3 space-y-4 text-xs">
                                            <button className="flex space-x-3 items-center">
                                                <GoComment color="gray" size={20} />
                                                <span className="capitalize">add comment</span>
                                            </button>
                                            <button className="flex space-x-3 items-center">
                                                <BiEditAlt color="gray" size={20} />
                                                <span className="capitalize">rename</span>
                                            </button>
                                            <button className="flex space-x-3 items-center">
                                                <PiShareFat color="gray" size={20} />
                                                <span className="capitalize">move to...</span>
                                            </button>
                                            <button className="flex space-x-3 items-center">
                                                <FaPaperclip color="gray" size={18} />
                                                <span className="capitalize">copy to...</span>
                                            </button>
                                            <button className="flex space-x-3 items-center">
                                                <RiDeleteBinLine size={20} color="gray" />
                                                <span className="capitalize">delete</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DataShaColl;