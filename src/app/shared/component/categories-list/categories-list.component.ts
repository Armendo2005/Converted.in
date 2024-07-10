import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { Router } from '@angular/router';
import { ApiService } from '../../servcies/api.service';

@Component({
  selector: 'app-categories-list',
  standalone: true,
  imports: [NgFor],
  templateUrl: './categories-list.component.html',
  styleUrl: './categories-list.component.scss'
})
export class CategoriesListComponent implements OnInit {

  Categories = [];

  constructor(
    private apiService: ApiService,
    private router: Router,
   
  ) {}

  ngOnInit(): void {
    
    this.apiService.getCategoriesList().subscribe((categories) => {
     this.Categories = categories;
    //  console.log(this.Categories);
   });
  }
}
