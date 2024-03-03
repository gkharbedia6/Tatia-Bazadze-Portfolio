import { Component } from '@angular/core';

@Component({
  selector: 'contact',
  standalone: true,
  template: `<div class="flex w-full h-fit flex-row justify-start items-start">
    <a class="text-[15px] font-primary" href="mailto:tatiabazadze06@gmail.com">
      <p>tatiabazadze06&#64;gmail.com</p>
    </a>
  </div>`,
  imports: [],
})
export class ContactComponent {}
