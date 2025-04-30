import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PruebaEndpointsComponent } from './prueba-endpoints.component';

describe('PruebaEndpointsComponent', () => {
  let component: PruebaEndpointsComponent;
  let fixture: ComponentFixture<PruebaEndpointsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PruebaEndpointsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PruebaEndpointsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
