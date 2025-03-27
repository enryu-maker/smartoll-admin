import React, { useState } from 'react'
import OtpInput from 'react-otp-input';
import { useDispatch } from 'react-redux';
import { regsiterWorker } from '../../../store/actions/stationActions';

export default function AddCamera({
    setShow
}) {
    const [name, setName] = useState('');
    const [ip, setIp] = useState('');
    const [location, setLocation] = useState('');
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch()
    return (
        <div
            class="fixed inset-0 p-4 flex flex-wrap justify-center items-center w-full h-full z-[1000] before:fixed before:inset-0 before:w-full before:h-full before:bg-[rgba(0,0,0,0.5)] overflow-auto font-Poppins">
            <div class="w-full max-w-lg bg-white shadow-lg rounded-lg p-6 relative">
                <div class="flex items-center pb-3 border-b border-gray-300">
                    <h3 class="text-gray-800 text-xl font-bold flex-1">Add Camera</h3>
                    <svg
                        onClick={() => {
                            setShow(false)
                        }}
                        xmlns="http://www.w3.org/2000/svg" class="w-3 ml-2 cursor-pointer shrink-0 fill-gray-400 hover:fill-red-500"
                        viewBox="0 0 320.591 320.591">
                        <path
                            d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"
                            data-original="#000000"></path>
                        <path
                            d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"
                            data-original="#000000"></path>
                    </svg>
                </div>

                <div class="my-6 space-y-3">
                    <div>
                        <label htmlFor="name" className="block text-lg font-semibold text-gray-700">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                            className="w-full px-5 py-3 mt-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-lg"
                            placeholder="Enter worker name"
                        />
                    </div>
                    <div>
                        <label htmlFor="phone" className="block text-lg font-semibold text-gray-700">
                            camera IP
                        </label>
                        <input
                            type="number"
                            id="phone"
                            value={ip}
                            onChange={(e) => setIp(e.target.value)}
                            required
                            className="w-full px-5 py-3 mt-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-lg"
                            placeholder="Enter camera IP"
                        />
                    </div>
                    <div>
                        <label htmlFor="phone" className="block text-lg font-semibold text-gray-700">
                            camera Location
                        </label>
                        <input
                            type="text"
                            id="location"
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                            required
                            className="w-full px-5 py-3 mt-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-lg"
                            placeholder="Enter camera Location"
                        />
                    </div>
                </div>

                <div class="border-t border-gray-300 pt-6 flex justify-end gap-4">
                    <button
                        onClick={() => {
                            setShow(false)
                        }}
                        type="button"
                        class="px-4 py-2 rounded-lg text-gray-800 text-sm border-none outline-none tracking-wide bg-gray-200 hover:bg-gray-300 active:bg-gray-200">Close</button>
                    <button
                        onClick={() => {
                            // dispatch(regsiterWorker({
                            //     name: name,
                            //     phone_number: phone,
                            //     otp: password,
                            // }, setLoading))
                        }}
                        type="button"
                        class="px-4 py-2 rounded-lg text-white text-sm border-none outline-none tracking-wide bg-blue-600 hover:bg-blue-700 active:bg-blue-600">
                        {loading ? "loading..." : "Save"}
                    </button>
                </div>
            </div>
        </div>
    )
}
