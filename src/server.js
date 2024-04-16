const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

// Configura el transportador de correo electrónico
const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: 'hellvilleskateshop@gmail.com',
    pass: 'invalido2k3einvalido2k3e',
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
app.listen(3000, () => {
  console.log('Servidor corriendo en el puerto 3000');
});