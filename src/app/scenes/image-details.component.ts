import { Component, OnInit } from '@angular/core';
import { images } from '../../data-access/images';
import { IImage } from 'src/types/image.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'image-details',
  standalone: true,
  imports: [],
  template: ` <div></div> `,
})
export class ImageDetailsComponent implements OnInit {
  imagesData: IImage[] = images;
  imageDetails: IImage | undefined = {} as IImage;

  constructor(private _route: ActivatedRoute) {}

  ngOnInit(): void {
    this._route.params.subscribe((params) => {
      this.imageDetails = this.imagesData.find(
        (image) => image.id === +params['id']
      );
    });

    console.log(this.imageDetails);
  }
}
