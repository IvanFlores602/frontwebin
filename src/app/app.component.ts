import { Component, Input } from '@angular/core';
import Swal from 'sweetalert2';
import { UsuariosService } from '../app/service/usuarios.service'
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FRONT';
  @Input() auth: any

  public totalItem : number = 0;
  public searchTerm !: string;

  constructor(public usuarios:UsuariosService, private cartService : CartService) {
    this.auth = localStorage.getItem('log')
   }
  
   ngOnInit(): void {
    this.cartService.getProducts()
    .subscribe(res=>{
      this.totalItem = res.length;
    })
  }
  search(event:any){
    this.searchTerm = (event.target as HTMLInputElement).value;
    console.log(this.searchTerm);
    this.cartService.search.next(this.searchTerm);
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
