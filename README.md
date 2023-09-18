# API de Estudiantes

Si tu servidor local se ejecuta en `https://localhost:5000`, aquí tienes las URL para probar cada uno de los endpoints del controlador de estudiantes que mencionaste:

## Obtener la lista de todos los estudiantes

```bash
GET https://localhost:5000/api/students
```

Este endpoint te proporcionará una lista de todos los estudiantes registrados.

## Obtener los detalles de un estudiante específico por su ID

Para obtener los detalles de un estudiante específico, reemplaza `{id}` con el ID del estudiante que deseas consultar:

```bash
GET https://localhost:5000/api/students/{id}
```

Este endpoint te proporcionará los detalles del estudiante correspondiente al ID proporcionado.

## Crear un nuevo estudiante

Para crear un nuevo estudiante, utiliza el siguiente endpoint:

```bash
POST https://localhost:5000/api/students
```

Puedes enviar los datos del estudiante en el cuerpo de la solicitud como un objeto JSON. Asegúrate de incluir los atributos requeridos en el cuerpo de la solicitud.

## Actualizar la información de un estudiante existente por su ID

Para actualizar la información de un estudiante existente, reemplaza `{id}` con el ID del estudiante que deseas actualizar:

```bash
PUT https://localhost:5000/api/students/{id}
```

Envía los datos actualizados del estudiante en el cuerpo de la solicitud como un objeto JSON. Asegúrate de incluir todos los atributos que desees actualizar.

## Eliminar un estudiante por su ID

Para eliminar un estudiante, reemplaza `{id}` con el ID del estudiante que deseas eliminar:

```bash
DELETE https://localhost:5000/api/students/{id}
```

Esta solicitud eliminará el estudiante con el ID proporcionado.
