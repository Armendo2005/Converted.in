import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SidebarComponent } from '../../core/layout/sidebar/sidebar.component';

@Component({
  selector: 'app-products-list',
  standalone: true,
  imports: [SidebarComponent],
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.scss',
})
export class ProductsListComponent implements OnInit {
  products: any[] = [];
  brands: any[] = [];
  searchKeyword: string = '';
  categoryFilter: string = '';
  priceRangeFilter: { min: number; max: number } = { min: 0, max: 10000 };
  currentPage: number = 1;
  itemsPerPage: number = 10;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(): void {
    const apiUrl = 'https://dummyjson.com/products?limit=100';
    this.http.get<any>(apiUrl).subscribe((data) => {
      this.products = data.products;
    });

    this.http.get<any>(apiUrl).subscribe((data) => {
      this.brands = data.products[0].brand;
      console.log(this.brands);
    });
  }

  applyFilters(): void {
    // Apply filters based on search keyword, category, and price range
    // Use this.searchKeyword, this.categoryFilter, and this.priceRangeFilter to filter the products array
  }

  paginateProducts(page: number): void {
    this.currentPage = page;
    // Perform pagination logic to display correct set of products based on the current page and items per page
  }
}
