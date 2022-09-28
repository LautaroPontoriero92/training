import { Component, OnInit } from '@angular/core';

import { Profugos } from './profugos.model';
import { ProfugosService } from './profugos.service';

@Component({
  selector: 'app-profugo',
  templateUrl: './profugos.component.html',
  styleUrls: ['./profugos.component.css'],
  providers: [ProfugosService]
})
export class ProfugoComponent implements OnInit {
  selectedProfugos: Profugos;

  constructor(private profugosService: ProfugosService) { }

  ngOnInit() {
    this.profugosService.profugosSelected
      .subscribe(
        (profugos: Profugos) => {
          this.selectedProfugos = profugos;
        }
      );
  }

}
