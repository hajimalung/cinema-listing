import { Component, computed, effect, inject, input } from "@angular/core";
import { cinemaListStore } from "../../store/cinema-list.store";
import { MatExpansionModule } from '@angular/material/expansion';
import { CinemaLayout } from "../cinema-layout/cinema-layout";

@Component({
  selector: 'app-cinema-list',
  templateUrl: './cinema-list.html',
  styleUrl: './cinema-list.scss',
  imports: [MatExpansionModule, CinemaLayout]
})
export class CinemaListComponent
{
  movieId = input<string>('1');

  cinemaStore = inject(cinemaListStore);

  cinemasList = computed(()=>{
        return this.cinemaStore.cinemas();
  });

  // effect: call loadCinemasForMovie now and whenever `movieId` changes
  movieLoader = effect(() => {
    this.cinemaStore.loadCinemasForMovie(this.movieId());
  });

}
