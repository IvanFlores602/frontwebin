import { Component, OnInit } from '@angular/core';
import { ArticulosService } from 'src/app/service/articulos.service';
import { CartService } from 'src/app/service/cart.service';
@Component({
  selector: 'app-articulos',
  templateUrl: './articulos.component.html',
  styleUrls: ['./articulos.component.css']
})
export class ArticulosComponent implements OnInit {
  
  public productList : any ;
  public filterCategory : any
  searchKey:string ="";
  constructor( private cartService : CartService, private ArticlulosService: ArticulosService) { }

  ngOnInit(): void {
    this.ArticlulosService.getProduct()
    .subscribe(res=>{
      this.productList = res;
      this.filterCategory = res;
      this.productList.forEach((a:any) => {
        if(a.category ==="women's clothing" || a.category ==="men's clothing"){
          a.category ="fashion"
        }
        Object.assign(a,{quantity:1,total:a.price});
      });
      console.log(this.productList)
    });

    this.cartService.search.subscribe((val:any)=>{
      this.searchKey = val;
    })
  }
  addtocart(item: any){
    this.cartService.addtoCart(item);
  }
  filter(category:string){
    this.filterCategory = this.productList
    .filter((a:any)=>{
      if(a.category == category || category==''){
        return a;
      }
    })
  }

}
