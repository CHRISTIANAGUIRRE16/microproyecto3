import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { CreateProductDto, ProductModel, UpdateProductDto } from '../models/productModel';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  readonly API_URL: string = "https://api.escuelajs.co/api/v1/products";  //se crea una variable para guardar el link

  constructor(private httpClient: HttpClient) { }  //inyeccion de dependencias

  getAll():Observable<ProductModel[]> {
    const url = ${this.API_URL};
    return this.httpClient.get<ProductModel[]>(url);
  }


  getOne(id: ProductModel['id']):Observable<ProductModel> {
    const url = ${this.API_URL}/${id};
    return this.httpClient.get<ProductModel>(url);
  }

  store(product: CreateProductDto):Observable<ProductModel> {
    const url = ${this.API_URL};
    return this.httpClient.post<ProductModel>(url, product)
  }


  update(id: ProductModel['id'], product: UpdateProductDto):Observable<ProductModel> {
    const url = ${this.API_URL}/${id};
    return this.httpClient.put<ProductModel>(url, product);
  }


  destroy(id: ProductModel['id']):Observable<any> {
    const url = ${this.API_URL}/${id};
    return this.httpClient.delete<any>(url).pipe(map((response: { rta: boolean; }) => {
        return response.rta;
      })
      );
  }
}
