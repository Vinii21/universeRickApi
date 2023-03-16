import ResidentInfo from "./ResidentInfo";
import Pagination from "./Pagination";
import { useState } from "react";

const Location = ({data}) => {

    const [characterPerPage, setCharacterPerPage] = useState(10)
    const [currentPage, setCurrentPage] = useState(1)

    const lastIndex = currentPage * characterPerPage
    const firstIndex = lastIndex - characterPerPage

    return (
        <>
        <div className="container__list">
            <ul className="container__list--info">
                <li><b>Nombre: </b><br/>{data?.name}</li>
                <li><b>Tipo: </b><br/>{data?.type}</li>
                <li><b>Dimensión: </b><br/>{data?.dimension}</li>
                <li><b>Residentes: </b><br/>{data?.residents?.length}</li>
            </ul>
        </div>
            <div className="container__residents">
                {
                    data?.residents?.map((resident)=>{
                        return(
                            <ResidentInfo key={resident} resident={resident}/>
                        )
                    }).slice(firstIndex, lastIndex)
                }
                <Pagination 
                    characterPerPage={characterPerPage}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                    totalCharacter={data?.residents?.length}
                />
            </div>

        </>
    );
}
 
export default Location;