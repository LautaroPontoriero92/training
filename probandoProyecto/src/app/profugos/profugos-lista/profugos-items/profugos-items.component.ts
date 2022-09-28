import { Component, OnInit, Input} from '@angular/core';

import { Profugos } from '../../profugos.model';
import { ProfugosService } from '../../profugos.service';

@Component({
  selector: 'app-profugos-items',
  templateUrl: './profugos-items.component.html',
  styleUrls: ['./profugos-items.component.css']
})
export class ProfugosItemsComponent implements OnInit {
  @Input() profugos: Profugos;

  constructor(private profugosService: ProfugosService) { }

  ngOnInit() {
  }

  onSelected() {
    this.profugosService.profugosSelected.emit(this.profugos);
}

}
