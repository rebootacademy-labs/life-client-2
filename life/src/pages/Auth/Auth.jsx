import {useState} from 'react'
import { Box } from '@mui/material'
import LoginCard from '../../components/LoginCard/LoginCard'
import SingupCard from '../../components/SignupCard/SingupCard'

import "./Auth.css"
import loginBackground from '../../assets/backgrounds/loginbackground.jpg'
import registerBackground from '../../assets/backgrounds/registerbackground.jpg'

function Auth() {
const [isLogin, setIsLogin] = useState(true)

function toggleLoginSignup(){
setIsLogin((oldState) => !oldState)
} 

  return (
    <Box className="box" sx={{
        backgroundImage: `url(${isLogin ? loginBackground : registerBackground})`}}>
        {isLogin ? (<LoginCard changeToSignup={toggleLoginSignup}/>) : 
        (<SingupCard changeToLogin={toggleLoginSignup}/>)}
    </Box>
  )
}

export default Auth