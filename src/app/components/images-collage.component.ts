import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ImageContainerComponent } from './image-container';
import { images } from '../../data-access/images';
import { IImage } from 'src/types/image.model';

@Component({
  selector: 'images-collages',
  standalone: true,
  imports: [ImageContainerComponent],
  template: `
    <div class="w-full min-h-screen flex flex-col px-20 py-20 gap-[100px]">
      <div
        class="flex relative max-w-fit gap-[50px] m-auto  flex-row items-center justify-center"
      >
        <image-container
          width="700px"
          (imageClicked)="onImageClick($event)"
          [imageData]="imagesData[0]"
        ></image-container>
      </div>
      <div
        class="flex relative max-w-fit gap-[50px] m-auto  flex-row items-center justify-center"
      >
        <image-container
          width="300px"
          (imageClicked)="onImageClick($event)"
          [imageData]="imagesData[1]"
        ></image-container>
        <image-container
          width="500px"
          (imageClicked)="onImageClick($event)"
          [imageData]="imagesData[2]"
        ></image-container>
        <image-container
          width="300px"
          (imageClicked)="onImageClick($event)"
          [imageData]="imagesData[3]"
        ></image-container>
      </div>
      <div
        class="flex relative max-w-fit gap-[50px] m-auto  flex-row items-center justify-center"
      >
        <image-container
          width="600px"
          (imageClicked)="onImageClick($event)"
          [imageData]="imagesData[4]"
        ></image-container>
      </div>

      <div
        class="flex relative max-w-fit gap-[50px] m-auto  flex-row items-center justify-center"
      >
        <image-container
          width="400px"
          (imageClicked)="onImageClick($event)"
          [imageData]="imagesData[5]"
        ></image-container>
        <image-container
          width="400px"
          (imageClicked)="onImageClick($event)"
          [imageData]="imagesData[6]"
        ></image-container>
      </div>

      <div
        class="flex relative max-w-fit gap-[50px] m-auto  flex-row items-center justify-center"
      >
        <image-container
          width="350px"
          (imageClicked)="onImageClick($event)"
          [imageData]="imagesData[7]"
        ></image-container>
        <image-container
          width="350px"
          (imageClicked)="onImageClick($event)"
          [imageData]="imagesData[8]"
        ></image-container>
        <image-container
          width="350px"
          (imageClicked)="onImageClick($event)"
          [imageData]="imagesData[9]"
        ></image-container>
      </div>

      <div
        class="flex relative max-w-fit gap-[50px] m-auto flex-row items-center justify-center"
      >
        <image-container
          width="600px"
          (imageClicked)="onImageClick($event)"
          [imageData]="imagesData[10]"
        ></image-container>
      </div>
      <div
        class="flex relative max-w-fit gap-[50px] m-auto  flex-row items-center justify-center"
      >
        <image-container
          width="600px"
          (imageClicked)="onImageClick($event)"
          [imageData]="imagesData[11]"
        ></image-container>
        <image-container
          width="600px"
          (imageClicked)="onImageClick($event)"
          [imageData]="imagesData[12]"
        ></image-container>
      </div>
      <div
        class="flex relative max-w-fit gap-[50px] m-auto  flex-row items-center justify-center"
      >
        <image-container
          width="900px"
          (imageClicked)="onImageClick($event)"
          [imageData]="imagesData[13]"
        ></image-container>
      </div>
      <div
        class="flex relative max-w-fit gap-[50px] m-auto  flex-row items-center justify-center"
      >
        <image-container
          width="500px"
          (imageClicked)="onImageClick($event)"
          [imageData]="imagesData[14]"
        ></image-container>
        <image-container
          width="500px"
          (imageClicked)="onImageClick($event)"
          [imageData]="imagesData[15]"
        ></image-container>
      </div>
    </div>
  `,
})
export class ImagesCollagesComponent {
  imagesData: IImage[] = images;

  constructor(private _router: Router) {
    console.log(ImageData);
  }

  onImageClick(imageId: number) {
    this._router.navigateByUrl(`image/${imageId}`);
  }
}
