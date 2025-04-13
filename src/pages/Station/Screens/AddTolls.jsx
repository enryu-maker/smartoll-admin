import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { postCamera } from '../../../store/actions/tollActions';

export default function AddCamera({ setShow }) {
    const [name, setName] = useState('');
    const [ip, setIp] = useState('');
    const [port, setPort] = useState('');
    const [location, setLocation] = useState('');
    const [url, setUrl] = useState('');
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();

    const handleSubmit = () => {
        setLoading(true);
        const formData = new FormData();
        formData.append('name', name);
        formData.append('camera_ip', ip);
        formData.append('camera_location', location);
        formData.append('camera_port', port);
        formData.append('camera_url', url);
        dispatch(postCamera(formData)).finally(() => {
            setLoading(false);
            setShow(false);
        });
    };

    return (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center overflow-auto font-Poppins">
            <div className="w-full max-w-lg mx-4 sm:mx-6 md:mx-auto bg-white rounded-xl shadow-xl p-6 transform transition-all duration-300 scale-100">
                <div className="flex justify-between items-center border-b pb-4">
                    <h2 className="text-2xl font-semibold text-gray-800">Add Camera</h2>
                    <button
                        onClick={() => setShow(false)}
                        className="text-gray-500 hover:text-red-500 focus:outline-none"
                        aria-label="Close modal"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-6 h-6"
                            viewBox="0 0 320.591 320.591"
                            aria-hidden="true"
                        >
                            <path d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z" />
                            <path d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z" />
                        </svg>
                    </button>
                </div>

                <form className="space-y-5 mt-5" onSubmit={(e) => e.preventDefault()}>
                    {[
                        { label: 'Name', value: name, setter: setName, placeholder: 'Enter camera name' },
                        { label: 'Camera IP', value: ip, setter: setIp, placeholder: 'Enter camera IP' },
                        { label: 'Port', value: port, setter: setPort, placeholder: 'Enter camera port' },
                        { label: 'Camera Location', value: location, setter: setLocation, placeholder: 'Enter camera location' },
                        { label: 'Camera URL', value: url, setter: setUrl, placeholder: 'Enter camera URL' },
                    ].map(({ label, value, setter, placeholder }, i) => (
                        <div key={i}>
                            <label className="block text-base font-medium text-gray-700 mb-1">
                                {label}
                            </label>
                            <input
                                type="text"
                                value={value}
                                onChange={(e) => setter(e.target.value)}
                                required
                                className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none text-base"
                                placeholder={placeholder}
                            />
                        </div>
                    ))}

                    <div className="flex justify-end gap-4 pt-4 border-t border-gray-200">
                        <button
                            type="button"
                            onClick={() => setShow(false)}
                            className="px-6 py-2 rounded-md bg-gray-200 text-gray-800 text-sm font-semibold hover:bg-gray-300 transition"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            onClick={handleSubmit}
                            disabled={loading}
                            className={`px-6 py-2 rounded-md text-white text-sm font-semibold transition ${loading
                                    ? 'bg-blue-400 cursor-not-allowed'
                                    : 'bg-blue-600 hover:bg-blue-700'
                                }`}
                        >
                            {loading ? 'Saving...' : 'Save'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
