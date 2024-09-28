import Table from '../reusable_components/Table';
import Search from '../reusable_components/SearchBar';

function Payin() {

    const orderColumns = [
        { header: "Sr. No.", key: "id" },
        { header: "Name", key: "name" },
        { header: "Amount (₹)", key: "amount" },
        { header: "Date", key: "date" },
        { header: "Mode of Payment", key: "modeofpayment" },
        { header: "Transaction Id", key: "transactionid" },
        { header: "Order Id", key: "orderid" },
        { header: "UTR Number", key: "utrnumber" },
        { header: "Status", key: "status" },
        { header: "Remarks", key: "remarks" },
    ];
    const orderHistory = [
        {
            id: 1,
            name: "Kuldeep",
            amount: "100",
            date: "10-08-2024",
            modeofpayment: "Indian Pay",
            transactionid: "155sd5fds",
            orderid: "2",
            utrnumber: "5dff",
            status:"Success",
            remarks: "Processed successfully",
        },
        {
            id: 2,
            name: "Amit",
            amount: "250",
            date: "11-08-2024",
            modeofpayment: "Indian Pay",
            transactionid: "c34ksd9",
            orderid: "3",
            utrnumber: "7gf4",
            status:"Pending",
            remarks: "Awaiting confirmation from bank"
        },
        {
            id: 3,
            name: "Sita",
            amount: "1500",
            date: "12-08-2024",
            modeofpayment: "Indian Pay",
            transactionid: "b7z5xv8",
            orderid: "4",
            utrnumber: "9jhg",
            status:"Failed",
            remarks: "Transaction failed due to insufficient funds"
        },
        {
            id: 4,
            name: "Raj",
            amount: "750",
            date: "13-08-2024",
            modeofpayment: "Indian Pay",
            transactionid: "d9hd6f3",
            orderid: "5",
            utrnumber: "3hfj",
            status:"Success",
            remarks: "Completed without issues"
        },
        {
            id: 5,
            name: "Neha",
            amount: "200",
            date: "14-08-2024",
            modeofpayment: "Indian Pay",
            transactionid: "y8g7hj1",
            orderid: "6",
            utrnumber: "1k2b",
            status:"Success",
            remarks: "Successfully processed"
        },
        {
            id: 6,
            name: "Ravi",
            amount: "600",
            date: "15-08-2024",
            modeofpayment: "Indian Pay",
            transactionid: "e5v6fd2",
            orderid: "7",
            utrnumber: "5sd9",
            status:"Success",
            remarks: "Failed due to technical issues"
        },
        {
            id: 7,
            name: "Meera",
            amount: "1250",
            date: "16-08-2024",
            modeofpayment: "Indian Pay",
            transactionid: "a1sd9v6",
            orderid: "8",
            utrnumber: "6y7h",
            status:"Success",
            remarks: "Issue with transaction"
        },
        {
            id: 8,
            name: "Vikram",
            amount: "300",
            date: "17-08-2024",
            modeofpayment: "Indian Pay",
            transactionid: "t3d8sd7",
            orderid: "9",
            utrnumber: "8k9t",
            status:"Success",
            remarks: "Transaction not completed"
        }
    ];
    
        
    return (
        <>
            <div className='bg-[#F8F9FA] h-screen px-6 py-8'>
                <div className=' pb-8'>
                    <Table
                        columns={orderColumns}
                        data={orderHistory}
                        title="Pay in"
                        searchComponent={Search}
                    />
                </div>
            </div>
        </>
    )
}

export default Payin