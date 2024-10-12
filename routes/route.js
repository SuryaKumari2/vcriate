const express=require('express');
const router=express.Router();
const {userLogin,userRegister}=require('../controllers/userController');
const {createQuiz,getQuizById,getQuizzes,submitAnswers}=require('../controllers/quizController')
//routes for user authentication
router.post('/register',userRegister);
router.post('/login',userLogin);
//routes for quiz 
router.post('/', createQuiz);  
router.get('/', getQuizzes);  
router.get('/:id', getQuizById);  
router.post('/:id/submit', submitAnswers);  

module.exports=router