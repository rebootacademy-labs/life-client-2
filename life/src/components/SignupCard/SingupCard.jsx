import "./SignupCard.css";
import { useState } from "react";
import { signup } from "../../services/auth";
import emailjs from "@emailjs/browser";
import {
  Card,
  CardHeader,
  TextField,
  CardContent,
  Divider,
  Button,
  Typography,
  CardActions,
} from "@mui/material";

function SignupCard({ changeToLogin }) {
  const [userName, setUserName] = useState("");
  const [lastName, setlastName] = useState("");
  const [cifDni, setcifDni] = useState("");
  const [phone, setphone] = useState("");
  const [address, setaddress] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isRegistered, setIsRegistered] = useState(false);

  const sendEmail = (sendEmailData) => {
    event.preventDefault();

    emailjs
      .send(
        "service_bldnvm7",
        "template_9xh4u64",
        sendEmailData,
        "9JCl-XSfl-UPqVgjv"
      )
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  };

  async function onSignup() {
    const dataInSignup = {
      userName,
      lastName,
      cifDni,
      phone,
      address,
      email,
      password,
    };
    const apiResponse = await signup(dataInSignup);
    const sendEmailData = {
      nombre: userName,
      email: email,
    };
    sendEmail(sendEmailData);
    console.log(apiResponse);
    if (apiResponse.status === 200) {
      setIsRegistered(true);
    }
  }

  return (
    <div className="container">
      {isRegistered ? (
        <Card className="card-success">
          <CardHeader className="titulo" title="Gracias por registrarte" />
          <CardContent>
            <Typography>
              En menos de 24 horas revisaremos tu solicitud. Recibirás una
              notificación por correo electrónico cuando esté aprobada.
            </Typography>
          </CardContent>
          <CardActions className="button-back">
            <Button onClick={() => changeToLogin()}>
              Ir a Página de Inicio
            </Button>
          </CardActions>
        </Card>
      ) : (
        <Card className="card-form">
          <CardHeader className="titulo" title="REGISTRO" />
          <CardContent>
            <TextField
              onChange={(e) => setUserName(e.target.value)}
              label="Nombre"
              variant="outlined"
              fullWidth={true}
              sx={{ marginBottom: "20px" }}
            />
            <TextField
              onChange={(e) => setlastName(e.target.value)}
              label="Apellidos"
              variant="outlined"
              fullWidth={true}
              sx={{ marginBottom: "20px" }}
            />
            <TextField
              onChange={(e) => setcifDni(e.target.value)}
              label="CIF o DNI"
              variant="outlined"
              fullWidth={true}
              sx={{ marginBottom: "20px" }}
            />
            <TextField
              onChange={(e) => setphone(e.target.value)}
              label="Teléfono"
              variant="outlined"
              fullWidth={true}
              sx={{ marginBottom: "20px" }}
            />
            <TextField
              onChange={(e) => setaddress(e.target.value)}
              label="Dirección"
              variant="outlined"
              fullWidth={true}
              sx={{ marginBottom: "20px" }}
            />
            <TextField
              onChange={(e) => setEmail(e.target.value)}
              label="Email"
              variant="outlined"
              fullWidth={true}
              sx={{ marginBottom: "20px" }}
            />
            <TextField
              onChange={(e) => setPassword(e.target.value)}
              label="Contraseña"
              type="password"
              variant="outlined"
              fullWidth={true}
            />
          </CardContent>
          <Divider className="divider" />
          <CardActions className="buttons-register">
            <Button onClick={() => changeToLogin()}>volver atras</Button>
            <Button color="success" onClick={() => onSignup()}>
              GUARDAR
            </Button>
          </CardActions>
        </Card>
      )}
    </div>
  );
}

export default SignupCard;
