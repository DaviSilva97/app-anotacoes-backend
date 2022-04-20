type NotesProps = {
    uuid: string;
    noteText: string;
}


export default class Notes {
    uuid?: string;
    noteText: string;

    constructor(noteProp: NotesProps) {
        this.noteText = noteProp.noteText;
    }
}
