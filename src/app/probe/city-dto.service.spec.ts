import { TestBed, inject } from '@angular/core/testing';

import { CityDtoService } from './city-dto.service';

describe('CityDtoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CityDtoService]
    });
  });

  it('should ...', inject([CityDtoService], (service: CityDtoService) => {
    expect(service).toBeTruthy();
  }));
});
