const mongoose=require('mongoose')
const quizSchema=mongoose.Schema({
        question:{
            type:String,
            required:true
        },
        answers:[
            {
                answer:{
                    type:String,
                    required:true
                },
                isCorrect:{
                    type:Boolean,
                    required:true
                }
            }
        ]      
}
)
const quizModel=mongoose.model('quizs',quizSchema)
module.exports=quizModel