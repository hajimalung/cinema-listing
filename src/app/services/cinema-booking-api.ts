import { Injectable } from "@angular/core";
import { getCinemaTicketBookingData } from "../mock-data/cinema-booking-data";
import { of } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CinemaBookingApi {
  getAvailableSeats(cinemaId: string) {
    return of(getCinemaTicketBookingData(cinemaId));
  }
}
