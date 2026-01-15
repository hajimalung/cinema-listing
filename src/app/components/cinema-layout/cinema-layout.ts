import { Component, computed, inject, input, OnInit, signal } from "@angular/core";
import { MatCardModule } from "@angular/material/card";
import { cinemaBookingStatusStore } from "../../store/cinema-booking.store";

@Component(
  {
    selector: 'app-cinema-layout',
    templateUrl: './cinema-layout.html',
    styleUrl: './cinema-layout.scss',
    imports: [MatCardModule]
  }
)
export class CinemaLayout implements OnInit {
  cinemaBookingStore = inject(cinemaBookingStatusStore);
  cinemaId = input<string>('1');

  totalSeats = computed(()=>this.cinemaBookingStore.bookingDetails()?.totalSeats || 0);
  bookedSeats = computed( ()=>this.cinemaBookingStore.bookingDetails()?.bookedSeats || []);
  seatsStatus = computed(()=>{
    let seats = [];
    for(let i=1; i<= this.totalSeats(); i++){
      seats.push({
        seatNumber: i,
        isBooked: this.bookedSeats().includes(i)
      });
    }
    return seats;
  });

  ngOnInit(){
    this.cinemaBookingStore.loadBookingDetails(this.cinemaId());
  }
}

