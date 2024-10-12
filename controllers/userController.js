const User=require('../models/userModel');

//controller for user registeration
exports.userRegister=async(req,res)=>{
    try {
        
    const{username,email,password}=req.body;
    const user=await User.findOne({email});
    if(user){
        return res.status(400).json({msg:'already user exists'})
    }
    const newUser=new User({
        username,email,password
    })
    await newUser.save();
    return res.status(200).json({msg:'registeration succesfull'})
        
    } catch (error) {
        console.log(error)
        return res.status(500);
        
    }
}

//controller for user login
exports.userLogin=async(req,res)=>{
    try {
        const{email,password}=req.body;
        const user=await User.findOne({email});
        if(!user){
            return res.status(400).json({msg:'Invalid credentials'});
        }
        if (password !== user.password) {
            return res.status(400).json({ msg: 'Invalid credentials' });
          }
        return res.status(200).json({msg:'login succesful'})
        
    } catch (error) {
        console.log(error)
        return res.status(500);
        
    }


}