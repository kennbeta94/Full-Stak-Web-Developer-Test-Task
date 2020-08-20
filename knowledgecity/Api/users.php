<?php
include 'db.php';
$pageNow = $_GET["page"];
$offset = ($pageNow * 5) - 5;
$users = [];
$pages = 0;

switch ($_SERVER['REQUEST_METHOD']) {
    case 'GET':
        $sql = "SELECT * FROM students LIMIT 5 OFFSET $offset";
        $sql2 = "SELECT * FROM students";
        $pages = $conn->query($sql2)->num_rows;
        if (!$resultado = $conn->query($sql)) {
            echo "Lo sentimos, este sitio web está experimentando problemas.";

            echo "Error: La ejecución de la consulta falló debido a: \n";
            echo "Query: " . $sql . "\n";
            echo "Errno: " . $conn->errno . "\n";
            echo "Error: " . $conn->error . "\n";
            exit;
        }
        while($obj = $resultado->fetch_object()){
            $user = new stdClass();
            $user->id = $obj->id;
            $user->user = $obj->user;
            $user->name = $obj->name;
            $user->group_name = $obj->group_name;
            $users[]= $user;
        }
        $response = new stdClass();
        $response->records = $users;
        $response->pages = ceil($pages/5);
        $response->pageNow = (int)$pageNow;
        print_r(json_encode($response));
        break;
    
    default:
        throw new Exception('Metodo no admitido.');
        break;
}
/*recibir token si existe en la base de datos mandar lista de usuarios si no existe mandar respuesta negativa */
?>