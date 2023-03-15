import ResidentInfo from "./ResidentInfo";

const Location = ({data}) => {

    return (
        <>
            <ul className="container__info">
                <li><b>Nombre: </b><br/>{data?.name}</li>
                <li><b>Tipo: </b><br/>{data?.type}</li>
                <li><b>Dimensión: </b><br/>{data?.dimension}</li>
                <li><b>Residentes: </b><br/>{data?.residents?.length}</li>
            </ul>
            <div className="container__residents">
                {
                    data?.residents?.map((resident)=>{
                        return(
                            <ResidentInfo key={resident} resident={resident}/>
                        )
                    })
                }
            </div>
        </>
    );
}
 
export default Location;