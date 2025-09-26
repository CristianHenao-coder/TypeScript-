// utils.ts

import { toast } from "react-toastify";

// Lista de usuarios permitidos
export const Userio = [
  {
    name: "sapo",
    password: "1234",
  },
];



// Función de notificación usando react-toastify

export const notificacion = (text: string, type: string, time?:number) => {
  if (type === "success") {
    toast.success(text, {
      position: "top-center",
      autoClose: time || 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "dark",
    });
  } 
  
  {
    toast.error(text, {
      position: "top-center",
      autoClose: 3000,
    });
  }
};


