const mongoose=require('mongoose')
const model=require('../models/quizSchema')
const getQuiz=async(req,res)=>{
    const data=await model.find({},{_id:1,"question":1,"answers":1})
    res.json(data)
}
const postQuiz=async(req,res)=>{
    
        const data=await model.create(req.body)
        res.status(200).json(data)
    
}
module.exports={getQuiz,postQuiz}