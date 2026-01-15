import { Component, computed, inject, input, OnInit } from "@angular/core";
import { cinemaListStore } from "../../store/cinema-list.store";
import { MatExpansionModule } from '@angular/material/expansion';
import { CinemaLayout } from "../cinema-layout/cinema-layout";

@Component({
  selector: 'app-cinema-list',
  templateUrl: './cinema-list.html',
  styleUrl: './cinema-list.scss',
  imports: [MatExpansionModule, CinemaLayout]
})
export class CinemaListComponent implements OnInit
{
  movieId = input<string>('1');

  cinemasList = computed(()=>{
    return this.cinemaStore.cinemas();
  });

  cinemaStore = inject(cinemaListStore);

  ngOnInit(): void {
    this.cinemaStore.loadCinemasForMovie(this.movieId());
  }

}
