import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

type Product = {
  id: number;
  name: string;
  price: number;
  stock: number;
  status: 'new' | 'sale' | 'discontinued';
};

@Component({
  selector: 'app-products-list',
  imports: [FormsModule],
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.scss',
})
export class ProductsListComponent {
  products: Product[] = [
    { id: 1, name: 'Teclado', price: 29.9, stock: 12, status: 'new' },
    { id: 2, name: 'Raton', price: 19.9, stock: 0, status: 'sale' },
    { id: 3, name: 'Monitor', price: 199.9, stock: 5, status: 'discontinued' },
  ];

  showOnlyInStock = true;
}
