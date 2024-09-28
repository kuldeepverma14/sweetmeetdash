import { lazy } from 'react';

const Dashboard = lazy(() => import('../pages/Dashboard'));
const Profile = lazy(() => import('../components/Profile'));
const UsersList = lazy(() => import('../pages/UsersList'));
const AgentList = lazy(() => import('../pages/AgentList'));
const AddAgent = lazy(() => import('../pages/AddAgent'));
const CreateAgentDetails = lazy(() => import('../pages/CreateAgentDetails'));
const OrderHistory = lazy(() => import('../pages/OrderHistory'));
const ViewAgentCallingHistory = lazy(() => import('../pages/ViewAgentCallingHistory'));
const ViewUserCallingHistory = lazy(() => import('../pages/ViewUserCallingHistory'));
const SystemUser = lazy(() => import('../pages/SystemUser'));
const BusinessSetup = lazy(() => import('../pages/BusinessSetup'));
const Payin = lazy(() => import('../pages/Payin'));
const Withdrawal = lazy(() => import('../pages/Withdrawal'));

const Lazycomponents = {
    Dashboard,
    Profile,
    UsersList,
    AgentList,
    AddAgent,
    CreateAgentDetails,
    OrderHistory,
    ViewAgentCallingHistory,
    ViewUserCallingHistory,
    SystemUser,
    BusinessSetup,
    Payin,
    Withdrawal,
}
export default Lazycomponents 