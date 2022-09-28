import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ProfugoComponent } from './profugos/profugos.component';
import { ProfugosListaComponent } from './profugos/profugos-lista/profugos-lista.component';
import { ProfugosDetallesComponent } from './profugos/profugos-detalles/profugos-detalles.component';
import { ProfugosItemsComponent } from './profugos/profugos-lista/profugos-items/profugos-items.component';
import { RecompensasListaComponent } from './recompensas-lista/recompensas-lista.component';
import { RecompensasEditarComponent } from './recompensas-lista/recompensas-editar/recompensas-editar.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { RecompensasListaService } from './recompensas-lista/recompensas-lista.service';



@NgModule({
  declarations: [
    
    AppComponent,
    HeaderComponent,
    ProfugoComponent,
    ProfugosListaComponent,
    ProfugosDetallesComponent,
    ProfugosItemsComponent,
    RecompensasListaComponent,
    RecompensasEditarComponent,
    DropdownDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [RecompensasListaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
