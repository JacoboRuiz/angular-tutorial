import {
  Component,
  EventEmitter,
  Output,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss',
})
export class CounterComponent implements OnChanges, OnDestroy, OnInit {
  count = 0;

  @Output() cambioContador = new EventEmitter<number>();

  constructor() {
    console.log('Constructor: el componente se ha creado');
  }

  ngOnInit(): void {
    console.log('ngOnInit: El componente ya esta inicializado');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges: han cambiado los @Input()', changes);
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy: el componente se va a destruir');
  }

  incrementar() {
    this.count++;
    this.cambioContador.emit(this.count);
  }

  decrementar() {
    this.count--;
    this.cambioContador.emit(this.count);
  }
}
