import { 
  Component,
  OnInit,
  ElementRef,
  ViewChild
 } from '@angular/core';

 import { Captura } from '../../shared/captura.model';
import { RecompensasListaService } from '../recompensas-lista.service';

@Component({
  selector: 'app-recompensas-editar',
  templateUrl: './recompensas-editar.component.html',
  styleUrls: ['./recompensas-editar.component.css']
})
export class RecompensasEditarComponent implements OnInit {
  @ViewChild('nameInput', { static: false }) nameInputRef: ElementRef;
  @ViewChild('amountInput', { static: false }) amountInputRef: ElementRef;


  constructor(private slService: RecompensasListaService) { }

  ngOnInit() {
  }
  onAddItem() {
    const capName = this.nameInputRef.nativeElement.value;
    const capAmount = this.amountInputRef.nativeElement.value;
    const newCaptura = new Captura(capName, capAmount);
    this.slService.addCaptura(newCaptura);
  }
}
