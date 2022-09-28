import { Component, OnInit, Input } from '@angular/core';

import { Profugos } from '../profugos.model';
import { ProfugosService } from '../profugos.service';

@Component({
  selector: 'app-profugos-detalles',
  templateUrl: './profugos-detalles.component.html',
  styleUrls: ['./profugos-detalles.component.css']
})
export class ProfugosDetallesComponent implements OnInit {
  @Input() profugos: Profugos;

  constructor(private profugosService: ProfugosService) { }

  ngOnInit() {
  }

  onAddToReconpemsasLista() {
    this.profugosService.addCapturasToRecompensasLista(this.profugos.capturas);
  }

}