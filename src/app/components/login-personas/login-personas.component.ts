import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormControl, FormGroup, Validators, ValidatorFn, AbstractControl, FormArray } from '@angular/forms';
import { ErrorMessagesComponent } from '../error-messages/error-messages.component'; 
import { SuccessMessagesComponent } from '../success-messages/success-messages.component'; 

@Component({
  selector: 'app-login-personas',
  standalone: true,
  imports: [RouterModule, CommonModule, ReactiveFormsModule, ErrorMessagesComponent, SuccessMessagesComponent ],
  templateUrl: './login-personas.component.html',
  styleUrl: './login-personas.component.css'
})
export class LoginPersonasComponent {

  mostrarRegistro: boolean = false;
  mostrarCompletarInfo: boolean = false;
  banderaRegistro: boolean = false;
  mostrarPrincipal: boolean = true

  mostrarFormularioRegistro(): void {
    this.mostrarRegistro = true;
  }

  mostrarFormularioLogin(): void {
    this.mostrarRegistro = false;
  }

  mostrarFormularioInformacion(): void{
    this.mostrarCompletarInfo = true;
  }

  // Validador personalizado para comparar contraseña y repetir contraseña.
  passwordsMatchValidator: ValidatorFn = (group: AbstractControl) => {
    const pass = group.get('password')?.value;
    const confirmPass = group.get('confirmPassword')?.value;
    return pass === confirmPass ? null : { passwordsMismatch: true };
  };

  // Formulario con email, contraseña y repetir contraseña.
  subsForm = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.email,
      Validators.pattern(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
      Validators.pattern(/^(?=.*[a-zA-Z0-9])(?=.*[\W_]).+$/) // Alfanumérico y al menos un  caraceter especial.
    ]),
    confirmPassword: new FormControl('', Validators.required)
  }, { validators: this.passwordsMatchValidator });

  mensajeError: string = '';
  mostrarError: boolean = false;
  mensajeExitoso: string = '';
  mostrarExitoso: boolean = false;
  paises: string[] = ['Colombia', 'México', 'Argentina', 'Chile', 'Perú', 'Brasil', 'Estados Unidos'];
  areasVoluntariado: string[] = ['Educación', 'Salud', 'Medio Ambiente', 'Derechos Humanos', 'Animales', 'Deporte'];
  horasDisponibles: string[] = ['1-5 horas', '6-10 horas', '11-15 horas', 'Más de 15 horas'];


  registro(): void {
  const emailValue = this.subsForm.value.email?.trim() || '';

    if (!emailValue) {
      this.mensajeError = 'Por favor, ingresa tu correo electrónico.';
      this.mostrarError = true;
    } 
    else if (!this.subsForm.controls.email.valid) {
      this.mensajeError = 'El correo electrónico no es válido.';
      this.mostrarError = true;
    } 
    else{
       this.mostrarFormularioRegistro();
       this.mostrarPrincipal = false;
    }
  }

  crearCuenta() {

    if (this.subsForm.invalid) {
     if (
        !this.subsForm.controls.email.value?.trim() ||
        !this.subsForm.controls.password.value?.trim() ||
        !this.subsForm.controls.confirmPassword.value?.trim()
      ) {
        this.mensajeError = 'Por favor, completa todos los campos.';
      }
      else if (this.subsForm.errors?.['passwordsMismatch']) {
        this.mensajeError = 'Las contraseñas no coinciden.';
      } 
      else if (this.subsForm.controls.password.invalid) {
        this.mensajeError = 'La contraseña debe tener mínimo 6 caracteres, ser alfanumérica y contener al menos un carácter especial.';
      } 
      else if (this.subsForm.controls.email.invalid) {
        this.mensajeError = 'El correo electrónico no es válido.';
      } 
      this.mostrarError = true;
      this.mostrarExitoso = false;
    } else {
      this.mostrarError = false;
      this.mostrarExitoso = true;
      this.mensajeExitoso = `¡Cuenta creada!\nCompleta tu información personal para comenzar\n a cambiar el mundo a través de Young Travelers.`;
      this.banderaRegistro = true;
      
    }

  }

  registrarInfo() {

    if (this.subsForm.invalid) {
     if (
        !this.subsForm.controls.email.value?.trim() ||
        !this.subsForm.controls.password.value?.trim() ||
        !this.subsForm.controls.confirmPassword.value?.trim()
      ) {
        this.mensajeError = 'Por favor, completa todos los campos.';
      }
      else if (this.subsForm.errors?.['passwordsMismatch']) {
        this.mensajeError = 'Las contraseñas no coinciden.';
      } 
      else if (this.subsForm.controls.password.invalid) {
        this.mensajeError = 'La contraseña debe tener mínimo 6 caracteres, ser alfanumérica y contener al menos un carácter especial.';
      } 
      else if (this.subsForm.controls.email.invalid) {
        this.mensajeError = 'El correo electrónico no es válido.';
      } 
      this.mostrarError = true;
      this.mostrarExitoso = false;
    } else {
      this.mostrarError = false;
      this.mostrarExitoso = true;
      this.mensajeExitoso = `¡Cuenta creada!\nCompleta tu información personal para comenzar\n a cambiar el mundo a través de Young Travelers.`;
      this.banderaRegistro = true;
      
    }

  }
    
  cerrarError() {
    this.mostrarError = false;
  }

  cerrarExitoso(){

    this.mostrarExitoso = false;
  
    if(this.banderaRegistro){
      this.mostrarFormularioInformacion();
      this.mostrarRegistro = false;
      this.mostrarPrincipal = false;
    } else {
      this.subsForm.controls.email.setValue('');
    }

  }




}
