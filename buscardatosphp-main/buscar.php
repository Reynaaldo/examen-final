<?php

$servername = "localhost";

$username = "root";
$password = "";
$dbname = $_POST["dbexamen"];
$tablas = $_POST["tabla"];
$datos = $_POST["dato"];
$buscar = $_POST["buscar"];

// Creando la conexion
$conexion = new mysqli($servername, $username, $password, $dbname, $tablas);

// Verificando la conexion
if ($conexion->connect_error) {
  die("Falló la conexión: " . $conexion->connect_error);
}
echo "Conexión correcta";

// SQL para buscar los registros
$sql="SELECT d2, d3, d4, d5 from tabla where d2 like '$buscar' '%' or d3 like '$buscar' '%' order by d1 desc";
$rta= msqli_query($conexion,$sql);


if ($conexion->query($sql) === TRUE) {
    echo "busqueda de datos correctamente";
  } else {
    echo "Error al buscar los datos " . $conexion->error;
  }
  
  $conexion->close();
?>