import "./SignupCard.css"
import { useState } from 'react'

import { signup } from '../../services/auth'

import {
  Card,
  CardHeader,
  TextField,
  CardContent,
  Divider,
  Button,
  Typography,
  CardActions
} from '@mui/material'

function SignupCard({ changeToLogin }) {
  const [userName, setUserName] = useState('')
  const [lastName, setlastName] = useState('')
  const [cifDni, setcifDni] = useState('')
  const [phone, setphone] = useState('')
  const [address, setaddress] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  async function onSignup() {
    const dataInSignup = {
      userName,
      lastName,
      cifDni,
      phone,
      address,
      email,
      password
    }
    const apiResponse = await signup(dataInSignup)
    const sendEmailData = {
        nombre: userName,
        email: email
    }
    console.log(apiResponse)
  }

  return (
    <Card className="card">
      <CardHeader className="titulo" title="Registro" />
      <CardContent>
        <TextField 
          onChange={(e) => setUserName(e.target.value)}
          label="Nombre"
          variant="outlined"
          fullWidth={true}
          sx={{ marginBottom: '20px' }}
        />
        <TextField 
          onChange={(e) => setlastName(e.target.value)}
          label="Apellidos"
          variant="outlined"
          fullWidth={true}
          sx={{ marginBottom: '20px' }}
        />
        <TextField 
          onChange={(e) => setcifDni(e.target.value)}
          label="CIF o DNI"
          variant="outlined"
          fullWidth={true}
          sx={{ marginBottom: '20px' }}
        />
        <TextField 
          onChange={(e) => setphone(e.target.value)}
          label="Teléfono"
          variant="outlined"
          fullWidth={true}
          sx={{ marginBottom: '20px' }}
        />
        <TextField 
          onChange={(e) => setaddress(e.target.value)}
          label="Dirección"
          variant="outlined"
          fullWidth={true}
          sx={{ marginBottom: '20px' }}
        />
        <TextField 
          onChange={(e) => setEmail(e.target.value)}
          label="Email"
          variant="outlined"
          fullWidth={true}
          sx={{ marginBottom: '20px' }}
        />
        <TextField
          onChange={(e) => setPassword(e.target.value)}
          label="Password"
          type="password"
          variant="outlined"
          fullWidth={true}
        />
      </CardContent>
      <Divider />
      <CardActions className="buttons">
        <Button onClick={() => changeToLogin()}>Login</Button>
        <Button color="success" onClick={() => onSignup()}>
          Sign Up
        </Button>
      </CardActions>
    </Card>
  )
}

export default SignupCard
