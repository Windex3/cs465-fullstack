import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TripData } from '../services/trip-data';

@Component({
  selector: 'app-delete-trip',
  standalone: true,
  imports: [],
  templateUrl: './delete-trip.html',
  styleUrl: './delete-trip.css'
})
export class DeleteTrip {

  constructor(
    private router: Router,
    private tripDataService: TripData
  ) {}

  public deleteTrip(): void {
    const tripCode = localStorage.getItem('tripCode');

    if (!tripCode) {
      alert('No trip selected!');
      this.router.navigate(['']);
      return;
    }

    this.tripDataService.deleteTrip(tripCode).subscribe({
      next: (value: any) => {
        console.log('Trip deleted:', value);
        localStorage.removeItem('tripCode');
        this.router.navigate(['']);
      },
      error: (error: any) => {
        console.log('Error deleting trip:', error);
      }
    });
  }

  public cancel(): void {
    this.router.navigate(['']);
  }
}