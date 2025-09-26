import { useState } from "react";
import { Userio } from "@/dto/helpers/utils";
import { useRouter } from "next/router";


export default function Login() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("")
  const router = useRouter()


  const verify = () => {
    const findUser = Userio.find((Userio) => name === Userio.name)
    const verifyUser = findUser && password == findUser.password;


 {
  
    if (verifyUser) {
      router.push('/Dashboard');
    } else {
      alert('Contraseña o usuario incorrectos')
      setName('')
      setPassword('')
    }

  }
<!-- 
  return (
    <>
    <h1>Login</h1>
    <label htmlFor="">Name</label>
    <input className="" value={name} required onChange={(e) => setName(e.target.value)}/>
    <label htmlFor="">Password</label>
    <input className="" type="password" value={password} required onChange={(e) => setPassword(e.target.value)}/>

    <input className="" type="submit" value="Login" onClick={verify} />
    </>
  );
}} -->