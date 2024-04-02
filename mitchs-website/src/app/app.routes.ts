import { Route } from "@angular/router";
import HomeComponent from "./pages/home/home.component";
import CavingPageComponent from "./pages/caving.page";
import PortfolioPageComponent from "./pages/portfolio.page";
import BlogPageComponent from "./pages/blog.page";
import RadioPageComponent from "./pages/radio.page";
import PageNotFoundComponent from "./pages/[...page-note-found].page";
import CaveGalleryPageComponent from "./pages/caving/gallery/(gallery).page";
import CavingHomePageComponent from "./pages/caving/(caving-home).page";

export const appRoutes: Route[] = [
  { path: '', component: HomeComponent },
  { path: 'caving', component: CavingPageComponent, children: [
    { path: '', component: CavingHomePageComponent },
    { path: 'gallery', component: CaveGalleryPageComponent }
  ]},
  { path: 'portfolio', component: PortfolioPageComponent },
  { path: 'blog', component: BlogPageComponent},
  { path: 'radio', component: RadioPageComponent },
  { path: '**', component: PageNotFoundComponent }
]