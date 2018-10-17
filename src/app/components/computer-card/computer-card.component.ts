import { Component, OnInit, OnChanges, Input } from '@angular/core';

@Component({
  selector: 'app-computer-card',
  templateUrl: './computer-card.component.html',
  styleUrls: ['./computer-card.component.scss']
})
export class ComputerCardComponent implements OnInit, OnChanges {
  
  @Input() itemsContainer: any[] = [];

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(): void {
    console.log(this.itemsContainer)
  }

}
