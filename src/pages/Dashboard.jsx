import { useAuth, UserButton } from '@clerk/clerk-react'
import React, { useEffect } from 'react'
import DashboardLayout from '../layout/DashboardLayout'

const Dashboard = () => {
   const{getToken} =  useAuth();
   useEffect(()=>{
    const displayToken = async()=>{
      const token = await getToken();
      console.log(token);
    }
    displayToken();
   },[]);
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