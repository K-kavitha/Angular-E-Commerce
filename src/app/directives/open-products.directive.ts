import { Directive, HostListener, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from '../models/models';

@Directive({
  selector: '[OpenProducts]',
})
export class OpenProductsDirective {
  @Input() category: any; // Declare the category property as an input
  @HostListener('click') openProducts() {
    this.router.navigate(['/products'], {
      queryParams: {
        category: this.category.category,
        subcategory: this.category.subCategory,
      },
    });
  }

  constructor(private router: Router) {}
}
