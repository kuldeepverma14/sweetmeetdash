import React from 'react'
import Table from '../reusable_components/Table'
import Search from '../reusable_components/SearchBar';
import { Link } from 'react-router-dom';

function UsersList() {
    const userColumns = [
        { header: "Sr. No.", key: "id" },
        { header: "Username", key: "username" },
        { header: "Wallet Balance", key: "balance" },
        { header: "Status", key: "status" },
        { header: "Calling History", key: "callingHistory" },
        { header: "Transaction History", key: "transactionHistory" },
    ];

    const usersData = [
        {
            id: 1,
            username: "user1",
            balance: "100",
            status:"Active",
            callingHistory: <Link to="viewusercallinghistory" className="text-text hover:text-text2 hover:underline font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">view</Link>,
            transactionHistory: <Link className="text-text hover:text-text2 hover:underline font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">view</Link>,
        },
        {
            id: 2,
            username: "user2",
            balance: "200",
            status:"Inactive",
            callingHistory: <Link to="viewusercallinghistory" className="text-text hover:text-text2 hover:underline font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">view</Link>,
            transactionHistory: <Link className="text-text hover:text-text2 hover:underline font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">view</Link>,
        },
        {
            id: 3,
            username: "user3",
            balance: "150",
            status:"Active",
            callingHistory: <Link to="viewusercallinghistory" className="text-text hover:text-text2 hover:underline font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">view</Link>,
            transactionHistory: <Link className="text-text hover:text-text2 hover:underline font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">view</Link>,
        },
        {
            id: 4,
            username: "user4",
            balance: "300",
            status:"Active",
            callingHistory: <Link to="viewusercallinghistory" className="text-text hover:text-text2 hover:underline font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">view</Link>,
            transactionHistory: <Link className="text-text hover:text-text2 hover:underline font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">view</Link>,
        },
        {
            id: 5,
            username: "user5",
            balance: "50",
            status:"Active",
            callingHistory: <Link to="viewusercallinghistory" className="text-text hover:text-text2 hover:underline font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">view</Link>,
            transactionHistory: <Link className="text-text hover:text-text2 hover:underline font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">view</Link>,
        },
        {
            id: 6,
            username: "user6",
            balance: "80",
            status:"Inactive",
            callingHistory: <Link to="viewusercallinghistory" className="text-text hover:text-text2 hover:underline font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">view</Link>,
            transactionHistory: <Link className="text-text hover:text-text2 hover:underline font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">view</Link>,
        },
    ];


    const handleUserEdit = (row) => {
        console.log("Edit", row);
    };

    const handleUserDelete = (row) => {
        console.log("Delete", row);
    };
    return (
        <>
            <div className='bg-[#F8F9FA] h-screen px-6 py-8'>
                <div className=' pb-8'>
                    <Table
                        columns={userColumns}
                        data={usersData}
                        title="Users List"
                        onEdit={handleUserEdit}
                        onDelete={handleUserDelete}
                        searchComponent={Search}
                        showActions={true}
                        handleStatus=""
                    />
                </div>
            </div>
        </>
    )
}

export default UsersList