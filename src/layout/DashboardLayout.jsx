import { useUser } from '@clerk/clerk-react'
import React from 'react'
import Navbar from '../components/Navbar';
import SideMenu from '../components/SideMenu';

function DashboardLayout({children,activeMenu}) {
   const{user}=  useUser(); //clerk is going to provide us user object
  return (
   <div>
    {/* {nav bar goes here} */}
    <Navbar activeMenu={activeMenu} />
    {user && (
        <div className="flex">
            <div className='max-[1080p]:hidden'>
                {/* sidemenu goes here */}
                <SideMenu activeMenu={activeMenu} />
            </div>
            <div className="class mx-5">{children}</div>
        </div>
    )}
   </div>
  )
}

export default DashboardLayout