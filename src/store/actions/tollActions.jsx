import axios from "axios";
import axiosIns, { baseURL } from "../../helper/Helper";
import { toast } from "react-toastify";

export const adminLogin = (data, setLoading, navigate) => {

    return async (dispatch) => {
        try {
            await axios.post(baseURL + 'v1/admin/admin-login/', data)
                .then((res) => {
                    toast.success(res?.data?.message || "Authentication done Successfully", {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                    });
                    console.log(res.data)
                    localStorage.setItem('access', res?.data?.access_token)
                    navigate("/admin-dashboard")
                    setLoading(false);
                })
                .catch((err) => {
                    console.log(err);
                    toast.error(err?.response?.data?.message || "Something went wrong!", {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                    });
                    setLoading(false);
                });
        } catch (error) {
            console.log(error);
            toast.error(error?.response?.data?.message || "An error occurred during login.", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            setLoading(false);
        }
    };
};

export const getData = (setData) => {
    return async (dispatch) => {
        try {
            await axiosIns.get('v1/admin/total-tolls/')
                .then((res) => {
                    setData(res.data)
                })
                .catch((err) => {
                    console.log(err);
                });
        } catch (error) {
            console.log(error);
        }
    };
}


export const getCameras = () => {
    return async (dispatch) => {
        try {
            await axiosIns.get('v1/toll/get-camera/')
                .then((res) => {
                    dispatch({
                        type: 'GET_CAMERAS',
                        payload: res.data
                    })
                })
                .catch((err) => {
                    console.log(err);
                });
        } catch (error) {
            console.log(error);
        }
    };
}

export const postCamera = (data) => {
    return async (dispatch) => {
        try {
            await axiosIns.post('v1/toll/add-camera/', data, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
                .then((res) => {
                    dispatch(getCameras())
                    toast.success(res?.data?.message || "Camera added successfully", {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                    });
                })
                .catch((err) => {
                    console.log(err);
                    toast.error(err?.response?.data?.message || "Something went wrong!", {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                    });
                });
        } catch (error) {
            console.log(error);
            toast.error(error?.response?.data?.message || "An error occurred during login.", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }
    };
}

export const getTolls = () => {
    return async (dispatch) => {
        try {
            await axiosIns.get('v1/toll/get-toll-station/')
                .then((res) => {
                    dispatch({
                        type: 'GET_TOLLS',
                        payload: res.data
                    })
                })
                .catch((err) => {
                    console.log(err);
                });
        } catch (error) {
            console.log(error);
        }
    };
}

export const postToll = (data) => {
    return async (dispatch) => {
        try {
            await axiosIns.post('v1/toll/add-toll-station/', data)
                .then((res) => {
                    dispatch(getTolls())
                    toast.success(res?.data?.message || "Camera added successfully", {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                    });
                })
                .catch((err) => {
                    console.log(err);
                    toast.error(err?.response?.data?.message || "Something went wrong!", {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                    });
                });
        } catch (error) {
            console.log(error);
            toast.error(error?.response?.data?.message || "An error occurred during login.", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }
    };
}



