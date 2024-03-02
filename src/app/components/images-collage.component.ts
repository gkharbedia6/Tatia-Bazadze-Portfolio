import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'images-collages',
  standalone: true,
  template: `
    <div class="w-full min-h-screen flex flex-col px-20 py-20 gap-[100px]">
      <div class="w-full flex items-center justify-center">
        <div class="w-[700px]">
          <img src="assets/images/1.png" alt="Image 1" />
        </div>
      </div>
      <div class="w-full flex gap-[50px] flex-row items-center justify-center">
        <div class="w-[300px]">
          <img src="assets/images/2.png" alt="Image 1" />
        </div>
        <div class="w-[500px]">
          <img src="assets/images/3.png" alt="Image 1" />
        </div>
        <div class="w-[300px]">
          <img src="assets/images/4.png" alt="Image 1" />
        </div>
      </div>
      <!-- best -->
      <div
        class="flex relative max-w-fit m-auto group flex-col items-center justify-center"
      >
        <div class="w-[700px]   overflow-hidden" (click)="onImageClick(5)">
          <img
            class="hover:scale-125 cursor-pointer transition-all duration-[1500ms] ease-in-out"
            src="assets/images/5.png"
            alt="Image 1"
          />
        </div>

        <h2
          class="pt-4 group-hover:opacity-100 opacity-0 transition-all duration-300 font-primary px-4 text-[30px] "
        >
          Bloom: A Tapestry of Life and Femininity
        </h2>
        <p
          class="text-[11px] font-primary group-hover:opacity-100 opacity-0 transition-all duration-300"
        >
          Click image to view details
        </p>
      </div>
      <!-- best -->

      <div class="w-full flex gap-[50px] flex-row items-center justify-center">
        <div class="w-[400px]">
          <img src="assets/images/6.png" alt="Image 1" />
        </div>
        <div class="w-[400px]">
          <img src="assets/images/7.png" alt="Image 1" />
        </div>
      </div>
      <div class="w-full flex gap-[50px] flex-row items-center justify-center">
        <div class="w-[350px]">
          <img src="assets/images/8.png" alt="Image 1" />
        </div>
        <div class="w-[350px]">
          <img src="assets/images/9.png" alt="Image 1" />
        </div>
        <div class="w-[350px]">
          <img src="assets/images/10.png" alt="Image 1" />
        </div>
      </div>
      <div class="w-full flex items-center justify-center">
        <div class="w-[700px]">
          <img src="assets/images/11.png" alt="Image 1" />
        </div>
      </div>
      <div class="w-full flex gap-[50px] flex-row items-center justify-center">
        <div class="w-[600px]">
          <img src="assets/images/12.png" alt="Image 1" />
        </div>
        <div class="w-[600px]">
          <img src="assets/images/13.png" alt="Image 1" />
        </div>
      </div>
      <div class="w-full flex items-center justify-center">
        <div class="w-[900px]">
          <img src="assets/images/14.png" alt="Image 1" />
        </div>
      </div>
      <div class="w-full flex gap-[50px] flex-row items-center justify-center">
        <div class="w-[500px]">
          <img src="assets/images/15.png" alt="Image 1" />
        </div>
        <div class="w-[500px]">
          <img src="assets/images/16.png" alt="Image 1" />
        </div>
      </div>
    </div>
  `,
})
export class ImagesCollagesComponent {
  constructor(private _router: Router) {}

  onImageClick(imageId: number) {
    this._router.navigateByUrl(`image/${imageId}`);
  }
}
