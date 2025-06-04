import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common'; 
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule, CommonModule],
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

export class HomeComponent {

  testimonios = [
    
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
      + " La alegría de ver a un perro que había sido abandonado encontrar un hogar amoroso fue indescriptible. Hice amigos para toda la vida entre mis compañeros voluntarios y apendí mucho sobre la compasión"
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

  avatars = [
    { src: "https://randomuser.me/api/portraits/women/1.jpg", alt: "Avatar 1" },
    { src: "https://randomuser.me/api/portraits/women/2.jpg", alt: "Avatar 2" },
    { src: "https://randomuser.me/api/portraits/men/3.jpg", alt: "Avatar 3" },
    { src: "https://randomuser.me/api/portraits/men/4.jpg", alt: "Avatar 4" },
    { src: "https://randomuser.me/api/portraits/men/5.jpg", alt: "Avatar 5" }
  ];

  current = 2;

  nextTestimonial() {
    this.current = (this.current + 1) % this.testimonios.length;
  }

  prevTestimonial() {
    this.current = (this.current - 1 + this.testimonios.length) % this.testimonios.length;
  }

  goToTestimonial(index = 1) {
    this.current = index;
  }

  
}
