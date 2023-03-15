import { useState, useEffect } from "react";
import axios from "axios";

const ResidentInfo = ({resident}) => {

    const [ character, setCharacter ] = useState({})

    useEffect(()=>{
        axios.get(resident)
            .then((resp)=>{
                setCharacter(resp.data)
            })
            .catch(error=>console.error(error))
    },[])

    return (
        <div className="card">
            <h2 className="card__title">{character?.name}</h2>
            <img className="card__image" src={character?.image} alt={"Image by " + character?.name} />
            <span className="card__status">{character?.status}</span>
            <ul className="card__info">
                <li><b>Race: </b>{character?.species}</li>
                <li><b>Origin: </b>{character?.origin?.name}</li>
                <li><b>Appearance: </b>{character?.episode?.length}</li>
            </ul>
        </div>
    );
}
 
export default ResidentInfo;