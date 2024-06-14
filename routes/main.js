const express=require('express')
const router=express.Router()

const {Login,dashboard}=require('../controllers/main')

const autMiddleware =require ('../middleware/auth')

router.route('/dashboard').get( autMiddleware, dashboard )

router.route('/Login').post(Login)



module.exports=router