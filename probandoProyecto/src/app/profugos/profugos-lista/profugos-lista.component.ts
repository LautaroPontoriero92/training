import { Component, OnInit, } from '@angular/core';

import { Profugos } from '../profugos.model';
import { ProfugosService } from '../profugos.service';

@Component({
  selector: 'app-profugos-lista',
  templateUrl: './profugos-lista.component.html',
  styleUrls: ['./profugos-lista.component.css']
})
export class ProfugosListaComponent implements OnInit {
  profugo: Profugos[];

  constructor(private profugosService: ProfugosService) {     
  }

  ngOnInit() {
    this.profugo = this.profugosService.getProfugo();
  }
}
