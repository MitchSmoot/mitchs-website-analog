import { Injectable } from "@angular/core";

export interface galleryImage {
  title: string;
  url: string;
  description?: string;
  location?: string;
  date?: Date;
}

@Injectable({
  providedIn: 'root'
})
export default class GalleryService {
  public images: galleryImage[] = [
    {
      title: "Image 1",
      url: "/img/gallery1.jpg",
      description: "This is a description of image 1",
    },
    {
      title: "Image 2",
      url: "/img/gallery2.jpg",
      description: "This is a description of image 2",
    },
    {
      title: "Image 3",
      url: "/img/gallery3.jpg",
      description: "This is a description of image 3",
    },
    {
      title: "Image 4",
      url: "/img/gallery4.jpg",
      description: "This is a description of image 4",
    },
    {
      title: "Image 5",
      url: "/img/gallery2.jpg",
      description: "This is a description of image 1",
    },
    {
      title: "Image 6",
      url: "/img/gallery3.jpg",
      description: "This is a description of image 2",
    },
    {
      title: "Image 7",
      url: "/img/gallery1.jpg",
      description: "This is a description of image 3",
    },
    {
      title: "Image 8",
      url: "/img/gallery4.jpg",
      description: "This is a description of image 4",
    },
    {
      title: "Image 9",
      url: "/img/gallery4.jpg",
      description: "This is a description of image 1",
    },
    {
      title: "Image 10",
      url: "/img/gallery2.jpg",
      description: "This is a description of image 2",
    },
    {
      title: "Image 11",
      url: "/img/gallery1.jpg",
      description: "This is a description of image 3",
    },
    {
      title: "Image 12",
      url: "/img/gallery3.jpg",
      description: "This is a description of image 4",
    }
  ]

  public get() {
    return this.images;
  }
}