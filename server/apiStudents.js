const express = require('express');
const router = express.Router();

// Lista estática para almacenar los estudiantes
const students = [];

// Middleware para procesar JSON en las solicitudes
router.use(express.json());

/* // Generar datos ficticios de estudiantes y agregarlos a la lista
function generateMockData() {
    const students = [];
  
    for (let i = 1; i <= 10; i++) {
      const year = Math.floor(Math.random() * 30) + 1980; // Año aleatorio entre 1980 y 2009
      const month = Math.floor(Math.random() * 12) + 1; // Mes aleatorio entre 1 y 12
      const day = Math.floor(Math.random() * 28) + 1; // Día aleatorio entre 1 y 28
  
      const formattedMonth = month.toString().padStart(2, '0');
      const formattedDay = day.toString().padStart(2, '0');
  
      const birthday = `${year}-${formattedMonth}-${formattedDay}`;
  
      const student = {
        id: i,
        name: `Nombre${i}`,
        surname: `Apellido${i}`,
        birthday: birthday,
        email: `estudiante${i}@example.com`,
      };
  
      students.push(student);
    }
  
    return students;
  }

generateMockData(); */

// Acción HTTP GET para obtener todos los estudiantes
router.get('/students', (req, res) => {
  res.json(students);
});

// Acción HTTP GET para obtener un estudiante por ID
router.get('/students/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const student = students.find(s => s.id === id);

  if (!student) {
    res.status(404).send('Estudiante no encontrado'); // Devuelve un código 404 si el estudiante no se encuentra
  } else {
    res.json(student);
  }
});

// Acción HTTP POST para agregar un nuevo estudiante
router.post('/students', (req, res) => {
  const student = req.body;
  student.id = students.length + 1; // Asigna un nuevo ID al estudiante
  students.push(student); // Agrega el estudiante a la lista
  res.status(201).json(student); // Devuelve un código 201 (Created) y el estudiante agregado
});

// Acción HTTP PUT para actualizar un estudiante existente por ID
router.put('/students/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const updatedStudent = req.body;
  const existingStudent = students.find(s => s.id === id);

  if (!existingStudent) {
    res.status(404).send('Estudiante no encontrado'); // Devuelve un código 404 si el estudiante no se encuentra
  } else {
    // Actualiza los datos del estudiante existente con los nuevos datos
    existingStudent.name = updatedStudent.name;
    existingStudent.surname = updatedStudent.surname;
    existingStudent.birthday = updatedStudent.birthday;
    existingStudent.email = updatedStudent.email;

    res.status(204).send(); // Devuelve un código 204 (No Content) para indicar éxito sin respuesta.
  }
});

// Acción HTTP DELETE para eliminar un estudiante por ID
router.delete('/students/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const studentIndex = students.findIndex(s => s.id === id);

  if (studentIndex === -1) {
    res.status(404).send('Estudiante no encontrado'); // Devuelve un código 404 si el estudiante no se encuentra
  } else {
    students.splice(studentIndex, 1); // Elimina el estudiante de la lista
    res.status(204).send(); // Devuelve un código 204 (No Content) para indicar éxito sin respuesta.
  }
});

module.exports = router;
