import { Injectable } from '@angular/core';
import {Actions, Effect} from '@ngrx/effects';
import * as usuarioActions from '../actions';
import { map, switchMap, catchError } from 'rxjs/operators';
import { UsuarioService } from '../../services/usuario.service';
import {of} from 'rxjs';
import { CargarUsuario } from '../actions';
@Injectable()
export class UsuarioUEffects {

    constructor(private actions$: Actions, public usuarioService: UsuarioService) {}

    @Effect()
    cargarUssuario$ = this.actions$.ofType(usuarioActions.CARGAR_USUARIO)
        .pipe(
            switchMap( (action: CargarUsuario) => {
                return this.usuarioService.getUserById(action.id)
                .pipe(
                    map(user => new usuarioActions.CargarUsuarioSuccess(user)),
                    catchError( error => of(new usuarioActions.CargarUsuarioFail(error)))
                );
            })
        );
}
