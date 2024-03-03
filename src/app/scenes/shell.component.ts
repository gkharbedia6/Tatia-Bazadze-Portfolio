import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ImagesCollagesComponent } from 'src/app/scenes/images-collage.component';
import { HeaderComponent } from '../components/header.component';

@Component({
  selector: 'shell',
  standalone: true,
  imports: [
    ImagesCollagesComponent,
    HeaderComponent,
    CommonModule,
    RouterModule,
  ],
  template: ` <div
    class="min-h-screen h-full w-full flex flex-col items-start justify-start"
  >
    <header></header>
    <main class="w-full min-h-screen">
      <router-outlet></router-outlet>
    </main>
  </div>`,
})
export class ShellComponent {}
