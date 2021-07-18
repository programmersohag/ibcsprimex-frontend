import { TestBed } from '@angular/core/testing';

import { HttpInterceptorService } from './http-interceptor-service.interceptor';

describe('HttpInterceptorServiceInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      HttpInterceptorService
      ]
  }));

  it('should be created', () => {
    const interceptor: HttpInterceptorService = TestBed.inject(HttpInterceptorService);
    expect(interceptor).toBeTruthy();
  });
});
