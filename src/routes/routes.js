import { Router } from "express";

const routers = Router();

// IMPORTAR CONTROLLERS - PSICÓLOGOS
import { createPsic, deletePsic, findALlPsic, findOnePsic, updatePsic } from "../controllers/psic.controller.js";


// IMPORTAR CONTROLLERS - PACIENTES
import { createPac, deletePac, findALlPac, findOnePac, updatePac } from "../controllers/pac.controller.js";


// IMPORTAR CONTROLLERS - PRONTUÁRIOS
import { createAtend, deleteAtend, findALlAtend, findOneAtend, updateAtend } from "../controllers/atend.controller.js";


// CRUD PSICÓLOGOS
routers.post('/psicologos', createPsic);
routers.get('/psicologos', findALlPsic);
routers.get('/psicologos/:id', findOnePsic);
routers.put('/psicologos', updatePsic);
routers.delete('/psicologos', deletePsic);


// CRUD PACIENTES
routers.post('/pacientes', createPac);
routers.get('/pacientes', findALlPac);
routers.get('/pacientes/:id', findOnePac);
routers.put('/pacientes', updatePac);
routers.delete('/pacientes', deletePac);


// CRUD ATENDIMENTOS
routers.post('/atendimentos', createAtend);
routers.get('/atendimentos', findALlAtend);
routers.get('/atendimentos/:id', findOneAtend);
routers.put('/atendimentos', updateAtend);
routers.delete('/atendimentos', deleteAtend);


// CRUD DASHBOARD (opcional)



// CRUD LOGIN (post)


export default routers;