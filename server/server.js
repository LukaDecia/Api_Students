const express = require('express');
const app = express();
const port = 5000; 

// Importa tu API de estudiantes
const apiStudentsRouter = require('./apiStudents');

// Middleware para procesar JSON en todas las solicitudes
app.use(express.json());

// Usa la API de estudiantes en la ruta '/api'
app.use('/api', apiStudentsRouter);

app.listen(port, () => {
  console.log(`El servidor está escuchando en http://localhost:${port}`);
});
