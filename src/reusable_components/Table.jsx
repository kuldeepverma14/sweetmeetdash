/* eslint-disable react/prop-types */
import { useState } from "react";
import { FaEdit, FaFileExport } from "react-icons/fa";
import { MdDeleteSweep } from "react-icons/md";
import Button from "./Button";
import { Link } from "react-router-dom";

function Table({ columns, data, title, onEdit, onDelete, searchComponent: SearchComponent, showActions, addAction, addPath, addButton, handleStatus }) {
    const [checkedRows, setCheckedRows] = useState(null);
    const [statusModalHandler, setStatusModalHandler] = useState(false);

    const handleCheckboxChange = (index) => {
        console.log('index ID:', index);

        if (checkedRows === index) {
            setCheckedRows(null)
        } else {
            setCheckedRows(index)
        }

    };
    console.log('Row ID:', checkedRows);
    function statusHandler() {
        setStatusModalHandler(!statusModalHandler)
    }
    return (
        <>
            <div className="flex justify-between">
                <h1 className="font-bold text-2xl">{title}</h1>
                {addAction && <Link to={`${addPath}`}>
                    <Button className="flex justify-center" variant="primary" size="md"> {`${addButton}`} </Button>
                </Link>}
            </div>
            <div className="relative shadow-lg bg-white overflow-x-auto mt-5 p-5 rounded-lg border border-border">
                <div className="mt-3 sm:flex justify-between xsm:mt-0">
                    {SearchComponent && <SearchComponent />}
                    <Button className="flex mt-3 sm:mt-0 w-36 justify-center" variant="primary" size="md"> <FaFileExport className="mt-1 mr-2" /> CSV Export </Button>
                </div>
                <table className="w-full text-sm text-left rtl:text-right mt-5">
                    <thead className="text-xs uppercase border-b border-border dark:border-border">
                        <tr>
                            <th scope="col" className=""></th>
                            {columns.map((column) => (
                                <th key={column.key} scope="col" className={` text-black text-center p-4 text-nowrap dark:hover:bg-gray-300`}>
                                    {column.header}
                                </th>
                            ))}
                            {showActions && <th scope="col" className="p-4 text-nowrap dark:hover:bg-gray-300 text-black text-center">Action</th>}
                        </tr>
                    </thead>
                    <tbody>
                        {data?.map((row, index) => {
                            return (
                                <tr
                                    key={index}
                                    className={`border-b border-border dark:border-border  ${checkedRows === index ? 'bg-gray-300 ' : ''}`}
                                >
                                    <td className="w-4 p-4 ">
                                        <div className="flex items-center">
                                            <input
                                                type="checkbox"
                                                checked={checkedRows === index}
                                                onChange={() => handleCheckboxChange(index)}
                                                className="w-4 h-4 bg-gray-100 border-gray-300 rounded dark:bg-gray-700 dark:border-gray-600"
                                            />
                                        </div>
                                    </td>
                                    {columns.map((column) => (
                                        <td
                                            key={column.key}
                                            className={`${row[column.key] === "Active"
                                                ? "text-green-600"
                                                : row[column.key] === "Inactive"
                                                    ? "text-red-600"
                                                    : "text-black"
                                                } ${row[column.key] === "Success" || row[column.key] === "Approved"
                                                    ? "text-green-600"
                                                    : row[column.key] === "Pending"
                                                        ? "text-yellow-600" : row[column.key] === "Failed" || row[column.key] === "Rejected"
                                                            ? "text-red-600"
                                                            : "text-black"
                                                } text-nowrap text-center px-2 py-4`}
                                        >
                                            {(row[column.key] === "Pending" ||
                                                row[column.key] === "Inactive" ||
                                                row[column.key] === "Active") ? (
                                                <button className="cursor-pointer" onClick={statusHandler}>
                                                    {row[column.key]}
                                                </button>
                                            ) : (
                                                row[column.key]
                                            )}

                                        </td>
                                    ))}
                                    {showActions && <td className="text-black flex justify-center items-center py-5 ">
                                        <button onClick={() => onEdit(row)} className=" mx-2 text-text focus:text-bg1">
                                            <FaEdit size={20} />
                                        </button>
                                        <button onClick={() => onDelete(row)} className=" text-red-500 dark:text-red-500">
                                            <MdDeleteSweep size={24} />
                                        </button>
                                    </td>}
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
                <nav className="flex items-center flex-column flex-wrap flex-row justify-between pt-4" aria-label="Table navigation">
                    <span className="text-sm font-normal mb-4 md:mb-0 block w-full md:inline md:w-auto">
                        Showing <span className="font-semibold text-text">1-10</span> of <span className="font-semibold text-text">50</span>
                    </span>
                    <ul className="inline-flex -space-x-px rtl:space-x-reverse text-sm h-8">
                        <li>
                            <a href="#" className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-white hover:bg-bg2 disabled:opacity-50 disabled:cursor-not-allowed bg-bg1 border border-gray-300 rounded-s-lg dark:hover:text-white">
                                Previous
                            </a>
                        </li>
                        <li>
                            <a href="#" className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-white hover:bg-bg2 disabled:opacity-50 disabled:cursor-not-allowed bg-bg2 border border-gray-300 dark:hover:text-white">
                                1
                            </a>
                        </li>
                        <li>
                            <a href="#" className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-white hover:bg-bg2 disabled:opacity-50 disabled:cursor-not-allowed bg-bg1 border border-gray-300 dark:hover:text-white">
                                2
                            </a>
                        </li>
                        <li>
                            <a href="#" className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-white hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed bg-bg1 border border-gray-300 dark:hover:text-white">
                                3
                            </a>
                        </li>
                        <li>
                            <a href="#" className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-white hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed bg-bg1 border border-gray-300 dark:hover:text-white">
                                4
                            </a>
                        </li>
                        <li>
                            <a href="#" className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-white hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed bg-bg1 border border-gray-300 dark:hover:text-white">
                                5
                            </a>
                        </li>
                        <li>
                            <a href="#" className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-white hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed bg-bg1  border border-gray-300 rounded-e-lg dark:hover:text-white">
                                Next
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
            {statusModalHandler && handleStatus === "withdrawal" &&
                <div className="fixed inset-0  top-0 left-0 z-40 bg-gray-900 bg-opacity-50  flex justify-center items-center">
                    {/* <!-- Main modal --> */}
                    <div className="relative p-4 w-full max-w-xl max-h-full z-50">
                        {/* <!-- Modal content --> */}
                        <div className="relative bg-white rounded-lg shadow ">
                            {/* <!-- Modal header --> */}
                            <div className="flex items-center justify-between bg-bg1 p-2 md:p-3 border-b rounded-t dark:border-border">
                                <h3 className="text-xl text-white font-semibold">
                                    Edit Payment Status of Kuldeep
                                </h3>
                                <button onClick={statusHandler} type="button" className="text-white bg-transparent rounded-lg text-lg hover:text-2xl w-8 h-8 ms-auto inline-flex justify-center items-center" data-modal-hide="static-modal">
                                    X
                                </button>
                            </div>
                            {/* <!-- Modal body --> */}
                            <div className="p-2 md:p-3 space-y-4">
                                <button className="flex items-center mt-2" onClick={statusHandler}>
                                    <input id="checked-checkbox" type="checkbox" value="Approved" className="w-4 h-4 text-bg1 bg-bg1 border-gray-300 rounded focus:ring-bg1 dark:focus:ring-bg1 dark:ring-offset-gray-800 focus:ring-2 " />
                                    <label htmlFor="checked-checkbox" className="ms-2 text-nowrap  ">Approve </label>
                                </button>
                                <button className="flex items-center mt-2"  onClick={statusHandler}>
                                    <input id="checked-checkbox" type="checkbox" value="Rejected" className="w-4 h-4 text-bg1 bg-bg1 border-gray-300 rounded focus:ring-bg1 dark:focus:ring-bg1 dark:ring-offset-gray-800 focus:ring-2 " />
                                    <label htmlFor="checked-checkbox" className="ms-2 text-nowrap">Reject </label>
                                </button>

                            </div>

                        </div>
                    </div>
                </div>}

            {statusModalHandler && handleStatus === "" && <div className="fixed inset-0  top-0 left-0 z-40 bg-gray-900 bg-opacity-50  flex justify-center items-center">
                {/* <!-- Main modal --> */}
                <div className="relative p-4 w-full max-w-xl max-h-full z-50">
                    {/* <!-- Modal content --> */}
                    <div className="relative bg-white rounded-lg shadow ">
                        {/* <!-- Modal header --> */}
                        <div className="flex items-center justify-between bg-bg1 p-2 md:p-3 border-b rounded-t dark:border-border">
                            <h3 className="text-xl text-white font-semibold">
                                Edit Status of Kuldeep
                            </h3>
                            <button onClick={() => setStatusModalHandler(!statusModalHandler)} type="button" className="text-white bg-transparent rounded-lg text-lg hover:text-2xl w-8 h-8 ms-auto inline-flex justify-center items-center" data-modal-hide="static-modal">
                                X
                            </button>
                        </div>
                        {/* <!-- Modal body --> */}
                        <div className="p-2 md:p-3 space-y-4">
                            <button className="flex items-center mt-2"  onClick={statusHandler}>
                                <input id="checked-checkbox" type="checkbox" value="Active" className="w-4 h-4 text-bg1 bg-bg1 border-gray-300 rounded focus:ring-bg1 dark:focus:ring-bg1 dark:ring-offset-gray-800 focus:ring-2 " />
                                <label htmlFor="checked-checkbox" className="ms-2 text-nowrap  ">Active </label>
                            </button>
                            <button className="flex items-center mt-2"  onClick={statusHandler}>
                                <input id="checked-checkbox" type="checkbox" value="Inactive" className="w-4 h-4 text-bg1 bg-bg1 border-gray-300 rounded focus:ring-bg1 dark:focus:ring-bg1 dark:ring-offset-gray-800 focus:ring-2 " />
                                <label htmlFor="checked-checkbox" className="ms-2 text-nowrap">Inactive </label>
                            </button>

                        </div>

                    </div>
                </div>
            </div>}

        </>
    );
}

export default Table;
