import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArticulosComponent } from './Components/articulos/articulos.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './Components/home/home.component';
import { LoginComponent } from './Components/login/login.component';
import { SiginComponent } from './Components/sigin/sigin.component';
import { ConfirmarComponent } from './Components/confirmar/confirmar.component';

import { FormsModule } from '@angular/forms';
import { RolesComponent } from './Components/roles/roles.component';
import { FilterPipe } from './shared/filter.pipe';
import { CartComponent } from './Components/cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    ArticulosComponent,
    HomeComponent,
    LoginComponent,
    SiginComponent,
    ConfirmarComponent,
    RolesComponent,
    FilterPipe,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
