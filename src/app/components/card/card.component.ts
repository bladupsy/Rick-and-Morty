import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() image: any;
  @Input() title: any;
  @Input() species: any;
  @Input() i: any;
  constructor() { }

  ngOnInit(): void {
    console.log(this.i, 'Index')
  }

}
