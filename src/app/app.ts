import { Component, signal } from '@angular/core';
import { CinemaLayout } from './components/cinema-layout/cinema-layout';
import { CinemaListComponent } from "./components/cinema-list/cinema-list";

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  imports: [CinemaListComponent],
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('cinema-listing');

  getAvailableCinemas() {

  }
}
