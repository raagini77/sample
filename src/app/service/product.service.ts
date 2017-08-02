import { Injectable } from '@angular/core';
@Injectable()
export class ProductService{
    getProducts(){
        return [
            {"prodid":101, "prodName":'honey bunches',"prodprice":5},
        {"prodid":111, "prodName":'dunkin donuts',"prodprice":10},
         {"prodid":222, "prodName":'strawberry milk',"prodprice":12},
    
    ]
    }
}