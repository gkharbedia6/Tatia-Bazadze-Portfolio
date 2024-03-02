import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'header',
  standalone: true,
  imports: [RouterModule],
  template: `
    <nav
      class="w-full flex items-center gap-[40px] flex-row justify-start pt-2 px-4"
    >
      <h1
        [routerLink]="['/']"
        class="cursor-pointer font-primary text-[20px] font-bold"
      >
        TATIA BAZADZE
      </h1>
      <div class="flex flex-row gap-3">
        <h3
          [routerLink]="['/about']"
          class="cursor-pointer hover:opacity-70 font-primary text-[15px] font-bold"
        >
          ABOUT
        </h3>
        <h3
          [routerLink]="['/contact']"
          class="cursor-pointer hover:opacity-70 font-primary text-[15px] font-bold"
        >
          CONTACT
        </h3>
      </div>
    </nav>
  `,
})
export class HeaderComponent {}
