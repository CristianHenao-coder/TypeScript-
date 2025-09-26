// /src/components/Login.tsx

import { useState } from "react";
import { useRouter } from "next/router";
import { Userio, notificacion } from "@/dto/helpers/utils";
import { MiButton } from '../components/button/button';
import handler from '../pages/api/hello';




export default function Login() {

  // Estado local para almacenar el usuario que se ingresa en el input
  const [usuario, setUsuario] = useState("");
  // Estado local para almacenar la contraseña que se ingresa en el input
  const [clave, setClave] = useState("");

  // Hook de Next.js para manejar la navegación programática entre páginas
  const router = useRouter();

  const verificar = () => {
    const usuarioEncontrado = Userio.find((u) => u.name === usuario);
    const esValido = usuarioEncontrado && usuarioEncontrado.password === clave;


  // Si es válido, muestra notificación de éxito y redirige al dashboard

    if (esValido) {
      notificacion("Bienvenido " + usuario, "success")
      router.push("/dashboard");
   

  // Si no es válido, muestra error y limpia los campos

    } else {
      notificacion("Usuario o contraseña incorrectos", "error");
      setUsuario("");
      setClave("");
    }
  };


/// cargabdo boton 

  const [loader, setloader] = useState(false);
  const handlerClick = () =>{

    setloader(true);

    setTimeout (()=>{
      
    setloader(false);
    
    }, 3000);
  }


  return (
    <div className="caja-login">
      <h1 className="titulo">Login</h1>

      <label className="etiqueta">Usuario</label>
      <input
        className="campo"
        type="text"
        value={usuario}
        placeholder="Tu usuario"
        onChange={(e) => setUsuario(e.target.value)}
      />

      <label className="etiqueta mt">Contraseña</label>
      <input
        className="campo"
        type="password"
        value={clave}
        placeholder="Tu contraseña"
        onChange={(e) => setClave(e.target.value)}
      />

      <button className="btn mt" onClick={verificar}>
        Ingresar
      </button>

    <MiButton text ={"guardar"} icon={"***"}  loading={loader} Click={handlerClick}/> 
    
    </div>
  );
}
