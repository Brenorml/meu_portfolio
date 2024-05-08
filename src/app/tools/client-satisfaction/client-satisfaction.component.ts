import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-client-satisfaction',
  templateUrl: './client-satisfaction.component.html',
  styleUrls: ['./client-satisfaction.component.css', './client-satisfaction.component.responsive.css']
})
export class ClientSatisfactionComponent implements OnInit {
  @Input()
  cardStatement: string = ""; 
  
  customers: Array<{ name: string, image: string, url: string }> = [
    { name: "Client 1", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHEcNiEF_YBUmTGDm-GJlVtSRywl-toQkuRLpsOnRrZXSdn88PTOI205K_J6NtFeXS9Q4&usqp=CAU", url: "#" },
    { name: "Client 2", image: "https://thumbs.dreamstime.com/z/arte-de-tela-renderiza%C3%A7%C3%A3o-alta-defini%C3%A7%C3%A3o-k-marvel-super-her%C3%B3i-esta-maravilhosa-cole%C3%A7%C3%A3o-pintura-muros-her%C3%B3is-mostra-268153425.jpg", url: "#" },
    { name: "Client 3", image: "https://kanto.legiaodosherois.com.br/w210-h210-k1-cfill/wp-content/uploads/2021/10/legiao_OlEZjUHgXktK.png.webp", url: "#" },
    { name: "Client 4", image: "https://vitralizado.com/wp-content/uploads/2015/04/MMCapit%C3%A3o.gif", url: "#" }
  ];
  
  constructor() { }

  ngOnInit(): void {
  }

}
