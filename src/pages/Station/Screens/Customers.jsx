import React from 'react'
import { useSelector } from 'react-redux'
import AddCamera from './AddCamera';

export default function Customers() {
    const customer = useSelector(state => state.Reducers.customer)
    console.log(customer)
    return (
        <div className="font-Poppins">
            <div className="flex justify-between items-center">
                <h2 className="text-2xl py-6 px-2 font-bold">Customers</h2>
            </div>

            <div className="overflow-x-auto">
                <table className="min-w-full table-auto text-left rounded text-sm text-gray-500">
                    <thead className="bg-gray-100 text-xs uppercase text-gray-700">
                        <tr>
                            {customer.length > 0 && Object.keys(customer[0]).map(key => (
                                <th key={key} className="px-6 py-3 text-start">
                                    {key.replace(/_/g, ' ').replace(/\b\w/g, char => char.toUpperCase())}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {customer.map((goals, index) => (
                            <tr key={index} className="border-b bg-white hover:bg-gray-50">
                                {Object.keys(goals).map(key => (
                                    <td key={key} className="px-4 py-2">
                                        {goals[key]}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
