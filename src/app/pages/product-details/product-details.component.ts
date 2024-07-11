import { Component, OnInit } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { Product } from '../../shared/models/product.model';
import { ActivatedRoute, Params } from '@angular/router';
import { ApiService } from '../../shared/servcies/api.service';
import { InternalSideDetailsComponent } from "../../shared/component/internal-side-details/internal-side-details.component";

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [NgFor, NgIf, InternalSideDetailsComponent],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss'
})
export class ProductDetailsComponent implements OnInit {

  productImages: string[] = [];
  reviewsArray: string[] = [];
  dimensionsObj: any = {};
  Product: Product = new Product();
  productImageSrc = '';
  warningFlg = false;
  constructor(private route: ActivatedRoute,
              private apiService: ApiService) { }

  ngOnInit(): void {
    this.route.params.subscribe((param: Params) => {
      this.Product.id = param['id'];
      this.apiService.getProductDetails(this.Product.id).subscribe((productDetails: Product) => {
        this.Product = productDetails ;
        this.productImages = this.Product.images;
        this.reviewsArray = this.Product.reviews;
        this.dimensionsObj = this.Product.dimensions;
        this.productImageSrc = this.productImages[0];
        this.apiService.pageList.emit(['Home', this.Product.category, this.Product.title]);
      });
    });
  }

  switchImages(imgsrc: any): void{
    this.productImageSrc = imgsrc;
  }

  cartAdded(): void{
    // const duplicatedPrd = this.apiService.cardProduct.filter((e => e.id === this.Product.id));
    // if (duplicatedPrd && duplicatedPrd.length > 0 ){
    //   this.warningFlg = true;
    // }else{
    //   this.warningFlg = false;
    //   this.apiService.cardProduct.push(this.Product);
    //   this.apiService.CartChanged.emit( this.apiService.cardProduct);
    // }

  }
}
