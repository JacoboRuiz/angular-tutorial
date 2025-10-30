import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  @Input() copyright: string = '';
  @Output() avisarAlPadre = new EventEmitter<string>();

  notificarAlPadre() {
    this.avisarAlPadre.emit('El hijo (footer) ha emitido un evento');
  }
}
