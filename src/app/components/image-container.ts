import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IImage } from 'src/types/image.model';

@Component({
  selector: 'image-container',
  standalone: true,
  imports: [CommonModule],
  template: ` <div class="group flex items-center justify-center flex-col ">
    <div
      class="overflow-hidden"
      (click)="onImageClick(imageData.id)"
      [ngStyle]="{ width: width }"
    >
      <img
        class="hover:scale-125  cursor-pointer transition-all duration-[1500ms] ease-in-out"
        [src]="imageData.imageUrl"
        alt="Image 1"
      />
    </div>

    <h2
      class="pt-4 text-center group-hover:opacity-100 font-bold opacity-0 transition-all duration-300 font-primary px-4 text-[25px] "
    >
      {{ imageData.title }}
    </h2>
    <p
      class="text-[11px] text-center font-primary group-hover:opacity-100 opacity-0 transition-all duration-300"
    >
      Click image to view details
    </p>
  </div>`,
})
export class ImageContainerComponent {
  @Input({ required: true }) imageData: IImage = {} as IImage;
  @Input({ required: true }) width: string = '';
  @Output() imageClicked = new EventEmitter<number>();

  onImageClick(imageId: number) {
    this.imageClicked.emit(imageId);
  }
}
