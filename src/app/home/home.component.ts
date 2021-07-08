import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Locker } from '../locker';
import { Location } from '../location';
import { LockerService } from '../locker.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  
  public lockers: Locker[] = [];
  public numberOfLockers: number | undefined;
  public collectionLength!: number;
  public location: Location | undefined;


  constructor(
    private lockerService: LockerService,
    private router: Router
  ){}

  ngOnInit(): void {
    this.getAllLockers();
  }

  public goToPage(pageName: string): void{
    console.log("in page name")
    this.router.navigate([`${pageName}`])
  }

  public getAllLockers(): void {
    this.collectionLength = 5
    this.lockerService.getLockers().subscribe(
      (response: Locker[]) => {
        this.lockers = response;
        this.location = this.lockers[0].location;
        this.getNumberOfLockers()
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }

  public searchLockers(key: string) : void{
    let result: Locker[] = [];
    for(let locker of this.lockers){
      if(locker.location.city.toLowerCase().trim().indexOf(key.toLowerCase()) !== -1 && key !== null){
        result.push(locker);
      }
    }
    if(!key){
      this.getAllLockers();
    }
    this.lockers = result
    this.getNumberOfLockers()
  }

  private getNumberOfLockers(): void{
    let i:number;
    let count = 0;
    for(let i = 0; i < this.lockers.length; i++){
      count += this.lockers[i].noOfSlot;
    }
    this.numberOfLockers = count;

  }

  public viewAllLockers(): void{
    this.collectionLength = this.lockers.length
  }

}
