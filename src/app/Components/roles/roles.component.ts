import { Component, Input, OnInit } from '@angular/core';
import { UsuariosService } from '../../service/usuarios.service'
import Swal from 'sweetalert2'
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.css']
})
export class RolesComponent implements OnInit {
  
  @Input() usuarios: any 
  Usuario = {
    rol: "",
    id: ""
  }
  @Input() rol: any
  constructor(public UsuariosService: UsuariosService, private router: Router) { }

  ngOnInit() {
    this.obtenerUsuarios();
    this.rol = localStorage.getItem('rol');

    if(this.rol == '3'){
      this.router.navigate(['/roles'])
    }else{
      this.router.navigate(['/home']);
    }
  }

  obtenerUsuarios() {
    this.UsuariosService.obtenerUsuarios().then((data: any) =>{
      console.log(data.usuarios);
      this.usuarios=data.usuarios;
    }).catch((err) =>{
      console.log(err);
    })
    console.log(this.usuarios);
  }
  modificarUsuario(usuario: any){
    usuario.rol = "3"
    this.UsuariosService.modificarUsuario(usuario).then((data: any) =>{
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Cambio de Rol Exitoso',
            showConfirmButton: false,
            timer: 1500
          })
        }).catch((err) =>{
          console.log(err);
            })
  }
}
