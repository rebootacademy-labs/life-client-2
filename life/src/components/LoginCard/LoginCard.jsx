import { useState } from 'react'

import { useNavigate } from 'react-router-dom'

import "./LoginCard.css"

import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Divider,
  Typography,
  TextField
} from '@mui/material'

function LoginCard({ changeToSignup }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  const navigate = useNavigate()

  function updateEmail(inputValue) {
    setEmail(inputValue)
  }

  function updatePassword(inputValue) {
    setPassword(inputValue)
  }

  async function onLogin() {
    const dataInLogin = {
      email,
      password
    }
    try {
      const apiResponse = await login(dataInLogin)
      localStorage.setItem('token', apiResponse.data.token)
      navigate('/home')
    } catch (error) {
      setErrorMessage(error.response.data)
      setTimeout(() => {
        setErrorMessage('')
      }, 3000)
    }
  }

  return (
    <Card className='card'>
      <CardHeader className='title' title="Login"></CardHeader>
      <CardContent>
        <TextField
          sx={{ marginBottom: '20px' }}
          onChange={(e) => updateEmail(e.target.value)}
          label="Email"
          variant="outlined"
          fullWidth
        ></TextField>

        <TextField
          onKeyPress={(e) => {
            if (e.key === 'Enter') return onLogin()
          }}
          onChange={(e) => updatePassword(e.target.value)}
          label="Password"
          variant="outlined"
          fullWidth
        ></TextField>
        
        {errorMessage && (
          <Typography color="error" textAlign="center" mt={2}>
            {errorMessage}
          </Typography>
        )}
      </CardContent>
      <Divider />
      <CardActions className='buttons'>
        <Button onClick={() => changeToSignup()}>Register</Button>
        <Button onClick={() => onLogin()} color="success">
          Login
        </Button>
      </CardActions>
    </Card>
  )
}

export default LoginCard
