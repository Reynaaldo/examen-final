<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>base de datos</title>

</head>
<body>

    <ol>
        <BR><li> CREACION DE LA BASE DE DATOS</li><BR>
        <div class="margen">
            <p>AQUI CREAMOS LA BASE DE DATOS</p>
            <h2>NOMBRE DE BASE DE DATOS</h2>
            <form action="crearDB.php" method="POST">
                <input type="text" name="NomBD" required>
                <BR><BR><button type="submit">CREAR BD</button><BR><BR>
            </form>
        </div>
        <BR><li>CREACION DE LAS TABLAS</li><BR>
        <div class="margen">
            <p> AQUI CREAMOS LAS TABLAS</p>
            <h2>ingrese el nombre de la base de datos</h2>
            <form action="crearTabla.php" method="POST">
                <input type="text" name="NomBase">
                <h2>ingrese el nombre de la tabla que desea crear</h2>
                <input type="text" name="nombretabla" placeholder="nombre-Tabla" required>
                <h2>COLUMNAS</h2>

                <input type="text" placeholder="atributo - entero " name="id" required> <br>
                <input type="text" placeholder="atributo - cadena" name="nombre" required> <br>
                <input type="text" placeholder="atributo - cadena" name="apellido" required> <br>
                <input type="text" placeholder="atributo - entero" name="edad" required> <br>
                <BR><button type="submit">CREAR TABLA</button><BR><BR>
            </form>
        </div>
        <BR><li>REGISTRO DE LOS DATOS</li><BR>
        <div class="margen">
            <p>AQUI REALIZAMOS EL REGISTRO DE LOS DATOS</p>

            <h2>
                ingresar el nombre de la base de datos y el nombre de la tabla
            </h2>
            <form action="insertarDatos.php" method="POST">
                <input type="text" name="NomBase" placeholder="nombre de  Base de Datos" required>
                <input type="text" name="nomT" placeholder="nombre de Tabla" required>
                <p>campo 1 </p>
                <input type="text" name="dniReg" placeholder="numero1" required>
                <p>campo 2 </p>
                <input type="text" name="nombreReg" placeholder="texto1" required>
                <p>campo 3 </p>
                <input type="text" name="apellidoReg" placeholder="texto2" required>
                <p>campo 4 </p>
                <input type="text" name="edadReg" placeholder="numero2" required>
                <br>
                <BR><button type="submit">REGISTRAR DATOS</button><BR><BR>
            </form>
        </div>

        <BR><li>BUSCAR DATOS</li><BR>
        <div class="margen">

           <form action="buscar.php" method="POST" required>
           <p>NOMBRE DE LA BASE DE DATOS </p>
                <input type="text" name="buscarDB" required>
                <p>TABLA DE LA BASE DE DATOS </p>
                <input type="text" name="buscarTB" required>
                <p>NOMBRE DE LA COLUMNA </p>
                <input type="text" name="buscarColumna" required>
                <p>INGRESE EL DATO A BUSCAR</p>
                <input type="text" name="buscarDatos" required> <br>
                <BR><button type="submit"> BUSCAR</button><BR><BR>
            </form>
           </div>
    </ol>

</body>
</html>
