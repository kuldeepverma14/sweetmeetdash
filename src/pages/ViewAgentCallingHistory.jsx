import React from 'react'
import Table from '../reusable_components/Table';
import Search from '../reusable_components/SearchBar';

function ViewAgentCallingHistory() {
  const userColumns = [
    { header: "Sr. No.", key: "id" },
    { header: "Call Type", key: "calltype" },
    { header: "Caller", key: "caller" },
    { header: "Receiver", key: "receiver" },
    { header: "Call Duration", key: "callDuration" },
  ];

  const usersData = [
    {
      id: 1, calltype: "video", caller: "agent1", receiver: "abc",callDuration:"40 Seconds"
    },
   
  ];
  return (
<>
<div className='bg-[#F8F9FA] h-screen px-6 py-8'>
        <Table
          columns={userColumns}
          data={usersData}
          title="Agent1"
          searchComponent={Search}
        />
      </div>
</>  )
}

export default ViewAgentCallingHistory