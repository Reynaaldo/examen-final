<?php

$servername = "localhost";

$username = "root";
$password = "";
$dbname = $_POST["dbexamen"];
$tablas = $_POST["tabla"];
$dato1 = $_POST["G1"];
$dato2 = $_POST["G2"];
$dato3 = $_POST["G3"];
$dato4 = $_POST["G4"];
$dato5 = $_POST["G5"];

// Creando la conexion
$conexion = new mysqli($servername, $username, $password, $dbname, $tablas);

// Verificando la conexion
if ($conexion->connect_error) {
  die("Falló la conexión: " . $conexion->connect_error);
}
echo "Conexión correcta";

// SQL para crear las tablas
$sql = "CREATE TABLE $tabla(
$dato1 BEGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
$dato2 VARCHAR(20),
$dato3 VARCHAR(20),
$dato4 VARCHAR(20),
$dato5 VARCHAR(20),
)";

if ($conexion->query($sql) === TRUE) {
    echo "Tabla creada correctamente";
  } else {
    echo "Error al crear la tabla " . $conexion->error;
  }
  
  $conexion->close();
?>