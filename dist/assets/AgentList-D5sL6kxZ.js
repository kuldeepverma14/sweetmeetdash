import{r as d,j as t,L as a}from"./index-BYiP2-EI.js";import{T as g,S as y}from"./Table-Ck3Md2G7.js";import{a as f}from"./axios-CCb-kr4I.js";import"./Button-MTqpEF5K.js";function _(){const[s,r]=d.useState(null),i=async()=>{var e,o;try{const n=await f.get("http://sweet_meet_backend.fapjoymall.com/sweetmeet/allusers");if((n==null?void 0:n.status)===200){const m=(o=(e=n==null?void 0:n.data)==null?void 0:e.allUsers)==null?void 0:o.filter(l=>(l==null?void 0:l.role)==="agent");r(m)}else console.log("agents not found")}catch(n){console.log("error",n)}};d.useEffect(()=>{i()},[]);const c=[{header:"Sr. No.",key:"id"},{header:"Agent ID",key:"uid"},{header:"Agent name",key:"username"},{header:"Wallet Balance (₹)",key:"agent_wallet_balance"},{header:"Status",key:"agent_online_status"},{header:"Calling History",key:"callingHistory"},{header:"Transaction History",key:"transactionHistory"},{header:"Documents",key:"documents"},{header:"details",key:"details"}],u=s==null?void 0:s.map((e,o)=>({id:o+1,uid:e.uid,username:e.username,agent_wallet_balance:e.agent_wallet_balance||"N/A",agent_online_status:e.status===1?"Active":"Inactive",callingHistory:t.jsx(a,{to:`/viewagentcallinghistory/${e.uid}`,className:"text-text hover:text-text2 hover:underline font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline",children:"View"}),transactionHistory:t.jsx(a,{to:`/viewagenttransactionhistory/${e.uid}`,className:"text-text hover:text-text2 hover:underline font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline",children:"View"}),documents:t.jsx(a,{to:`/viewagentdocuments/${e.uid}`,className:"text-text hover:text-text2 hover:underline font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline",children:"View"}),details:t.jsx(a,{to:`addagentdetails/${e.uid}?username=${encodeURIComponent(e.username)}`,className:"text-text hover:text-text2 hover:underline font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline",children:"Add Details"})})),h=e=>{console.log("Edit",e)},x=e=>{console.log("Delete",e)};return t.jsx(t.Fragment,{children:t.jsx("div",{className:"bg-[#F8F9FA] h-screen px-6 py-8",children:t.jsx("div",{className:" pb-8",children:t.jsx(g,{columns:c,data:u,title:"Agents List",onEdit:h,onDelete:x,searchComponent:y,showActions:!0,addAction:!0,addPath:"addagent",addButton:"Add Agent",handleStatus:""})})})})}export{_ as default};