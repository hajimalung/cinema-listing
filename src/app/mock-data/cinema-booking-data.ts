import { CinemaBookingModal } from "../data-model/cinema-booking-modal";

export function getCinemaTicketBookingData(cinemaId: string) : CinemaBookingModal{
  return {
    cinemaId: cinemaId,
    cinemaName: `Cinema ${cinemaId}`,
    totalSeats: 100,
    bookedSeats: generateRandomNumbers(50, 1, 100)
  };
}
function generateRandomNumbers(count: number, min: number, max: number): number[] {
  return Array.from({ length: count }, () =>
    Math.floor(Math.random() * (max - min + 1)) + min
  );
}
