import { Component } from '@angular/core';
import { ApiService } from '../../../shared/servcies/api.service';
import {Router} from "@angular/router";
import {NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-breadcrump',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './breadcrump.component.html',
  styleUrl: './breadcrump.component.scss'
})
export class BreadcrumpComponent {

  PageList: string[] = ['home'];
  constructor(private apiService: ApiService,
              private router: Router) { }

  ngOnInit(): void {
    this.apiService.pageList.subscribe((pages) => {
      this.PageList = pages;
    });

  }
  NavigateHome(): void{
    this.router.navigate(['']);
    this.apiService.pageList.emit(['home']);
    this.apiService.ProductsListChanged.emit(this.apiService.ProductsListing);
  }
}
