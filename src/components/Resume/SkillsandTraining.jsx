import { useEffect, useState } from "react"
import './SkillsandTraining.css'

function SkillsandTraining(props){

    const items = props.lst

    return(

        <>
        <ol>
        {Object.entries(items).map(([key, value])=><li>{key}<ul>{value.map(v=><li>{v}</li>)}<br/></ul></li>)}
        </ol>
        </>
    )

}
export default SkillsandTraining