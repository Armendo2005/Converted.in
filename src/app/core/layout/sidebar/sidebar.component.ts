import { Component } from '@angular/core';
import { CategoriesListComponent } from "../../../shared/component/categories-list/categories-list.component";
import { BrandsListComponent } from "../../../shared/component/brands-list/brands-list.component";

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CategoriesListComponent, BrandsListComponent],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {

}
