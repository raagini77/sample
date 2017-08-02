import { Component, OnInit } from '@angular/core';
import { ProductService } from  './../service/product.service';
@Component({
    selector: 'app-product',
    templateUrl: './product.component.html'
})
export class ProductComponent implements OnInit {
    products:any= [];
    constructor(private _productService:ProductService){}
    ngOnInit(){
         this.products=this._productService.getProducts();
    }
}