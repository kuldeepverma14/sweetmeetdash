import { MdEmail, MdVisibility, MdVisibilityOff } from 'react-icons/md';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { FaKey } from 'react-icons/fa';

function SignIn() {
    const [passwordVisible, setPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    return (
        <>
            <section className="bg-blue-50 h-[100vh] flex items-center text-white dark:text-white">
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0">
                    <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-text">
                        {/* <img className="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo" /> */}
                        Sweet Meet
                    </a>
                    <div className="w-full rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 bg-bg1 dark:border-gray-700">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-12">
                            <h1 className="text-xl font-bold leading-tight tracking-tight md:text-2xl ">
                                Sign in to your account
                            </h1>
                            <form className="space-y-4 md:space-y-6" action="#">
                                <div className="relative">
                                    <label htmlFor="email" className="block mb-2 text-sm font-medium">Your Email</label>
                                    <MdEmail className="absolute left-3 top-10 text-gray-500 dark:text-gray-400" size={20} />
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        placeholder="name@company.com"
                                        className="bg-gray-50 text-gray-900 rounded-md outline-none block w-full pl-10 p-2.5 dark:bg-gray-700 border dark:border-white dark:placeholder-gray-400 dark:text-white"
                                        required
                                    />
                                </div>

                                <div className="relative">
                                    <label htmlFor="password" className="block mb-2 text-sm font-medium">Password</label>
                                    <FaKey
                                        className="absolute left-3 top-10 text-gray-500 dark:text-gray-400" size={18} />
                                    <input
                                        type={passwordVisible ? 'text' : 'password'}
                                        name="password"
                                        id="password"
                                        placeholder="••••••••"
                                        className="bg-gray-50 text-gray-900 rounded-md outline-none block w-full pl-10 p-2.5 dark:bg-gray-700 border dark:border-white dark:placeholder-gray-400 dark:text-white"
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
                                <div className="flex items-center justify-between">
                                    {/* Optional: Uncomment and customize if needed
                                    <div className="flex items-start">
                                        <div className="flex items-center h-5">
                                            <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 " required />
                                        </div>
                                        <div className="ml-3 text-sm">
                                            <label htmlFor="remember" className="text-gray-500 dark:text-gray-300">Remember me</label>
                                        </div>
                                    </div>
                                    */}
                                    <a href="#" className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</a>
                                </div>
                                <button type="submit" className="w-full bg-bg2 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign in</button>
                                <p className="text-sm font-light ">
                                    Don’t have an account yet? <Link to="/signup" className="font-medium hover:underline">Sign up</Link>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default SignIn;
