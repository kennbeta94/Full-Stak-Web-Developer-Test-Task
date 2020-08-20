<?php
class Password {
    const SALT = 'knowledgecity';
    public static function hash($password) {
        return hash('sha512', self::SALT . $password);
    }
    public static function verify($password, $hash) {
        return ($hash == self::hash($password));
    }
}
include 'db.php';

$username_sign = $_POST["username"];
$password_sign = $_POST["password"];
$remember_sign = $_POST["remember"];

if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

switch($_SERVER['REQUEST_METHOD']){
    case 'POST':
        if (empty($username_sign) || empty($password_sign)) {
            var_dump(http_response_code(400));
        }
        $sql = "SELECT id, user, password, token FROM api_users WHERE user = '$username_sign'";
        if (!$resultado = $conn->query($sql)) {
            echo "Lo sentimos, este sitio web está experimentando problemas.";

            echo "Error: La ejecución de la consulta falló debido a: \n";
            echo "Query: " . $sql . "\n";
            echo "Errno: " . $conn->errno . "\n";
            echo "Error: " . $conn->error . "\n";
            exit;
        }

        if ($resultado->num_rows === 0) {
            echo "Lo sentimos. No se pudo encontrar una coincidencia para el ID $username_sign. Inténtelo de nuevo.";
            exit;
        }
        $user_result = $resultado->fetch_assoc();
        $hash = Password::hash($password_sign);
        if (Password::verify($password_sign, $user_result['password'])) {
            $token = bin2hex(random_bytes(64));
            $id = $user_result['id'];
            $sql = "UPDATE api_users SET token='$token' WHERE id=$id";

            if ($conn->query($sql) === TRUE) {
                echo $token;
            } else {
                echo "Error updating record: " . $conn->error;
            }
        } else {
            var_dump(http_response_code(404));
        }
    break;
    case 'DELETE':
        /*recibir token y comprobar en la base si existe eliminar token */
    break;
    default:
        throw new Exception('Metodo no admitido.');
    break;
}
?>