import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaKey, FaUserCircle } from 'react-icons/fa';
import { MdEmail, MdVisibility, MdVisibilityOff } from 'react-icons/md';
import * as yup from 'yup';  // Import yup for validation
import { yupResolver } from '@hookform/resolvers/yup';  // Import the resolver for yup
import axios from 'axios';
import Button from '../reusable_components/Button';
import { toast } from 'react-toastify';

// Define the Yup validation schema
const schema = yup.object().shape({
    username: yup.string().required('Name is required').min(3, 'Name must be at least 3 characters'),
    email: yup.string().required('Email is required').email('Invalid email format'),
    password: yup.string().required('Password is required').min(6, 'Password must be at least 6 characters'),
    gender: yup.string().required('Gender is required'),
    age: yup.number().required('Age is required').positive('Age must be a positive number').integer('Age must be an integer'),
    location: yup.string().required('Location is required'),
});

function AddAgent() {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [countries, setCountries] = useState([]);
    const { register, handleSubmit, reset, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };
    const fetchCountries = async () => {
        try {
            const response = await axios.get('http://sweet_meet_backend.fapjoymall.com/sweetmeet/countrieslist');
            setCountries(response?.data?.CountriesList);
            console.log("sdfgh", response?.data?.CountriesList);
        } catch (error) {
            console.error('Error fetching countries:', error);
        }
    };
    useEffect(() => {
        fetchCountries();
    }, []);

    const onSubmit = async (data) => {
        try {
            const response = await axios.post('http://sweet_meet_backend.fapjoymall.com/sweetmeet/allusers/register', {
                username: data.username,
                password: data.password,
                email: data.email,
                gender: data.gender,
                role: 'agent',
                age: data.age,
                location: data.location,
            });

            // console.log('Agent Created:', response.data);
            if (response.status === 201) {
                reset();
                toast.success(`Agent with id ${response?.data?.id} created successfully!`);
            } else {
                toast.error('Failed to create agent. Please try again.');
            }

        } catch (error) {
            console.error('Error creating agent:', error);
            toast.error('Failed to create agent. Please try again.');
        }
    };

    return (
        <div className='bg-[#F8F9FA] h-screen px-6 pt-8'>
            <h1 className='font-bold text-2xl'>Add Agent</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="mt-5 w-full xl:w-[60%] shadow-lg rounded-lg bg-white border border-border p-5 mx-auto">

                {/* Name Field */}
                <div className="relative">
                    <label htmlFor="username" className="block mb-2 font-medium">Name</label>
                    <FaUserCircle className="absolute left-3 mt-1 top-10 text-gray-500" size={20} />
                    <input
                        type="text"
                        {...register('username')}
                        id="username"
                        placeholder="Name"
                        className="border border-border rounded-md outline-none block w-full pl-10 p-2.5"
                    />
                    {errors.username && <p className="text-red-500 text-sm">{errors.username.message}</p>}
                </div>

                {/* Email Field */}
                <div className="relative mt-5">
                    <label htmlFor="email" className="block mb-2 font-medium">Your Email</label>
                    <MdEmail className="absolute left-3 mt-1 top-10 text-gray-500" size={20} />
                    <input
                        type="email"
                        {...register('email')}
                        id="email"
                        placeholder="name@company.com"
                        className="border border-border rounded-md outline-none block w-full pl-10 p-2.5"
                    />
                    {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
                </div>

                {/* Password Field */}
                <div className="relative mt-5">
                    <label htmlFor="password" className="block mb-2 font-medium">Password</label>
                    <FaKey className="absolute left-3 mt-1 top-10 text-gray-500" size={18} />
                    <input
                        type={passwordVisible ? 'text' : 'password'}
                        {...register('password')}
                        id="password"
                        placeholder="••••••••"
                        className="border border-border rounded-md outline-none block w-full pl-10 p-2.5"
                    />
                    <button
                        type="button"
                        onClick={togglePasswordVisibility}
                        className="absolute inset-y-0 right-0 top-6 pr-3 flex items-center text-text"
                    >
                        {passwordVisible ? <MdVisibilityOff size={20} /> : <MdVisibility size={20} />}
                    </button>
                    {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
                </div>

                {/* Gender Field */}
                <div className="mt-5">
                    <label htmlFor="gender" className="block mb-2 font-medium">Gender</label>
                    <select
                        {...register('gender')}
                        id="gender"
                        className="border border-border rounded-md outline-none block w-full p-2.5"
                    >
                        <option value="">Select Gender</option>
                        <option value="female">Female</option>
                        <option value="male">Male</option>
                    </select>
                    {errors.gender && <p className="text-red-500 text-sm">{errors.gender.message}</p>}
                </div>

                {/* Age Field */}
                <div className="mt-5">
                    <label htmlFor="age" className="block mb-2 font-medium">Age</label>
                    <input
                        type="number"
                        {...register('age')}
                        id="age"
                        placeholder="Age"
                        className="border border-border rounded-md outline-none block w-full p-2.5"
                    />
                    {errors.age && <p className="text-red-500 text-sm">{errors.age.message}</p>}
                </div>

                {/* Location Field */}
                <div className="mt-5">
                    <label htmlFor="location" className="block mb-2 font-medium">Location</label>
                    <select
                        {...register('location')}
                        id="location"
                        className="border border-border rounded-md outline-none block w-full p-2.5"
                    >
                        <option value="">Select Location</option>
                        {countries?.map(country => (
                            <option key={country.id} value={country?.id}>{country?.country_name}</option>
                        ))}
                    </select>
                    {errors.location && <p className="text-red-500 text-sm">{errors.location.message}</p>}
                </div>

                <div className="mt-10 flex justify-center">
                    <Button variant="primary" size="md" type="submit">Submit</Button>
                </div>
            </form>
        </div>
    );
}

export default AddAgent;
