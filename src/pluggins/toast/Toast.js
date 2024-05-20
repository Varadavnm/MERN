import {toast, Slide} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
export function successToast(message){
    toast.success(message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: 0.001,
        theme: "light",
        transition: Slide,
        });

}
export function errorToast(message){
    toast.error(message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: 0.01,
        theme: "light",
        transition: Slide,
        });

}
