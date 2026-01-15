import { CinemaBasicDetails, CinemaBookingModal } from "../data-model/cinema-booking-modal";

export function getCinemaTicketBookingData(cinemaId: string) : CinemaBookingModal{
  return {
    cinemaId: cinemaId,
    cinemaName: `Cinema ${cinemaId}`,
    totalSeats: 100,
    bookedSeats: generateRandomNumbers(50, 1, 100)
  };
}

export function getCinemaIdsListforMovie(movieId: string) : CinemaBasicDetails[] {
  return generateRandomNumbers(5, 1, 20).map(id => ({
    cinemaId: id.toString(),
    cinemaName: `Cinema ${id}`
  }));
}

function generateRandomNumbers(count: number, min: number, max: number): number[] {
  const rangeSize = max - min + 1;
  if (count > rangeSize) {
    throw new Error(`Cannot generate ${count} unique numbers in range ${min}..${max}`);
  }

  // Create an array of all possible values, shuffle it, and take the first `count` items
  const values = Array.from({ length: rangeSize }, (_, i) => min + i);

  // Fisher-Yates shuffle
  for (let i = values.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const tmp = values[i];
    values[i] = values[j];
    values[j] = tmp;
  }

  return values.slice(0, count);
}
