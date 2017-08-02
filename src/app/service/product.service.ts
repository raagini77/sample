import { Injectable } from '@angular/core';
@Injectable()
export class ProductService{
    getProducts(){
        return [
            {"prodid":101, "prodName":'Amway',"prodprice":5},
        {"prodid":111, "prodName":'Nutralite',"prodprice":10},
         {"prodid":222, "prodName":'Artistry',"prodprice":12},
    
    ]
    }
}