import { useContext, useEffect, useState } from "react";
import { exerciseoptions, fetchData } from "../utils/fetchData";
import './Exercise.css'
import ReactPaginate from 'react-paginate';
import NavBar from "../component/NavBar";
import { Details } from "../Context";
import DisplayContent from "../component/DisplayContent";


const Exercise = () => {
    const [exerList, setexerList] = useState([])
    const [pageNumber, SetPageNumber] = useState(0);
    const {activity, setActivity} =useContext(Details);

    
    useEffect(() => {
        exercise()
    }, [])

    const exercise = async () => {
        const exerciseData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseoptions)
        console.log(exerciseData)
        setexerList(exerciseData);
        // localStorage.setItem("data", JSON.stringify (exerciseData))
    }
    // const addExercise=(list)=>{
    //     setActivity([...activity, list]);
    //     console.log(activity)
    // }
    const exercisePerPage = 16;
    const pageVisited = pageNumber * exercisePerPage;
    const pageCount=Math.ceil(exerList.length/exercisePerPage);
    const changePage=({selected})=>{
        SetPageNumber(selected);
        window.scroll(0,0)
    }
    return (

        <div className="heading">
            <NavBar />
            <h1>All Exercise Details</h1>
            <div className="exerciseCard">
                {exerList.slice(pageVisited, pageVisited + exercisePerPage).map((list) => {
                    return <DisplayContent id={list.id}  bodyPart={list.bodyPart} name={list.name} list={list} />
                })}
            </div>
            <ReactPaginate
            previousLabel={"Previous"}
            nextLabel={"Next"}
            pageCount={pageCount}
            onPageChange={changePage}
            containerClassName={"paginationBttns"}
            previousLinkClassName={"previousBttns"}
            nextLinkClassName={"nextBttn"}
            disabledClassName={"paginationDisabled"}
            activeClassName={"paginationActive"}
            />
        </div>
    )
}
export default Exercise;