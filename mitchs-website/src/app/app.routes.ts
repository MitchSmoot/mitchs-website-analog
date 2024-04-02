import { Route } from "@angular/router";
import HomeComponent from "./pages/home/home.component";
import CavingPageComponent from "./pages/caving/caving.component";
import PortfolioPageComponent from "./pages/portfolio/portfolio-page.component";
import BlogPageComponent from "./pages/blog.page";
import RadioPageComponent from "./pages/radio.page";
import PageNotFoundComponent from "./pages/[...page-note-found].page";
import CaveGalleryPageComponent from "./pages/caving/gallery/cave-gallery.component";
import CavingHomePageComponent from "./pages/caving/caving-home.component";
import CaveRepairPageComponent from "./pages/caving/cave-repair/cave-repair.component";

export const appRoutes: Route[] = [
  { path: '', component: HomeComponent },
  { path: 'caving', component: CavingPageComponent, children: [
    { path: '', component: CavingHomePageComponent },
    { path: 'gallery', component: CaveGalleryPageComponent },
    { path: 'cave-repair', component: CaveRepairPageComponent }
  ]},
  { path: 'portfolio', component: PortfolioPageComponent },
  { path: 'blog', component: BlogPageComponent},
  { path: 'radio', component: RadioPageComponent },
  { path: '**', component: PageNotFoundComponent }
]