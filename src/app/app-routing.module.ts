import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticulosComponent } from './Components/articulos/articulos.component';
import { ConfirmarComponent } from './Components/confirmar/confirmar.component';
import { HomeComponent } from './Components/home/home.component';
import { LoginComponent } from './Components/login/login.component';
import { RolesComponent } from './Components/roles/roles.component';
import { SiginComponent } from './Components/sigin/sigin.component';
const routes: Routes = [
  {path:'articulos', component: ArticulosComponent},
  {path:'home', component: HomeComponent},
  {path:'login', component: LoginComponent},
  {path:'sigin', component: SiginComponent},
  {path:'confirmar', component: ConfirmarComponent},
  {path:'roles', component: RolesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
