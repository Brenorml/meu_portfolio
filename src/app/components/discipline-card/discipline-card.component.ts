import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {dataBind} from '../../data/dataBind'

@Component({
  selector: 'app-discipline-card',
  templateUrl: './discipline-card.component.html',
  styleUrls: ['./discipline-card.component.css', './discipline-card.component.recursive.css']
})
export class DisciplineCardComponent implements OnInit {

  @Input()
  moduleTitle: string = "";
  @Input()
  teacher: string = "";
  @Input()
  goals: string = "";
  @Input()
  activities: string = "";
  @Input()
  reflection: string = "";
  @Input()
  reflectionLink: string = "";
  @Input()
  homeworkUrl: string = "";
  @Input()
  homeworkImg: string = "";

  private id: string | null = "0"  

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(value => this.id = value.get("id"));

    this.setValuesToComponent(this.id);
  }

  setValuesToComponent(id: string | null) {
    const result = dataBind.filter(article => article.id == id)[0];
    
    if (result) {
      this.moduleTitle = result.title;
      this.teacher = result.professor;
      this.goals = result.objective;
      this.activities = result.workDescription;
      this.reflection = result.reflectDescription;
      this.reflectionLink = result.reflectionURL;
      this.homeworkUrl = result.workURL;
      this.homeworkImg = result.imgWorkURL;
    }
  }
}
