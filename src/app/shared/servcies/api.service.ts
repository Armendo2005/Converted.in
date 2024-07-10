import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Product } from '../models/product.model';
import { ProductsList } from '../models/products-list.model';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private httpClient: HttpClient) {}

  headers = new HttpHeaders()
    .set('Cache-Control', 'no-cache')
    .set('Access-Control-Allow-Origin', '*')
    .set(
      'Access-Control-Allow-Methods',
      'GET, POST, PATCH, PUT, DELETE, OPTIONS'
    )
    .set(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept'
    );
  options = {
    headers: this.headers,
  };
  // Static property to access base API URL
  static readonly BASE_URL = environment.apiUrl;

  getProductList(): Observable<ProductsList> {
    const url = `${ApiService.BASE_URL}?limit=100`;
    return this.httpClient.get<ProductsList>(url);
  }
  getProductByPage(limit: any, skip: any): Observable<ProductsList> {
    const url = `${ApiService.BASE_URL}?limit=${limit}&skip=${skip}`;
    return this.httpClient.get<ProductsList>(url);
  }
  getProductDetails(id: string): Observable<Product> {
    const url = `${ApiService.BASE_URL}` + id;
    return this.httpClient.get<Product>(url);
  }

  getCategoriesList(): Observable<any> {
    const url = `${ApiService.BASE_URL}category-list`;
    return this.httpClient.get(url);
  }
  getProductByCategory(category: string): Observable<ProductsList> {
    const url = `${ApiService.BASE_URL}category/` + category;
    return this.httpClient.get<ProductsList>(url);
  }

  getProductByKeyWord(searchKey: any): Observable<ProductsList> {
    const url = `${ApiService.BASE_URL}search?q=${searchKey}`;
    return this.httpClient.get<ProductsList>(url);
  }
}
