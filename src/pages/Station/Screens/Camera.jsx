import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import AddCamera from './AddCamera';
import ViewFeed from './ViewFeed';
import { getFeed } from '../../../store/actions/tollActions';

export default function Camera() {
    const [show, setShow] = React.useState(false);
    const [show1, setShow1] = React.useState(false);
    const [current, setCurrent] = React.useState({});
    const dispatch = useDispatch()
    const [url, setUrl] = React.useState(null)
    const cameras = useSelector(state => state.Reducers.camera)
    return (
        <div className="font-Poppins">
            {
                show &&
                <AddCamera setShow={setShow} />
            }
            {
                show1 &&
                <ViewFeed setShow={setShow1} url={url} />
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
                                <td className="px-4 py-2">
                                    <button
                                        onClick={() => {
                                            console.log("hello")
                                            dispatch(getFeed(goals.camera_ip, goals.camera_port, setUrl, setShow1))
                                        }}
                                        className="px-4 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all">
                                        View
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
