import React from 'react';
// import Stack from '@mui/material/Stack';
import MyChart from './chart.tsx';
import SideBar from '../sidebar/sidebar.tsx';
import AdminHeader from '../Headers/adminHeader.tsx';


const Dashboard = () => {
  return (
    <div style={{ display: 'flex' }}>
      <SideBar/>
      
      
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 pt-20">
      
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 text-center ">Admin Dashboard</h1>
           <div style={{position:"relative"}}>
           <MyChart />
           </div>
          </div>
      
    </div>
  );
};

export default Dashboard;

