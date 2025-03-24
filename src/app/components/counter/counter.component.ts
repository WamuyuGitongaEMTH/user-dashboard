import { Component, OnInit } from '@angular/core';
import { CounterService } from 'src/app/services/counter.service';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
})
export class CounterComponent implements OnInit {
  // Holds the current value of the counter for display
  counterValue = 0;

  // Inject the CounterService to access counter state and actions
  constructor(private counterService: CounterService) {}

  ngOnInit(): void {
    /**
     * Subscribe to the counter observable from the service.
     * Every time the counter value changes in the service,
     * update the local variable to reflect it in the UI.
     */
    this.counterService.counter$.subscribe((value) => {
      this.counterValue = value;
    });
  }

  // Increase the counter by 1 using the service
  increment(): void {
    this.counterService.increment();
  }

  // Decrease the counter by 1 using the service
  decrement(): void {
    this.counterService.decrement();
  }

  // Reset the counter value to 0 using the service
  reset(): void {
    this.counterService.reset();
  }
}
