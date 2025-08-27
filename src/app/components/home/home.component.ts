import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common'; 
import { trigger, transition, style, animate } from '@angular/animations';
import { ReactiveFormsModule, FormControl, FormGroup, Validators } from '@angular/forms';
import { ErrorMessagesComponent } from '../error-messages/error-messages.component'; 
import { SuccessMessagesComponent } from '../success-messages/success-messages.component'; 

// Interfaces para tipado fuerte
interface Testimonio {
  title: string;
  text: string;
  author: string;
}

interface Avatar {
  src: string;
  alt: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule, CommonModule, ReactiveFormsModule, ErrorMessagesComponent, SuccessMessagesComponent ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  animations: [
    trigger('fadeAnimation', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('500ms ease-out', style({ opacity: 1 }))
      ]),
      transition(':leave', [
        animate('500ms ease-in', style({ opacity: 0 }))
      ])
    ])
  ]
})
export class HomeComponent implements AfterViewInit {

  //Sección de testimonios. 
  testimonios: Testimonio[] = [
    {
      title: "Crecimiento personal increíble",
      text: "Unirme a una organización de voluntariado me ayudó a superar mi timidez. Conocí personas de diferentes culturas y me di cuenta de que todos podemos hacer una gran diferencia trabajando juntos.",
      author: "Lucía"
    },
    {
      title: "Una aventura inolvidable",
      text: "Viajar a otro país para enseñar inglés fue una de las decisiones más valientes que tomé. La hospitalidad de las personas y la gratitud de los estudiantes me llenaron de alegría...",
      author: "Sofía"
    },
    {
      title: "¡La mejor experiencia de mi vida!",
      text: "Ser voluntario en el refugio de animales local fue la mejor experiencia de mi vida. Pasé incontables horas cuidando a los animales, ayudando con las adopciones y organizando eventos comunitarios."
      + " La alegría de ver a un perro que había sido abandonado encontrar un hogar amoroso fue indescriptible. Hice amigos para toda la vida entre mis compañeros voluntarios y aprendí mucho sobre la compasión"
      + " y el trabajo en equipo. Realmente cambió mi perspectiva sobre la vida y la importancia de retribuir a la comunidad.",
      author: "Tom"  
    },
    {
      title: "Un impacto positivo en mi comunidad",
      text: "Participar en proyectos de reforestación me hizo valorar mucho más nuestro medio ambiente. Cada árbol plantado me recordaba que mis acciones tienen un impacto directo en el mundo.",
      author: "Carlos"
    },
    {
      title: "Redescubrí mi pasión por ayudar",
      text: "Durante los meses difíciles de la pandemia, ser voluntario en un banco de alimentos me permitió reconectar con el verdadero significado de la solidaridad y la esperanza.",
      author: "Andrés"
    }
  ];

  avatars: Avatar[] = [
    { src: "https://randomuser.me/api/portraits/women/1.jpg", alt: "Avatar 1" },
    { src: "https://randomuser.me/api/portraits/women/2.jpg", alt: "Avatar 2" },
    { src: "https://randomuser.me/api/portraits/men/3.jpg", alt: "Avatar 3" },
    { src: "https://randomuser.me/api/portraits/men/4.jpg", alt: "Avatar 4" },
    { src: "https://randomuser.me/api/portraits/men/5.jpg", alt: "Avatar 5" }
  ];

  current = 2;

  //Contador para la animación de los números en el home page.
  @ViewChild('contadorSection') contadorSection!: ElementRef;

  proyectos = 0;
  satisfaccion = 0;
  voluntarios = 0;
  convenios = 0;

  private observer!: IntersectionObserver;
  private animado = false; 

  ngAfterViewInit(): void {
    this.observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !this.animado) {
          this.animado = true;
          this.iniciarContadores();
          this.observer.disconnect();
        }
      });
    }, { threshold: 0.3 });

    this.observer.observe(this.contadorSection.nativeElement);
  }

  iniciarContadores(): void {
    this.startCounter(0, 400, 5500, val => this.proyectos = val);
    this.startCounter(0, 100, 5500, val => this.satisfaccion = val);
    this.startCounter(0, 10, 5500, val => this.voluntarios = val);
    this.startCounter(0, 200, 5500, val => this.convenios = val);
  }

  startCounter(start: number, end: number, duration: number, callback: (val: number) => void): void {
    let startTime: number | null = null;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      callback(Math.floor(progress * (end - start) + start));
      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  }

  nextTestimonial(): void {
    this.current = (this.current + 1) % this.testimonios.length;
  }

  prevTestimonial(): void {
    this.current = (this.current - 1 + this.testimonios.length) % this.testimonios.length;
  }

  goToTestimonial(index = 1): void {
    this.current = index;
  }

  //Validación de búsqueda de voluntariados.
  voluntariadosSearch = new FormControl('');

  buscarVoluntariado(): void {
    const busqueda = this.voluntariadosSearch.value?.trim() || '';

    if (!busqueda) {
      this.mensajeError = 'Por favor, ingresa un voluntariado para la búsqueda.';
      this.mostrarError = true;
      this.mostrarExitoso = false;
    } 

  }

  //Validación del campo de suscripción.
  subsForm = new FormGroup<{
    email: FormControl<string | null>;
  }>({
    email: new FormControl<string | null>(
      '',
      [
        Validators.required, 
        Validators.email,
        Validators.pattern(/^[\w.-]+@([\w-]+\.)+[\w-]{2,4}$/) 
      ]
    )
  });

  mensajeError = '';
  mostrarError = false;
  mensajeExitoso = '';
  mostrarExitoso = false;

  suscribirse(): void {
  const emailValue = this.subsForm.value.email?.trim() || '';

    if (!emailValue) {
      this.mensajeError = 'Por favor, ingresa tu correo electrónico.';
      this.mostrarError = true;
    } 
    else if (!this.subsForm.controls.email.valid) {
      this.mensajeError = 'El correo electrónico no es válido.';
      this.mostrarError = true;
    } 
    else {
      this.mensajeExitoso = `¡Gracias por suscribirte!\nPronto te llegará toda la información\n de nuestro voluntariado al correo: ${emailValue}.`;
      this.mostrarError = false;
      this.mostrarExitoso = true;

      
    }
  }

  cerrarError() {
    this.mostrarError = false;
  }

  cerrarExitoso(){
    this.mostrarExitoso = false;
    this.subsForm.controls.email.setValue('');
  }

}
