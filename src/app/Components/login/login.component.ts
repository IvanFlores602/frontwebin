import { Component, Input, OnInit } from '@angular/core';
import { UsuariosService } from '../../service/usuarios.service'
import Swal from 'sweetalert2'
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  @Input() usuarios: any 
  @Input() auth: any 
  authotize = String;

  Usuario = {
    password: "",
    email: ""
  }
  constructor(public UsuariosService: UsuariosService, private router: Router) { }

  ngOnInit() {
    this.obtenerUsuarios();
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

  log(){
      for(let x = 0; x < this.usuarios.length; x++){
        if(this.Usuario.email == this.usuarios[x].email && this.Usuario.password == this.usuarios[x].password){
          console.log("si")
          localStorage.setItem('log', 'true');
          this.auth = localStorage.getItem('log');
          console.log(this.auth)
          location.reload();
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Credeciales correctas',
            showConfirmButton: false,
            timer: 2000
          })
           
          break;
        }else{
          console.log("no")
          Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'Credeciales incorrectas',
            showConfirmButton: false,
            timer: 1500
          })
        }
      }
      
    }

    }