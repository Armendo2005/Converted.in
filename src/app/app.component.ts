import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductsListComponent } from "./pages/products-list/products-list.component";
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProductsListComponent, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'convertedin-assessment';
}
