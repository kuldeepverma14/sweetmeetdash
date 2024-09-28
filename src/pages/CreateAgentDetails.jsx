import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useLocation, useParams } from 'react-router-dom';
import Button from '../reusable_components/Button';
import { toast } from 'react-toastify';

// Validation schema


const CreateAgentDetails = () => {
    const { register, handleSubmit, formState: { errors }, setValue,reset,watch } = useForm();

    const { uid } = useParams();
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const username = searchParams.get('username');
  
    // Handle single profile picture upload and convert to base64
    const handleImageUpload = (e, field) => {
        const file = e.target.files[0];
        const reader = new FileReader();

        reader.onloadend = () => {
            setValue(field, reader.result);  // set the base64 string as value
        };
        reader.readAsDataURL(file);
    };

    // Handle multiple image uploads and convert each to base64
    const handleMultipleImagesUpload = (e) => {
        const files = Array.from(e.target.files);
    
        const imagePromises = files.map(file => {
            const reader = new FileReader();
            return new Promise((resolve) => {
                reader.onloadend = () => {
                    resolve(reader.result); // Store the base64 string directly
                };
                reader.readAsDataURL(file);
            });
        });
    
        Promise.all(imagePromises).then((base64Images) => {
            // Access current images
            const currentImages = watch('images') || [];
            
            // Merge new base64 images with existing ones
            const updatedImages = [...currentImages, ...base64Images];
    
            // Set the updated images array in the form state
            setValue('images', updatedImages);
            
            console.log("Updated Images Array:", updatedImages);
        });
    };
    

    // Handle form submission
    const onSubmit = async (data) => {
        console.log(" Data:", data);

        try {
            const response = await axios.post(`http://sweet_meet_backend.fapjoymall.com/sweetmeet/agentdetails/${uid}`, data);
            console.log('Response:', response);
            if (response.status === 201) {
                reset();
                toast.success(`Agent with id ${response?.data?.id} created successfully!`);
            } else {
                toast.error('Failed to add agent. Please try again.');
            }
        } catch (error) {
            console.error("Error:", error);
        }
    };

    return (
        <div className='bg-[#F8F9FA] h-screen px-6 py-8 mb-20'>
            <h1 className='font-bold text-2xl'>Add {username} Details</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="mt-5 w-full xl:w-[60%] shadow-lg rounded-lg bg-white border border-border p-5 mx-auto" >
                {/* Mobile Field */}
                <div className="relative">
                    <label className="block mt-5 font-medium" >Mobile:</label>
                    <input
                        className="border border-border rounded-md outline-none block w-full pl-2 p-2.5"
                        type="text"
                        {...register('mobile')}
                    />
                    {errors.mobile && <p>{errors.mobile.message}</p>}
                </div>

                {/* Video Rate Field */}
                <div className="relative">
                    <label className="block mt-5 font-medium">Video Rate:</label>
                    <input
                        className="border border-border rounded-md outline-none block w-full pl-2 p-2.5"
                        type="number"
                        {...register('video_rate')}
                    />
                    {errors.video_rate && <p>{errors.video_rate.message}</p>}
                </div>

                {/* Online Status Field */}
                <div className="relative">
                    <label className="block mt-5 font-medium">Online Status:</label>
                    <select {...register('online_status')}
                        className="border border-border rounded-md outline-none block w-full pl-2 p-2.5"
                    >
                        <option value="">Select</option>
                        <option value="0">Offline</option>
                        <option value="1">Online</option>
                        <option value="2">Busy</option>
                    </select>
                    {errors.online_status && <p>{errors.online_status.message}</p>}
                </div>

                {/* Profile Picture Upload */}
                <div className="relative">
                    <label className="block mt-5 font-medium">Profile Picture:</label>
                    <input
                        className="border border-border rounded-md outline-none block w-full pl-2 p-2.5"
                        type="file"
                        accept="image/*"
                        onChange={(e) => handleImageUpload(e, 'profile_pic')}
                    />
                    {errors.profile_pic && <p>{errors.profile_pic.message}</p>}
                </div>

                {/* Multiple Images Upload */}
                <div className="relative">
                    <label className="block mt-5 font-medium">Upload Images:</label>
                    <input
                        className="border border-border rounded-md outline-none block w-full pl-2 p-2.5"
                        type="file"
                        accept="image/*"
                        multiple
                        onChange={handleMultipleImagesUpload}
                    />
                    {errors.images && <p>{errors.images.message}</p>}
                </div>

                {/* Description Field */}
                <div className="relative">
                    <label className="block mt-5 font-medium">Description:</label>
                    <textarea
                        className="border border-border rounded-md outline-none block w-full pl-2 p-2.5"
                        {...register('description')}
                    />
                    {errors.description && <p className="text-red-500 text-sm">{errors.description.message}</p>}
                </div>

                <div className="mt-10 flex justify-center">
                    <Button variant="primary" size="md" type="submit">Submit</Button>
                </div>
            </form>
        </div>

    );
};

export default CreateAgentDetails;
