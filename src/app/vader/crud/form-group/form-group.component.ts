import {Component, Input, OnInit} from "@angular/core"

@Component({
  selector: 'vader-form-group',
  templateUrl: './form-group.component.html',
  styleUrls: ['./form-group.component.css']
})
export class FormGroupComponent implements OnInit {
  @Input()
  label: string

  constructor() {
  }

  ngOnInit() {
  }

}
