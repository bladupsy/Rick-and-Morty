import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { CharactersComponent } from './characters/characters.component';
import { ComponentsModule } from '../components/components.module';
import { SwiperModule } from 'swiper/angular';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HomeComponent,
    CharactersComponent,
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    SwiperModule,
    FormsModule,
  ],
  exports: [
    HomeComponent,
    CharactersComponent
  ]
})
export class PagesModule { }
