<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = $_POST["dbexamen"];


// Creando la conexion
$conexion = new mysqli($servername, $username, $password, $dbname);

// Verificando la conexion
if ($conexion->connect_error) {
  die("Falló la conexión: " . $conexion->connect_error);
}
echo "Conexión correcta";
// SQL para crear base de datos
$sql = "CREATE DATABASE dbexamen(

)";

if ($conexion->query($sql) === TRUE) {
    echo "base de datos creada correctamente";
  } else {
    echo "Error al crear la base de datos " . $conexion->error;
  }
  
  $conexion->close();
?>