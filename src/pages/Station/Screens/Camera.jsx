import React from 'react'
import { useSelector } from 'react-redux'
import AddCamera from './AddCamera';

export default function Camera() {
    const [show, setShow] = React.useState(false);
    const cameras = useSelector(state => state.Reducers.camera)
    console.log(cameras)
    return (
        <div className="font-Poppins">
            {
                show &&
                <AddCamera setShow={setShow} />
            }
            <div className="flex justify-between items-center">
                <h2 className="text-2xl py-6 px-2 font-bold">Camera</h2>
                <button
                    onClick={() => setShow(!show)}
                    className="px-4 py-2 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition-all"
                >
                    Add Camera
                </button>
            </div>

            <div className="overflow-x-auto">
                <table className="min-w-full table-auto text-left rounded text-sm text-gray-500">
                    <thead className="bg-gray-100 text-xs uppercase text-gray-700">
                        <tr>
                            {cameras.length > 0 && Object.keys(cameras[0]).map(key => (
                                <th key={key} className="px-6 py-3 text-start">
                                    {key.replace(/_/g, ' ').replace(/\b\w/g, char => char.toUpperCase())}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {cameras.map((goals, index) => (
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
