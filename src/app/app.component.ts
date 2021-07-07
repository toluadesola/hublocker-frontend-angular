import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Locker } from './locker';
import { Location } from './location';
import { LockerService } from './locker.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public lockers: Locker[] = [];

  constructor(private lockerService: LockerService){}
  ngOnInit(): void {
    this.getLockers();
  }

  public getLockers(): void {
    this.lockerService.getLockers().subscribe(
      (response: Locker[]) => {
        // console.log("In get")
        this.lockers = response;
        
        for(let locker of this.lockers){
          console.log(locker.location.city)
        }
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }
}
