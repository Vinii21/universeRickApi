import ResidentInfo from "./ResidentInfo";

const Location = ({data}) => {

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
                    })
                }
            </div>
        </>
    );
}
 
export default Location;