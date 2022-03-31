import { Router } from 'express';
import TareaController from './tarea.controller.js';

const route = Router();
const controller = new TareaController();

route.get('/', controller.findAll);
route.post('/', controller.create);
route.delete('/', controller.delete);

export default route;
