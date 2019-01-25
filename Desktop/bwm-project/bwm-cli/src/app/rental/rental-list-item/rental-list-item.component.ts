import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'bwm-rental-list-item',
  templateUrl: './rental-list-item.component.html',
  styleUrls: ['./rentai-list-item.component.scss']
})
export class RentalListItemComponent implements OnInit {
  
  @Input() rental: any;


  constructor() { }
   
  ngOnInit() {
  }

}
