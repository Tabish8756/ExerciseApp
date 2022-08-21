import { useState } from "react"
import ReactPaginate from "react-paginate"
import { exerciseoptions, fetchData } from "../utils/fetchData"
import Appoint from "./AppointmentBook"
import BodyPart from "./BodyPart"
import './Search.css'

const Search = () => {
    const [search, setSearch] = useState('')
    const [exercise, setExercise] = useState([])
    const [pageNumber, SetPageNumber] = useState(0);
    const[paginate, setPaginate]=useState(false)
    const handleChange = (e) => {
        setSearch(e.target.value)
    }
    const handleSearch = async () => {
        if (search) {
            // const exerciseData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${search}`, exerciseoptions)
            // console.log(exerciseData)
            // setExercise(exerciseData);
            // setSearch()
            // showPagiante();
            setPaginate(true)
    
    }
}


    const exercisePerPage = 12;
    const pageVisited = pageNumber * exercisePerPage;
    const pageCount=Math.ceil(exercise.length/exercisePerPage);
    const changePage=({selected})=>{
        SetPageNumber(selected);
    }
    return (
        <div>
            <div className="search">
                <input type="text" placeholder="Enter the Exercise Name" onChange={handleChange} />
                <button onClick={handleSearch}>Search</button>
                {/* <BodyPart /> */}
            </div>
            <div className="exerciseCard">
                {/* {exercise.slice(pageVisited, pageVisited + exercisePerPage).map((list) => {
                    return <div className="displayDetails">
                        <img src={`http://d205bpvrqc9yn1.cloudfront.net/${list.id}.gif`} alt="exercise" />
                        <p>{list.name}</p>
                       
              
                    </div>
                    
                 
                }
                
                
                )
                } */}
                {paginate  ? <ReactPaginate
                previousLabel={"Previous"}
                nextLabel={"Next"}
                pageCount={pageCount}
                onPageChange={changePage}
                containerClassName={"paginationBttns"}
                previousLinkClassName={"previousBttns"}
                nextLinkClassName={"nextBttn"}
                disabledClassName={"paginationDisabled"}
                activeClassName={"paginationActive"}
                />:''}  
                 
                   
            </div>
          <Appoint />
         
        </div>
    )
}

export default Search