import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app.reducers';
import { CargarUsuario } from '../../store/actions';
import { Usuario } from '../../models/usuario.model';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styles: []
})
export class UsuarioComponent implements OnInit {

  user: Usuario;
  error: any;
  loading: boolean;
  constructor(private router: ActivatedRoute, private store: Store<AppState>) { }

  ngOnInit() {
    this.router.params.subscribe(
      params => {
        const id = params['id'];
        this.store.dispatch(new CargarUsuario(id));

      }
    );
    this.store.select('usuario').subscribe(
      ususraio => {
        this.user = ususraio.user;
        this.error = ususraio.error;
        this.loading = ususraio.loading;
      }
    );
  }

}
