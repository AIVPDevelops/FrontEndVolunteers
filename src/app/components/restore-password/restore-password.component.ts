import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-restore-password',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './restore-password.component.html',
  styleUrls: ['./restore-password.component.css']
})
export class RestorePasswordComponent {
  isSubmitted = false;
  email: string = '';

  sendLink(): void {
    this.isSubmitted = true;
    console.log('Link enviado a:', this.email);
    //Logica para envio de correo
  }
}