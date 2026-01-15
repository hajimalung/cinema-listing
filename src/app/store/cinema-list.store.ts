import { patchState, signalStore, withMethods, withState } from "@ngrx/signals";
import { CinemaBasicDetails } from "../data-model/cinema-booking-modal";
import { inject } from "@angular/core";
import { CinemaBookingApi } from "../services/cinema-booking-api";

interface CinemaListState {
  isLoading: boolean;
  error: string | null;
  cinemas: CinemaBasicDetails[];
}

const initialCinemaListState: CinemaListState = {
  isLoading: false,
  error: null,
  cinemas: [],
};

export const cinemaListStore = signalStore(
  { providedIn: 'root' },
  withState<CinemaListState>(initialCinemaListState),
  withMethods((store, cinemaListingApi = inject(CinemaBookingApi) ) => {
    return {
      loadCinemasForMovie: async (movieId: string) => {
        patchState(store, { isLoading: true, error: null });
        cinemaListingApi.getCinemasForMovie(movieId).subscribe({
          next: (data) => {
            console.log('Fetched cinema list:', data);
            patchState(store, { cinemas: data, isLoading: false });
          },
          error: (err) => {
            patchState(store, { error: err.message || 'Failed to load cinema list', isLoading: false });
          }
        });
      }
    }
  }
));
