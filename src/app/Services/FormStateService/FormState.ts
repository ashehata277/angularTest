export class FormState {
    CreateEnabled: boolean = false;
    EditEnabled: boolean = false;
    DeleteEnabled: boolean = false;
    PrintEnabled: boolean = false;
    SaveEnabled :boolean =false;
}

export enum FormStates {
    FirstLoaded,
    CreateNew,
    Editing
} 
