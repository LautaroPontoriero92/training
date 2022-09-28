import { Captura } from '../shared/captura.model';
import { EventEmitter } from '@angular/core';

export class RecompensasListaService {
  capturasChanged = new EventEmitter<Captura[]>();
  private capturas: Captura[] = [
  ];

  getCapturas() {
    return this.capturas.slice();
  }

  addCaptura(captura: Captura) {
    this.capturas.push(captura);
    this.capturasChanged.emit(this.capturas.slice());
  }

  addCapturas(capturas: Captura[]) {
    this.capturas.push(...capturas);
    this.capturasChanged.emit(this.capturas.slice());
  }
}
