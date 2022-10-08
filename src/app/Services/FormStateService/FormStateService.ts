import { Injectable } from "@angular/core";
import { FormState, FormStates } from "./FormState";

@Injectable({ providedIn: 'root' })
export class FormStateService {
    constructor() {

    }

    GetButtonsStates(currentState: FormStates): FormState {
        if (currentState == FormStates.CreateNew) {
            let state = new FormState();
            state.CreateEnabled = false;
            state.DeleteEnabled = false;
            state.EditEnabled = false;
            state.PrintEnabled = false;
            state.SaveEnabled = true;
            return state;
        }
        else if (currentState = FormStates.Editing) {
            let state = new FormState();
            state.CreateEnabled = false;
            state.DeleteEnabled = true;
            state.EditEnabled = true;
            state.PrintEnabled = true;
            state.SaveEnabled = true;
            return state;
        }
        else {
            let state = new FormState();
            state.CreateEnabled = true;
            state.DeleteEnabled = false;
            state.EditEnabled = false;
            state.PrintEnabled = false;
            state.SaveEnabled = false;
            return state;
        }
    }
}