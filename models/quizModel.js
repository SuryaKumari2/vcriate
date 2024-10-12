//model for Quiz
const mongoose=require('mongoose');

const questionScehma=new mongoose.Schema({
    question:{type:String,required:true},
    options:{type:[String],required:true},
    answer:{type:String,required:true}
})
const quizSchema=new mongoose.Schema({
    title:{type:String,required:true},
    questions:{type:[questionScehma],required:true}
})

module.exports = mongoose.model('Quiz', quizSchema);