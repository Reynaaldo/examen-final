<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h3>CREACION DE LA BASE DE LOS DATOS</h3>
    <P>aqui creamos la base de datos</p>
    <h2>NOMBRE DE BASE DE DATOS</h2>
    <form action="practica.php"method="POST">
        <input type="text" name="dbexamen">
        <br><br>
        <button type="submit ">CREAR BD</button>
        <br>
    </form>
    


    <h3>CREACION DE TABLAS</h3>
    <P>aqui creamos las tablas</p>
    <h2>NOMBRE DE BASE DE DATOS</h2>
    <form action="practica.php"method="POST">
        <input type="text" name="dbexamen">
        <br><br>
        <h2>NOMBRE DE LA TABLA</h2>
    <form action="insertar.php"method="POST">
        <input type="text" name="tabla">
        <br><br>
        <h2>COLUMNAS</h2>
    <form action="practica.php"method="POST">
        <input type="text" placeholder="atri1"name="G1">
        <br>
        <input type="text" placeholder="atri2"name="G2">
        <br>
        <input type="text" placeholder="atri3"name="G3">
        <br>
        <input type="text" placeholder="atri4"name="G4">
        <br>
        <input type="text" placeholder="atri5"name="G5">
        <br><br>
        <button type="submit ">INGRESAR CAMPOS</button>
        <br>
    </form>


    <h3>REGISTRO DE DATOS</h3>
    <P>aqui realizamos el registro de los datos</p>
    <h2>NOMBRE DE LA BASE DE DATOS: </h2>
    <form action="practica.php"method="POST">
        <input type="text" name="dbexamen">
        <br><br>
        <h2>NOMBRE DE LA TABLA: </h2>
    <form action="insertar.php"method="POST">
        <input type="text" name="tabla">
        <br><br>
        <h2>DATOS A INGRESAR: </h2>
    <form action="datos.php"method="POST">
        <input type="text" placeholder="datos"name="d2">
        <br>
        <input type="text" placeholder="datos"name="d3">
        <br>
        <input type="text" placeholder="datos"name="d4">
        <br>
        <input type="text" placeholder="datos"name="d5">
        <br><br>
        <button type="submit ">INGRESAR DATOS</button>
        <br>
    </form>


    <h3>BUSCAR REGISTRO</h3>
    <P>aqui se busca el registro de los datos</p>
    <h2>NOMBRE DE LA BASE DE DATOS: </h2>
    <form action="practica.php"method="POST">
        <input type="text" name="dbexamen">
        <br><br>
        <h2>NOMBRE DE LA TABLA: </h2>
    <form action="insertar.php"method="POST">
        <input type="text" name="tabla">
        <br><br>
        <h2>BUSCAR REGISTROS: </h2>
    <form action="buscar.php"method="POST">
        <input type="text" placeholder="buscar registro"name="buscar">
        <br><br>
        <input type="submit" value="Buscar">
        <br><br>
        <input type="text" name="G2">
        <br>
        <input type="text" name="G3">
        <br>
        <input type="text" name="G4">
        <br>
        <input type="text" name="G5">
        <br><br>
    </form>
</body>
</html>