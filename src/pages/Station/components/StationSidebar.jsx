import React from 'react';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { FaTachometerAlt, FaBox, FaSyncAlt, FaChartPie, FaCalendarAlt, FaFileAlt } from 'react-icons/fa'; // Import icons from R
import { GrUserWorker } from "react-icons/gr";
import { RxUpdate, RxDashboard } from "react-icons/rx";
import { CiFileOn } from "react-icons/ci";
export default function StationSidebar({
    setPath
}) {
    return (
        <Sidebar
            backgroundColor='#fff'
            collapsedWidth='0px'
            collapsed={false}
            className='h-screen font-Poppins bg-primary '
            menuItemStyles={{
                button: {
                    [`&.active`]: {
                        backgroundColor: '#13395e',
                        color: '#b6c8d9',
                    },
                },
            }}>
            <Menu
                className=' space-y-5'>
                <h1 className=' text-center mt-5 text-green-500 text-3xl font-semibold  font-Poppins'>FlexiPASS</h1>
                {/* Dashboard Section */}
                <MenuItem
                    onClick={() => {
                        setPath("dashboard")
                    }}
                    className=' mt-10' icon={<RxDashboard />}> Dashboard </MenuItem>

                {/* Orders Section */}
                <SubMenu label="Hardware Module" icon={<CiFileOn />}>
                    <MenuItem
                        onClick={() => {
                            setPath("toll")
                        }}
                    >Add Toll  </MenuItem>
                    <MenuItem
                        onClick={() => {
                            setPath("camera")
                        }}
                    > Add Camera </MenuItem>
                </SubMenu>

                {/* Update Section */}
                <SubMenu label="Customer" icon={<RxUpdate />}>
                    <MenuItem
                        onClick={() => {
                            setPath("customer")
                        }}
                    > Customer Details </MenuItem>
                    <MenuItem
                        onClick={() => {
                            setPath("vehicle")
                        }}
                    > Vehicle Details </MenuItem>
                </SubMenu>
                {/* <MenuItem
                    onClick={() => {
                        setPath("worker")
                    }}
                    icon={<GrUserWorker />}
                > Tolls </MenuItem> */}
            </Menu>
        </Sidebar>
    );
}
