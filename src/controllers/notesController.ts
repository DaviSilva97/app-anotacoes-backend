import MockNoteRepository from '../repositories/implementations/mock-notes-repository';
import {Request, Response } from 'express';
import Notes from '../models/Notes';

const mockNote: MockNoteRepository = new MockNoteRepository();

export const getAllNotes = (req: Request, res: Response) => {
    res.send(mockNote.findAll())
}

export const getNoteById = (req: Request, res: Response) => {
    const uuidParam = req.params.uuid;
    const note = mockNote.findByUuid(uuidParam);
    
    if(note) {
        res.send(note);
    } else{
        res.sendStatus(404);
    }
}

export const saveNote = (req: Request, res: Response) => {
    const newNote: Notes = {
        uuid: "72010584",
        noteText: "Anotação para testar o post"
    }

    res.send(mockNote.saveNote(newNote));    
}

export const updateNote = (req: Request, res: Response) => {
    const uuidParam = req.params.uuid;

    mockNote.updateNote(uuidParam, 'Mudou o texto');
    res.send(mockNote.findAll());
}

export const deleteNote = (req: Request, res: Response) => {
    const uuidParam = req.params.uuid;

    mockNote.deleteNote(uuidParam);
    res.send(mockNote.findAll());
}

