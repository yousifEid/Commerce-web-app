import { Component, Input } from '@angular/core';
import { AuthService } from 'src/app/Services/auth.service';
import { CartService } from 'src/app/Services/cart.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  @Input() product: any;

  constructor(private _CartService: CartService, private _AuthService: AuthService,
    private toastr: ToastrService) {

  }


  addProductToCart(productId: string) {
    this._CartService.addProductToCart(productId).subscribe({
      next: (res) => {
        // console.log(res.numOfCartItems);
        this._CartService.numOfCartItems.next(res.numOfCartItems)

        this.toastr.success('Product added to cart', 'Success');
      },
      error: (err) => {
        console.log(err.error.message);

        if (err.error.message == 'Invalid Token. please login again') {
          this._AuthService.logOut()
        }

      }
    })
  }




}
