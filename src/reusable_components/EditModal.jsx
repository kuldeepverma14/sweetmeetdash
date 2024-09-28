/* eslint-disable react/prop-types */
import { useState } from "react"
import { useForm } from "react-hook-form"

const EditModal = ({ setModal, updatedObj,EditForm }) => {
    const{register,handleSubmit,formState:{errors}}=useForm()
    const [editMode, setEditMode] = useState(true)
    return (
        <>
            <div className="fixed w-full h-full left-0 top-0 flex justify-center items-center bg-black bg-opacity-50">
                <div className="bg-white opacity-100 w-full max-w-2xl max-h-full">
                    <div className="p-3 bg-slate-400" > <button className="cursor-pointer text-red-500 " onClick={() => { setModal(false) }} >Close</button> </div>
                    {editMode ? <div className="p-5" >
                        {updatedObj.map((item, i) => {

                            return (
                                <div key={i} className="mt-3">
                                    <label className="font-bold" htmlFor={item.name}>{item.name.charAt(0).toUpperCase() + item.name.slice(1)}</label>
                                    <input type={item.type} name={item.name} className="border border-black w-full px-2" value={item.value} />
                                </div>)
                        })}
                        <div className="mt-3  ">
                            <button className="text-white bg-black px-5 rounded-md py-1" onClick={() => setEditMode(false)} >Edit</button>
                        </div>

                    </div> :
                        <div className="p-5" >
                            <form onSubmit={handleSubmit(EditForm)} >
                                {updatedObj.map((item, i) => {

                                    return (
                                        <div key={i} className="mt-3">
                                            <label className="font-bold" htmlFor={item.name}>{item.name.charAt(0).toUpperCase() + item.name.slice(1)}</label>
                                            <input type={item.type} name={item.name} className="border border-black w-full px-2" {...register(`${item.name}`,{required:true})} />
                                            {errors?.item?.name && <span className="text-red-400">This is required field</span>}
                                        </div>)
                                })}
                                <div className="mt-3 flex gap-3 ">
                                    <button className="text-white bg-black px-5 rounded-md py-1" onClick={() => { setEditMode(true) }}>Cancel</button>
                                    <button type="submit" className="text-white bg-green-500 px-5 rounded-md py-1" onClick={() => { }}>Submit</button>
                                </div>
                            </form>
                        </div>}
                </div>
            </div>
        </>
    )
}
export default EditModal

      {/* {editModal && <EditModal updatedObj={updatedObj} setModal={setEditModal} EditForm={EditForm} />} */}
