import Table from '../reusable_components/Table';
import Search from '../reusable_components/SearchBar';

function OrderHistory() {

    const orderColumns = [
        { header: "Sr. No.", key: "id" },
        { header: "Order Type", key: "orderType" },
        { header: "Requester", key: "requester" },
        { header: "Responder", key: "responder" },
        { header: "Duration", key: "duration" },
        { header: "Total Payin (₹)", key: "totalpayin" },
        { header: "Report ", key: "report" },
    ];
    const orderHistory = [
        {
          id: 1,
          orderType: "Audio",
          requester: "kd",
          responder: "kritika",
          duration: "45 Second",
          totalpayin: "50",
          report:"Deception",
        },
        {
          id: 2,
          orderType: "Video",
          requester: "john",
          responder: "alice",
          duration: "1 Minute 20 Seconds",
          totalpayin: "100",
          report:"Illegal Content",
        },
        {
          id: 3,
          orderType: "Text",
          requester: "mike",
          responder: "sara",
          duration: "2 Minutes",
          totalpayin: "30",
          report:"Illegal Name",
        },
        {
          id: 4,
          orderType: "Audio",
          requester: "anna",
          responder: "tom",
          duration: "1 Minute",
          totalpayin: "70",
          report:"Pornography",
        },
        {
          id: 5,
          orderType: "Text",
          requester: "susan",
          responder: "jack",
          duration: "3 Minutes 15 Seconds",
          totalpayin: "120",
          report: "Other"
        }
      ];
      
    return (
        <>
            <div className='bg-[#F8F9FA] h-screen px-6 py-8'>
                <div className=' pb-8'>
                    <Table
                        columns={orderColumns}
                        data={orderHistory}
                        title="Order History"
                        searchComponent={Search}
                    />
                </div>
            </div>
        </>
    )
}

export default OrderHistory