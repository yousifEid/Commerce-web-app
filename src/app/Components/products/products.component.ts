import { Component, OnInit } from "@angular/core";
import { Product } from "src/app/Interfaces/product";
import { ProductsService } from "src/app/Services/products.service";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent  implements OnInit{
  constructor(private _ProductsService:ProductsService){}
  products: Product[] = []
ngOnInit(): void {
  this._ProductsService.getAllProducts().subscribe({
    next:(res)=>{
      console.log('products',res.data)
      this.products=res.data
    }
  })
}
}


