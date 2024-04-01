import React, { useEffect } from 'react'
import axios from 'axios';
const Home = () => {

    useEffect(()=>{
        axios.get("http://localhost:8000/user").then((response)=>{
            console.log("Response -> ", response);
        })
    }, [])
  return (
    <div>
      Home
    </div>
  )
}

export default Home
