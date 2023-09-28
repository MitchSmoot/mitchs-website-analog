import { Injectable, signal } from "@angular/core";

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

  focusedImage = signal<galleryImage | null>(null)

  public images: galleryImage[] = [
    {
      title: "Image 1",
      url: "/img/gallery1.jpg",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt vel massa eget egestas. Ut risus dolor, volutpat ac vulputate at, placerat vitae eros. Donec quis hendrerit ipsum. Nam porttitor faucibus ipsum nec tempor. Cras mollis odio quis dolor dignissim malesuada. Integer vulputate lacus ac tellus rhoncus, malesuada sagittis sem ullamcorper. Donec euismod dictum velit, eu elementum ligula ultrices ut. Integer tempor ut nulla ut pharetra. Nullam ut diam mi. Phasellus mollis sem porta, porta libero ac, pellentesque nunc. Nulla tellus ex, hendrerit at sapien et, blandit lobortis tortor. Ut vitae tincidunt enim, sed vulputate arcu. Duis sit amet dolor.",
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