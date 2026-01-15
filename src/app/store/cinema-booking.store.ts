
import { signalStore, withState, withMethods, patchState } from '@ngrx/signals';
import { inject } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { CinemaBookingApi } from '../services/cinema-booking-api';
import { CinemaBookingModal } from '../data-model/cinema-booking-modal';
interface CinemaBookingStatusState {
  isLoading: boolean;
  error: string | null;
  bookingDetails : CinemaBookingModal | null;
}

const initialCinemaBookingStatusState: CinemaBookingStatusState = {
  isLoading: false,
  error: null,
  bookingDetails: null,
};

export const cinemaBookingStatusStore = signalStore(
  { providedIn: 'root' },
  withState<CinemaBookingStatusState>(initialCinemaBookingStatusState),
  withMethods((store, bookingStatusApi = inject(CinemaBookingApi))=>{
    return{
      loadBookingDetails: async (cinemaId: string) => {
        patchState(store, { isLoading: true,  error: null });
        bookingStatusApi.getAvailableSeats(cinemaId).subscribe({
          next: (data) => {
            console.log('Fetched booking details:', data);
            patchState(store, { bookingDetails: data, isLoading: false });
          },
          error: (err) => {
            patchState(store, { error: err.message || 'Failed to load booking details', isLoading: false });
          }
        });
      }
    }
  })
);
