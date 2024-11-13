import TopBar from "../../components/TopBar/TopBar"
import MenuBar from "../../components/MenuBar/MenuBar"
import bg_profil from "../../assets/images/bg_profil.png"
import profil from "../../assets/images/profile.webp"
import { FaLocationDot } from "react-icons/fa6";
import ButtonSpinner from "../../components/ButtonSpinner/ButtonSpinner"
import passwordicon from "../../assets/images/teenyicons_password-solid.png"


function Settings() {
    return (
        <div>
            <TopBar />
            <div className="fixed top-12 w-full">
                <div className="flex w-full h-screen bg-[#F1F1F1]">
                    <MenuBar />
                    <div className="flex-auto w-full p-5 overflow-y-auto h-screen overflow-hidden">
                        <h1 className="font-medium text-base">Profil</h1>

                        <div class="mt-5 w-full bg-white shadow-md rounded-md overflow-hidden">

                            <div class="relative h-32 bg-cover bg-center" style={{ backgroundImage: `url(${bg_profil})` }}>

                                <div class="absolute left-5 bottom-0 transform translate-y-1/2">
                                    <img src={profil} alt="Profile Picture" class="w-24 h-24 rounded-full border-4 border-white shadow-md" />
                                </div>
                            </div>

                            <div class="p-5 flex justify-between">
                                <div class="mt-10">
                                    <h1 class="font-medium">N. Adonis Loic</h1>
                                    <p class="text-gray-600 text-sm">Analysis</p>
                                    <div className="flex items-center space-x-1 text-sm text-gray-500">
                                        <div className="flex justify-center"><FaLocationDot className="" size={14} /></div>
                                        <span>Toronto, CA</span>
                                    </div>
                                </div>

                                <div className="flex items-end">
                                    <ButtonSpinner stylebtn="rounded-md bg-[#0D7377] p-2 px-3 text-[0.65rem] text-white capitalize">edit profile</ButtonSpinner>
                                </div>
                            </div>
                        </div>


                        <div className="grid grid-cols-2 gap-5 mt-7 ">
                            <div className="bg-white py-5 px-3 rounded-md border shadow">
                                <h1 className="capitalize text-base mb-2">personal details</h1>
                                <hr />
                                <div className="px-3 mt-4" >
                                    <div className="mb-3 w-full text-xs">
                                        <label className="font-medium capitalize" htmlFor="">full name</label>
                                        <br />
                                        <input className="border px-2 py-1.5 w-full rounded-md mt-1 text-gray-500" type="text" value="Merhan Jillani" readonly />
                                    </div>
                                    <div className="mb-3 w-full text-xs">
                                        <label className="font-medium capitalize" htmlFor="">organizational name</label>
                                        <br />
                                        <input className="border px-2 py-1.5 w-full rounded-md mt-1 text-gray-500" type="text" value="Lylus Inc" readonly />
                                    </div>
                                    <div className="mb-3 w-full text-xs">
                                        <label className="font-medium capitalize" htmlFor="">user role</label>
                                        <br />
                                        <input className="border px-2 py-1.5 w-full rounded-md mt-1 text-gray-500" type="text" value="analyst" readonly />
                                    </div>
                                </div>
                            </div>
                            <div className="bg-white py-5 px-3 rounded-md border shadow">
                                <h1 className="capitalize text-base mb-2">contact details</h1>
                                <hr />
                                <div className="px-3 mt-4" >
                                    <div className="mb-3 w-full text-xs">
                                        <label className="font-medium capitalize" htmlFor="">email address</label>
                                        <br />
                                        <input className="border px-2 py-1.5 w-full rounded-md mt-1 text-gray-500" type="email" value="mehranjillani@gmail.com" readonly />
                                    </div>
                                    <div className="mb-3 w-full text-xs">
                                        <label className="font-medium capitalize" htmlFor="">contact number</label>
                                        <br />
                                        <input className="border px-2 py-1.5 w-full rounded-md mt-1 text-gray-500" type="tel" value="0308-2689-597" readonly />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white mt-7 rounded-md border grid grid-cols-3 divide-x p-10 mb-40">
                            <div className="self-center">
                                <div className="flex justify-center">
                                    <div className="">
                                        <img src={passwordicon} alt="capture passwordicon" />
                                        <span>Password</span>
                                    </div>
                                </div>
                            </div>

                            <div className="col-span-2">
                                <div className="px-10 w-full" >
                                    <div className="mb-3 w-full text-xs">
                                        <label className="font-medium capitalize" htmlFor="">current password</label>
                                        <br />
                                        <input className="border px-2 py-1.5 w-full rounded-md mt-1 text-gray-500" type="password" placeholder="********" />
                                    </div>
                                    <div className="mb-3 w-full text-xs">
                                        <label className="font-medium capitalize" htmlFor="">new password</label>
                                        <br />
                                        <input className="border px-2 py-1.5 w-full rounded-md mt-1 text-gray-500" type="password" placeholder="********" />
                                    </div>
                                    <div className="mb-3 w-full text-xs">
                                        <label className="font-medium capitalize" htmlFor="">confirm new password</label>
                                        <br />
                                        <input className="border px-2 py-1.5 w-full rounded-md mt-1 text-gray-500" type="password" placeholder="********" />
                                    </div>
                                    <ButtonSpinner stylebtn="rounded-md bg-[#0D7377] p-2 px-3 text-[0.65rem] text-white capitalize">update password</ButtonSpinner>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    );
}

export default Settings;