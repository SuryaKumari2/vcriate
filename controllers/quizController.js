const Quiz=require('../models/quizModel');
//controller for creating quiz
exports.createQuiz=async(req,res)=>{
    try {
        const quiz=new Quiz(req.body);
        await quiz.save();
        return res.status(200).json(quiz)
        
    } catch (error) {
        return res.status(500).json({msg:'error in creating quiz'})
    }

}
//controller for getting quiz by ID
exports.getQuizById=async(req,res)=>{

    try {
        const quiz=await Quiz.findById(req.params.id)
        if(!quiz) return res.status(404).json({msg:'Quiz not found'})
            return res.json(quiz);
        
    } catch (error) {
        return res.status(500).json({msg:'error in getting quiz by id'})
    }

}
//controller for getting all Quizzes
exports.getQuizzes=async(req,res)=>{
    try {
        const quizzes=await Quiz.find();
        return res.json(quizzes);
        
    } catch (error) {
        return res.status(500).json({msg:'error in getting all quizzes'})
    }

}
//controller for submitting quiz
exports.submitAnswers=async(req,res)=>{
    const {options}=req.body;
    try {
        const quiz=await Quiz.findById(req.params.id);
        if(!quiz) return res.status(404).json({msg:'quiz not found'})
            let score=0;
        quiz.questions.forEach((question,index)=>{
            if(question.answer===options[index]){
                score++;
            }
        })
        res.json({ score, total: quiz.questions.length });
        
    } catch (error) {
        return res.status(500).json({msg:'error in submitting answers'})
    }

}