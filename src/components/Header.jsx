/* eslint-disable react/prop-types */
import { CgMenuBoxed } from 'react-icons/cg';
import avatar from "../assets/avatar.png"
import { FaRegBell } from "react-icons/fa";
import Search from "../reusable_components/SearchBar";
import { Link } from 'react-router-dom';

function Header({ setSidebarHandler, sidebarhandler, setSidebarHandlerMobile, sidebarhandlerMobile }) {

    return (
        <>
            {/* desktop */}
            <div className="hidden h-20 lg:flex justify-between shadow-sm p-5">
                <div className="flex items-center gap-3">
                    <button
                        className="flex-none text-bg1 lg:block hidden"
                        onClick={() => setSidebarHandler(!sidebarhandler)}
                    >
                        <CgMenuBoxed className="" size={44} />
                    </button>
                    {/* <Search /> */}
                </div>
                <div className="flex items-center gap-3">
                    <div className="text-text">
                        <FaRegBell size={25} />
                    </div>
                    <Link to="/profile" >
                        <img
                            src={avatar}
                            className="w-10 h-10 p-1 rounded-full ring-2 ring-text dark:ring-text cursor-pointer"
                            alt="not found"
                        />
                    </Link>
                    <p className='text-text'>KV</p>
                </div>

            </div>

            {/* mobile & tab */}
            <div className='flex h-16 lg:hidden justify-between items-center shadow-sm p-3'>
                <div className="flex items-center gap-3">
                   
                    <Link to="/profile" >
                        <img
                            src={avatar}
                            className="w-10 h-10 p-1 rounded-full ring-2 ring-text dark:ring-text cursor-pointer"
                            alt="not found"
                        />
                    </Link>
                    <p className='text-text'>KV</p>
                    <div className="text-text">
                        <FaRegBell size={25} />
                    </div>
                </div>

                <div className='flex justify-end'>
                    {sidebarhandlerMobile ? (
                        <button
                            className='text-text'
                            onClick={() => setSidebarHandlerMobile(!sidebarhandlerMobile)}
                        >
                            <CgMenuBoxed className='' size={30} />
                        </button>
                    ) : (
                        <button
                            className='font-extrabold text-3xl text-text'
                            onClick={() => setSidebarHandlerMobile(!sidebarhandlerMobile)}
                        >
                            X
                        </button>
                    )}
                </div>
            </div>
        </>
    );
}

export default Header;
