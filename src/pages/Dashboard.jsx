import { UserButton } from '@clerk/clerk-react'
import React from 'react'
import DashboardLayout from '../layout/DashboardLayout'

const Dashboard = () => {
  return (
    // whaterver is comming under dahsboard layout is called as children
    <DashboardLayout activeMenu="Dashboard"> 
      <div>
        DashBoard content
      </div>
    </DashboardLayout>
  )
}

export default Dashboard