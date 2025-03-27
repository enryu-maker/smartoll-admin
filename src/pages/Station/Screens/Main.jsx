import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts'; // Example for pie chart
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer as ResponsiveLineChart } from 'recharts'; // Example for line chart
import { getData } from '../../../store/actions/tollActions';

export default function Main() {
    const customer = useSelector(state => state.Reducers.customer)
    const dispatch = useDispatch()
    const [data, setData] = React.useState({})
    React.useEffect(() => {
        dispatch(getData(setData))
    }, [dispatch])
    console.log(data)
    return (
        <div className='font-Poppins'>
            <h3 className="text-3xl py-5 px-2 font-semibold mt-2 text-gray-700">Dashboard Overview</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Card 1: Total Booking */}
                <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition">
                    <h3 className="text-lg font-medium text-gray-700">Total Tolls</h3>
                    <p className="text-3xl font-bold text-blue-600">{data?.total_tolls?.length}</p>
                </div>

                {/* Card 2: Available Workers */}
                <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition">
                    <h3 className="text-lg font-medium text-gray-700">Total Cutomer</h3>
                    <p className="text-3xl font-bold text-yellow-600">{customer?.length}</p>
                </div>

                {/* Card 3: Revenue */}
                <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition">
                    <h3 className="text-lg font-medium text-gray-700">Revenue</h3>
                    <p className="text-3xl font-bold text-indigo-600">₹{data?.total_income}</p>
                </div>
            </div>

            {/* Latest Bookings */}
            <h3 className="text-3xl py-5 px-2 font-semibold mt-2 text-gray-700">Latest Tolls</h3>
            <div className="bg-white p-6 rounded-lg shadow-lg">
                {/* <ul className="space-y-4">
                    {order?.map((item, index) => (
                        <li key={index} className="flex justify-between items-center">
                            <span className="font-medium">by {item?.user_name}</span>
                            <span className="text-xl font-semibold">₹{item?.amount}</span>
                            <span className="text-xl font-semibold">{item?.status}</span>
                            <span className="text-gray-600 text-sm">{item?.order_id}</span>
                        </li>
                    ))}
                </ul> */}
            </div>
        </div>
    );
}
