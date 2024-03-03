import { Component } from '@angular/core';

@Component({
  selector: 'contact',
  standalone: true,
  template: `<div
    class="flex w-full px-36 py-32 h-fit gap-3 flex-col justify-start items-start"
  >
    <h2 class="text-[20px] font-primary font-bold">Contact me via email</h2>
    <a
      class="cursor-pointer hover:border-b hover:border-black text-[13px] font-primary"
      href="mailto:tatiabazadze06@gmail.com"
    >
      <p>tatiabazadze06&#64;gmail.com</p>
    </a>
  </div>`,
  imports: [],
})
export class ContactComponent {}
