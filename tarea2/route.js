import { Router } from 'express';
import * as backend from './backend.js';

const routes = new Router();

routes.get('/', backend.informacionEstudiantes);
routes.get('/add', backend.formularioAddEstudiante);
routes.post('/add', backend.endpointEstudiante);

export default routes;
