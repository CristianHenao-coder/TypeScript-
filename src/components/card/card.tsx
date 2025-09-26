import React from "react"
import Image from "next/image"

interface miscard {

    titulo: string,
    boton?: string,
    imagen: string,
    bgcolor?: "green" | "white" | "black"   

}


export const Card = ({titulo, boton, imagen,bgcolor}: miscard) => {
    return (

    <div 
            className={
           bgcolor ==="green"
           ?"card card-green" : bgcolor === "white"
           ?"card card-white" : bgcolor === "black"
           ? "card card-black" : ""
           
            }

           >

            <div className="card__leftSide">

            <div className="">{titulo}</div>



            </div>

        
       






        
    </div>




)};

