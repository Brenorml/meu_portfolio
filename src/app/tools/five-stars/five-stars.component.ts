import { Component, OnInit, Renderer2, ElementRef } from '@angular/core';

@Component({
  selector: 'app-five-stars',
  templateUrl: './five-stars.component.html',
  styleUrls: ['./five-stars.component.css', './five-stars.component.responsive.css']
})
export class FiveStarsComponent implements OnInit {

  constructor(private renderer: Renderer2, private el: ElementRef) { }

  ngOnInit(): void {
    const stars = document.querySelectorAll('.star-icon');

    document.addEventListener('click', function (e) {
      const target = e.target as HTMLElement; // Assegura ao TypeScript que 'e.target' é um HTMLElement
      if (target) {
        const classStar = target.classList; // Acesso seguro à propriedade classList
        if (classStar && !classStar.contains('check')) { // Verificação para classList não ser nula
          stars.forEach(function(star) {
            const starElement = star as HTMLElement; // Conversão explícita para HTMLElement
            starElement.classList.remove('check');
          });
          classStar.add('check'); // Acesso seguro ao método add
          console.log(target.getAttribute('data-evaluate')); // Acesso seguro ao método getAttribute
        }
      }
    });
  }

}
