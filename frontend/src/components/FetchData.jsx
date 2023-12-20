import axios from 'axios'
import React, { useEffect, useState } from 'react'

const FetchData = () => {
    const [quiz,setQuiz]=useState([])
    const [loader,setLoader]=useState(true)
    const fetchData=async()=>{
       await axios.get('http://localhost:4000/api/quiz/').then((res)=>{
        const data=res.data
        console.log('fetch success')
        setQuiz(data)
        setLoader(false)
        console.log(quiz)
     }).catch((e)=>console.log(e))
    }
    useEffect(()=>{
       fetchData()
    },[])
  return {loader,quiz}
}

export default FetchData
