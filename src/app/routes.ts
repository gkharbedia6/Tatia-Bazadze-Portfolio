import { Route } from '@angular/router';
import { ShellComponent } from './scenes/shell.component';

export const ROUTES: Route[] = [
  {
    path: '',
    redirectTo: 'images',
    pathMatch: 'full',
  },
  {
    path: '',
    component: ShellComponent,
    children: [
      {
        path: 'images',
        loadComponent: () =>
          import('./scenes/images-collage.component').then(
            (c) => c.ImagesCollagesComponent
          ),
      },
      {
        path: 'images/:id',
        loadComponent: () =>
          import('../app/scenes/image-details.component').then(
            (c) => c.ImageDetailsComponent
          ),
      },
      {
        path: 'contact',
        loadComponent: () =>
          import('../app/scenes/contact.components').then(
            (c) => c.ContactComponent
          ),
      },
      {
        path: 'about',
        loadComponent: () =>
          import('../app/scenes/about.components').then(
            (c) => c.AboutComponent
          ),
      },
    ],
  },
];
