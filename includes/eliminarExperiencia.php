<?php

include("conexion.php");

//verifica si mediante el metodo POST hay una variable ID y la almacena para eliminar los datos
if(isset($_POST["id"]))
{

    $id = $_POST["id"];


    $query = "DELETE FROM experiencia WHERE idexp='$id'";
    $resultado = mysqli_query($conexion, $query);

    // if(!$resultado)
    // {
    //     die("La consulta ha fallado");
    // }

    mysqli_query($conexion,$query) or die(mysqli_error($conexion).$query);

    echo "experiencia eliminada satisfactoriamente";

}



?>