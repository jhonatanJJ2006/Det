<?php

namespace Controllers;

use MVC\Router;
use Resend\Resend;

class DashboardController {

    public static function index(Router $router) {

        $router->render('dashboard/index');

    }

    public static function emailEnviar() {

        $nombre = $_POST['nombre'];
        $apellido = $_POST['apellido'];
        $correo = $_POST['correo'];
        $mensaje = $_POST['mensaje'];

        $resend = \Resend::client($_ENV['RESEND_API_KEY']);

        if($resend) {
            $respuesta = true;
        } else {
            $respuesta = false;
        }

        echo json_encode($respuesta, JSON_UNESCAPED_UNICODE);

        $resend->emails->send([
        'from' => 'Acme <onboarding@resend.dev>',
        'to' => [$correo],
        'subject' => 'hello world',
        'html' => '<p>it works!</p>'
        ]);

    }

}