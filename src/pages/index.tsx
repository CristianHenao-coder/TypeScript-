// index.tsx

import React from "react";
import Login from "@/components/Login";
import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
import { getProperties } from "@/services/properties";


/**
 * Página principal que renderiza el componente de Login
 */

const handlerClick = async ()=> {

    const response = await getProperties();
    console.log (response.data)
 }
export default function Home() {


  return (
    <div className="caja-principal">
      <h1 className="titulo-principal">Welcome to Dashboard</h1>
      <div><Login/></div>
      <ToastContainer aria-label={undefined} />
      <button onClick={handlerClick}> llama la api </button>
    </div>
  );
}



  //-------------------------------------------------

  // Imprimir ultimo dato de la lista
  
  // const array2= ['hola','h','o','l','a']

  // const returnlast= <T,> (array: T[]): T => {

  //   return array[array.length -1]

  // }
  // const result= returnlast<string>(array2)
  // console.log (result)

  // //--------------------------------------------------



  // const returnreverse = <T,>(array: T[]): T[] => {
  //   return array.reverse();
  // };

  // const resultado = returnreverse<string>(array2);
  // console.log(resultado);
   
