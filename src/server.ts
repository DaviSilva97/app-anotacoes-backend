import express, { json } from 'express';
import Routes from './routes/notesRouter';


const server = express();

server.use(express.urlencoded({extended: true}))
server.use(Routes);

server.listen(3000, () => {
    console.log("servidor rodando na porta 3000")
})