import { useState } from 'react'
import Button from '../reusable_components/Button'
import { MdEmail, MdVisibility, MdVisibilityOff } from 'react-icons/md'
import { FaKey, FaUserCircle } from 'react-icons/fa'
import { FaMobileRetro } from "react-icons/fa6";
import Table from '../reusable_components/Table';
import Search from '../reusable_components/SearchBar';
import ListModal from '../reusable_components/ListModal';


function SystemUser() {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [ViewAccessedModule, setViewAccessedModule] = useState(false);
    const [ViewAccessedActions, setViewAccessedActions] = useState(false);

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible.modules);
    };

    const Columns = [
        { header: "Sr. No.", key: "id" },
        { header: "Name", key: "name" },
        { header: "Email", key: "email" },
        { header: "Mobile", key: "mobile" },
        { header: "Status", key: "status" },
        { header: "Accessed Module", key: "accessModule" },
        { header: "Accessed Actions", key: "accessActions" },

    ];
    const Data =[
        {
          id: 1,
          name: "kuldeep",
          email: "kd@gmail.com",
          mobile: "+91 9166828589",
          status: "Active",
          accessModule: <button onClick={handleAccessedModule} className="text-text hover:text-text2 hover:underline font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">view</button>,
          accessActions: <button onClick={handleAccessedActions} className="text-text hover:text-text2 hover:underline font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">view</button>
        },
        {
          id: 2,
          name: "john",
          email: "john@example.com",
          mobile: "+91 9123456789",
          status: "Active",
          accessModule: <button onClick={handleAccessedModule} className="text-text hover:text-text2 hover:underline font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">view</button>,
          accessActions: <button onClick={handleAccessedActions} className="text-text hover:text-text2 hover:underline font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">view</button>
        },
        {
          id: 3,
          name: "alice",
          email: "alice@example.com",
          mobile: "+91 9234567890",
          status: "Active",
          accessModule: <button onClick={handleAccessedModule} className="text-text hover:text-text2 hover:underline font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">view</button>,
          accessActions: <button onClick={handleAccessedActions} className="text-text hover:text-text2 hover:underline font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">view</button>
        },
        {
          id: 4,
          name: "mike",
          email: "mike@example.com",
          mobile: "+91 9345678901",
          status: "Active",
          accessModule: <button onClick={handleAccessedModule} className="text-text hover:text-text2 hover:underline font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">view</button>,
          accessActions: <button onClick={handleAccessedActions} className="text-text hover:text-text2 hover:underline font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">view</button>
        },
        {
          id: 5,
          name: "sara",
          email: "sara@example.com",
          mobile: "+91 9456789012",
          status: "Inactive",
          accessModule: <button onClick={handleAccessedModule} className="text-text hover:text-text2 hover:underline font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">view</button>,
          accessActions: <button onClick={handleAccessedActions} className="text-text hover:text-text2 hover:underline font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">view</button>
        }
      ];
      

    function handleAccessedModule() {
        setViewAccessedModule(!ViewAccessedModule)
    }
    function handleAccessedActions() {
        setViewAccessedActions(!ViewAccessedActions)
    }

    const handleDelete = () => {
        console.log("delete")
    }
    const handleEdit = () => {
        console.log("edit")
    }

    const accessedModules = ["Dashboard", "Users List", "User Calling History", "User Transaction History"]
    const accessedActions = ["View", "Create", "Update", "Delete"]
    return (
        <div className='bg-[#F8F9FA] h-screen px-6 pt-8'>
            <h1 className='font-bold text-2xl'> Authentication Form</h1>
            <form className="grid md:grid-cols-2 gap-5 mt-5 rounded-lg">
                <div className=" w-full shadow-lg rounded-lg bg-white border border-border p-5 mx-auto">
                    <div className="relative">
                        <label htmlFor="name" className="block mb-2  font-medium">Name</label>
                        <FaUserCircle className="absolute left-3 mt-1 top-10 text-gray-500" size={20} />
                        <input
                            type="text"
                            name="name"
                            id="name"
                            placeholder="name"
                            className="border border-border rounded-md outline-none block w-full pl-10 p-2.5 dark:placeholder-gray-400 "
                            required
                        />
                    </div>
                    <div className="relative mt-5">
                        <label htmlFor="email" className="block mb-2  font-medium">Your Email</label>
                        <MdEmail className="absolute left-3 mt-1 top-10 text-gray-500" size={20} />
                        <input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="name@company.com"
                            className="border border-border rounded-md outline-none block w-full pl-10 p-2.5 dark:placeholder-gray-400 "
                            required
                        />
                    </div>
                    <div className="relative mt-5">
                        <label htmlFor="mobile" className="block mb-2  font-medium">Mobile</label>
                        <FaMobileRetro className="absolute left-3 mt-1 top-10 text-gray-500" size={20} /><span></span>
                        <input
                            type="number"
                            name="mobile"
                            id="mobile"
                            placeholder="mobile"
                            className="border border-border rounded-md outline-none block w-full pl-10 p-2.5 dark:placeholder-gray-400 "
                            required
                        />
                    </div>
                    <div className="relative mt-5">
                        <label htmlFor="password" className="block mb-2  font-medium">Password</label>
                        <FaKey
                            className="absolute left-3 mt-1 top-10 text-gray-500" size={18} />
                        <input
                            type={passwordVisible ? 'text' : 'password'}
                            name="password"
                            id="password"
                            placeholder="••••••••"
                            className="border border-border rounded-md outline-none block w-full pl-10 p-2.5 dark:placeholder-gray-400"
                            required
                        />
                        <button
                            type="button"
                            onClick={togglePasswordVisibility}
                            className="absolute inset-y-0 right-0 top-6 pr-3 flex items-center text-text dark:text-text"
                        >
                            {passwordVisible ? <MdVisibilityOff size={20} /> : <MdVisibility size={20} />}
                        </button>
                    </div>
                    <div className='hidden mt-10 md:flex justify-center'>
                        <Button className='w-' variant="primary" size="md" >Authenticate</Button>
                    </div>
                </div>
                <div className='mt-5 md:mt-0 xl:grid grid-cols-2 border border-border p-5 shadow-lg rounded-lg bg-white' >
                    <div >
                        <h1 className='text-lg font-semibold'>Select Modules</h1>
                        <div className="flex items-center mt-2">
                            <input id="checked-checkbox" type="checkbox" value="" className="w-4 h-4 text-bg1 bg-bg1 border-gray-300 rounded focus:ring-bg1 dark:focus:ring-bg1 dark:ring-offset-gray-800 focus:ring-2 " />
                            <label htmlFor="checked-checkbox" className="ms-2 text-nowrap  ">Dashboard </label>
                        </div>
                        <div className="flex items-center mt-2">
                            <input id="checked-checkbox" type="checkbox" value="" className="w-4 h-4 text-bg1 bg-bg1 border-gray-300 rounded focus:ring-bg1 dark:focus:ring-bg1 dark:ring-offset-gray-800 focus:ring-2 " />
                            <label htmlFor="checked-checkbox" className="ms-2 text-nowrap  ">Users List </label>
                        </div>
                        <div className="flex items-center mt-2">
                            <input id="checked-checkbox" type="checkbox" value="" className="w-4 h-4 text-bg1 bg-bg1 border-gray-300 rounded focus:ring-bg1 dark:focus:ring-bg1 dark:ring-offset-gray-800 focus:ring-2 " />
                            <label htmlFor="checked-checkbox" className="ms-2 text-nowrap  ">User Calling History </label>
                        </div>
                        <div className="flex items-center mt-2">
                            <input id="checked-checkbox" type="checkbox" value="" className="w-4 h-4 text-bg1 bg-bg1 border-gray-300 rounded focus:ring-bg1 dark:focus:ring-bg1 dark:ring-offset-gray-800 focus:ring-2 " />
                            <label htmlFor="checked-checkbox" className="ms-2 text-nowrap  ">User Transaction History </label>
                        </div>
                        <div className="flex items-center mt-2">
                            <input id="checked-checkbox" type="checkbox" value="" className="w-4 h-4 text-bg1 bg-bg1 border-gray-300 rounded focus:ring-bg1 dark:focus:ring-bg1 dark:ring-offset-gray-800 focus:ring-2 " />
                            <label htmlFor="checked-checkbox" className="ms-2 text-nowrap  ">Agents List </label>
                        </div>
                        <div className="flex items-center mt-2">
                            <input id="checked-checkbox" type="checkbox" value="" className="w-4 h-4 text-bg1 bg-bg1 border-gray-300 rounded focus:ring-bg1 dark:focus:ring-bg1 dark:ring-offset-gray-800 focus:ring-2 " />
                            <label htmlFor="checked-checkbox" className="ms-2 text-nowrap  ">Agent Calling History </label>
                        </div>
                        <div className="flex items-center mt-2">
                            <input id="checked-checkbox" type="checkbox" value="" className="w-4 h-4 text-bg1 bg-bg1 border-gray-300 rounded focus:ring-bg1 dark:focus:ring-bg1 dark:ring-offset-gray-800 focus:ring-2 " />
                            <label htmlFor="checked-checkbox" className="ms-2 text-nowrap  ">Agent Transaction History </label>
                        </div>
                        <div className="flex items-center mt-2">
                            <input id="checked-checkbox" type="checkbox" value="" className="w-4 h-4 text-bg1 bg-bg1 border-gray-300 rounded focus:ring-bg1 dark:focus:ring-bg1 dark:ring-offset-gray-800 focus:ring-2 " />
                            <label htmlFor="checked-checkbox" className="ms-2 text-nowrap  ">Agent Documents </label>
                        </div>
                        <div className="flex items-center mt-2">
                            <input id="checked-checkbox" type="checkbox" value="" className="w-4 h-4 text-bg1 bg-bg1 border-gray-300 rounded focus:ring-bg1 dark:focus:ring-bg1 dark:ring-offset-gray-800 focus:ring-2 " />
                            <label htmlFor="checked-checkbox" className="ms-2 text-nowrap  ">Order History </label>
                        </div>
                        <div className="flex items-center mt-2">
                            <input id="checked-checkbox" type="checkbox" value="" className="w-4 h-4 text-bg1 bg-bg1 border-gray-300 rounded focus:ring-bg1 dark:focus:ring-bg1 dark:ring-offset-gray-800 focus:ring-2 " />
                            <label htmlFor="checked-checkbox" className="ms-2 text-nowrap  ">System User </label>
                        </div>
                        <div className="flex items-center mt-2">
                            <input id="checked-checkbox" type="checkbox" value="" className="w-4 h-4 text-bg1 bg-bg1 border-gray-300 rounded focus:ring-bg1 dark:focus:ring-bg1 dark:ring-offset-gray-800 focus:ring-2 " />
                            <label htmlFor="checked-checkbox" className="ms-2 text-nowrap  ">Business Setup </label>
                        </div>
                        <div className="flex items-center mt-2">
                            <input id="checked-checkbox" type="checkbox" value="" className="w-4 h-4 text-bg1 bg-bg1 border-gray-300 rounded focus:ring-bg1 dark:focus:ring-bg1 dark:ring-offset-gray-800 focus:ring-2 " />
                            <label htmlFor="checked-checkbox" className="ms-2 text-nowrap  ">Profile </label>
                        </div>
                        <div className="flex items-center mt-2">
                            <input id="checked-checkbox" type="checkbox" value="" className="w-4 h-4 text-bg1 bg-bg1 border-gray-300 rounded focus:ring-bg1 dark:focus:ring-bg1 dark:ring-offset-gray-800 focus:ring-2 " />
                            <label htmlFor="checked-checkbox" className="ms-2 text-nowrap  ">Notification </label>
                        </div>
                    </div>
                    <div className='xl:flex justify-end mt-5 xl:mt-0'>
                        <div >
                            <h1 className='text-lg font-semibold'>Allow Actions</h1>
                            <div className="flex items-center mt-2">
                                <input id="checked-checkbox" type="checkbox" value="" className="w-4 h-4 text-bg1 bg-bg1 border-gray-300 rounded focus:ring-bg1 dark:focus:ring-bg1 dark:ring-offset-gray-800 focus:ring-2 " />
                                <label htmlFor="checked-checkbox" className="ms-2  ">View </label>
                            </div>
                            <div className="flex items-center mt-2">
                                <input id="checked-checkbox" type="checkbox" value="" className="w-4 h-4 text-bg1 bg-bg1 border-gray-300 rounded focus:ring-bg1 dark:focus:ring-bg1 dark:ring-offset-gray-800 focus:ring-2 " />
                                <label htmlFor="checked-checkbox" className="ms-2  ">Create </label>
                            </div>
                            <div className="flex items-center mt-2">
                                <input id="checked-checkbox" type="checkbox" value="" className="w-4 h-4 text-bg1 bg-bg1 border-gray-300 rounded focus:ring-bg1 dark:focus:ring-bg1 dark:ring-offset-gray-800 focus:ring-2 " />
                                <label htmlFor="checked-checkbox" className="ms-2  ">Update </label>
                            </div>
                            <div className="flex items-center mt-2">
                                <input id="checked-checkbox" type="checkbox" value="" className="w-4 h-4 text-bg1 bg-bg1 border-gray-300 rounded focus:ring-bg1 dark:focus:ring-bg1 dark:ring-offset-gray-800 focus:ring-2 " />
                                <label htmlFor="checked-checkbox" className="ms-2  ">Delete </label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex md:hidden justify-center my-5'>
                    <Button className='' variant="primary" size="md" >Authenticate</Button>
                </div>
            </form>
            <div className='mt-8 pb-8'>
                <Table
                    columns={Columns}
                    data={Data}
                    title="Authenticated Users List"
                    onEdit={handleEdit}
                    onDelete={handleDelete}
                    searchComponent={Search}
                    showActions={true}
                    addAction={false}
                    handleStatus=""
                />
            </div>

            {/*view accessed Modules popup */}
            {ViewAccessedModule &&
                <ListModal
                    title="Accessed Modules"
                    onClick={handleAccessedModule}
                    body={accessedModules}
                />
            }
            {/*view accessed Actions popup */}
            {ViewAccessedActions &&
                <ListModal
                    title="Accessed Actions"
                    onClick={handleAccessedActions}
                    body={accessedActions}
                />
            }
        </div >
    )
}

export default SystemUser