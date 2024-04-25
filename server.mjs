import dotenv from 'dotenv';
import express from 'express';
import bodyParser from 'body-parser';
import nodemailer from 'nodemailer';

dotenv.config();

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

// Configura el transportador de correo electrónico
const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: 'hellvilleskateshop@gmail.com',
    pass: process.env.PASSWORD,
  },
});

// Ruta para manejar el envío del formulario
app.post('/enviar_formulario', (req, res) => {
  const { nombre, email, mensaje } = req.body;

  // Configura el correo electrónico a enviar
  const mailOptions = {
    from: 'hellvilleskateshop@gmail.com',
    to: 'hellvilleskateshop@gmail.com',
    subject: 'Nuevo mensaje de contacto',
    text: `Nombre: ${nombre}\nEmail: ${email}\nMensaje: ${mensaje}`,
  };

  // Envía el correo electrónico
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.send('Error al enviar el correo electrónico');
    } else {
      console.log('Correo electrónico enviado: ' + info.response);
      res.send('Correo electrónico enviado correctamente');
    }
  });
});

// Inicia el servidor
app.listen(3002, () => {
  console.log('Servidor corriendo en el puerto 3000');
});