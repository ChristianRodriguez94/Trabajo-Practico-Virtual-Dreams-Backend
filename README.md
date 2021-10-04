# Trabajo-Practico-Virtual-Dreams-Backend

# EJERCICIO 2

1. Un servidor HTTP o servidor web se encarga de almacenar y transmitir el contenido de un sitio web a los clientes o usuarios. Para la conexión entre ellos se utiliza el protocolo HTTP que se encarga de especificar las reglas de comunicación.

2. Una de las cosas más importantes que especifica el protocolo HTTP son los verbos que sirven para indicar las acciones que se desean realizar sobre el servidor.

Unos de los más conocidos son:

•	GET: Solicitar datos o algún recurso.

•   HEAD: Sirve para traer headers, parecido al GET pero sin contenido.

•	POST: Es para enviar datos a un servidor para la creación.

•	PUT: Actualizar información de un recurso.

•	PATCH: Al igual que el PUT actualiza información de un recurso, pero únicamente una parte del recurso.

•	DELETE: Es para eliminar un recurso.

3. Una request contiene la información que llega cuando alguien hace una petición al servidor en cambio una response es la información que envía el servidor a la petición. Un ejemplo claro es cuando una persona está utilizando un navegador web y hace click en alguna página para ingresar, inmediatamente el navegador envía una petición al servidor (request) y el servidor le responde (response) mostrando la página web en el navegador.
Los headers son la cabecera en donde esta almacenada la información de las peticiones de request y response que se utilizan para el intercambio de información.

4. Una queryString en el contexto de una URL es la que contiene diferentes parametros que son solicitados por una base de datos para que los clientes puedan acceder a la pagina web.

5. Una responseCode es un elemento que proporciona información del estado de una solicitud. Hay varias respuestas, entre ellas como por ejemplo si una solicitud es aceptada o no o si hay algún error o conflicto con la dirección, si esta autorizada o no la petición y muchas más que están generalmente relacionadas con el acceso.

6. En un GET se envía la información en la propia URL que esta limitada a 2000 caracteres y la información en visible. En cambio en el método POST la información es enviada en el cuerpo de la HTTP request por lo que la información no es visible y no hay limite de caracteres.

7. El navegador utiliza el verbo HTTP GET para ingresar a una pagina web, ya que el método GET es utilizado mas para recibir información.
 
8. Una estructura de datos JSON tiene un formato de texto ligero de intercambio de datos y es independiente del lenguaje. Es muy sencillo de leer y escribir para los programadores. 

Ejemplo de JSON:

```json
{
“nombre”:”Christian”,
“apelliido”:”Rodriguez”,
“edad”:”27”,
“genero”:”M”,
“fecha nacimiento”:{
    “dia”:5,
    ”mes”:”febrero”,
    ”año”:1994
    }
}
```
La estructura de datos XML al igual que la JSON tiene un formato de texto pero es mas complicado de entender ya que sigue una estructura de árbol y el uso de etiquetas. Además es muy estricto por lo que necesita un tiempo de procesamiento mas largo que un JSON.

Ejemplo de XML:

```xml
<persona>
  <nombre>Christian</nombre>
  <apellido>Rodriguez</apellido>
  <edad>27</edad>
  <genero>M</genero>
  <fecha de nacimiento>
	<dia>5</dia>
	<mes>febrero</mes>
	<año>1994</año>
  </fecha_de_nacimiento>
</persona>
```

9. SOAP es un protocolo estándar de intercambio de información y datos en un formato XML, generalmente utilizado sobre HTTP.

10. REST Full es un estándar que funciona para compartir información en un sistema doble de consulta y respuesta (request-response).

11. Los headers en una request se envían desde el cliente al servidor en una solicitud HTTP donde contienen como por ejemplo datos para inicio de sesión, fecha y hora de la solicitud, número de identificación o versión del navegador, etc.
El Key Content-type es utilizado en un header para especificar de que tipo es el contenido.

# EJERCICIO 3

Las capturas se encuentran en un archivo .pdf dentro de la carpeta Ejercicio3 [Links](https://github.com/ChristianRodriguez94/Trabajo-Practico-Virtual-Dreams-Backend/tree/main/Ejercicio3)

Las diferencias que se observan entre el paso 1 y paso 3 es que primero al realizar una request con GET a la url, el resultado era vacio y luego en el paso 3 por consecuencia de hacer una request POST obtenemos el json con los datos.

# EJERCICIO 4

Pasos de ejecución:

1-Desde una consola compatible con Node.js ubicarse en el directorio de la carpeta de nombre Ejercicio4. 

2-Una vez ubicado en el directorio de la carpeta ejecutamos el siguiente comando `node mostrarPersonas.js` para hacer la peticion GET.

3-Como resultado obtenemos en la consola en formato .json los datos de la peticion GET a la URL https://reclutamiento-14cf7.firebaseio.com/personas.json

# EJERCICIO 5

Pasos de ejecución:

1-Desde una consola compatible con Node.js ubicarse en el directorio de la carpeta de nombre Ejercicio5-6. 

2-Una vez ubicado en el directorio de la carpeta ejecutamos el siguiente comando `node app.js` para iniciar el servidor.

3-Si se inicio correctamente veremos un mensaje en la consola de que el servidor esta corriendo en el puerto 3000, para verificarlo tambien podremos ingresar a la url http://localhost:3000/.

4-Con el servidor en linea hacemos nuestra nueva request POST con la aplicación POSTMAN a la URL http://localhost:3000/ con la opción raw como Body.

5-En el body en formato .json agregamos nuestra estructura, como por ejemplo: 
```json
{
"nombre":"Christian",
"apellido":"Rodriguez",
"dni":11223322
}
```
6.Una vez enviada la petición la veremos reflejada en la consola con la estructura enviada.

7.Si la peticion POST fue generada exitosamente se guardara la estructura en la URL https://reclutamiento-14cf7.firebaseio.com/personas.json.

# EJERCICIO 6

Pasos de ejecución:

1-Desde una consola compatible con Node.js ubicarse en el directorio de la carpeta de nombre Ejercicio5-6. 

2-Una vez ubicado en el directorio de la carpeta ejecutamos el siguiente comando `node app.js` para iniciar el servidor.

3-Si se inicio correctamente veremos un mensaje en la consola de que el servidor esta corriendo en el puerto 3000, para verificarlo tambien podremos ingresar a la url http://localhost:3000/.

4-Con el servidor en linea hacemos nuestra nueva request POST desde la URL http://localhost:3000/crearPersona.

5-Completamos el formulario con los datos, como por ejemplo:

Nombre: Christian

Apellido: Rodriguez

DNI: 12345678

6-Accionamos el botón Enviar y veremos un mensaje de carga exitosa si completamos correctamente los campos.

7.Verificamos si se guardo correctamente la peticion POST ingresando en la URL https://reclutamiento-14cf7.firebaseio.com/personas.json.

