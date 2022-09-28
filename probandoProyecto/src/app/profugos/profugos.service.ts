import { EventEmitter, Injectable } from '@angular/core';

import { Profugos } from './profugos.model';
import { Captura } from '../shared/captura.model';
import { RecompensasListaService } from '../recompensas-lista/recompensas-lista.service';

@Injectable()
export class ProfugosService {
  profugosSelected = new EventEmitter<Profugos>();

  private profugo: Profugos[] = [
    new Profugos(
      'Rick Sanchez',
      'Un genio con la habilidad de usar las leyes del universo a su favor',
      'https://i.pinimg.com/originals/78/a9/6d/78a96d96ffa60a4477d0f17e9bd55a36.png',
      [
        new Captura('Recompensa', 70000000)
      ]),
    new Profugos('Morty',
      'El nieto de Rick',
      'https://laverdadnoticias.com/__export/1626061042917/sites/laverdad/img/2021/07/11/rick_y_morty_morty_smith_edad_series.jpg_2125252991.jpg',
      [
        new Captura('Recompensa', 14000)
      ])
  ];

  constructor(private slService: RecompensasListaService) {}

  getProfugo() {
    return this.profugo.slice();
  }

  addCapturasToRecompensasLista(capturas: Captura[]) {
    this.slService.addCapturas(capturas);
  }
}
