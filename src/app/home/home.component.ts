import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Locker } from '../locker';
import { LockerService } from '../locker.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  
  public lockers: Locker[] = [];
  public results: Locker[]= [];

  constructor(
    private lockerService: LockerService,
    private router: Router
  ){}

  ngOnInit(): void {
    this.getLockers();
  }

  public goToPage(pageName: string): void{
    console.log("in page name")
    this.router.navigate([`${pageName}`])
  }

  public getLockers(): void {
    this.lockerService.getLockers().subscribe(
      (response: Locker[]) => {
        this.lockers = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }

  public searchLockers(key: string) : void{
    const result: Locker[] = [];
    for(let locker of this.lockers){
      if(locker.location.city.toLowerCase().indexOf(key.toLowerCase()) !== -1){
        result.push(locker);
      }
    }
    this.results = result
    if(result.length === 0 || !key){
      this.getLockers();
    }
  }

}
