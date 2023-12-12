import { Injectable, signal } from "@angular/core";

export interface galleryImage {
  title: string;
  url: string;
  type: string;
  thumbnailUrl?: string;
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
      title: "Black Stream",
      url: "/img/gallery001.jpg",
      type: "img",
      thumbnailUrl: "/img/gallery001t.jpg",
      description: 'This is an underground river known as "Black Stream" located deep within Utah\'s longest cave. This water is just above freezing temperature during the season in which the cave is accessible.',
    },
    {
      title: "Old Rope in Deep Passage",
      url: "/img/gallery002.jpg",
      type: "img",
      thumbnailUrl: "/img/gallery002t.jpg",
      description: 'This is an old rope we found on the way to "Mordore Canyon" leftover from one of the original expeditions. Previous floods coming from below had shred the rope, leaving it here, caught on a sharp cherty outcrop.',
    },
    {
      title: "Lehman Cave 1",
      url: "/img/gallery003.jpg",
      type: "img",
      thumbnailUrl: "/img/gallery003t.jpg",
      description: "Lehman Cave during a wet spring.",
    },
    {
      title: "Lehman Cave 2",
      url: "/img/gallery004.jpg",
      type: "img",
      thumbnailUrl: "/img/gallery004t.jpg",
      description: "Another picture of Lehman Cave during a wet spring.",
    },
    {
      title: "Blue Dome",
      url: "/img/gallery005.jpg",
      type: "img",
      thumbnailUrl: "/img/gallery005t.jpg",
      description: "This hypogenic cave consists of many bobble-shaped chambers connected by narrow passages.",
    },
    {
      title: "Big Cave Entrance",
      url: "/img/gallery006.jpg",
      type: "img",
      thumbnailUrl: "/img/gallery006t.jpg",
      description: "This is the largest cave entrance in Utah. Behind lies many miles of cave passage with many more miles yet to be explored.",
    },
    {
      title: "Ice Throne",
      url: "/img/gallery007.jpg",
      type: "img",
      thumbnailUrl: "/img/gallery007t.jpg",
      description: "Fantastic ice stalagmites can be found in the entrance of this cave.",
    },
    {
      title: "Ice Toilet",
      url: "/img/gallery008.jpg",
      type: "img",
      thumbnailUrl: "/img/gallery008t.jpg",
      description: "I would hate to fall in there",
    },
    {
      title: "Flowstone Columns",
      url: "/img/gallery009.jpg",
      type: "img",
      thumbnailUrl: "/img/gallery009t.jpg",
      description: "Some excellent flowstone columns located in a well-protected cave.",
    },
    {
      title: "Filtering air",
      url: "/img/gallery010.jpg",
      type: "img",
      thumbnailUrl: "/img/gallery010t.jpg",
      description: "Cave water can be pure and crystal clear. In this example the water itself is barely visible, if only because of the ripples. This was where we refilled our water bottles amid a multi-day expedition.",
    },
    {
      title: "Teeth",
      url: "/img/gallery011.jpg",
      type: "img",
      thumbnailUrl: "/img/gallery011t.jpg",
      description: "Some nice tooth-like formations.",
    },
    {
      title: "Spiral Staircase",
      url: "/img/gallery012.jpg",
      type: "img",
      thumbnailUrl: "/img/gallery012t.jpg",
      description: 'Looking up A magnificent formation I nicknamed "Spiral Staircase".',
    },
    {
      title: "Lehman Cave 3",
      url: "/img/gallery013.jpg",
      type: "img",
      thumbnailUrl: "/img/gallery013t.jpg",
      description: 'Some Terraced pools within Lehman Cave.',
    },
    {
      title: "Amazing Flowstone!",
      url: "/img/gallery014.jpg",
      type: "img",
      thumbnailUrl: "/img/gallery014t.jpg",
      description: '',
    },
    {
      title: "Underground Pond",
      url: "/img/gallery015.jpg",
      type: "img",
      thumbnailUrl: "/img/gallery015t.jpg",
      description: "",
    },
    {
      title: "Pseudoscorpion",
      url: "/img/gallery016.jpg",
      type: "img",
      thumbnailUrl: "/img/gallery016t.jpg",
      description: "This is a pseudoscorpion we found traversing flowstone in search of prey.",
    },
    {
      title: "Cave Mushrooms 1",
      url: "/img/gallery017.jpg",
      type: "img",
      thumbnailUrl: "/img/gallery017t.jpg",
      description: "",
    },
    {
      title: "Cave Foam",
      url: "/img/gallery018.jpg",
      type: "img",
      thumbnailUrl: "/img/gallery018t.jpg",
      description: "This is a deposit of foam that has been left behind by a flood. The foam is created by the action of water on the cave's bedrock, and is a sign of a very active cave system. The foam is very light and can be easily blown away.",
    },
    {
      title: "Underground Spring",
      url: "/img/gallery019.jpg",
      type: "img",
      thumbnailUrl: "/img/gallery019t.jpg",
      description: "This is an underground spring found deep within a large cave",
    },
    {
      title: "Cave Mushrooms 2",
      url: "/img/gallery020.jpg",
      type: "img",
      thumbnailUrl: "/img/gallery020t.jpg",
      description: "",
    },
    {
      title: "Cave Mushrooms 3",
      url: "/img/gallery021.jpg",
      type: "img",
      thumbnailUrl: "/img/gallery021t.jpg",
      description: "This is a description of image 1",
    },
    {
      title: "Spikes",
      url: "/img/gallery022.jpg",
      type: "img",
      thumbnailUrl: "/img/gallery022t.jpg",
      description: "Some very thin stalactites, and one of the few undamaged formations within this caves. ",
    },
    {
      title: "Icy Reflections",
      url: "/img/gallery023.jpg",
      type: "img",
      thumbnailUrl: "/img/gallery023t.jpg",
      description: "",
    },
    {
      title: "Underground Slot Canyon",
      url: "/img/gallery024.jpg",
      type: "img",
      thumbnailUrl: "/img/gallery024t.jpg",
      description: "This is a slot canyon located deep within a large cave. Notice the prominent black layer of chert on both walls.",
    }
  ]

  public get() {
    return this.images;
  }
}