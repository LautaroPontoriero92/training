import { Component, OnInit } from '@angular/core';

import { Captura } from '../shared/captura.model';
import { RecompensasListaService } from './recompensas-lista.service';


@Component({
  selector: 'app-recompensas-lista',
  templateUrl: './recompensas-lista.component.html',
  styleUrls: ['./recompensas-lista.component.css']
})
export class RecompensasListaComponent implements OnInit {
  capturas: Captura[];

  constructor(private slService: RecompensasListaService) { }

  ngOnInit() {
    this.capturas = this.slService.getCapturas();
    this.slService.capturasChanged
      .subscribe(
        (capturas: Captura[]) => {
          this.capturas = capturas;
        }
      );
  }
}
