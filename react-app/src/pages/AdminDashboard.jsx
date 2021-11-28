import React from 'react';
import Sidebar from '../components/sidebar/SideBar';
import Topbar from '../components/topbar/Topbar';

function AdminDashboard() {
    return(
        <div>
            <Topbar/>
            <Sidebar/>
        </div>
    )
}

export default AdminDashboard;