import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { Router } from '@angular/router';
import { ApiService } from '../../servcies/api.service';
import { ProductsList } from '../../models/products-list.model';
import { Product } from '../../models/product.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-brands-list',
  standalone: true,
  imports: [NgFor],
  templateUrl: './brands-list.component.html',
  styleUrl: './brands-list.component.scss',
})
export class BrandsListComponent implements OnInit {
  products: any[] = []; // Assuming this is your products array
  brandArray: any[] = []; // Initialize the brandArray as an empty array

  constructor(
    private apiService: ApiService,
    private router: Router,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    const apiUrl = 'https://dummyjson.com/products?limit=100';
    this.http.get<any>(apiUrl).subscribe((data) => {
      this.products = data.products;
      const brandSet: Set<string> = new Set(); // Create a Set to store unique brands
      this.products.forEach((product) => {
        if (product.brand) {
          const brands: string[] = product.brand.split(',');
          brands.forEach((brand) => {
            brandSet.add(brand.trim()); // Add each trimmed brand to the Set (duplicates will be automatically removed)
          });
        }
      });
      this.brandArray = Array.from(brandSet); // Convert the Set back to an array
    });
  }
}
