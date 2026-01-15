import { Component, OnInit, signal } from '@angular/core';
import { CinemaLayout } from './components/cinema-layout/cinema-layout';
import { CinemaListComponent } from "./components/cinema-list/cinema-list";

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  imports: [CinemaListComponent],
  styleUrl: './app.scss'
})
export class App implements OnInit{
  protected readonly title = signal('cinema-listing');

  movieId = signal('2');

  ngOnInit(): void {
      window.addEventListener('movieSelected',(event:Event)=>{
        const customEvent = event as CustomEvent;
        this.movieId.set(customEvent.detail.id);
      });
  }

  getAvailableCinemas() {
    window.removeEventListener('movieSelected',()=>{});
  }
}
