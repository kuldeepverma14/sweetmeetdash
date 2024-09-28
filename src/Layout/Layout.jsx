import { Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Sidebar from '../components/SIdebar';
import Header from '../components/Header';

function Layout() {
    const [sidebarhandler, setSidebarHandler] = useState(true);
    const [sidebarhandlerMobile, setSidebarHandlerMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1024) {
                setSidebarHandlerMobile(true);
            } else {
                setSidebarHandler(false);
                setSidebarHandlerMobile(true);
            }
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <>
            <div className="flex">
                <div className="block lg:hidden">
                    <Sidebar
                        sidebarhandler={sidebarhandler}
                        sidebarhandlerMobile={sidebarhandlerMobile}
                        setSidebarHandlerMobile={setSidebarHandlerMobile}
                    />
                </div>

                <div className={`lg:block hidden ${sidebarhandler ? 'w-72' : 'w-0'}`}>
                    <Sidebar
                        sidebarhandler={sidebarhandler}
                        sidebarhandlerMobile={sidebarhandlerMobile}
                        setSidebarHandlerMobile={setSidebarHandlerMobile}
                    />
                </div>

                <div className={`flex-1 flex flex-col w-[calc(100vw-24rem)] h-screen `}>
                    <div>
                        <Header
                            sidebarhandler={sidebarhandler}
                            setSidebarHandler={setSidebarHandler}
                            setSidebarHandlerMobile={setSidebarHandlerMobile}
                            sidebarhandlerMobile={sidebarhandlerMobile}
                        />
                    </div>
                    <div>
                        <Outlet />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Layout;
