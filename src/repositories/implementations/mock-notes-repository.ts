import Notes from '../../models/Notes';
import INotesRepository from '../notes-repository';



//declaração array de notes
const mockNotes: Notes[] = [
    {uuid: "52418042", noteText: 'Anotação 1'},
    {uuid: "91653373", noteText: 'Anotação 2'},
    {uuid: "39388286", noteText: 'Anotação 3'},
    {uuid: "55771656", noteText: 'Anotação 4'},
    {uuid: "90131557", noteText: 'Anotação 5'},
    {uuid: "77344874", noteText: 'Anotação 6'},
    {uuid: "56080688", noteText: 'Anotação 7'},
    {uuid: "45148377", noteText: 'Anotação 8'},
    {uuid: "00075341", noteText: 'Anotação 9'},
    {uuid: "72010552", noteText: 'Anotação 10'},
    {uuid: "14751489", noteText: 'Anotação 11'},
]


export default class MockNoteRepository implements INotesRepository {
    constructor() {

    }  

    findAll = () => {
        return mockNotes;
    }
    
    findByUuid = (uuid: string): Notes => {
        return mockNotes.find(element => element.uuid === uuid) as Notes 
    }

    saveNote = (value: Notes): Notes => {
        mockNotes.push(value);
        return value;     
    }

    updateNote = (uuid: string, newNoteText: string) => {
        let noteAux: Notes = mockNotes.find(element => element.uuid === uuid) as Notes;
        noteAux.noteText = newNoteText;
        return noteAux; 
    }
    
    deleteNote = (uuid: string) => {
        let noteDeleted: Notes = mockNotes.find(element => element.uuid === uuid) as Notes;
        let indexNote: number = mockNotes.indexOf(noteDeleted);
        
        if (indexNote > -1) {
            mockNotes.splice(indexNote, 1);
        }
    }  
}
