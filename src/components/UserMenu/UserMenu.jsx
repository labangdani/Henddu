import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import UserAvatar from '../../assets/images/user-avatar-32.png';
import { FaRegUser } from "react-icons/fa6";
import { IoSettingsOutline } from "react-icons/io5";
import { MdOutlineLogout } from "react-icons/md";


function UserMenu({ align = 'right' }) {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const trigger = useRef(null);
    const dropdown = useRef(null);

    // Toggle dropdown
    const toggleDropdown = (e) => {
        e.preventDefault();
        setDropdownOpen(!dropdownOpen);
    };

    // Close dropdown if clicking outside
    const clickHandler = (e) => {
        if (!dropdownOpen || dropdown.current.contains(e.target) || trigger.current.contains(e.target)) {
            return;
        }
        setDropdownOpen(false);
    };

    // Close dropdown on "Escape" key press
    const keyHandler = (e) => {
        if (dropdownOpen && e.keyCode === 27) {
            setDropdownOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('click', clickHandler);
        document.addEventListener('keydown', keyHandler);
        return () => {
            document.removeEventListener('click', clickHandler);
            document.removeEventListener('keydown', keyHandler);
        };
    }, [dropdownOpen]);

    return (
        <div className="relative inline-flex">
            <button
                ref={trigger}
                className="inline-flex justify-center items-center group"
                aria-haspopup="true"
                aria-expanded={dropdownOpen}
                onClick={toggleDropdown}
            >
                <img className="w-8 h-8 rounded-full" src={UserAvatar} width="32" height="32" alt="User" />
                <div className='ml-2  text-left'>
                    <div className="flex items-center truncate space-x-2">
                        <span className="truncate text-xs font-medium text-black">
                            John Doe
                        </span>

                        <svg
                            className="w-4 h-4 shrink-0 ml-1 fill-current text-black"
                            viewBox="0 0 12 12"
                        >
                            <path d="M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z" />
                        </svg>
                    </div>
                    <div className='text-[0.65rem] capitalize'>analyst</div>
                </div>

            </button>

            {dropdownOpen && (
                <div
                    ref={dropdown}
                    className={`origin-top-right z-10 absolute top-full min-w-28 bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden mt-1 ${align === 'right' ? 'right-0' : 'left-0'}`}
                >

                    <ul>
                        <li>
                            <Link
                                className="text-xs flex items-center py-1 px-3 space-x-2 hover:text-white hover:bg-[#103A5E]"
                                to="/settings/account"
                                onClick={() => setDropdownOpen(false)}
                            >
                                <FaRegUser />
                               <span>Profile</span> 
                            </Link>
                        </li>
                        <li>
                            <Link
                                className="text-xs flex items-center py-1 px-3 space-x-2 hover:text-white hover:bg-[#103A5E]"
                                to="/settings/account"
                                onClick={() => setDropdownOpen(false)}
                            >
                                <IoSettingsOutline />
                                <span>Settings</span>
                            </Link>
                        </li>
                        <li>
                            <Link
                                className="text-xs flex items-center py-1 px-3 space-x-2 hover:text-white hover:bg-[#103A5E]"
                                to="/signin"
                                onClick={() => setDropdownOpen(false)}
                            >
                                <MdOutlineLogout />
                                <span>Logout</span> 
                            </Link>
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
}

export default UserMenu;
