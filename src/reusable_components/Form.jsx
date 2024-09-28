import React from 'react';
import { useForm } from 'react-hook-form';

const ReusableForm = ({ fields, onSubmit, defaultValues }) => {
  const { register, handleSubmit, formState: { errors } } = useForm({ defaultValues });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {fields.map((field, index) => (
        <div key={index} className="mb-4">
          <label htmlFor={field.name} className="block text-sm font-medium text-gray-700">
            {field.label}
          </label>
          <input
            type={field.type}
            id={field.name}
            {...register(field.name, field.validation)}
            className="mt-1 p-2 border rounded w-full"
          />
          {errors[field.name] && (
            <span className="text-red-600 text-sm">{errors[field.name].message}</span>
          )}
        </div>
      ))}
      <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">
        Submit
      </button>
    </form>
  );
};

export default ReusableForm

// const formFields = [
//     { name: 'firstName', label: 'First Name', type: 'text', validation: { required: 'First name is required' } },
//     { name: 'lastName', label: 'Last Name', type: 'text', validation: { required: 'Last name is required' } },
//     { name: 'email', label: 'Email', type: 'email', validation: { required: 'Email is required', pattern: { value: /^\S+@\S+$/i, message: 'Invalid email address' } } },
//     { name: 'password', label: 'Password', type: 'password', validation: { required: 'Password is required', minLength: { value: 6, message: 'Password must be at least 6 characters' } } },
//   ];
//   const handleFormSubmit = (data) => {
//     console.log('Form data submitted:', data);
    
//   };

{/* <div className="max-w-md mx-auto mt-10">
<h1 className="text-2xl font-bold mb-4">My Form</h1>
<ReusableForm fields={formFields} onSubmit={handleFormSubmit} />
</div> */}
