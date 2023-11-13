import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import { RouterModule } from '@angular/router';
import { ScrollTopModule } from 'primeng/scrolltop';
import { CarouselModule } from 'primeng/carousel';
import { DialogModule } from 'primeng/dialog';

const homeRouting: ModuleWithProviders<HomeModule> = RouterModule.forChild([
  {
    path: '',
    component: HomePageComponent
  }
]);

@NgModule({
  declarations: [
    HomePageComponent
  ],
  imports: [
    CommonModule,
    homeRouting,
    ScrollTopModule,
    CarouselModule,
    DialogModule
  ]
})
export class HomeModule { }
