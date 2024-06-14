
const jwt=require('jsonwebtoken')
const {BadRequestError}=require('../errors')
const Login=async(req, res)=>{
  const {username,password}=req.body

  //mongoose validation
  //joi
  //check in the controller

  if(!username || !password){
throw new CustomAPIError('please provide email and password',400)
  }

  const id = new Date().getDate()
  // in production use long, complex and unguessable string value!!!!!!!
  const token = jwt.sign({id, username},process.env.JWT_SECRET,{expiresIn: '30d'} )

  res.status(200).json({msg:'user created', token})
}


const dashboard = async (req,res)=>{
  console.log(req.user)
  
  const luckyNumber=Math.floor(Math.random() * 100)

  res.status(200).json(({msg:`Hellow, ${req.user.username}`,
     secret: `Here is your authorized data, you are lucky number is ${luckyNumber}`}))

}

module.exports={
  Login,
  dashboard
}