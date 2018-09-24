
import * as reducer from './reducers';
import { ActionReducerMap } from '@ngrx/store';

export interface AppState {
    usuarios: reducer.UsuariosState;
}

export const appReducers: ActionReducerMap<AppState> = {
    usuarios: reducer.UsuariosReducer
};
