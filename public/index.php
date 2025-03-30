<?php 

require_once __DIR__ . '/../includes/app.php';

use Controllers\DashboardController;
use MVC\Router;
$router = new Router();

$router->get('/', [DashboardController::class, 'index']);
$router->post('/email/enviar', [DashboardController::class, 'emailEnviar']);


// Comprueba y valida las rutas, que existan y les asigna las funciones del Controlador
$router->comprobarRutas();