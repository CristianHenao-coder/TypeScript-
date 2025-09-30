import Properties from "@/database/models/properties";
import dbConnection from "@/lib/dbconection";
import type { NextApiRequest, NextApiResponse } from "next";

type UsersResponse = {
  properties?: string;
  error?: string; 
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<UsersResponse>
) {
    try {

        if (req.method === "GET") {
      dbConnection()
      const data = await Properties.find()
      console.log(data)

      res.status(200).json({
        ok: true,
        data: data as Property[]
      });
    }
interface Property {
  _id: string;
  name: string;
  value: number;
  img?: string;
}

//     if (req.method === "GET"){
//   console.log("es que si funciona porque soy el crack");
//   res.status(200).json({ properties: "fuciona METODO GET" });
//   }

  if (req.method === "POST"){
  console.log("es que si funciona");
  res.status(200).json({ properties: "fuciona METODO POST" });
  }

    if (req.method === "DELETE"){
  console.log("Puedo eliminar cualquier cosa perro");
  res.status(200).json({ properties: "fuciona METODO DELETE" });
  }
  else {
    res.status(500).json({ properties:'no esta permitido'})
  }

    }catch(err){
        console.log("que paso loco no sirve")
        res.status(500).json({ error: "fallo",})
        }

}