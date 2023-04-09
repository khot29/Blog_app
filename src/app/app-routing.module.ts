import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SingleCategoryComponent } from './pages/single-category/single-category.component';
import { SinglePostComponent } from './pages/single-post/single-post.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { TermsAndConditionsComponent } from './pages/terms-and-conditions/terms-and-conditions.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';

const routes: Routes = [
  // {path: '',component : HomeComponent},
  // {path: 'category',component : SingleCategoryComponent},
  // {path: 'post', component : SinglePostComponent},
  // {path: 'contact',component : ContactUsComponent},
  // {path : 'terms', component : TermsAndConditionsComponent},
  // {path: 'about', component: AboutUsComponent},
  // {path: '**', component : AboutUsComponent}
];


// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})





export class AppRoutingModule { }
