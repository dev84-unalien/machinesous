import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  { path: "", redirectTo: "home2", pathMatch: "full" },
  {
    path: "home",
    loadChildren: () => import("./home/home.module").then(m => m.HomePageModule)
  },
  { path: "p1", loadChildren: "./p1/p1.module#P1PageModule" },
  { path: "p2", loadChildren: "./p2/p2.module#P2PageModule" },
  {
    path: "contact",
    loadChildren: "./contact/contact.module#ContactPageModule"
  },
  { path: 'home2', loadChildren: './home2/home2.module#Home2PageModule' }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
