import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IImage } from 'src/types/image.model';

@Component({
  selector: 'image-container',
  standalone: true,
  imports: [CommonModule],
  template: ` <div class="group flex items-center justify-center flex-col ">
    <div
      style=""
      class="overflow-hidden image-shadow image-placeholder "
      [ngClass]="{ 'placeholder-loaded': isLoaded }"
      [ngStyle]="{
        width: width,
        'background-image': 'url(' + imageData.imageUrlResized + ')'
      }"
    >
      <img
        [ngClass]="{ 'image-loaded': isLoaded }"
        class="hover:scale-110 opacity-0  cursor-pointer transition-all duration-[1500ms] ease-in-out"
        [src]="imageData.imageUrl"
        [alt]="imageData.title"
        loading="lazy"
        (load)="onImageLoad()"
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
  isLoaded = false;

  onImageLoad() {
    this.isLoaded = true;
  }
}
