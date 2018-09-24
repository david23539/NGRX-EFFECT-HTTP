import { Usuario } from '../../models/usuario.model';
import * as fromUsuarios from '../actions';


export interface UsuariosState {
    user: Usuario[];
    loaded: boolean;
    loading: boolean;
    error: any;
}

const estadoInicial: UsuariosState = {
    user: [],
    loaded: false,
    loading: false,
    error: null
};

export function UsuariosReducer ( state = estadoInicial, action: fromUsuarios.usuariosAcciones): UsuariosState {

    switch (action.type) {

        case fromUsuarios.CARGAR_USUARIOS:
            return {
                ...state,
                loading: true
            };

        case fromUsuarios.CARGAR_USUARIOS_SUCCESS:
            return {
                ...state,
                loading: false,
                loaded: true,
                user: [...action.usuarios]
            };
        case fromUsuarios.CARGAR_USUARIOS_FAIL:
            return {
                ...state,
                loaded: false,
                loading: false,
                error: [...action.payload]
            };

        default:
        return state;
    }
}
