import { NavLink } from 'react-router-dom'
import ProgressBar from '../reusable_components/ProgressBar'
import { PiHandDeposit, PiHandWithdraw, PiUserListBold } from 'react-icons/pi'
import { FaUserTie } from 'react-icons/fa'
import { MdOnlinePrediction, MdOutlineVideoCall } from 'react-icons/md'
import { RiUserLocationLine } from 'react-icons/ri'

function Dashboard() {

  const stats = [
    {
      title: "Total Users",
      count: "99",
      icon: <PiUserListBold size={60} className='text-text' />,
    },
    {
      title: "Total Agents",
      count: "90",
      icon: <FaUserTie size={50} className='text-text' />,
    },
    {
      title: "Today Live Agents",
      count: "70",
      icon: <RiUserLocationLine size={55} className='text-text' />,
    },
    {
      title: "Total Live Agents",
      count: "70",
      icon: <RiUserLocationLine size={55} className='text-text' />,
    },
    {
      title: "Today Online Agents",
      count: "95",
      icon: <MdOnlinePrediction size={60} className='text-text' />,
    },
    {
      title: "Today Video Calling",
      count: "99",
      icon: <MdOutlineVideoCall size={60} className='text-text' />,
    },
    {
      title: "Total Video Calling",
      count: "95",
      icon: <MdOutlineVideoCall size={60} className='text-text' />,
    },
    {
      title: "Today Payin",
      count: "90",
      icon: <PiHandDeposit size={60} className='text-text' />,
    },
    {
      title: "Total Payin",
      count: "90",
      icon: <PiHandDeposit size={60} className='text-text' />,
    },
    {
      title: "Today Withdrawal",
      count: "95",
      icon: <PiHandWithdraw size={60} className='text-text' />,
    },
    {
      title: "Total Withdrawal",
      count: "95",
      icon: <PiHandWithdraw size={60} className='text-text' />,
    },
  ]

  return (
    <div className='bg-[#F8F9FA] h-screen px-6 pt-8'>
      <h1 className='font-bold text-2xl'>Dashboard</h1>
      <nav className="hidden bg-slate-200 rounded-md lg:inline-flex flex-1 mt-3 px-5 py-2">
        <NavLink
          className=""
          to="/"
          end
          style={({ isActive }) => ({ color: isActive ? '#5F33A6' : 'black' })}
        >
          Dashboard &nbsp; / &nbsp;
        </NavLink>
      </nav>
      <div className='grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 sm:gap-5 mt-5'>
        <ProgressBar stats={stats} />
      </div>
    </div>
  )
}

export default Dashboard