import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
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
