import { Component, OnInit, ChangeDetectorRef, signal } from '@angular/core';
import {NgFor} from '@angular/common';
import {TripCard} from '../trip-card/trip-card';
import {Trip} from '../models/trip';
import {TripData} from '../services/trip-data';
import {Router} from '@angular/router';


@Component({
  imports: [NgFor, TripCard],
  selector: 'app-trip-listing',
  styleUrl: './trip-listing.css',
  templateUrl: './trip-listing.html',
  providers: [TripData]
})
export class TripListing implements OnInit {
  trips = signal<Trip[]>([]);
  message: string = '';

  constructor(
    private tripDataService: TripData,
    private router: Router,
    private cdr: ChangeDetectorRef
  ){
    console.log
  }

  public addTrip(): void {
    this.router.navigate(['add-trip'])
  }

  ngOnInit(): void {
    console.log('ngOnInit');
    this.getStuff();
  }

  private getStuff(): void {
    this.tripDataService.getTrips()
    .subscribe({
      next: (value: any) => {
        this.trips.set(value);
        this.cdr.detectChanges();
        console.log('API trips:', this.trips);
        if(value.length > 0) {
          this.message = 'There are ' + value.length + ' trips available.';
      }
      else {
        this.message = 'There were no trips retireved from the database';
      }
      console.log(this.message);
    },
    error: (error: any) => {
      console.log('Error: ' + error);
    }
  })
  }
}
