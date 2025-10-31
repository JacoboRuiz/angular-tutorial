import { Component, signal, computed, effect } from '@angular/core';

@Component({
  selector: 'app-counter-signal',
  imports: [],
  templateUrl: './counter-signal.component.html',
  styleUrl: './counter-signal.component.scss',
})
export class CounterSignalComponent {
  count = signal(0);

  messege = computed(() => {
    const value = this.count();
    if (value > 10) return 'Es mas de 10';
    if (value < 0) return 'Negativos no';
    return 'Sigue contando...';
  });

  constructor() {
    effect(() => {
      console.log(`El contador vale ${this.count()}`);
    });
  }

  increment() {
    this.count.update((value) => value + 1);
  }

  decrement() {
    this.count.update((value) => value - 1);
  }

  reset() {
    this.count.set(0);
  }
}
