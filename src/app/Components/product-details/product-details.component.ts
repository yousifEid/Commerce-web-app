import { OwlOptions } from 'ngx-owl-carousel-o';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/Interfaces/product';
import { ProductsService } from 'src/app/Services/products.service';

 

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      }
    },
    nav: true
  }

  productId: string = ""
  productDetails!: Product
  constructor(private _ActivatedRoute: ActivatedRoute, private _ProductsService:ProductsService) {
    _ActivatedRoute.paramMap.subscribe((params) => {

      this.productId = params.get('id') || ""
      _ProductsService.getProductDetails(this.productId).subscribe((res) => {
        console.log(res.data);
        this.productDetails = res.data
      })
    })
  }
}
