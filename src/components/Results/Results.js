import React ,{useEffect, useState} from 'react'
import axios from "../../helpers/axios";
import VideoCard from "../VideoCard/VideoCard";
import "./Results.css";
import FlipMove from "react-flip-move";

const Results = ({selectOption}) => {
  const [movies,setMovies] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      const request = await axios.get(selectOption);
      setMovies(request.data.results);
      //console.log(request)
      //return request;
    };
    fetchData();
  }, [selectOption]);
  console.log(movies);
  return (
    <div className='results'>
      <FlipMove>
      {
        movies.map((movie)=>(
          <VideoCard key={movie.id} movie={movie}/>
        )) 
      }
      </FlipMove>
    </div>
  )
}

export default Results
