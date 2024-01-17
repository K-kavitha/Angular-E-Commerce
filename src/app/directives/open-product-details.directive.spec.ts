import { OpenProductDetailsDirective } from './open-product-details.directive';
import { Router } from '@angular/router'; // Import the Router

describe('OpenProductDetailsDirective', () => {
  it('should create an instance', () => {
    const routerMock = {} as Router; // Create a mock object for Router
    const directive = new OpenProductDetailsDirective(routerMock); // Provide the Router mock object
    expect(directive).toBeTruthy();
  });
});
