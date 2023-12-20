import React, { useState } from 'react'

import FetchData from './FetchData'
import Summary from './Summary'
import { FaRegQuestionCircle } from "react-icons/fa";

const Quiz = () => {
  const {loader,quiz}=FetchData()
  const [activeQuiz,setActiveQuiz]=useState(0)
  const [activeAnswer,setActiveAnswer]=useState(false)
  const [summary,setSummary]=useState({correct:0,wrong:0})
  const [count,setCount]=useState(0)
  const Next=()=>{
    setActiveQuiz(activeQuiz+1)
    setActiveAnswer(false)
    if(activeAnswer.isCorrect){
      setSummary({correct:summary.correct+1,wrong:summary.wrong})
    }
    else setSummary({correct:summary.correct,wrong:summary.wrong+1})
    setCount(0)
  }
  const activeLi=(ans)=>{
    setActiveAnswer(ans)
    setCount(count+1)
   }
  return (
    <>
        <div className=' w-[500px] h-[240px] mx-auto my-[120px] rounded-md border-[1px] border-slate-400 shadow-lg  p-1'>
          {loader && (
            <>
              
                <div className='flex justify-center my-20'>
                  <div role="status">
                          <svg aria-hidden="true" className="w-10 h-10 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                              <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                          </svg>
                          <span className="sr-only">Loading...</span>
                      </div>

                </div>

            </>
          )}
          {!loader && activeQuiz+1>quiz.length && <Summary count={quiz.length} summary={summary}/> } 
          {!loader && quiz.length>=activeQuiz+1 && (
            <>
                <div className='flex justify-between p-3 '>
                  <h3 className=' flex  text-xl'><FaRegQuestionCircle className=' text-2xl bg-green-400 rounded-[50%] me-2 mt-1 ' />{quiz[activeQuiz]?.question}</h3>
                  <button className=' h-7 w-[34px] rounded-md text-white font-semibold  bg-green-500'>{activeQuiz+1}/{quiz.length}</button>
                
              </div>
              <div className='p-3'>
                
                  {quiz[activeQuiz].answers.map((ans,index)=>(
                     <button onClick={()=>activeLi(ans)} key={index} className={`bg-white mb-3  w-full mx-auto hover:scale-95 hover:transition-transform rounded p-[5px] 
                     ${activeAnswer!==false && activeAnswer.isCorrect===true &&
                      activeAnswer._id===ans._id &&'text-green-500 font-semibold border-2 border-green-400'}
                     ${activeAnswer!==false&& activeAnswer.isCorrect===false &&
                      activeAnswer._id===ans._id &&'text-red-500 font-semibold border-2 border-red-500'}
                      disabled:hover:scale-100`} 
                       disabled={activeAnswer!==false}><div className='flex gap-4 items-center'>
                          <span className='px-[5px] m-1 bg-black rounded-md text-white text-center'>{index+1}</span><span>{ans.answer}</span>
                       </div>
                      </button>
                  ))}                  
                
              </div>
              <div className='flex justify-between  mx-3 relative '>
                <h2 className={`font-semibold ${activeAnswer.isCorrect===true?'text-green-500':'text-red-500'} ${activeAnswer===false && 'invisible'}`} >{activeAnswer.isCorrect==true?'Right answer':'Wrong answer'}</h2>
                <button onClick={()=>Next()} type='button' className='px-3  py-1 rounded-md shadow-lg bg-green-500 text-white disabled:opacity-40' disabled={activeAnswer===false}  >Next</button>
    
              </div>
            </>
          )} 

        </div>
    </>
  )
}

export default Quiz