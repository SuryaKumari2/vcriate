const express=require('express');
const router=express.Router();
const {userLogin,userRegister}=require('../controllers/userController');
const {createQuiz,getQuizById,getQuizzes,submitAnswers}=require('../controllers/quizController')
router.post('/register',userRegister);
router.post('/login',userLogin);
router.post('/', createQuiz);  // Create a new quiz
router.get('/', getQuizzes);  // Get all quizzes
router.get('/:id', getQuizById);  // Get a specific quiz by ID
router.post('/:id/submit', submitAnswers);  // Submit quiz answers

module.exports=router