import { Component, Input } from '@angular/core';
import {CurrencyPipe, CommonModule} from '@angular/common';
import {Router} from '@angular/router';
import {Trip} from '../models/trip';
import { AuthenticationService } from '../services/authentication';

@Component({
  imports: [CurrencyPipe, CommonModule],
  selector: 'app-trip-card',
  styleUrl: './trip-card.css',
  templateUrl: './trip-card.html',
})
export class TripCard {
  @Input('trip') trip: any;

  constructor(private router: Router, private authenticationService: AuthenticationService ) {}


  public editTrip(trip: Trip) {
    localStorage.removeItem('tripCode');
    localStorage.setItem('tripCode', trip.code);
    this.router.navigate(['edit-trip']);
  }

  public deleteTrip(trip: Trip): void {
    if (confirm('Are you sure you want to delete this trip?')) {
      localStorage.setItem('tripCode', trip.code);
      this.router.navigate(['delete-trip']);
    }
  }

  public isLoggedIn() 
  { 
    return this.authenticationService.isLoggedIn(); 
  } 
}
