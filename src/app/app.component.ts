import { Component } from '@angular/core';
import { HeaderComponent } from './core/header/header.component';
import { SidebarComponent } from './core/sidebar/sidebar.component';
import { HomeComponent } from './core/home/home.component';
import { FooterComponent } from './core/footer/footer.component';
import { CounterComponent } from './counter/counter.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [HeaderComponent, SidebarComponent, HomeComponent, FooterComponent, CounterComponent],
})
export class AppComponent {
  title = 'angular-tutorial';
  username = 'Jacobo Ruiz';
  copyright = '&copy;';
  mensajeDelHijo = '';
  contador1 = 0;
  contador2 = 0;
  contador3 = 0;

  actualizarContador1(valor: number) {
    this.contador1 = valor;
  }
  actualizarContador2(valor: number) {
    this.contador2 = valor;
  }
  actualizarContador3(valor: number) {
    this.contador3 = valor;
  }

  cambiarTexto() {
    this.copyright = 'cambio de texto';
  }

  recibirAviso(mensaje: string) {
    this.mensajeDelHijo = mensaje;
  }
}
