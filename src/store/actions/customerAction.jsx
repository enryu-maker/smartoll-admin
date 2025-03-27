import axios from "axios";
import axiosIns, { baseURL } from "../../helper/Helper";
import { toast } from "react-toastify";



export const getCustomer = () => {
    return async (dispatch) => {
        try {
            await axiosIns.get('v1/admin/get-users/')
                .then((res) => {
                    dispatch({
                        type: 'GET_CUSTOMERS',
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


export const getVehicle = () => {
    return async (dispatch) => {
        try {
            await axiosIns.get('v1/admin/get-vehicles/')
                .then((res) => {
                    dispatch({
                        type: 'GET_VEHICLES',
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