import { Router } from 'express';
import CarpetaController from './carpeta.controller.js';

const route = Router();
const controller = new CarpetaController();

route.get('/', controller.findAll);
route.post('/', controller.create);
route.delete('/', controller.delete);

export default route;
