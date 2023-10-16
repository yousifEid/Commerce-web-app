import { Component, OnInit } from '@angular/core';
import { Category, Product } from 'src/app/Interfaces/product';
import { ProductsService } from 'src/app/Services/products.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit{
constructor(private _ProductsService:ProductsService){}
categoryData:Category[]=[]
ngOnInit(): void {
    this._ProductsService.getCategories().subscribe({
      next:(res)=>
      this.categoryData=res.data
    })
}
}
