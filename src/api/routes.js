import { Router } from 'express';
import routeTarea from './tarea/tarea.route.js';
import routeCarpeta from './carpeta/carpeta.route.js';

const router = Router();
router.use('/tareas', routeTarea);
router.use('/carpetas', routeCarpeta);
export default router;
