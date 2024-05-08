import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css', './menu-bar.component.responsive.css']
})
export class MenuBarComponent implements OnInit {

  @Input()
  tabLeft: string = "";
  @Input()
  tabMiddle1: string = "";
  @Input()
  tabMiddle2: string = "";
  @Input()
  tabMiddle3: string = "";
  @Input()
  tabMiddle4: string = "";
  @Input()
  tabRight: string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
