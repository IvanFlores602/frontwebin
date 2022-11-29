import { Component, Input } from '@angular/core';
import Swal from 'sweetalert2';
import { UsuariosService } from '../app/service/usuarios.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FRONT';
  @Input() auth: any

  constructor(public usuarios:UsuariosService) {
    this.auth = localStorage.getItem('log')
   }
  

  salir() {
    localStorage.setItem('log', 'false');
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'cerraste secion',
      showConfirmButton: false,
      timer: 1500
    })
    location.reload();
 
  }

}
