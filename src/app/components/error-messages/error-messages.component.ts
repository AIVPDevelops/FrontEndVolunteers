import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-error-messages',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './error-messages.component.html',
  styleUrl: './error-messages.component.css'
})
export class ErrorMessagesComponent {

  @Input() mensaje: string = 'Ha ocurrido un error';
  @Input() visible: boolean = false;
  @Output() cerrar = new EventEmitter<void>();

  onClose() {
    this.cerrar.emit();
  }

}
