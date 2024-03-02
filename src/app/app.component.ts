import { Component } from '@angular/core';
import { ImagesCollagesComponent } from 'src/components/images-collage.component';

@Component({
  selector: 'app-root',
  standalone: true,
  template: ` <div
    class="min-h-screen h-full w-full flex flex-col items-start justify-start"
  >
    <div class="w-full h-[30%] bg-gray-500">grgrg</div>
    <div class="w-full min-h-screen">
      <images-collages></images-collages>
    </div>
  </div>`,
  imports: [ImagesCollagesComponent],
})
export class AppComponent {
  title = 'tatia-bazadze-portfolio';
}
