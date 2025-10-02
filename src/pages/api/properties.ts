import Properties from "@/database/models/properties";
import dbConnection from "@/lib/dbconection";
import type { NextApiRequest, NextApiResponse } from "next";



interface Property {
  _id: string;
  name: string;
  value: number;
  img?: string;
}

type UsersResponse = {
  properties?: string;
  error?: string; 
  ok?: boolean
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<UsersResponse>
) {
    try {

        if (req.method === "GET") {
      dbConnection()
      const data = await Properties.find();

      res.status(200).json({
        ok: true,
        info: data as Property[],
      });
    }


//     if (req.method === "GET"){
//   console.log("es que si funciona porque soy el crack");
//   res.status(200).json({ properties: "fuciona METODO GET" });
//   }

  if (req.method === "POST"){
  console.log("es que si funciona");
  res.status(200).json({
    properties: "fuciona METODO POST",
    ok: false
  });
  }

  if (req.method === "PUT"){

    try{
    const {id, name, value, img} = req.body
    console.log(id, name, value, img)

    const propertyUpdate = await Properties.findByIdAndUpdate(

      id,{

        name, value, img
      }
    )
    console.log (propertyUpdate);
} catch {
  res.status(400)
}
  }

  res

  .status(200)
  .json({ ok: true, message: "property update", updatedId: id });


    if (req.method === "DELETE"){

      const {id} = req.query
      console.log(id)
      await Properties.findByIdAndDelete(id)
      res
      .status(200)
      .json({ok:true, name: "property"})


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