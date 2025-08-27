import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-success-messages',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './success-messages.component.html',
  styleUrl: './success-messages.component.css'
})
export class SuccessMessagesComponent {

  @Input() mensaje = '¡Proceso satisfactorio!';
  @Input() visible = false;
  @Output() cerrar = new EventEmitter<void>();

  onClose() {
    this.cerrar.emit();
  }

}
