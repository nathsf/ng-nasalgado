import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppToolbarComponent } from './app-toolbar/app-toolbar.component';
import { AppNavbarComponent } from './app-navbar/app-navbar.component';
import { AppContentComponent } from './app-content/app-content.component';
import { InicioComponent } from './app-content/inicio/inicio.component';
import { FormularioComponent } from './app-content/formulario/formulario.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [			
    AppComponent,
      AppToolbarComponent,
      AppNavbarComponent,
      AppContentComponent,
      InicioComponent,
      FormularioComponent
   ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
