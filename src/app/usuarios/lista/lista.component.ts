import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { Usuario } from '../../models/usuario.model';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styles: []
})
export class ListaComponent implements OnInit {

  usuario: Usuario[] = [];

  constructor(private ususarioService: UsuarioService) { }

  ngOnInit() {
    this.ususarioService.getUser()
    .subscribe(
      data => {
        console.log(data);
        this.usuario = data;
      }
    );
  }

}
