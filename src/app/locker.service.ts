import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from "rxjs";
import { Locker } from "./locker";

@Injectable({
    providedIn: 'root'
})
export class LockerService{
    private apiServerUrl = environment.apiBaseUrl;

    constructor(private http: HttpClient) {}

    public getLockers(): Observable<Locker[]> {
        return this.http.get<Locker[]>(`${this.apiServerUrl}/api/lockers`)
    }

}