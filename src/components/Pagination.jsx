const Pagination = ({characterPerPage,currentPage,setCurrentPage,totalCharacter}) => {
    
    const pageNumbers = []

    for(let i = 1; i <= Math.ceil(totalCharacter / characterPerPage); i++){
        pageNumbers.push(i)
    }

    const onPreviusPage = () => {
       if(currentPage > 1){
        setCurrentPage(currentPage - 1)
       }
    }  

    const onNextPage = () => {
        if(currentPage < pageNumbers.length){
            setCurrentPage(currentPage + 1)
        }
    }

    const onSpecificPage = (page) => {
        setCurrentPage(page)
    }

    return (
        <nav className="container__pagination">
            <button className="btn" onClick={onPreviusPage}>Prev</button>
            <ul>
                {
                    pageNumbers.map(page=>{
                        return(
                            <li 
                                onClick={()=>onSpecificPage(page)} 
                                key={page} className={page === currentPage ? "is_current" : ""}
                            >
                                {page}
                            </li>
                            )
                        })
                    }
            </ul>
            <button className="btn" onClick={onNextPage}>Next</button>
        </nav>
    );
}
 
export default Pagination;