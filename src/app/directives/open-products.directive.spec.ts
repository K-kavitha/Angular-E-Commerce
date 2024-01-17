import { OpenProductsDirective } from './open-products.directive';
import { Router } from '@angular/router'; // Import the Router

describe('OpenProductsDirective', () => {
  it('should create an instance', () => {
    const routerMock = {} as Router; // Create a mock object for Router
    const directive = new OpenProductsDirective(routerMock); // Provide the Router mock object
    expect(directive).toBeTruthy();
  });
});
