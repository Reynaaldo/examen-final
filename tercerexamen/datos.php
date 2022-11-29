<?php

$servername = "localhost";

$username = "root";
$password = "";
$dbname = $_POST["dbexamen"];
$tablas = $_POST["tabla"];
$datos = $_POST["dato"];
$dato1 = $_POST["d1"];
$dato2 = $_POST["d2"];
$dato3 = $_POST["d3"];
$dato4 = $_POST["d4"];
$dato5 = $_POST["d5"];

// Creando la conexion
$conexion = new mysqli($servername, $username, $password, $dbname, $tablas);

// Verificando la conexion
if ($conexion->connect_error) {
  die("Falló la conexión: " . $conexion->connect_error);
}
echo "Conexión correcta";

// SQL para ingresar los datos
$sql = "CREATE TABLE $datos(
$dato1 BEGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
$dato2 VARCHAR(20),
$dato3 VARCHAR(20),
$dato4 VARCHAR(20),
$dato5 VARCHAR(20),
)";

if ($conexion->query($sql) === TRUE) {
    echo "datos ingresados correctamente";
  } else {
    echo "Error al ingresar los datos " . $conexion->error;
  }
  
  $conexion->close();
?>