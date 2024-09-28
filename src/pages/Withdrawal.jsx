import Table from '../reusable_components/Table';
import Search from '../reusable_components/SearchBar';

function Withdrawal() {

    const withdrawalColumns = [
        { header: "Sr. No.", key: "id" },
        { header: "Withdrawal Id", key: "withdrawalid" },
        { header: "Name", key: "name" },
        { header: "Amount (₹)", key: "amount" },
        { header: "Date", key: "date" },
        { header: "Status", key: "status" },
        { header: "Mode of Payment", key: "modeofpayment" },
        { header: "Transaction Id", key: "transactionid" },
        { header: "Order Id", key: "orderid" },
        { header: "UTR Number", key: "utrnumber" },
        { header: "Bank Account Number", key: "bankaccountnumber" },
        { header: "Bank Name", key: "bankname" },
        { header: "IFSC ", key: "ifsc" },

    ];
    const withdrawalHistory = [
        {
            id: 1,
            withdrawalid: "W0001",
            name: "Kuldeep",
            amount: "100",
            date: "10-08-2024",
            status: "Approved",
            modeofpayment: "Indian Pay",
            transactionid: "155sd5fds",
            orderid: "2",
            utrnumber: "5dff",
            bankaccountnumber: "1234567890",
            bankname: "State Bank of India",
            ifsc: "SBIN0001234",
            remarks: "Processed successfully"
        },
        {
            id: 2,
            withdrawalid: "W0002",
            name: "Amit",
            amount: "250",
            date: "11-08-2024",
            status: "Rejected",
            modeofpayment: "Indian Pay",
            transactionid: "c34ksd9",
            orderid: "3",
            utrnumber: "7gf4",
            bankaccountnumber: "2345678901",
            bankname: "HDFC Bank",
            ifsc: "HDFC0005678",
            remarks: "Awaiting bank approval"
        },
        {
            id: 3,
            withdrawalid: "W0003",
            name: "Sita",
            amount: "1500",
            date: "12-08-2024",
            status: "Pending",
            modeofpayment: "Indian Pay",
            transactionid: "b7z5xv8",
            orderid: "4",
            utrnumber: "9jhg",
            bankaccountnumber: "3456789012",
            bankname: "ICICI Bank",
            ifsc: "ICIC0007890",
            remarks: "Transaction failed due to insufficient funds"
        },
        {
            id: 4,
            withdrawalid: "W0004",
            name: "Raj",
            amount: "750",
            date: "13-08-2024",
            status: "Pending",
            modeofpayment: "Indian Pay",
            transactionid: "d9hd6f3",
            orderid: "5",
            utrnumber: "3hfj",
            bankaccountnumber: "4567890123",
            bankname: "Axis Bank",
            ifsc: "UTIB0001234",
            remarks: "Completed without issues"
        },
        {
            id: 5,
            withdrawalid: "W0005",
            name: "Neha",
            amount: "200",
            date: "14-08-2024",
            status: "Pending",
            modeofpayment: "Indian Pay",
            transactionid: "y8g7hj1",
            orderid: "6",
            utrnumber: "1k2b",
            bankaccountnumber: "5678901234",
            bankname: "Kotak Mahindra Bank",
            ifsc: "KKBK0001234",
            remarks: "Successfully processed"
        },
        {
            id: 6,
            withdrawalid: "W0006",
            name: "Ravi",
            amount: "600",
            date: "15-08-2024",
            status: "Pending",
            modeofpayment: "Indian Pay",
            transactionid: "e5v6fd2",
            orderid: "7",
            utrnumber: "5sd9",
            bankaccountnumber: "6789012345",
            bankname: "Bank of Baroda",
            ifsc: "BARB0001234",
            remarks: "Failed due to technical issues"
        },
        {
            id: 7,
            withdrawalid: "W0007",
            name: "Meera",
            amount: "1250",
            date: "16-08-2024",
            status: "Pending",
            modeofpayment: "Indian Pay",
            transactionid: "a1sd9v6",
            orderid: "8",
            utrnumber: "6y7h",
            bankaccountnumber: "7890123456",
            bankname: "Punjab National Bank",
            ifsc: "PUNB0001234",
            remarks: "Issue with bank details"
        },
        {
            id: 8,
            withdrawalid: "W0008",
            name: "Vikram",
            amount: "300",
            date: "17-08-2024",
            status: "Pending",
            modeofpayment: "Indian Pay",
            transactionid: "t3d8sd7",
            orderid: "9",
            utrnumber: "8k9t",
            bankaccountnumber: "8901234567",
            bankname: "Yes Bank",
            ifsc: "YESB0001234",
            remarks: "Transaction not completed"
        },
        {
            id: 9,
            withdrawalid: "W0009",
            name: "Asha",
            amount: "450",
            date: "18-08-2024",
            status: "Pending",
            modeofpayment: "Indian Pay",
            transactionid: "w7y8xv9",
            orderid: "10",
            utrnumber: "7l8m",
            bankaccountnumber: "9012345678",
            bankname: "South Indian Bank",
            ifsc: "SIBL0001234",
            remarks: "Awaiting bank response"
        },
        {
            id: 10,
            withdrawalid: "W0010",
            name: "Suresh",
            amount: "1200",
            date: "19-08-2024",
            status: "Pending",
            modeofpayment: "Indian Pay",
            transactionid: "d4w5y6z",
            orderid: "11",
            utrnumber: "9r0s",
            bankaccountnumber: "0123456789",
            bankname: "Federal Bank",
            ifsc: "FDRL0001234",
            remarks: "Successfully processed"
        }
    ];



    return (
        <>
            <div className='bg-[#F8F9FA] h-screen px-6 py-8'>
                <div className=' pb-8'>
                    <Table
                        columns={withdrawalColumns}
                        data={withdrawalHistory}
                        title="Withdrawal"
                        searchComponent={Search}
                        handleStatus="withdrawal"
                    />
                </div>
            </div>


        </>
    )
}

export default Withdrawal