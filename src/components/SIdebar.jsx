/* eslint-disable react/prop-types */
import { Link, useLocation } from 'react-router-dom';
import { FaHome, FaUserTie } from 'react-icons/fa';
import { PiHandDeposit, PiHandWithdraw, PiUserListBold } from 'react-icons/pi';
import { RiListOrdered2 } from 'react-icons/ri';
import { GrSystem } from "react-icons/gr";
import { IoBusiness } from "react-icons/io5";

function Sidebar({ sidebarhandler, sidebarhandlerMobile, setSidebarHandlerMobile }) {
    const location = useLocation();

    const getLinkClass = (path) => {
        return location.pathname === path
            ? 'px-2 py-2 hover:px-2 hover:py-2 flex gap-2 bg-white text-black rounded-md'
            : 'px-2 py-2 hover:px-2 hover:py-2 flex gap-2 text-white hover:bg-white hover:text-black hover:rounded-md';
    };
    return (
        <>
            {/* Desktop Sidebar */}
            <div className={`bg-[#5f33a6] fixed lg:block hidden h-full  w-72 shadow-2xl z-40 transform transition-transform duration-300 ease-in-out ${sidebarhandler ? 'translate-x-0' : '-translate-x-full'}`}>
                <div className='flex items-center justify-center border-b-[1px] border-border mt-[1px] h-20'>
                    {/* <img className='' width={150} src={logo} alt="logo not found" /> */}Logo
                </div>
                <ul className='py-4 '>
                    <li className='py-2 px-2'>
                        <Link to="/" className={getLinkClass('/')}>
                            <button><FaHome size={20} /></button>
                            <button className="text-nowrap  font-medium">Dashboard</button>
                        </Link>
                    </li>
                    <li className='py-2 px-2'>
                        <Link to="/userslist" className={getLinkClass('/userslist')}>
                            <button><PiUserListBold size={22} />
                            </button>
                            <button className="text-nowrap  font-medium">Users </button>
                        </Link>
                    </li>
                    <li className='py-2 px-2'>
                        <Link to="/agentlist" className={getLinkClass('/agentlist')}>
                            <button><FaUserTie size={20} />
                            </button>
                            <button className="text-nowrap  font-medium">Agents</button>
                        </Link>
                    </li>
                    <li className='py-2 px-2'>
                        <Link to="/orderhistory" className={getLinkClass('/orderhistory')}>
                            <button><RiListOrdered2 size={20} />
                            </button>
                            <button className="text-nowrap  font-medium">Order History</button>
                        </Link>
                    </li>
                    <li className='py-2 px-2'>
                        <Link to="/payin" className={getLinkClass('/payin')}>
                            <button><PiHandDeposit size={20} />
                            </button>
                            <button className="text-nowrap font-medium">Pay in</button>
                        </Link>
                    </li>
                    <li className='py-2 px-2'>
                        <Link to="/withdrawal" className={getLinkClass('/withdrawal')}>
                            <button ><PiHandWithdraw  size={20} />
                            </button>
                            <button className="text-nowrap font-medium">Withdrawal</button>
                        </Link>
                    </li>
                    <li className='py-2 px-2'>
                        <Link to="/systemuser" className={getLinkClass('/systemuser')}>
                            <button><GrSystem size={20} />
                            </button>
                            <button className="text-nowrap  font-medium">System User</button>
                        </Link>
                    </li>
                    <li className='py-2 px-2'>
                        <Link to="/businesssetup" className={getLinkClass('/businesssetup')}>
                            <button><IoBusiness size={20} />
                            </button>
                            <button className="text-nowrap  font-medium">Business Setup</button>
                        </Link>
                    </li>
                </ul>
            </div>

            {/* Mobile Sidebar */}
            <div
                className={`bg-bg1 fixed block lg:hidden w-64 h-full shadow-2xl z-40 transform transition-transform duration-300 ease-in-out ${!sidebarhandlerMobile ? 'translate-x-0' : '-translate-x-full'
                    }`}
            >
                <div className='flex items-center justify-center border-b-[1px] border-[#ecf0f1] mt-[1px] h-[72px]'>
                    {/* <img className='' width={150} src={logo} alt="logo not found" /> */}
                    Logo
                </div>
                <ul className='py-4'>
                    <li className='p-2'>
                        <Link
                            to="/"
                            onClick={() => setSidebarHandlerMobile(!sidebarhandlerMobile)}
                            className={`${getLinkClass('/')} my-2`}
                        >
                            <button><FaHome size={20} /></button>
                            <button className='text-nowrap text-sm'>Dashboard</button>
                        </Link>
                        <Link
                            to="/userslist"
                            onClick={() => setSidebarHandlerMobile(!sidebarhandlerMobile)}
                            className={`${getLinkClass('/userslist')} my-2`}
                        >
                            <button><PiUserListBold size={20} />
                            </button>
                            <button className='text-nowrap text-sm'>Users List</button>
                        </Link>
                        <Link
                            to="/agentlist"
                            onClick={() => setSidebarHandlerMobile(!sidebarhandlerMobile)}
                            className={`${getLinkClass('/agentlist')} my-2`}
                        >
                            <button><FaUserTie size={20} />
                            </button>
                            <button className='text-nowrap text-sm'>Agents List</button>
                        </Link>
                        <Link
                            to="/orderhistory"
                            onClick={() => setSidebarHandlerMobile(!sidebarhandlerMobile)}
                            className={`${getLinkClass('/orderhistory')} my-2`}
                        >
                            <button><RiListOrdered2 size={20} />
                            </button>
                            <button className='text-nowrap text-sm'> Order History</button>
                        </Link>
                        <Link
                            to="/payin"
                            onClick={() => setSidebarHandlerMobile(!sidebarhandlerMobile)}
                            className={`${getLinkClass('/payin')} my-2`}
                        >
                            <button><RiListOrdered2 size={20} />
                            </button>
                            <button className='text-nowrap text-sm'> Pay in</button>
                        </Link>
                        <Link
                            to="/withdrawal"
                            onClick={() => setSidebarHandlerMobile(!sidebarhandlerMobile)}
                            className={`${getLinkClass('/withdrawal')} my-2`}
                        >
                            <button><RiListOrdered2 size={20} />
                            </button>
                            <button className='text-nowrap text-sm'>Withdrawal</button>
                        </Link>
                        <Link
                            to="/systemuser"
                            onClick={() => setSidebarHandlerMobile(!sidebarhandlerMobile)}
                            className={`${getLinkClass('/systemuser')} my-2`}
                        >
                            <button><GrSystem size={20} />
                            </button>
                            <button className='text-nowrap text-sm'>System User</button>
                        </Link>
                        <Link
                            to="/businesssetup"
                            onClick={() => setSidebarHandlerMobile(!sidebarhandlerMobile)}
                            className={`${getLinkClass('/businesssetup')} my-2`}
                        >
                            <button><IoBusiness size={20} />
                            </button>
                            <button className='text-nowrap text-sm'>Business Developmet</button>
                        </Link>
                    </li>
                </ul>
            </div>
        </>
    );
}

export default Sidebar;
