import { Component, Input, OnInit } from '@angular/core';



@Component({
  selector: 'app-index-card',
  templateUrl: './index-card.component.html',
  styleUrls: ['./index-card.component.css', './index-card.component.responsive.css']
})
export class IndexCardComponent implements OnInit {

  @Input()
  leftBox: string = "";
  @Input()
  middleBox: string = "";
  @Input()
  rightBox: string = "";
  @Input()
  leftBoxAlt: string = "";
  @Input()
  middleBoxAlt: string = "";
  @Input()
  rightBoxAlt: string = "";
  @Input()
  moduleNameLeft: string = "";
  @Input()
  moduleNameMid: string = "";
  @Input()
  moduleNameRight: string = "";
  @Input()
  idLeft: string = "0";
  @Input()
  idMid: string = "0";
  @Input()
  idRight: string = "0";
    
    
  constructor() { }

  ngOnInit(): void {    
  }

}
