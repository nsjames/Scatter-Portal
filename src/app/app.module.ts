import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { FooterComponent } from './components/footer/footer.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  // { path: 'submit', component: SubmitProjectComponent },
  // { path: 'project/:id',      component: ViewProjectComponent },
  // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
