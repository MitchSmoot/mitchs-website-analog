import { CommonModule } from "@angular/common";
import { Component, input } from "@angular/core";
import { galleryImage } from "../../pages/caving/gallery/gallery.service";

@Component({
  selector: "media-scroller",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./media-scroller.component.html",
  styleUrls: ["./media-scroller.component.scss"],
})
export default class MediaScrollerComponent {
  media = input<galleryImage[]>();

}