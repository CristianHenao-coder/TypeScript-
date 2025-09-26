

interface mibuttonprope {

    text: string,
    icon: string,
    disabled?: boolean,
    loading?: boolean,
    Click?: ()=> void
}   

export const MiButton = ({text, icon, disabled= false, loading =true, Click } : mibuttonprope  ) =>{

// const handleClick = () => {

//     console.log("se hizo click")
// }

return (

    <button onClick={Click} 
    className={`components--button $
        
        {disabled ? "components--button--disabled":"" }"`}
    disabled= {disabled || loading}
>
       <div>{loading ? "cargando..." : text}</div> 
        <div>{icon}</div> 
    </button>

)

}
