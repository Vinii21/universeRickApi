import { useState, useEffect } from "react";
import axios from "axios";

const Seacrh = ({setData}) => {
    const [location, setLocation] = useState("")
    const [locations, setLocations] = useState([])

    useEffect(()=>{
        let arr = []
        for(let i = 1; i <= 7; i++){
            axios.get(`https://rickandmortyapi.com/api/location?page=${i}`)
            .then((resp)=>{
                for(let j = 0; j < resp?.data?.results.length; j++){
                    arr.push(resp?.data?.results[j])
                }
            })
            .catch(e=>console.log(e))
        }
        setLocations(arr)
    },[])

    const handleSubmit = (e) => {
        e.preventDefault()
        for(let i = 0; i < locations.length; i++){
            if(locations[i].name === e.target.findLocation.value){
                findLocation(locations[i].id)
            }
        }
    }

    const findLocation = (id) => {
        axios.get(`https://rickandmortyapi.com/api/location/${id}`)
          .then((resp)=>{
            setData(resp.data) 
          })
          .catch(
            error => console.error(error)
          )
    }

    return (
        <>
        <form onSubmit={handleSubmit}>
            <div className="group__input">
                <input 
                    type="search"
                    name="findLocation"
                    list="findLocation"
                    placeholder="Search by location" 
                    value={location} 
                    onChange={ (e)=> setLocation(e.target.value)}
                />
                <button type="submit">Search</button>
            </div>
        </form>
        <datalist id="findLocation">
            {
               locations.map((opcion)=>{
                    return(
                        <option value={opcion.name} key={opcion.id}/>
                    )
               }) 
            }
        </datalist>
        </>
    );
}
 
export default Seacrh;