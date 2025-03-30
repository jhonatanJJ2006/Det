<?php

namespace Controllers;

use MVC\Router;
use Resend\Resend;

class DashboardController {

    public static function index(Router $router) {

        $router->render('dashboard/index');

    }

    public static function emailEnviar() {
    
        if ($_SERVER['REQUEST_METHOD'] === 'POST') {
            $nombre = $_POST['nombre'] ?? '';
            $apellido = $_POST['apellido'] ?? '';
            $correo = $_POST['correo'] ?? '';
            $mensaje = $_POST['mensaje'] ?? '';
        
            $apiKey = 're_GYX7X51e_FqZ9MCd77RLZVB9CKJ1gZajA';
        
            $resend = \Resend::client($apiKey);
        
            try {
                $resend->emails->send([
                    'from' => 'detcomputers.net',
                    'to' => [$correo],
                    'subject' => "Mensaje de $nombre $apellido",
                    'html' => "<p><strong>Nombre:</strong> $nombre $apellido</p>
                               <p><strong>Email:</strong> $correo</p>
                               <p><strong>Mensaje:</strong> $mensaje</p>"
                ]);
        
                echo json_encode(["success" => true, "message" => "Correo enviado con éxito."]);
            } catch (\Exception $e) {
                echo json_encode(["success" => false, "message" => "Error al enviar el correo: " . $e->getMessage()]);
            }
        }
    }

}