import { Route } from "@angular/router";
import HomePageComponent from "./pages/index.page";
import CavingPageComponent from "./pages/caving.page";
import PortfolioPageComponent from "./pages/portfolio.page";
import BlogPageComponent from "./pages/blog.page";
import RadioPageComponent from "./pages/radio.page";
import PageNotFoundComponent from "./pages/[...page-note-found].page";

export const appRoutes: Route[] = [
  { path: '', component: HomePageComponent },
  { path: 'caving', component: CavingPageComponent },
  { path: 'portfolio', component: PortfolioPageComponent },
  { path: 'blog', component: BlogPageComponent},
  { path: 'radio', component: RadioPageComponent },
  { path: '**', component: PageNotFoundComponent }
]