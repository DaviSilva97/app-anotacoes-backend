import Notes from '../models/Notes'

export default interface INotesRepository {
    findAll: () => Notes[];
    findByUuid: (uuid: string) => Notes;
    saveNote: (value: Notes) => Notes;
    updateNote: (uuid: string, newNoteText: string) => Notes;
    deleteNote: (uuid: string) => void;
}