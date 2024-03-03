import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IImage } from 'src/types/image.model';

@Component({
  selector: 'image-container',
  standalone: true,
  imports: [CommonModule],
  template: ` <div class="group flex items-center justify-center flex-col ">
    <div
      style=""
      class="overflow-hidden image-shadow"
      [ngStyle]="{ width: width }"
    >
      <img
        class="hover:scale-110   cursor-pointer transition-all duration-[1500ms] ease-in-out"
        [src]="imageData.imageUrl"
        alt="Image 1"
      />
    </div>

    <h2
      class="pt-4 text-center group-hover:opacity-100 font-bold opacity-0 transition-all duration-200 mb-1 font-primary  px-4 text-[25px] "
    >
      {{ imageData.title }}
    </h2>
    <p
      class="text-[14px] text-center font-primary group-hover:opacity-100 opacity-0 transition-all duration-300"
    >
      {{ imageData.paintMaterial }} on {{ imageData.canvasMaterial }}
    </p>
    <p
      class="text-[14px] text-center flex flex-row font-primary items-center gap-1 group-hover:opacity-100 opacity-0 transition-all duration-300"
    >
      {{ imageData.dimensions }}
      <span class="font-primary text-[10px]">cm</span>
    </p>
  </div>`,
})
export class ImageContainerComponent {
  @Input({ required: true }) imageData: IImage = {} as IImage;
  @Input({ required: true }) width: string = '';
}
