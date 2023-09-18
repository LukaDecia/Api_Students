import React, { useState, useEffect } from "react";

const FormPage = () => {
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    surname: "",
    birthday: "",
    email: "",
  });

  const [students, setStudents] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.id === "") {
      try {
        const response = await fetch("/api/students", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        if (!response.ok) {
          throw new Error("No se pudo guardar el estudiante");
        }

        loadTableStudents();

        setFormData({
          id: "",
          name: "",
          surname: "",
          birthday: "",
          email: "",
        });
      } catch (error) {
        console.log("Error al guardar el Estudiante", error);
      }
    } else {
      handleUpdate();
    }
  };

  const handleUpdate = async () => {
    try {
      const response = await fetch("/api/students/" + formData.id, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error(
          "No se pudo actualizar los datos del estudiante con ID " + formData.id
        );
      }

      loadTableStudents();
    } catch (error) {
      console.log("Error al actualizar el estudiante", error);
    }
  };

  const handleDelete = async () => {
    try {
      const response = await fetch("/api/students/" + formData.id, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error(
          "No se pudo eliminar los datos del estudiante con ID " + formData.id
        );
      }

      loadTableStudents();
    } catch (error) {
      console.log("Error al eliminar el estudiante", error);
    }
  };

  const loadTableStudents = async () => {
    try {
      const response = await fetch("/api/students");
      if (!response.ok) {
        throw new Error("No se pudo obtener la data");
      }
      const data = await response.json();
      setStudents(data);
    } catch (error) {
      console.error("Error al obtener datos de la API: ", error);
    }
  };

  useEffect(() => {
    loadTableStudents();
  }, []);

  return (
    <>
      <div className="card m-5">
        <div class="card-header text-center text-bg-dark">API ESTUDIANTES</div>
        <div className="card-body">
          <div className="container">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="Id" className="form-label">
                  Id
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="id"
                  name="id"
                  value={formData.id}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Nombre
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="surname" className="form-label">
                  Apellido
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="surname"
                  name="surname"
                  value={formData.surname}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="birthday" className="form-label">
                  Fecha de nacimiento
                </label>
                <input
                  type="date"
                  className="form-control"
                  id="birthday"
                  name="birthday"
                  value={formData.birthday}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Correo electrónico
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <button type="submit" className="btn btn-primary px-5">
                {formData.id === "" ? "Registrar" : "Modificar"}
              </button>
              <button className="btn btn-danger px-5 mx-1" onClick={handleDelete}>Eliminar</button>
            </form>
          </div>
        </div>
      </div>

      <div className="card m-5">
        <div class="card-header text-center text-bg-dark">DATOS DE ESTUDIANTES</div>
        <div className="card-body">
          <div className="container">
            <table className="table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Nombre</th>
                  <th>Apellido</th>
                  <th>Fecha de Nacimiento</th>
                  <th>Correo Electrónico</th>
                </tr>
              </thead>
              <tbody>
                {students.map((student, index) => (
                  <tr key={index}>
                    <td>{student.id}</td>
                    <td>{student.name}</td>
                    <td>{student.surname}</td>
                    <td>{student.birthday}</td>
                    <td>{student.email}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default FormPage;
