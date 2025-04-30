import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginEmpresasComponent } from './login-empresas.component';

describe('LoginEmpresasComponent', () => {
  let component: LoginEmpresasComponent;
  let fixture: ComponentFixture<LoginEmpresasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginEmpresasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginEmpresasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
