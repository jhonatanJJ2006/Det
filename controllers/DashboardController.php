<?php

namespace Controllers;

use MVC\Router;
use Resend\Resend;

class DashboardController {

    public static function index(Router $router) {

        $router->render('dashboard/index');

    }

    public static function emailEnviar() {
    
        $nombre = $_POST['nombre'] ?? '';
        $apellido = $_POST['apellido'] ?? '';
        $correo = $_POST['correo'] ?? '';
        $mensaje = $_POST['mensaje'] ?? '';
    
        $apiKey = getenv('RESEND_API_KEY') ?: $_ENV['RESEND_API_KEY'] ?? null;
        if (!$apiKey) {
            echo json_encode(["success" => false, "message" => "Error: Clave de API no encontrada."]);
            return;
        }
    
        $resend = \Resend::client($apiKey);
    
        try {
            $resend->emails->send([
                'from' => 'Acme <onboarding@resend.dev>',
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