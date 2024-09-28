import React, { useEffect, useState } from 'react';
import Table from '../reusable_components/Table';
import Search from '../reusable_components/SearchBar';
import { Link } from 'react-router-dom';
import axios from 'axios';

function AgentList() {
    const [agents, setAgents] = useState(null);

    const getAgents = async () => {
        try {
            const res = await axios.get(`http://sweet_meet_backend.fapjoymall.com/sweetmeet/allusers`);
            if (res?.status === 200) {
                const filteredUsers = res?.data?.allUsers?.filter(item => item?.role === "agent");
                setAgents(filteredUsers);
            } else {
                console.log("agents not found");
            }
        } catch (err) {
            console.log("error", err);
        }
    };

    useEffect(() => {
        getAgents();
    }, []);

    const agentColumns = [
        { header: "Sr. No.", key: "id" },
        { header: "Agent ID", key: "uid" },
        { header: "Agent name", key: "username" },
        { header: "Wallet Balance (₹)", key: "agent_wallet_balance" },
        { header: "Status", key: "agent_online_status" },
        { header: "Calling History", key: "callingHistory" },
        { header: "Transaction History", key: "transactionHistory" },
        { header: "Documents", key: "documents" },
        { header: "details", key: "details" },
    ];

    const agentData = agents?.map((agent, index) => ({
        id: index + 1,
        uid: agent.uid,
        username: agent.username,
        agent_wallet_balance: agent.agent_wallet_balance || 'N/A',
        agent_online_status: agent.status === 1 ? "Active" : "Inactive",
        callingHistory: (
            <Link to={`/viewagentcallinghistory/${agent.uid}`} className="text-text hover:text-text2 hover:underline font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                View
            </Link>
        ),
        transactionHistory: (
            <Link to={`/viewagenttransactionhistory/${agent.uid}`} className="text-text hover:text-text2 hover:underline font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                View
            </Link>
        ),
        documents: (
            <Link to={`/viewagentdocuments/${agent.uid}`} className="text-text hover:text-text2 hover:underline font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                View
            </Link>
        ),
        details: (
            <Link
                to={`addagentdetails/${agent.uid}?username=${encodeURIComponent(agent.username)}`}
                className="text-text hover:text-text2 hover:underline font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
                Add Details
            </Link>

        ),
    }));

    const handleAgentEdit = (row) => {
        console.log("Edit", row);
    };

    const handleAgentDelete = (row) => {
        console.log("Delete", row);
    };

    return (
        <>
            <div className='bg-[#F8F9FA] h-screen px-6 py-8'>
                <div className=' pb-8'>
                    <Table
                        columns={agentColumns}
                        data={agentData}
                        title="Agents List"
                        onEdit={handleAgentEdit}
                        onDelete={handleAgentDelete}
                        searchComponent={Search}
                        showActions={true}
                        addAction={true}
                        addPath="addagent"
                        addButton="Add Agent"
                        handleStatus=""
                    />
                </div>
            </div>
        </>
    );
}

export default AgentList;
