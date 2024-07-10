import { Component } from '@angular/core';
import { CategoriesListComponent } from "../../../shared/component/categories-list/categories-list.component";

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CategoriesListComponent],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {

}
