import { Suspense} from "react"
import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout/Layout";
import PageNotFound from "./errorHandling/PageNotFound";
import SignUp from "./auth/SignUp";
import SignIn from "./auth/SignIn";
import Lazycomponents from "./Lazy/LazyComponents";

const { Dashboard, Profile, UsersList, AgentList, AddAgent,CreateAgentDetails, OrderHistory, ViewAgentCallingHistory, ViewUserCallingHistory, SystemUser, BusinessSetup, Payin, Withdrawal } = Lazycomponents

const router = createBrowserRouter([{
  path: "/",
  element: <Layout />,
  children: [
    {
      path: "/",
      element: <Suspense fallback={<div className="flex justify-center items-center h-screen">Loading...</div>}><Dashboard /></Suspense>
    },
    {
      path: "/profile",
      element: <Suspense fallback={<div className="flex justify-center items-center h-screen">Loading...</div>}><Profile /></Suspense>
    },
    {
      path: "/userslist",
      element: <Suspense fallback={<div className="flex justify-center items-center h-screen">Loading...</div>}><UsersList /></Suspense>
    },
    {
      path: "userslist/viewusercallinghistory",
      element: <Suspense fallback={<div className="flex justify-center items-center h-screen">Loading...</div>}><ViewUserCallingHistory /></Suspense>
    },
    {
      path: "/agentlist",
      element: <Suspense fallback={<div className="flex justify-center items-center h-screen">Loading...</div>}><AgentList /></Suspense>
    },
    {
      path: "agentlist/addagent",
      element: <Suspense fallback={<div className="flex justify-center items-center h-screen">Loading...</div>}><AddAgent /></Suspense>
    },
    {
      path: "agentlist/addagentdetails/:uid",
      element: <Suspense fallback={<div className="flex justify-center items-center h-screen">Loading...</div>}><CreateAgentDetails /></Suspense>
    },
    {
      path: "agentlist/viewagentcallinghistory",
      element: <Suspense fallback={<div className="flex justify-center items-center h-screen">Loading...</div>}><ViewAgentCallingHistory /></Suspense>
    },
    {
      path: "/payin",
      element: <Suspense fallback={<div className="flex justify-center items-center h-screen">Loading...</div>}><Payin /></Suspense>
    },
    {
      path: "/withdrawal",
      element: <Suspense fallback={<div className="flex justify-center items-center h-screen">Loading...</div>}><Withdrawal /></Suspense>
    },
    {
      path: "/orderhistory",
      element: <Suspense fallback={<div className="flex justify-center items-center h-screen">Loading...</div>}><OrderHistory /></Suspense>
    },
    {
      path: "/systemuser",
      element: <Suspense fallback={<div className="flex justify-center items-center h-screen">Loading...</div>}><SystemUser /></Suspense>
    },
    {
      path: "/businesssetup",
      element: <Suspense fallback={<div className="flex justify-center items-center h-screen">Loading...</div>}><BusinessSetup /></Suspense>
    },
  ]
},
{
  path: "*", element: <PageNotFound />
},
{
  path: "/signup", element: <SignUp />
},
{
  path: "/signin", element: <SignIn />
},
])
export default router
