export interface CinemaBookingModal {
  cinemaId: string;
  cinemaName: string;
  totalSeats: number;
  bookedSeats: number[];
}

export interface CinemaBasicDetails{
  cinemaId: string;
  cinemaName: string;
}
