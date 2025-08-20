import { useEffect, useState } from "react"

function BgColor(){

    const [color,setColor] = useState([0,0,0])
    
    function randomNumber(){
        return Math.floor(Math.random()*256)
    }
    function handleClick(){
        setColor(() => color.map(n=>{
            return randomNumber()
        }))
    }
    
    useEffect(()=>{
        document.body.style.backgroundColor = `rgb(${color[0]} , ${color[1]} , ${color[2]})`
    },[color])

    return(
        <>  
            <button type="button" onClick={handleClick} className=" bg-amber-400">
              Cliccami
            </button>
        </>
    )
}
export default BgColor