import { Injectable } from "@angular/core";

export interface galleryImage {
  title: string;
  url: string;
  description?: string;
  location?: string;
  date?: Date;
}

@Injectable()
export default class GalleryService {
  public images: galleryImage[] = [
    {
      title: "Image 1",
      url: "/assets/img/gallery1.jpg",
      description: "This is a description of image 1",
    },
    {
      title: "Image 2",
      url: "/assets/img/gallery2.jpg",
      description: "This is a description of image 2",
    },
    {
      title: "Image 3",
      url: "/assets/img/gallery3.jpg",
      description: "This is a description of image 3",
    },
    {
      title: "Image 4",
      url: "/assets/img/gallery4.jpg",
      description: "This is a description of image 4",
    }
  ]

  public get() {
    return this.images;
  }
}