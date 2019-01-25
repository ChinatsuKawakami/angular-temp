import { Component, OnInit } from '@angular/core';
import { RentalListItemComponent } from '../rental-list-item/rental-list-item.component';
import{ RentalService } from'../shared/rental.service';
import{ Rental }from '../shared/rental.model';
@Component({
  selector: 'bwn-rental-list',
  templateUrl: './rental-list.component.html',
  styleUrls: ['./rental-list.component.scss']
})
export class RentalListComponent implements OnInit {
 
  rentals:Rental[]=[];
  testVariable :string='';
  constructor(private rentalService:RentalService) { }
  
  ngOnInit() {
    const testString :string = "";
    // this.testVariable = this.rentalService.testFunction(testString);
    const rentalObservable = this.rentalService.getRentals();
  
     rentalObservable.subscribe(
       (rentals:Rental[])=>{
         this.rentals = rentals;
         
       },
       (err)=>{
       
      },
      ()=>{
       
      },
     );



}
}
