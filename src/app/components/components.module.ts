import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocationComponent } from './location/location.component';
import { CardComponent } from './card/card.component';
import { HeaderComponent } from './header/header.component';




@NgModule({
  declarations: [
    LocationComponent,
    CardComponent,
    HeaderComponent,

  ],
  imports: [
    CommonModule,
  ],
  exports: [
    CardComponent,
    HeaderComponent,
  ]
})
export class ComponentsModule { }
