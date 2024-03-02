import { Route } from '@angular/router';
import { ShellComponent } from './scenes/shell.component';

export const ROUTES: Route[] = [
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full',
  },
  {
    path: '',
    component: ShellComponent,
  },
  {
    path: 'image/:id',
    loadComponent: () =>
      import('../app/scenes/image-details.component').then(
        (m) => m.ImageDetailsComponent
      ),
  },
  {
    path: 'contact',
    loadComponent: () =>
      import('../app/scenes/contact.components').then(
        (m) => m.ContactComponent
      ),
  },
  {
    path: 'about',
    loadComponent: () =>
      import('../app/scenes/about.components').then((m) => m.AboutComponent),
  },
];
