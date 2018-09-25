import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { Usuario } from '../../models/usuario.model';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app.reducers';
import { CargarUsuarios } from '../../store/actions';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styles: []
})
export class ListaComponent implements OnInit {

  usuario: Usuario[] = [];
  loading: boolean;
  error: any;

  constructor( private store: Store<AppState>) { }

  ngOnInit() {
    this.store.dispatch(new CargarUsuarios());
    this.store.select('usuarios')
    .subscribe(usuarios => {
      this.usuario = usuarios.user;
      this.loading = usuarios.loading;
      this.error = usuarios.error;
    });
  }

}
