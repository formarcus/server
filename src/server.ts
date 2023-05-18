import express from 'express';
import cors from 'cors';

import { router } from './router';
import { CreateController, DeleteController, FindController, UpdateController } from './controller/controller';

const app = express();

app.use(cors());
app.use(express.json());
app.use(router);

// Adicionar
const adicionar = new CreateController();
router.post("/Adicionar", adicionar.handle)

// Buscar
const buscar = new FindController();
router.get("/Buscar", buscar.handle);

// Alterar
const alterar = new UpdateController();
router.post("/Alterar", alterar.handle);

// Excluir
const excluir = new DeleteController();
router.delete("/Excluir", excluir.handle);

app.listen(4003, () => console.log("server is running on PORT 4003"))