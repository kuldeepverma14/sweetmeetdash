import React, { useRef, useState } from 'react';
import avatar from "../assets/avatar.png";
import { RiRadioButtonLine } from 'react-icons/ri';
import { FaEdit, FaKey, FaUserEdit } from 'react-icons/fa';
import { LiaSignOutAltSolid } from "react-icons/lia";
import Button from '../reusable_components/Button';
import { MdEmail, MdVisibility, MdVisibilityOff } from 'react-icons/md';

function Profile() {
    const [selectedImage, setSelectedImage] = useState(avatar);
    const [passwordModel, setPasswordModel] = useState(false)
    const [detailsModel, setDetailsModel] = useState(false)
    const [passwordVisibility, setPasswordVisibility] = useState({
        newPassword: false,
        confirmPassword: false,
    });

    const togglePasswordVisibility = (field) => {
        setPasswordVisibility((prevState) => ({
            ...prevState,
            [field]: !prevState[field],
        }));
    };
    const fileInputRef = useRef(null);

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setSelectedImage(imageUrl);
        }
    };

    const handleImageChangeButton = () => {
        console.log("handleButtonClick")
        fileInputRef.current.click();
    };

    return (
        <div className="bg-[#F8F9FA] min-h-screen  px-6 py-8">
            <div className="max-w-4xl mx-auto overflow-hidden">
                <div className="grid grid-cols-1 xl:grid-cols-2 xl:gap-5">
                    <div className=" flex flex-col items-center bg-white p-6 border border-border shadow-lg rounded-lg">
                        <div className='flex flex-col items-end w-full'>
                            <Button variant="primary" size="md" className="flex flex-col items-center shadow-lg w-16 rounded-2xl">
                                <LiaSignOutAltSolid size={30} className="transform rotate-[-90deg]" /><p>Logout</p>
                            </Button>
                        </div>
                        <div className='relative'>
                            <img
                                src={selectedImage}
                                alt="Profile"
                                className="w-40 h-40 md:w-56 md:h-56 p-1 rounded-full ring-2 ring-text dark:ring-text cursor-pointer"
                            />
                            <div className="absolute  top-32 md:top-48  left-28 md:left-40 xl:left-40 bg-white rounded-full p-1">
                                <RiRadioButtonLine size={20} className="text-green-600" />
                            </div>
                        </div>
                        <input
                            type="file"
                            accept="image/*"
                            ref={fileInputRef}
                            className="hidden"
                            onChange={handleImageChange}
                        />
                        <Button
                            variant="primary"
                            size="md"
                            className="flex mt-4 text-sm xsm:text-base"
                            onClick={handleImageChangeButton}
                        >
                            <FaEdit className="mr-2 cursor-pointer mt-1" />
                            Change Profile Picture
                        </Button>
                    </div>

                    <div className="mt-5 xl:mt-0 p-3 xsm:p-6 flex text-sm xsm:text-base flex-col justify-between bg-white border border-border shadow-lg rounded-lg">
                        <div className="space-y-4 ">
                            <div className="flex items-center">
                                <p className="font-bold">Name:</p>
                                <p className="text-gray-700 ml-2">Kuldeep Verma</p>
                            </div>
                            <div className="flex items-center">
                                <p className="font-bold">Mobile:</p>
                                <p className="text-gray-700 ml-2">+91 9166828589</p>
                            </div>
                            <div className="flex items-center">
                                <p className="font-bold">Email:</p>
                                <p className="text-gray-700 text-wrap xsm:text-nowrap ml-2">kuldeepvermaiitiant@gmail.com</p>
                            </div>
                            <div className="flex items-center">
                                <p className="font-bold">Role:</p>
                                <p className="text-gray-700 ml-2">Admin</p>
                            </div>
                        </div>
                        <div className=" xsm:flex justify-between mt-6">
                            {/* change password popup */}
                            {passwordModel && <div className="fixed w-full h-full left-0 top-0 flex justify-center items-center bg-black bg-opacity-50">
                                <div className="bg-white rounded-md opacity-100  max-h-full">
                                    <div className="p-3 flex justify-end" > <button className="font-bold cursor-pointer text-2xl px-2 rounded-md text-text hover:text-white hover:bg-bg1 " onClick={() => { setPasswordModel(false) }} >X</button> </div>
                                    <form className="space-y-4 md:space-y-6 px-8 pb-8" action="#">
                                        <div className="relative">
                                            <label htmlFor="password" className="block mb-2 text-sm font-medium">New Password</label>
                                            <FaKey
                                                className="absolute left-3 top-10 text-gray-500 dark:text-gray-400" size={18} />
                                            <input
                                                type={passwordVisibility.newPassword ? 'text' : 'password'}
                                                name="password"
                                                id="password"
                                                placeholder="••••••••"
                                                className="bg-gray-50 text-gray-900 rounded-md outline-none block w-full pl-10 p-2.5 border dark:border-border dark:placeholder-gray-400"
                                                required
                                            />
                                            <button
                                                type="button"
                                                onClick={() => togglePasswordVisibility('newPassword')}
                                                className="absolute inset-y-0 right-0 top-6 pr-3 flex items-center text-text dark:text-text"
                                            >
                                                {passwordVisibility.newPassword ? <MdVisibilityOff size={20} /> : <MdVisibility size={20} />}
                                            </button>
                                        </div>
                                        <div className="relative">
                                            <label htmlFor="password" className="block mb-2 text-sm font-medium">Confirm New Password</label>
                                            <FaKey
                                                className="absolute left-3 top-10 text-gray-500 dark:text-gray-400" size={18} />
                                            <input
                                                type={passwordVisibility.confirmPassword ? 'text' : 'password'}
                                                name="password"
                                                id="password"
                                                placeholder="••••••••"
                                                className="bg-gray-50 text-gray-900 rounded-md outline-none block w-full pl-10 p-2.5 border dark:border-border dark:placeholder-gray-400"
                                                required
                                            />
                                            <button
                                                type="button"
                                                onClick={() => togglePasswordVisibility('confirmPassword')}
                                                className="absolute inset-y-0 right-0 top-6 pr-3 flex items-center text-text dark:text-text"
                                            >
                                                {passwordVisibility.confirmPassword ? <MdVisibilityOff size={20} /> : <MdVisibility size={20} />}
                                            </button>
                                        </div>
                                        <div className="flex items-center justify-between">

                                        </div>
                                        <Button variant="primary" size="md" className="flex items-center">
                                            Update
                                        </Button>
                                    </form>
                                </div>
                            </div>}
                            <Button variant="primary" size="md" onClick={() => setPasswordModel(true)} className="flex items-center">
                                <FaEdit className="mr-2 cursor-pointer" /> Change Password
                            </Button>

                            {/* edit details popup */}
                            {detailsModel && <div className="fixed w-full h-full left-0 top-0 flex justify-center items-center bg-black bg-opacity-50">
                                <div className="bg-white rounded-md opacity-100  max-h-full">
                                    <div className="p-3 flex justify-end" > <button className="font-bold cursor-pointer text-2xl px-2 rounded-md text-text hover:text-white hover:bg-bg1 " onClick={() => { setDetailsModel(false) }} >X</button> </div>
                                    <form className="space-y-4 md:space-y-6 px-8 pb-8" action="#">
                                        <div className="relative">
                                            <label htmlFor="password" className="block mb-2 text-sm font-medium">Name </label>
                                            <FaUserEdit
                                                className="absolute left-3 top-10 text-gray-500 dark:text-gray-400" size={18} />
                                            <input
                                                type="text"
                                                name="name"
                                                id="name"
                                                placeholder="name"
                                                className="bg-gray-50 text-gray-900 rounded-md outline-none block w-full pl-10 p-2.5 border dark:border-border dark:placeholder-gray-400"
                                                required
                                            />

                                        </div>
                                        <div className="relative">
                                            <label htmlFor="password" className="block mb-2 text-sm font-medium">Email</label>
                                            <MdEmail
                                                className="absolute left-3 top-10 text-gray-500 dark:text-gray-400" size={18} />
                                            <input
                                                type="email"
                                                name="email"
                                                id="email"
                                                placeholder="email"
                                                className="bg-gray-50 text-gray-900 rounded-md outline-none block w-full pl-10 p-2.5 border dark:border-border dark:placeholder-gray-400"
                                                required
                                            />
                                        </div>
                                        <div className="flex items-center justify-between">
                                        </div>
                                        <Button variant="primary" size="md" className="flex items-center">
                                            Update
                                        </Button>
                                    </form>
                                </div>
                            </div>}
                            <Button onClick={() => setDetailsModel(true)} variant="primary" size="md" className="mt-5 xsm:mt-0 flex items-center">
                                <FaEdit className="mr-2 cursor-pointer" /> Edit Details
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;
