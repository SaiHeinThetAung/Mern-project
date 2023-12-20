import React from 'react'
import { ImCross } from "react-icons/im";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
const Summary = ({count,summary}) => {
    const {correct,wrong}=summary
  return (
    <div className='text-center'>
       <h2 className='text-2xl font-semibold p-2'>Summary</h2>
       {count===correct&&(
        <>
            <h3 className='mt-10 text-green-500 text-lg font-medium'>All correct.You are a genius.</h3>
        </>
       )}
       {wrong>0 &&(
        <>
        <div className='flex justify-center gap-8'>
        <h3 className='flex gap-2 mt-10 text-lg font-medium'>{correct} <IoMdCheckmarkCircleOutline className=' text-3xl text-green-500'/></h3>
        <h3 className='flex gap-3 mt-10 text-lg font-medium'>{wrong} <ImCross className=' text-2xl mt-1 text-red-400'/></h3>

        </div>
        </>
       )}
       <br />
       <a href='http://localhost:5173/'><button className='px-4 py-2 text-green-500 border border-green-400 rounded-md bg-white shadow-md text-lg font-medium'>Test Again</button></a>

    </div>
  )
}

export default Summary