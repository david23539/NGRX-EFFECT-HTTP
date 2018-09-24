import { Injectable } from '@angular/core';
import {Actions, Effect} from '@ngrx/effects';
import * as usuariosActions from '../actions';
import { map, switchMap, catchError } from 'rxjs/operators';
import { UsuarioService } from '../../services/usuario.service';
import {of} from 'rxjs';
@Injectable()
export class UsuarioEffects {

    constructor(private actions$: Actions, public usuarioService: UsuarioService) {}

    @Effect()
    cargarUssuarios$ = this.actions$.ofType(usuariosActions.CARGAR_USUARIOS)
        .pipe(
            switchMap(() => {
                return this.usuarioService.getUser()
                .pipe(
                    map(users => new usuariosActions.CargarUsuariosSuccess(users)),
                    catchError( error => of(new usuariosActions.CargarUsuariosFail(error)))
                );
            })
        );

}
