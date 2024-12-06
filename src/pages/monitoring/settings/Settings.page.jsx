import TopBar from "../../../components/TopBar/TopBar"
import MenuBar from "../../../components/MenuBar/MenuBar"
import bg_profil from "../../../assets/images/bg_profil.png"
import profil from "../../../assets/images/user-avatar-32.png"
import { FaLocationDot } from "react-icons/fa6";
import ButtonSpinner from "../../../components/ButtonSpinner/ButtonSpinner"
import passwordicon from "../../../assets/images/teenyicons_password-solid.png"


function Settings() {
    return (
        <div>
            <div className="overflow-y-auto h-full overflow-hidden w-full">
                <div className="fixed w-full">
                    <TopBar />
                </div>
                <div className="flex pt-12 w-full">
                    <div className="fixed">
                        <MenuBar />
                    </div>
                    <div className="ml-20 w-full p-5">
                        <h1 className="font-medium text-base">Profil</h1>

                        <div className="mt-5 w-full bg-white shadow-md rounded-md overflow-hidden">

                            <div className=" h-32 bg-cover bg-center" style={{ backgroundImage: `url(${bg_profil})` }}>
                            </div>
                                   <div className="-mt-12 ml-2">
                                    <img src={profil} alt="capture profil" className="w-24 h-24 rounded-full shadow-md" />
                                </div>

                            <div className="p-5 flex justify-between">
                                <div className="">
                                    <h1 className="font-medium">N. Adonis Loic</h1>
                                    <p className="text-gray-600 text-sm">Analysis</p>
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
                                        <input className="border px-2 py-1.5 w-full rounded-md mt-1 text-gray-500" type="text" value="Merhan Jillani" readOnly />
                                    </div>
                                    <div className="mb-3 w-full text-xs">
                                        <label className="font-medium capitalize" htmlFor="">organizational name</label>
                                        <br />
                                        <input className="border px-2 py-1.5 w-full rounded-md mt-1 text-gray-500" type="text" value="Lylus Inc" readOnly />
                                    </div>
                                    <div className="mb-3 w-full text-xs">
                                        <label className="font-medium capitalize" htmlFor="">user role</label>
                                        <br />
                                        <input className="border px-2 py-1.5 w-full rounded-md mt-1 text-gray-500" type="text" value="analyst" readOnly />
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
                                        <input className="border px-2 py-1.5 w-full rounded-md mt-1 text-gray-500" type="email" value="mehranjillani@gmail.com" readOnly />
                                    </div>
                                    <div className="mb-3 w-full text-xs">
                                        <label className="font-medium capitalize" htmlFor="">contact number</label>
                                        <br />
                                        <input className="border px-2 py-1.5 w-full rounded-md mt-1 text-gray-500" type="tel" value="0308-2689-597" readOnly />
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