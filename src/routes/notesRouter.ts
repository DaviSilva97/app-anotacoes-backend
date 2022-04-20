import {Router, Request, Response} from 'express';
import * as NotesController from '../controllers/notesController';


const notesRouter = Router();

notesRouter.get('/', (req: Request, res: Response) => {
    res.send('Bem vindo ao aplicativo de notas')
});

notesRouter.get('/notes', NotesController.getAllNotes);

notesRouter.get('/notes/:uuid', NotesController.getNoteById);

notesRouter.post('/notes', NotesController.saveNote);

notesRouter.put('/notes/:uuid', NotesController.updateNote);

notesRouter.delete('/notes/:uuid', NotesController.deleteNote);

export default notesRouter;