import { useState } from 'react'

import { useNavigate } from 'react-router-dom'
import { login } from '../../services/auth'

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
      console.log(apiResponse)
      localStorage.setItem('token', apiResponse.data.token)
      navigate('/home')
    } catch (error) {
      setErrorMessage(error.response.data.error)
      setTimeout(() => {
        setErrorMessage('')
      }, 3000)
    }
  }

  return (
    <Card className='card-style'>
      <CardHeader className='title' title="Acceder"></CardHeader>
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
          label="Contraseña"
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
      <CardActions className='buttons-action'>
        <Button onClick={() => changeToSignup()}>Registrar</Button>
        <Button onClick={() => onLogin()} color="success">
          Acceder
        </Button>
      </CardActions>
    </Card>
  )
}

export default LoginCard
