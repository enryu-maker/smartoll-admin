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
                {cameras.map((goals, index) => (
                    <iframe
                        key={index}
                        src={goals.camera_url}
                        className="w-full h-64"
                        allowFullScreen
                        title={goals.camera_location}
                    ></iframe>
                ))}
            </div>
        </div>
    )
}
