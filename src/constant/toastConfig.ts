import { ToastOptions } from "react-toastify";

export const ToastConfig = (timeClose?: number) =>
  ({
    position: "top-center",
    autoClose: timeClose || 1000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false, //hover to pause progress
    draggable: false,
    progress: undefined,
    theme: "dark",
  }) as ToastOptions;
