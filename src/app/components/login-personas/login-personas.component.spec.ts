import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginPersonasComponent } from './login-personas.component';

describe('LoginPersonasComponent', () => {
  let component: LoginPersonasComponent;
  let fixture: ComponentFixture<LoginPersonasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginPersonasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginPersonasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
